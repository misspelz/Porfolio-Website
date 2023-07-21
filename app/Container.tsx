import React from "react";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

type Props = {};

const Container = (props: Props) => {
  return (
    <div className="lg:pt-16 pt-4 relative w-10/12 mx-auto">
      <div className="md:flex items-center justify-between flex-row-reverse">
        <div className=" flex justify-start lg:justify-center items-end max-md:pt-4 md:w-[50%]">
          <div className="relative">
            <img
              className="h-[500px] transform -scale-x-100"
              
              src="https://res.cloudinary.com/dzvdkjmm7/image/upload/v1689978270/Adetoye_A._Pelumi-removebg-preview_jnvigw.png"
              alt="my picture"
            />
            <div className="hidden md:block lg:w-[350px] lg:h-[350px] overflow-hidden z-[-1] top-[5%] lg:top-0 left-[5%] lg:left-[-20px] rounded-full bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 absolute"></div>
          </div>
        </div>
        <div className="md:w-[50%] p-4 pl-0 mt-5 sm:mt-20">
          <p className="text-xl sm:text-2xl  md:text-xl lg:text-2xl xl:text-3xl">
            Hi, call me Pelz
          </p>

          <p className="text-base sm:text-xl md:text-base lg:text-xl xl:text-2xl lg:pt-6 py-4">
          As a <span className="text-[#f7a025]">Front End Developer</span>, I am excited about the prospect of collaborating on new ventures and contributing my expertise to innovative projects.
          </p>

          <div className="flex items-center mt-6 md:mt-10">
            <ul className="flex items-center space-x-2 sm:space-x-5 mr-6 my-4 ">
              <li>
                <a
                  href="/"
                  className="hover:opacity-100 opacity-75 transition ease-in duration-150"
                >
                  <AiOutlineTwitter size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dev_pelz/"
                  className="hover:opacity-100 opacity-75 transition ease-in duration-150"
                >
                  <GrInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/oluwapelumiadetoye/"
                  className="hover:opacity-100 opacity-75 transition ease-in duration-150"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/misspelz"
                  className="hover:opacity-100 opacity-75 transition ease-in duration-150"
                >
                  <AiOutlineGithub size={24} />
                </a>
              </li>
            </ul>
            {/* <a
             href="mailto:pelumiiadetoye@gmail.com"
              className="px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5px] border-[#363636]"
            >
              Email me
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
