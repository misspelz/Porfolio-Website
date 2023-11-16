"use client";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import Image from "next/image";
import blogwebimg from "../public/assets/blogwebimg.jpeg";
import img_gallery from "../public/assets/img_gallery.jpeg";
import petabyte from "../public/assets/pesports.jpg";
import stepper from "../public/assets/edus.jpg";
import abs from "../public/assets/eduabs.jpg";
import comform from "../public/assets/comform.jpeg";
import portfolio from "../public/assets/portfolio.jpeg";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="w-10/12 mx-auto lg:flex lg:flex-col lg:items-center ">
      <h1 className="md:text-4xl text-3xl  font-bold">Projects</h1>
      <p className="pt-6 text-neutral-300 max-w-[1200px] mx-auto">
        I have gained experience in developing a variety of websites, ranging
        from one-page landing pages to multi-page applications. Here are some
        projects, showcasing my work in the field
      </p>

      <div className="mt-20 md:w-9/12 mx-auto ">
        <Image
          className="rounded-xl opacity-90 hover:opacity-100"
          src={abs}
          alt="image_gallery"
        />

        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">
            Edustipend Ambassadors&apos; Page
          </h1>
          <div className="text-neutral-300">
            <h1 className="mt-4">
              {" "}
              I developed the Edustipend Ambassadors&apos; Page, a web platform
              intended to partner with Leaders who are looking to create an
              impact in their communities, and dynamically showcasing past
              Ambassadors and their impacts.
            </h1>
            <h3 className="mt-4">
              Implemented using HTML, Vanilla CSS, and JavaScript (React.js),
              while integrating Google Forms for streamlined application
              processes.
            </h3>
          </div>

          <div className="mt-6 inline-block">
            <a
              href="https://edustipend.org/ambassador-program"
              target="_blank"
              className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
            >
              Explore <BsArrowUpRight size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 md:w-9/12 mx-auto ">
        <Image
          className="rounded-xl opacity-90 hover:opacity-100"
          src={stepper}
          alt="image_gallery"
        />

        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">
            Request Stipend Milti-step Form
          </h1>
          <div className="text-neutral-300">
            <h3 className="mt-4">
              {" "}
              I developed a stepper component for a Request Stipend Feature for
              users to request a stipend, streamlining the application process
              for users. The stepper guided users through a multi-step form,
              ensuring a seamless and error-free experience. Implemented the
              component using HTML, CSS, and JavaScript (React.js).
            </h3>
            <h1 className="mt-4">
              {" "}
              I collaborated with fellow developers to create the Edustipend
              Home Page where I developed the How It Works, Our Beneficiaries
              and Take Off Burden Sections.
            </h1>
          </div>

          <div className="mt-6 inline-block">
            <a
              href="https://edustipend.org"
              target="_blank"
              className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
            >
              Explore <BsArrowUpRight size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 md:w-9/12 mx-auto ">
        <Image
          className="rounded-xl opacity-90 hover:opacity-100"
          src={petabyte}
          alt="image_gallery"
        />

        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Petabye ESports</h1>
          <div className="text-neutral-300">
            <h3 className="mt-4">
              {" "}
              This platform is being developed with the MERN Stack where I focus
              on React.js for building the User Interface.
            </h3>
          </div>

          <div className="mt-6 inline-block">
            <a
              href="https://pesports.gg"
              target="_blank"
              className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
            >
              Explore <BsArrowUpRight size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 md:w-9/12 mx-auto ">
        <Image
          className="rounded-xl opacity-90 hover:opacity-100"
          src={img_gallery}
          alt="image_gallery"
        />

        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>
          <div className="text-neutral-300">
            With an image gallery, you can view a collection of pictures in one
            place on a page.{" "}
            <h3 className="mt-4">
              {" "}
              This platform was developed with React.js, Tailwind CSS, and it
              utilizes real-time data fetching from the Pixabay API.
            </h3>
          </div>

          <div className="mt-6 inline-block">
            <a
              href="https://image-gallery-usingreact.netlify.app/"
              target="_blank"
              className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
            >
              Explore <BsArrowUpRight size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 md:w-9/12 mx-auto ">
        <Image
          className="rounded-xl opacity-90 hover:opacity-100"
          src={blogwebimg}
          alt="image"
        />

        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Bloggit</h1>
          <div className="text-neutral-300">
            A blog website developed with React and Tailwind CSS where a user is
            able to Create, Read, Update, and Delete posts.{" "}
            <h3 className="mt-4">
              {" "}
              In addition, this platform has a store page to order Books with
              Flutterwave payment gateway.
            </h3>
          </div>
          <div className="mt-6 inline-block">
            <a
              href="https://bloggit.netlify.app/"
              className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
            >
              Explore <BsArrowUpRight size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 md:w-9/12 mx-auto ">
        <Image className="rounded-xl opacity-90" src={comform} alt="image" />
        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Customer Complaint Form</h1>
          <div className="text-neutral-300">
            <h3>
              The form is built with React.js. It utilizes Tailwind CSS for
              styling and React Toastify for pop up notification which enables
              user-friendly experiences.
            </h3>
          </div>
          <div className="mt-6 inline-block">
            <a
              href="https://customercomplaintform.netlify.app/"
              className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
            >
              Explore <BsArrowUpRight size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 md:w-9/12 mx-auto ">
        <Image className="rounded-xl opacity-90" src={portfolio} alt="image" />
        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Portfolio Website</h1>
          <div className="text-neutral-300">
            <h3>
              The website was built with HTML5 and JavaScript. It utilizes CSS3
              for styling and Animate on Scroll (AOS) for animations.
            </h3>
          </div>
          <div className="mt-6 inline-block">
            <a
              href="https://portfolio-oluwapelumi.netlify.app/"
              className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
            >
              Explore <BsArrowUpRight size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      <div className="mb-10 mt-16 inline-block flex flex-row  gap-10 w-full items-center max-w-[1200px] mx-auto">
        <div className="h-[1px] bg-slate-500 hidden md:block  lg:w-[50%]"></div>
        <a
          href="https://github.com/misspelz"
          className="flex items-center justify-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700 gap-2 w-full lg:w-[50%]"
        >
          Take a Look at My <AiOutlineGithub size={24} />
        </a>
        <div className="h-[1px] bg-slate-500 lg:w-[50%] hidden md:block"></div>
      </div>
    </div>
  );
};

export default Projects;
