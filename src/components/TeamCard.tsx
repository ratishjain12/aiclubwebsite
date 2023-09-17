import Image from "next/image";

interface prop {
  name: string;
  img: any;
}
function TeamCard({ name, img }: prop) {
  return (
    <div className="w-[290px] max-w-[340px] bg-white shadow-md flex flex-col m-3 border-2">
      <Image
        src={img}
        alt="team member"
        className="w-[100%] h-[280px] object-fill"
      />
      <p className="text-center font-mono p-2">{name}</p>
    </div>
  );
}
export default TeamCard;
