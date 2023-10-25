import { database, ID, storage } from "./database";

export const createPost = async (
  title: string,
  summary: string,
  content: any,
  image: File
) => {
  let id = ID.unique();
  const res = await database.createDocument(
    `${process.env.NEXT_PUBLIC_DATABASE_ID!}`,
    `${process.env.NEXT_PUBLIC_COLLECTION_ID!}`,
    id,
    {
      title: title,
      summary: summary,
      content: content,
    }
  );
  console.log(res);
  const imgRes = await storage.createFile(
    `${process.env.NEXT_PUBLIC_STORAGE_ID!}`,
    res.$id,
    image
  );
  console.log(imgRes);
};
