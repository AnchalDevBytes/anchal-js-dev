import SectionHeader from "./SectionHeader";
import Card from "./Card";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {

  return (
    <section id="contact">
      <div className="container py-20 max-w-5xl w-full">
        <SectionHeader
          tag="Contact Me"
          title="Get in touch with me"
          description="Feel free to reach out or connect with me on the platforms below!"
        />
        <div className="flex flex-col gap-10">
          <Card>
            <h3 className="text-white text-2xl font-semibold mb-4">
              Let&#39;s Work Together!
            </h3>
            <p className="text-gray-400 mb-6">
              Whether it&#39;s a project, collaboration, or just a chat, I&#39;d love to connect.
              Reach out to me on LinkedIn, GitHub, or via email.
            </p>
            <div className="flex gap-10">
              <a
                href="https://www.linkedin.com/in/anchaldevbytes/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-blue-500 rounded-lg bg-slate-400/50 hover:bg-blue-600 transition"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a
                href="https://github.com/AnchalDevBytes/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-black rounded-lg bg-slate-400/50 hover:bg-slate-700/90 transition"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                href="mailto:anchal.js.dev@gmail.com"
                className="p-3 rounded-lg text-emerald-500 bg-slate-400/50 hover:bg-emerald-600 transition"
              >
                <FaEnvelope className="text-3xl" />
              </a>
            </div>
          </Card>
          <Card>
            <h3 className="text-blue-400 text-2xl font-semibold mb-4">
              Frequently Asked Questions
            </h3>
            <ul className="text-gray-400 space-y-4">
              <li>
                <strong className="text-white">Where are you based?</strong>
                <p>I&#39;m currently based in Delhi.</p>
              </li>
              <li>
                <strong className="text-white">What&#39;s the best way to reach you?</strong>
                <p>
                  You can email me at{" "}
                  <a
                    href="mailto:yourname@example.com"
                    className="text-emerald-500 hover:underline"
                  >
                    anchal.js.dev@gmail.com
                  </a>{" "}
                  or connect with me on LinkedIn.
                </p>
              </li>
              <li>
                <strong className="text-white">Are you open to freelance work?</strong>
                <p>
                  Yes! I&#39;m always open to discussing exciting projects. Reach out
                  to collaborate!
                </p>
              </li>
              <li>
                <strong className="text-white">What kind of projects do you take?</strong>
                <p>
                  I specialize in frontend development, web applications, and
                  designing seamless user experiences.
                </p>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Contact;
