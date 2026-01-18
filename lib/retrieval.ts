// Recherche par similarité cosine
import { portfolioChunks, Chunk } from "./portfolioKB";
import { getEmbedding } from "./embeddings";

export interface RetrievedChunk extends Chunk {
  score: number;
}

/**
 * Calcul de la similarité cosine entre deux vecteurs
 */
export function cosineSimilarity(vecA: number[], vecB: number[]): number {
  if (vecA.length !== vecB.length) {
    throw new Error("Vectors must have the same length");
  }

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }

  normA = Math.sqrt(normA);
  normB = Math.sqrt(normB);

  if (normA === 0 || normB === 0) {
    return 0;
  }

  return dotProduct / (normA * normB);
}

/**
 * Récupère les K chunks les plus pertinents pour une requête
 */
export async function retrieveTopK(
  query: string,
  chunks: Chunk[] = portfolioChunks,
  k: number = 5
): Promise<RetrievedChunk[]> {
  // Générer l'embedding de la requête
  const queryEmbedding = await getEmbedding(query);

  // Calculer la similarité pour chaque chunk
  const scoredChunks: RetrievedChunk[] = [];

  for (const chunk of chunks) {
    const chunkEmbedding = await getEmbedding(chunk.content);
    const score = cosineSimilarity(queryEmbedding, chunkEmbedding);

    scoredChunks.push({
      ...chunk,
      score,
    });
  }

  // Trier par score décroissant et retourner les K premiers
  scoredChunks.sort((a, b) => b.score - a.score);

  return scoredChunks.slice(0, k);
}
