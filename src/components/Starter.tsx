"use client";
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
import discordLogo from "@/components/images/discordlogo.png";
import ScrollToTop from "./ScrollToTop";

export default function Start() {
  return (
    <div className="w-full">
      <div className=" absolute top-34 left-0 w-full h-96 md:h-[600px] bg-gradient-to-t from-pink-300 to-[#0055D1] filter blur-3xl -z-50" />
      <section
        id="banner"
        className="mt-12 flex justify-center sm:h-[500px] md:h-[610px] items-center gap-4 md:gap-12 flex-wrap mb-24 overflow-y-hidden"
      >
        <Image
          src={banner}
          alt="banner"
          priority
          className="w-[200px] md:w-[300px] rounded-full"
        />
        <p className=" w-[92vw] sm:w-[80vw] md:max-w-[600px] text-center text-sm font-bold sm:text-lg md:text-xl ">
          Venture into the Future, Unleashing Minds, Igniting Innovation, and
          Exploring Boundless Horizons, one Algorithm at a time. Here at AI
          CLUB, where we redefine the future of intelligence together!
        </p>
      </section>

      <section
        id="vision"
        className="mt-12 vission p-12 flex justify-center flex-col w-full items-center"
      >
        <h2 className="text-3xl text-center md:text-4xl  font-bold bg-white rounded-lg md:w-[400px] min-w-[280px] overflow-y-hidden mt-3">
          Vision
        </h2>
        <p className="text-md w-[83vw]  md:w-[90vw] mx-auto md:text-2xl text-white md:text-center mt-4 p-3 ">
          To Lead, Innovate, And Inspire A Future Where Artificial Intelligence
          Benefits Humanity And Transforms Our World For The Better.
        </p>
      </section>
      <section
        id="mission"
        className="mission p-12 flex justify-center flex-col w-full items-center"
      >
        <h2 className="text-3xl text-center md:text-4xl  font-bold bg-white rounded-lg md:w-[400px] min-w-[280px] overflow-y-hidden mt-3 ">
          Mission
        </h2>
        <p className="text-md w-[83vw]  md:w-[90vw] mx-auto md:text-2xl text-white mt-4 p-3 md:text-center">
          Our Mission Is To Educate, Engage, And Empower Individuals In The AI
          Club At SCET To Excel In The Field Of Artificial Intelligence. We Aim
          To Create An Inclusive And Dynamic Community Dedicated To Exploring,
          Learning, And Applying AI Technologies.
        </p>
      </section>

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
                Linkedin={item.Linkedin}
                GitHub={item.GitHub}
              />
            );
          })}
        </div>
      </section>

      <ScrollToTop/>

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
          href="https://www.linkedin.com/company/ai-club-scet-su/"
          className="text-white"
        >
          <div className="insta bg-white text-black w-[200px] text-center rounded-lg p-2 mt-2 space-x-2">
            <LinkedInIcon />
            <span className="">Linkedin</span>
          </div>
        </Link>
        <Link href="https://discord.gg/CpdpD87xWT" className="text-white">
          <div className="insta bg-white text-black w-[200px] text-center rounded-lg p-2 mt-2 space-x-2 flex items-center justify-center">
            <Image src={discordLogo} alt="discord logo" width={24} priority />
            <span className="">Discord</span>
          </div>
        </Link>
      </section>
    </div>
  );
}
