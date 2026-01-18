// API Route pour le chatbot RAG
import { NextRequest, NextResponse } from "next/server";
import { retrieveTopK } from "@/lib/retrieval";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const CHAT_MODEL = process.env.OPENAI_MODEL_CHAT || "gpt-4o-mini";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatResponse {
  answer: string;
  sources: Array<{ title: string; url: string; id: string }>;
  hasContext: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages }: { messages: Message[] } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    // Récupérer la dernière question utilisateur
    const userMessages = messages.filter((m) => m.role === "user");
    if (userMessages.length === 0) {
      return NextResponse.json(
        { error: "No user message found" },
        { status: 400 }
      );
    }

    const query = userMessages[userMessages.length - 1].content;

    // Vérifier si la question est hors scope
    const outOfScopeKeywords = [
      "météo",
      "weather",
      "politique",
      "politics",
      "code source",
      "source code",
      "écris du code",
      "write code",
      "crée un fichier",
      "create file",
    ];

    const isOutOfScope = outOfScopeKeywords.some((keyword) =>
      query.toLowerCase().includes(keyword)
    );

    if (isOutOfScope) {
      return NextResponse.json({
        answer:
          "Désolé, je ne peux répondre qu'aux questions concernant le portfolio de Jordan Pierron : ses services, son parcours, ses projets (comme Medicalia), son processus de travail, etc. Pour toute autre question, je vous invite à me contacter directement.",
        sources: [],
        hasContext: false,
        isOutOfScope: true,
      });
    }

    // Récupérer les chunks pertinents
    const retrievedChunks = await retrieveTopK(query, undefined, 5);

    // Filtrer les chunks avec un score minimum (seuil arbitraire)
    const relevantChunks = retrievedChunks.filter((chunk) => chunk.score > 0.3);

    if (relevantChunks.length === 0) {
      return NextResponse.json({
        answer:
          "Je n'ai pas trouvé d'information suffisante dans le portfolio pour répondre à votre question. Pouvez-vous reformuler ou poser une question sur les services, le parcours ou les projets de Jordan Pierron ?",
        sources: [],
        hasContext: false,
        needsRedirection: true,
      });
    }

    // Construire le contexte
    const context = relevantChunks
      .map(
        (chunk, index) =>
          `[${index + 1}] Titre: ${chunk.title}\nURL: ${chunk.url}\nContenu: ${chunk.content}`
      )
      .join("\n\n");

    // Construire le prompt
    const systemPrompt = `Tu es l'assistant du portfolio de Jordan Pierron, consultant spécialisé en automatisation et applications métier.

RÈGLES STRICTES:
1. Tu réponds UNIQUEMENT avec le CONTEXTE fourni ci-dessous
2. Si le CONTEXTE est insuffisant pour répondre, dis-le clairement
3. Ne crée JAMAIS d'informations qui ne sont pas dans le CONTEXTE
4. Cite toujours la section source quand c'est pertinent (ex: "D'après la section Qui je suis...")
5. Sois concis et orienté résultat
6. Si l'utilisateur pose une question hors scope (météo, politique, code, etc.), refuse poliment et redirige vers le contact

CONTEXTE:
${context}

IMPORTANT: Si le CONTEXTE ne contient pas assez d'informations pour répondre, dis simplement: "Je n'ai pas assez d'informations dans le portfolio pour répondre à cette question. Je vous invite à consulter [lien pertinent] ou à me contacter directement."`;

    const userPrompt = query;

    // Appel OpenAI
    const completion = await openai.chat.completions.create({
      model: CHAT_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.slice(-3), // Garder seulement les 3 derniers messages pour le contexte
        { role: "user", content: userPrompt },
      ],
      temperature: 0.3, // Plus bas pour réduire les hallucinations
      max_tokens: 500,
    });

    const answer = completion.choices[0].message.content || "";

    // Préparer les sources
    const sources = relevantChunks.map((chunk) => ({
      title: chunk.title,
      url: chunk.url,
      id: chunk.id,
    }));

    const response: ChatResponse = {
      answer,
      sources,
      hasContext: true,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        error: "Une erreur est survenue lors du traitement de votre question.",
        answer:
          "Désolé, une erreur technique s'est produite. Veuillez réessayer ou me contacter directement.",
        sources: [],
        hasContext: false,
      },
      { status: 500 }
    );
  }
}
