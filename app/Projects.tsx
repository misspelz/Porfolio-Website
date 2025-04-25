"use client";

import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import bmc from "../public/assets/bmc.png";
import abs from "../public/assets/edu.png";
import gdm from "../public/assets/gdm.png";
import img_gallery from "../public/assets/img_gallery.jpeg";
import pf from "../public/assets/pf.png";
import phs from "../public/assets/phs.png";
import sch from "../public/assets/sch.png";
import bt from "../public/assets/betatenant.jpeg";
import dc from "../public/assets/datacab.jpeg";
import ol from "../public/assets/ourlady.jpeg";
import te from "../public/assets/te.jpeg";

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
        "Go-to platform for all things study abroad, service providers, faculties, and universities all in one place to help make your academic dreams a reality.",
      link: "https://www.schollarr.com/",
    },
    {
      image: abs,
      title: "Edustipend",
      description:
        "Empowers learners by providing essential resources. Edustipend aims to create opportunities that drive educational growth and community impact.",
      link: "https://edustipend.org",
    },
    {
      image: bt,
      title: "Beta Tenant",
      description:
        "Beta Tenant transforms the way Africans finds their perfect homes.",
      link: "https://betatenant.com/",
    },
    {
      image: dc,
      title: "Datacab",
      description:
        "Datacab strengthens Environmental Advocacy through Data Simplification for Evidence-Based Action",
      link: "https://www.datacab.io/",
    },
    {
      image: ol,
      title: "Our Lady of Apostles Secondary School",
      description:
        "The website for Our Lady of Apostles Secondary School includes key sections such as About the School, Academics, Admissions, School History, Events, News, and a Gallery. It provides prospective students, parents, and the community with easy access to important information in a user-friendly, responsive layout, keeping visitors informed and engaged with the school’s latest activities and achievements.",
      link: "https://olassyabasecsch.com/",
    },
    {
      image: gdm,
      title: "Great Day Motors",
      description:
        "Offers reliable and comfortable rides. Great Day Motors ensures a smooth and affordable journey with a commitment to safety and customer satisfaction.",
      link: "https://www.greatdaymotors.com/",
    },
    {
      image: te,
      title: "Travel Expert",
      description:
        "Your go-to solution for all home repairs and maintenance needs. From fixing leaks to electrical work and everything in between.",
      link: "https://travel-expert-react.vercel.app/",
    },
    {
      image: bmc,
      title: "Blue Marvel Group",
      description:
        "Committed to delivering innovative solutions through our Capital, Management, and Technology divisions, empowering businesses and individuals.",
      link: "https://bluemarvelgroup.com/",
    },
    
    {
      image: phs,
      title: "Prince Handyman Service",
      description:
        "Travel Expert helps you explore curated packages, book only what you need, and generate invoices in a few clicks.",
      link: "https://princehandymanservice.vercel.app/",
    },

    {
      image: img_gallery,
      title: "Image Gallery",
      description:
        "A collection of captivating images pictures in one place on a page. it utilizes real-time data fetching from the Pixabay API.",
      link: "https://image-gallery-usingreact.netlify.app/",
    },
    {
      image: pf,
      title: "My Porfolio",
      description:
        "From innovative applications to visually appealing designs, this portfolio reflects my passion for building impactful digital solutions.",
      link: "https://porfolio-pelumi-adetoye.vercel.app/",
    },
  ];

  return (
    <div className="w-10/12 mx-auto lg:flex lg:flex-col lg:items-center ">
      <h1 className="md:text-4xl text-3xl  font-bold">Projects</h1>
      <p className="pt-6 text-neutral-300 max-w-[1200px] mx-auto">
        I have gained experience in developing a variety of websites, ranging
        from one-page landing pages to multi-page applications. Here are some
        projects, showcasing my work in the field
      </p>

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

                <div className="my-10 md:w-10/12 mx-auto">
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

      <div className="mb-4  flex flex-row gap-10 w-full items-center max-w-[1200px] mx-auto">
        <div className="h-[1px] bg-slate-500 hidden md:block  lg:w-[50%]"></div>
        <a
          href="https://github.com/misspelz"
          className="flex items-center justify-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700 gap-2 w-full lg:w-[50%]"
        >
          Github <AiOutlineGithub size={24} />
        </a>
        <div className="h-[1px] bg-slate-500 lg:w-[50%] hidden md:block"></div>
      </div>
    </div>
  );
};

export default Projects;
