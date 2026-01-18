// Gestion des embeddings OpenAI avec cache en mémoire
import OpenAI from "openai";

const embeddingCache = new Map<string, number[]>();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const EMBEDDING_MODEL = "text-embedding-3-small";

export async function getEmbedding(text: string): Promise<number[]> {
  // Vérifier le cache
  if (embeddingCache.has(text)) {
    return embeddingCache.get(text)!;
  }

  // Appel API OpenAI
  try {
    const response = await openai.embeddings.create({
      model: EMBEDDING_MODEL,
      input: text,
    });

    const embedding = response.data[0].embedding;

    // Mettre en cache
    embeddingCache.set(text, embedding);

    return embedding;
  } catch (error) {
    console.error("Error getting embedding:", error);
    throw new Error("Failed to generate embedding");
  }
}
