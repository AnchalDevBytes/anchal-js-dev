import lekha from "../assets/images/lekha.png";
import shopper from "../assets/images/shopper.png";
import lnk from "../assets/images/lnk.png";
import timekeeper from "../assets/images/timekeeper.png";
import GrainImg from "../assets/images/grain.jpg";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import SectionHeader from "./SectionHeader";

function FeatureProjects() {
  const portfolioProjects = [
    {
      githubLink: "https://github.com/AnchalDevBytes/lekha",
      year: "2024",
      title: "Lekha",
      description: [
        { title: "full-stack blogging platform, for creating, reading and sharing blogs with anyone on internet." },
        { title: "Authentication with JWT, allowing users to securely sign up, log in, and manage their content." },
        { title: "Integrated a PostgreSQL database with Prisma ORM, enabling efficient management of blog content" },
      ],
      link: "https://lekha.vercel.app/",
      image: lekha,
    },
    {
      githubLink: "https://github.com/AnchalDevBytes/timekeeper",
      year: "2024",
      title: "TimeKeeper",
      description: [
        { title: "full-stack calendar application, enabling user for creating, updating and manage event on responsive weekly calendar view." },
        { title: "Implement user authentication with JWT and optimised backend data handling with NeonDB, enhancing performance and reliability for event management." },
      ],
      link: "https://timekeeper-livid.vercel.app/",
      image: timekeeper,
    },
    {
      githubLink: "https://github.com/AnchalDevBytes/shopper",
      year: "2024",
      title: "Shopper",
      description: [
        { title: "A fully functional e-commerce app, Developed the complete Frontend E-commerce System with Next.js" },
        { title: "Integrated the dummy Stripe Payment System with intuitive UI and state management using RTK" },
        { title: "features like wishlist, recommendation system based on current selected output, filtering option based on price, rating, brand and category" },
      ],
      link: "https://shopperproject.vercel.app/",
      image: shopper,
    },
    {
      githubLink: "https://github.com/AnchalDevBytes/lnk",
      year: "2024",
      title: "LNK",
      description: [
        { title: "Simple and easy to use link shortner app developed for hassle-free usage" },
        { title: "minimalistic and user-friendly UI for better understanding and flow of work" },
        { title: "Visithistory with Date of visits and no. of clicks on particular link is provided on dashboard" },
      ],
      link: "https://lnk-kappa.vercel.app/",
      image: lnk,
    },
  ];

  return (
    <section
      id="project"
      className="pb-16 pt-5"
      aria-labelledby="featured-projects"
      role="region"
    >
      <div className="container py-20 max-w-5xl w-full ">
        <SectionHeader
          tag="See What I&#39;ve Built"
          title="Showcasing My Works"
          description="Take a closer look at my projects, showcasing innovative ideas and practical solutions."
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-16">
          {portfolioProjects.map((project, index) => (
            <article
              key={index}
              className="w-full gap-10 bg-gray-800 rounded-2xl relative z-0 overflow-hidden shadow-2xl px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 border-white/20 border-[3px]"
              role="article"
              aria-label={project.title}
            >
              {/* grains background image  */}
              <div
                className="absolute inset-0 -z-30 opacity-5"
                style={{ backgroundImage: `url(${GrainImg})` }}
                role="presentation"
                aria-hidden="true"
              ></div>
              <div className="md:grid md:grid-cols-2 lg:gap-16">
                <div className="md:pb-12 lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent inline-flex font-bold uppercase tracking-normal text-sm  gap-1">
                    <a href={project.githubLink} target="_blank">GithubLink</a>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl mt-2 font-serif">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.description.map((result, i) => (
                      <li
                        key={i}
                        className="flex gap-2 items-center text-sm text-white/60"
                      >
                        <span>
                          <RiCheckboxCircleLine
                            size={18}
                            className="text-emerald-300/50"
                            role="presentation"
                            aria-hidden="true"
                          />
                        </span>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold mt-8 flex gap-2 items-center justify-center hover:bg-white/80 duration-200">
                      <span>View Live Site</span>
                      <MdArrowOutward size={20} />
                    </button>
                  </a>
                </div>
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className=" object-cover lg:absolute lg:h-full md:mt-0 md:mb-0 mt-4 overflow-hidden -mb-2 hover:scale-110 duration-300 lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureProjects;
