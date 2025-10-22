"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const prs = [
  {
    id: 238,
    title: "Fixed toast text visibility in dark mode and added gap between item cards",
    url: "https://github.com/agamjotsingh18/trendhora/pull/238",
  },
  {
    id: 247,
    title: "Improved footer design, icon visibility, and responsiveness",
    url: "https://github.com/agamjotsingh18/trendhora/pull/247",
  },
  {
    id: 249,
    title: "Added a custom 404 “Page Not Found” component with responsive design",
    url: "https://github.com/agamjotsingh18/trendhora/pull/249",
  },
  {
    id: 310,
    title: "Fixed dark mode text contrast issues on multiple static pages",
    url: "https://github.com/agamjotsingh18/trendhora/pull/310",
  },
  {
    id: 329,
    title: "Ensured consistent light/dark theme handling across all static pages",
    url: "https://github.com/agamjotsingh18/trendhora/pull/329",
  },
  {
    id: 342,
    title: "Reported and resolved layout alignment issues on Product Detail Page",
    url: "https://github.com/agamjotsingh18/trendhora/pull/342",
  },
  {
    id: 376,
    title: "Improved text contrast on Contact Page for better dark mode readability",
    url: "https://github.com/agamjotsingh18/trendhora/pull/376",
  },
  {
    id: 1245,
    title: "Simplified navbar by removing redundant “Sign Up” link to improve UX",
    url: "https://github.com/Code-A2Z/code-a2z/pull/1245",
  },
];

export default function OpenSourceContributions() {
  return (
    <section 
        id="opensource"
        className="pb-16 pt-5"
        aria-labelledby="opensource-section"
        role="region"
    >
      <div className="container max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          tag="See My Open Source Journey"
          title="Open Source Contributions"
          description="Highlights from my work in open-source projects during GirlScript Summer of Code 2025 (GSSoC’25)."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {prs.map((pr, index) => (
            <motion.div
              key={pr.id}
              className="bg-gray-800/60 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-emerald-500/20 transition relative overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">
                  PR #{pr.id}
                </h3>
                <a
                  href={pr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">{pr.title}</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-gray-400 text-sm mt-10">
          Contributed under{" "}
          <a
            href="https://gssoc.girlscript.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 font-medium hover:underline"
          >
            GirlScript Summer of Code 2025 (GSSoC&#39;25)
          </a>
        </p>
      </div>
    </section>
  );
}
