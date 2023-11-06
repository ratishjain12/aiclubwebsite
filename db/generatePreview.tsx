import { storage } from "./database";
export const generatePreview = (id: string) => {
  const filePrev = storage.getFilePreview(
    process.env.NEXT_PUBLIC_STORAGE_ID!,
    id
  );
  return filePrev.href;
};
