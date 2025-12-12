"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myimg from "@/public/assets/Adetoye_A._Pelumi-removebg-preview.png";

type Props = {};

const Hero = (props: Props) => {
  const [color, setColor] = useState("red");
  const [text, setText] = useState("Front End Engineer");

  // Timer function
  useEffect(() => {
    const timer = setInterval(() => {
      setColor((prevColor) =>
        prevColor === "#f7a025" ? "#7657a9" : "#f7a025"
      );
      setText((prevText) =>
        prevText === "Front End Engineer!"
          ? "Front End Engineer"
          : "Front End Engineer"
      );
    }, 1000);

    // Clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="pt-24 relative w-10/12 max-w-[1200px] mx-auto">
      <div className="flex flex-col-reverse md:flex md:items-center md:justify-between md:flex-row-reverse">
        <div className="md:w-1/2 flex justify-start lg:justify-center items-end max-md:pt-4">
          <div className="relative">
            <Image
              className="h-[500px] transform -scale-x-100"
              src={myimg}
              alt="my picture"
            />
            <div className="hidden md:block lg:w-[350px] lg:h-[350px] overflow-hidden z-[-1] top-[5%] lg:top-0 left-[5%] lg:left-[-5px] rounded-full bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 absolute"></div>
          </div>
        </div>
        <div className="md:w-[50%] p-4 pl-0 mt-5 sm:mt-20">
          {/* <Link href="/newpage"> */}
          <p className="text-xl sm:text-2xl  md:text-xl lg:text-2xl xl:text-3xl">
            Hi, call me Pelz
          </p>
          {/* </Link> */}
          <p className="text-base sm:text-xl md:text-base lg:text-xl xl:text-2xl lg:pt-6 py-4">
            As a <span style={{ color: color }}>{text}</span>, my approach to
            website development is to create a website that strengthens your
            company&apos;s brand while ensuring ease of use and simplicity for
            your audience.
          </p>
          <p className="text-base sm:text-xl md:text-base lg:text-xl xl:text-2xl lg:pt-6 py-4">
            I am excited about the prospect of collaborating on new ventures and
            contributing my expertise to innovative projects.
          </p>

          <div className="flex items-center mt-6">
            <ul className="flex items-center space-x-2 sm:space-x-5 mr-6 my-4 ">
              <li>
                <a
                  href="https://x.com/dev_pelz"
                  className="hover:opacity-100 opacity-75 transition ease-in duration-150"
                >
                  <AiOutlineTwitter size={24} />
                </a>
              </li>
              {/* <li>
                <a
                  href="https://www.instagram.com/dev_pelz/"
                  className="hover:opacity-100 opacity-75 transition ease-in duration-150"
                >
                  <GrInstagram size={24} />
                </a>
              </li> */}
              <li>
                <a
                  href="https://www.linkedin.com/in/oluwapelumiadetoye/"
                  className="hover:opacity-100 opacity-75 transition ease-in duration-150"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </li>
              {/* <li>
                <a
                  href="https://github.com/misspelz"
                  className="hover:opacity-100 opacity-75 transition ease-in duration-150"
                >
                  <AiOutlineGithub size={24} />
                </a>
              </li> */}
            </ul>
            <a
              href="mailto:adetoyeofficial@gmail.com"
              className="px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5px] border-[#363636]"
            >
              Email me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
