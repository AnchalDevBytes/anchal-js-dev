import { RiCheckboxCircleLine } from "react-icons/ri";
import { LuCalendar } from "react-icons/lu";
import GrainImg from "../assets/images/grain.jpg";
import SectionHeader from "./SectionHeader";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "JSTigers.com",
      role: "Software Development Intern",
      duration: "Feb 2025 – Apr 2025",
      location: "Remote",
      highlights: [
        "Worked on the DIL (Deep Industries Limited) project, enhancing DPR, Dashboard, and Unit Data Entry modules with meter reset logic for accurate hourly production tracking.",
        "Handled auth session management and implemented dynamic site selection for operators managing multiple sites.",
      ],
    },
    {
      company: "Gearchecks.com",
      role: "Software Development Intern",
      duration: "Apr 2024 – Sep 2024",
      location: "Remote",
      highlights: [
        "Developed a comprehensive order form application from scratch using Next.js, Redux, and TypeScript.",
        "Created the UI with pixel-perfect design and animations using Tailwind CSS, signiﬁcantly enhancing user experience and interface aesthetics.",
        "Implemented robust state management and seamless API interactions with Redux Thunk, ensuring eﬃcient data ﬂow. "
      ],
    },
  ];

   return (
    <section id="experience" className="pb-16 pt-5" aria-labelledby="experience-section">
      <div className="container py-20 max-w-5xl w-full relative">
        {/* Background grain */}
        <div
          className="absolute inset-0 -z-30 opacity-[0.04]"
          style={{ backgroundImage: `url(${GrainImg})`, backgroundSize: "cover" }}
        ></div>

        <SectionHeader
          tag="Where I’ve Worked"
          title="Professional Experience"
          description="A look at the companies and projects where I gained hands-on experience building real-world applications."
        />

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 w-[2px] h-full bg-gradient-to-b from-emerald-300/50 to-sky-400/40 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative md:w-1/2 px-8 ${
                  index % 2 === 0 ? "md:self-start md:pl-0 md:pr-16" : "md:self-end md:pl-16 md:pr-0"
                }`}
              >
                {/* Dot on timeline */}
                <div
                  className={`absolute left-3 md:left-1/2 md:-translate-x-1/2 top-2 w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_10px_3px_rgba(16,185,129,0.5)]`}
                ></div>

                {/* Content box */}
                <div className="bg-gray-800/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-emerald-400/20 transition duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-serif text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-sm text-emerald-300/80">
                      <LuCalendar className="mr-2" size={16} />
                      {exp.duration}
                    </div>
                  </div>

                  <p className="text-emerald-400 mt-1 text-sm font-medium">
                    {exp.company} • {exp.location}
                  </p>

                  <ul className="flex flex-col gap-3 mt-4">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-white/70 leading-relaxed">
                        <RiCheckboxCircleLine
                          size={18}
                          className="text-emerald-300/60 mt-[2px]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
