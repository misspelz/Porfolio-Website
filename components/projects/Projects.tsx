"use client";

import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import bt from "@/public/assets/betatenant.jpeg";
import abs from "@/public/assets/edu.png";
import hage from "@/public/assets/hage.png";
import sch from "@/public/assets/sch.png";
import shulioo from "@/public/assets/shulioo.png";
import stasionpoint from "@/public/assets/stasionpoint.jpeg";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projectData = [
    {
      image: sch,
      title: "Schollarr",
      description:
        "Schollarr is a platform designed to connect students with experienced mentors and alumni from universities worldwide. It makes it easier for learners to access guidance, grow with confidence, and gain clarity on their academic and career paths.",
      link: "https://www.schollarr.com/",
    },
    {
      image: abs,
      title: "Edustipend",
      description:
        "Edustipend is a platform designed to support learners through educational stipends, laptop assistance, and a structured donations flow. With an ambassadors program and a growing community of supporters, the platform helps students achieve their learning goals with confidence.",
      link: "https://edustipend.org",
    },
    {
      image: bt,
      title: "Beta Tenant",
      description:
        "Beta Tenant is a platform designed to help users discover the perfect home with ease. It offers a curated selection of rental properties, allowing people to explore options and find the one that best fits their needs.",
      link: "https://betatenant.com/",
    },
    {
      image: shulioo,
      title: "Shulioo",
      description:
        "Shulioo is a no-code portfolio builder for tech professionals. Users can showcase their projects, skills, certifications, GitHub activity, awards, press kits, speaking history, and résumé in one place.",
      link: "https://shulioo.com/",
    },
    {
      image: stasionpoint,
      title: "Stasion Point",
      description:
        "Station Point is a platform designed to put professional security at your fingertips. It allows users to instantly search for and book verified bodyguards and bouncers nearby, making safety fast, simple, and dependable.",
      link: "https://www.stasionpoint.com/",
    },

    {
      image: hage,
      title: "Hage",
      description:
        "Hage is a platform designed to simplify cross-border shipping across Africa and beyond. It helps overcome broken infrastructure, delays, and logistical guesswork by connecting them with reliable logistics providers, making trade faster, transparent, and more efficient.",
      link: "https://tryhage.vercel.app/",
    },
  ];

  return (
    <div className="w-10/12 mx-auto lg:flex lg:flex-col lg:items-center ">
      <div className="flex flex-col gap-4 w-[90%] lg:w-[70%] mx-auto justify-center items-center">
        <h1 className="md:text-4xl text-3xl  font-bold">Projects</h1>
        <p className="pt-6 text-neutral-300 max-w-[1200px] mx-auto text-center">
          I actively develop web applications, solving problems and tackling
          projects ranging from one-page sites to comprehensive multi-page
          platforms. The projects below demonstrate my skills, adaptability, and
          focus on delivering efficient, high-quality solutions.
        </p>
      </div>

      <div className="mt-20 md:w-[90%] mx-auto ">
        <Slider {...settings}>
          {projectData.map((project, index) => (
            <div key={index}>
              <div className="my-10 md:w-10/12 mx-[10px] md:mx-auto">
                <Image
                  className="rounded-xl opacity-90 hover:opacity-100 w-[400px] h-[200px] object-cover"
                  src={project.image}
                  alt={project.title}
                />

                <div className="my-10 md:w-[100%] mx-auto">
                  <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
                  <div className="text-neutral-300">
                    <h3 className="mt-4">{project.description}</h3>
                  </div>

                  <div className="mt-6 inline-block">
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
                    >
                      Explore <BsArrowUpRight size={14} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
