import React from "react";
import Navbar from "./Navbar";
import banner from "@/components/banner.png";
import Image from "next/image";
import TeamCard from "./TeamCard";
import data from "./teammembers";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import mobileLogo from "@/components/mobile-logo.png";
import Link from "next/link";
export default function Start() {
  return (
    <div>
      <Navbar />
      <div className=" absolute top-34 left-0 w-full h-[80vh] md:h-96 bg-gradient-to-tr from-pink-300 to-[#0055D1] filter blur-3xl -z-50" />
      <section
        id="banner"
        className="mt-100 h-[80vh] flex justify-center items-center gap-4 md:gap-12 flex-wrap mb-20"
      >
        <Image src={banner} alt="banner" className="w-[300px] rounded-full" />
        <p className=" max-w-[400px] md:max-w-[600px] font-mono text-center text-xl font-bold md:text-2xl">
          Venture into the Future, Unleashing Minds, Igniting Innovation, and
          Exploring Boundless Horizons, one Algorithm at a time. Here at AI
          CLUB, where we redefine the future of intelligence together!
        </p>
      </section>

      <section
        id="vision"
        className="mt-100 bg-[#82A0D8] md:h-[500px] p-12 flex justify-center items-center flex-col mx-4 rounded-md "
      >
        <h2 className="text-3xl text-center md:text-4xl font-mono font-bold bg-white rounded-lg md:w-[400px] min-w-[400px]">
          Vision
        </h2>
        <p className="text-xl w-[400px]  md:w-[900px] mx-auto md:text-2xl text-white font-mono mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iure
          expedita voluptatum cupiditate quaerat maiores laboriosam porro est
          doloribus maxime eligendi tempore a animi, assumenda quis praesentium
          minima vitae nemo.
        </p>
      </section>
      <section
        id="mission"
        className="mt-12 bg-[#088395] p-12 md:h-[500px] flex justify-center items-center flex-col  mx-4 rounded-md "
      >
        <h2 className="text-3xl text-center md:text-4xl font-mono font-bold bg-white rounded-lg md:w-[400px] min-w-[400px]">
          Mission
        </h2>
        <p className="text-xl w-[400px]  md:w-[900px] mx-auto md:text-2xl text-white font-mono mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iure
          expedita voluptatum cupiditate quaerat maiores laboriosam porro est
          doloribus maxime eligendi tempore a animi, assumenda quis praesentium
          minima vitae nemo.
        </p>
      </section>
      <section id="team" className="mt-12">
        <h2 className="text-center text-4xl font-mono mt-12 underline mb-10">
          Meet Our Core Team Members
        </h2>
        <div className="flex w-[80%] mx-auto flex-wrap justify-center items-center">
          {data.map((item, index) => {
            return <TeamCard name={item.name} key={index} img={item.img} />;
          })}
        </div>
      </section>
      <section
        id="contact"
        className="mt-12 h-[300px] w-full bg-slate-500 flex flex-col justify-center items-center "
      >
        <Image
          src={mobileLogo}
          alt="mobile-logo"
          height={67}
          className="bg-black rounded-full"
        />
        <h2 className="text-white text-3xl font-semibold font-mono text-center p-2">
          Contact Us
        </h2>
        <Link
          href="https://instagram.com/ai_clubscet?igshid=OGQ5ZDc2ODk2ZA=="
          className="text-white"
        >
          <div className="insta bg-white text-black w-[200px] text-center rounded-lg p-2 space-x-2">
            <InstagramIcon />
            <span className="">Instagram</span>
          </div>
        </Link>
        <Link
          href="https://instagram.com/ai_clubscet?igshid=OGQ5ZDc2ODk2ZA=="
          className="text-white"
        >
          <div className="insta bg-white text-black w-[200px] text-center rounded-lg p-2 mt-2 space-x-2">
            <LinkedInIcon />
            <span className="">Linkedin</span>
          </div>
        </Link>
      </section>
    </div>
  );
}
