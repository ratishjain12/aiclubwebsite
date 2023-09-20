import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import Link from "next/link";

interface prop {
  name: string;
  img: any;
  role: string;
  Linkedin: string;
  GitHub: string;
}
function TeamCard({ name, img, role, Linkedin, GitHub }: prop) {
  return (
    <div className="w-[290px] max-w-[340px] bg-white drop-shadow-md flex flex-col m-3 border-2 p-4 rounded-lg">
      <Image
        src={img}
        priority
        alt="team member"
        className="w-[100%] h-[250px] object-fill rounded-full"
      />
      <p className="text-center text-lg p-2">{name}</p>
      <p className="text-center text-xl w-full bg-black/80 text-white rounded-sm p-1">
        {role}
      </p>
      <div className="socials flex justify-center gap-5 mt-2">
        <Link
          href={Linkedin}
          className="bg-white drop-shadow-md p-2 rounded-lg"
        >
          <LinkedIn />
        </Link>
        <Link href={GitHub} className="bg-white drop-shadow-md p-2 rounded-lg">
          <GitHubIcon />
        </Link>
      </div>
    </div>
  );
}
export default TeamCard;
// text-center font-mono p-2 font-bold w-[100%] bg-black border-4 rounded-md border-pink-700 text-white
