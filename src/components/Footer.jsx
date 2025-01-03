import { MdArrowOutward } from "react-icons/md";

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer id="footer" aria-label="Footer">
      <div className="container">
        <hr className="border-t-2 border-gray-800 my-5 md:my-10" />
        <div className="flex flex-col lg:flex-row justify-between items-center gap-7 px-5 md:px-15 pb-5 md:pb-10">
          <p className=" text-white/60 text-sm  text-center">
            © {currentYear}{" "}
            <a className="underline" href="https://github.com/AnchalDevBytes/">
              Anchal Raj
            </a>
            . All rights reserved.
          </p>
          <div className="flex gap-4 text-sm flex-col sm:flex-row">
            <a
              href="https://github.com/AnchalDevBytes/"
              target="_blank"
              className="flex items-center text-white/60"
              aria-label="Visit Github Profile"
            >
              <span>Github</span>
              <MdArrowOutward size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/anchaldevbytes/"
              target="_blank"
              className="flex items-center text-white/60"
              aria-label="Visit Linkedin Profile"
            >
              <span>Linkedin</span>
              <MdArrowOutward size={20} />
            </a>
            <a
              href="https://x.com/AnchalTwt"
              target="_blank"
              className="flex items-center text-white/60"
              aria-label="Visit Twitter Profile"
            >
              <span>Twitter</span>
              <MdArrowOutward size={20} />
            </a>
            <a
              href="mailto:anchal.js.dev@gmail.com"
              className="flex items-center text-white/60"
            >
              <span>Email</span>
              <MdArrowOutward size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
