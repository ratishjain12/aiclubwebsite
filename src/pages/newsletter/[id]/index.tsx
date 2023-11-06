import { database, storage } from "../../../../db/database";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Models } from "appwrite";
export async function getStaticPaths(ctx: Object) {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
}

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const id = params.id;

  const data = await database.getDocument(
    `${process.env.NEXT_PUBLIC_DATABASE_ID!}`,
    `${process.env.NEXT_PUBLIC_COLLECTION_ID!}`,
    id
  );

  return {
    props: {
      data: data,
    },
  };
};
const Post = ({ data }: Models.Document) => {
  const router = useRouter();
  return (
    <div className="mt-4 w-full">
      <button
        className=" px-4 py-2 bg-black text-white ml-2 mb-1 rounded-md "
        onClick={() => router.back()}
      >
        back
      </button>
      <Image
        src={
          storage.getFilePreview(process.env.NEXT_PUBLIC_STORAGE_ID!, data.$id!)
            .href
        }
        priority
        width={600}
        height={400}
        className="w-[300px] mx-auto md:mx-auto md:w-auto max-h-[700px] max-w-[800px] object-contain mt-4"
        alt="blog-banner"
      />
      <p className="text-center text-2xl font-semibold mt-2">{data.title}</p>
      <p className="text-center text-lg text-neutral-800 mt-2 p-5">
        {data.summary}
      </p>
      <div
        className="w-[90%] mx-auto"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </div>
  );
};
export default Post;
