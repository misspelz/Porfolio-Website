"use client";
import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

type Props = {};

const Projects = (props: Props) => {
  const [selectedId, setSelectedId] = useState<boolean>(false);

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="md:text-4xl text-3xl  font-bold">Projects</h1>
      <p className="pt-6 text-neutral-300">
        I have gained experience in developing a variety of websites, ranging
        from one-page landing pages to multi-page applications. Here are some
        projects, showcasing my work in the field of front end development.
      </p>
      {/* <div className='w-10/12 box1 max-md:mt-[-50px] mt-0'></div> */}
      <div className="mt-20 md:w-9/12 mx-auto ">
        <img
          className="rounded-xl opacity-90 hover:opacity-100"
          src="https://res.cloudinary.com/dzvdkjmm7/image/upload/v1690186600/WhatsApp_Image_2023-07-24_at_09.15.36_v2qe8k.jpg"
          alt="image_gallery"
        />
        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>
          <div className="text-neutral-300">
            With an image gallery, you can view a collection of pictures in one
            place on a page.{" "}
            <h1 className="mt-4">
              {" "}
              This platform was developed with React.js, Tailwind CSS, and it
              utilizes real-time data fetching from the Pixabay API.
            </h1>
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
        <img
          className="rounded-xl opacity-90 hover:opacity-100"
          src="https://res.cloudinary.com/dzvdkjmm7/image/upload/v1690188474/WhatsApp_Image_2023-07-24_at_09.46.49_uxpumu.jpg"
          alt=""
        />
        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Bloggit</h1>
          <div className="text-neutral-300">
            A blog website developed with React and Tailwind CSS where a user is
            able to Create, Read, Update, and Delete posts.{" "}
            <h1 className="mt-4">
              {" "}
              In addition, this platform has a store page to order Books with
              Flutterwave payment gateway.
            </h1>
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
        <img className="rounded-xl opacity-90" src="https://res.cloudinary.com/dzvdkjmm7/image/upload/v1690285854/WhatsApp_Image_2023-07-25_at_12.11.06_ybxuoa.jpg" alt="image" />
        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Customer Complaint Form</h1>
          <div className="text-neutral-300">
            <h1>
              The form is built with React.js. It utilizes Tailwind CSS for
              styling and React Toastify for pop up notification which enables
              user-friendly experiences.
            </h1>
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
    </div>
  );
};

export default Projects;
