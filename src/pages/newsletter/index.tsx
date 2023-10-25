"use client";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { storage, database } from "../../../db/database";
import Image from "next/image";
import { useState, useEffect } from "react";
const Index = () => {
  const router = useRouter();
  const [docs, setDocs] = useState<Array<any>>([]);

  async function fetchData() {
    const docs = await database.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_COLLECTION_ID!
    );
    console.log(docs.documents);
    setDocs(docs.documents);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const generatePreview = (id: string) => {
    const filePrev = storage.getFilePreview(
      process.env.NEXT_PUBLIC_STORAGE_ID!,
      id
    );
    return filePrev.href;
  };

  const onClick = (id: string) => {
    router.push(`/newsletter/${id}`);
  };

  return (
    <div className="mt-2 h-full">
      <div className="text-2xl font-semibold mx-3 md:mx-6 xl:text-center xl:text-4xl m-4">
        Newsletter
      </div>
      {docs.length === 0 ? (
        <div className="text-3xl h-96 flex items-center justify-center">
          <p>No Newsletters Yet :/</p>
        </div>
      ) : (
        docs.map((item) => {
          return (
            <div
              className="flex m-3 md:m-6 shadow-md gap-2 bg-white rounded-md min-h-[100px] cursor-pointer"
              onClick={() => onClick(item.$id)}
              key={item.$id}
            >
              <Image
                src={generatePreview(item.$id)}
                width={300}
                height={200}
                placeholder="blur"
                alt="letter-img"
                loading="lazy"
                blurDataURL={generatePreview(item.$id)}
                className="object-cover w-[100px] h-[100px] md:min-h-[180px] md:w-[200px] md:h-auto "
              />
              <div className="content flex flex-col gap-y-3 gap-x-3">
                <p className="font-semibold text-sm md:text-xl truncate">
                  {item.title}
                </p>
                <p className="text-neutral-500 text-xs md:text-sm">
                  {item.summary}
                </p>
                <p className="text-xs sm:text-sm">{`${format(
                  new Date(item.$createdAt),
                  "MMM d, yyyy HH:mm"
                )}`}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default Index;
