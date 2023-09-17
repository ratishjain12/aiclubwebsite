import Image from "next/image";

interface prop {
  name: string;
  img: any;
  role: string;
}
function TeamCard({ name, img, role }: prop) {
  return (
    <div className="w-[290px] max-w-[340px] bg-white shadow-md flex flex-col m-3 border-2 p-4 rounded-lg">
      <Image
        src={img}
        alt="team member"
        className="w-[100%] h-[250px] object-fill rounded-full"
      />
      <p className="text-center font-mono p-2">{name}</p>
      <p className="text-center font-mono p-2 font-bold w-[100%] bg-black border-4 rounded-md border-pink-700 text-white">
        {role}
      </p>
    </div>
  );
}
export default TeamCard;
