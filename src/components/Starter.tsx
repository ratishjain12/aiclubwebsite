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
    <div className="w-full">
      <div className="w-[100%]">
        <Navbar />
      </div>
      <div className=" absolute top-34 left-0 w-full h-96 md:h-[600px] bg-gradient-to-t from-pink-300 to-[#0055D1] filter blur-3xl -z-50" />
      <section
        id="banner"
        className="mt-12 flex justify-center sm:h-[500px] md:h-[610px] items-center gap-4 md:gap-12 flex-wrap mb-24 overflow-y-hidden"
      >
        <Image
          src={banner}
          alt="banner"
          className="w-[200px] md:w-[300px] rounded-full"
        />
        <p className=" w-[92vw] sm:w-[80vw] md:max-w-[600px] text-center text-sm font-bold sm:text-lg md:text-xl ">
          Venture into the Future, Unleashing Minds, Igniting Innovation, and
          Exploring Boundless Horizons, one Algorithm at a time. Here at AI
          CLUB, where we redefine the future of intelligence together!
        </p>
      </section>
      <div className="bg-[#EDE4FF] border-t-4  border-pink-500 p-6 ">
        <section
          id="vision"
          className=" mt-6 bg-[#713ABE] md:h-[500px] flex justify-center items-center flex-col rounded-md mx-4 shadow-lg"
        >
          <h2 className="text-3xl text-center md:text-4xl  font-bold bg-white rounded-lg md:w-[400px] min-w-[280px] overflow-y-hidden mt-3">
            Vision
          </h2>
          <p className="text-md w-[83vw]  md:w-[90vw] mx-auto md:text-2xl text-white md:text-center mt-4 p-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iure
            expedita voluptatum cupiditate quaerat maiores laboriosam porro est
            doloribus maxime eligendi tempore a animi, assumenda quis
            praesentium minima vitae nemo.
          </p>
        </section>
        <section
          id="mission"
          className="mt-12 bg-purple-400  md:h-[500px] flex justify-center items-center flex-col  mx-4 rounded-md shadow-md"
        >
          <h2 className="text-3xl text-center md:text-4xl  font-bold bg-white rounded-lg md:w-[400px] min-w-[280px] overflow-y-hidden mt-3">
            Mission
          </h2>
          <p className="text-md w-[83vw]  md:w-[90vw] mx-auto md:text-2xl text-white mt-4 p-3 md:text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iure
            expedita voluptatum cupiditate quaerat maiores laboriosam porro est
            doloribus maxime eligendi tempore a animi, assumenda quis
            praesentium minima vitae nemo.
          </p>
        </section>
      </div>
      <section id="team" className="mt-12">
        <h2 className="text-center text-2xl md:text-4xl  mt-12 mb-10">
          Meet Our Core Team Members
        </h2>
        <div className="flex w-[80%] mx-auto flex-wrap justify-center items-center">
          {data.map((item, index) => {
            return (
              <TeamCard
                name={item.name}
                key={index}
                img={item.img}
                role={item.role}
              />
            );
          })}
        </div>
      </section>

      <section
        id="contact"
        className="mt-12 h-[300px] w-full bg-black border-t-4 border-pink-500 flex flex-col justify-center items-center "
      >
        <Image
          src={mobileLogo}
          alt="mobile-logo"
          height={67}
          className="bg-black rounded-full"
        />
        <h2 className="text-white text-3xl font-semibold  text-center p-2">
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
