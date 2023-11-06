import { database } from "./database";
export async function fetchData() {
  const docs = await database.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_COLLECTION_ID!
  );
  return docs.documents;
}
