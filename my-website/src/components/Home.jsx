import SoftwareGif from "../assets/softwareGif.gif";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <section className="accent py-24 sm:flex justify-around">
        <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
          <article className="animate-fade-in">
            <h1 className="text-6xl font-bold tracking-wider">
              Hello 👋, I'm
            </h1>
            <h1 className="text-7xl font-bold tracking-wider">
              Ziv Ben Simon
            </h1>
            <p className="mt-6 text-3xl text capitalize tracking-wide">
              Software Engineer student
            </p>
            <div className="flex gap-x-4 mt-5">
              <a href="https://github.com/ZivBNS">
                <FaGithubSquare className="h-10 w-10 sub-text hover:text-black duration-500" />
              </a>
              <a href="https://www.linkedin.com/in/ziv-ben-simon/">
                <FaLinkedin className="h-10 w-10 sub-text hover:text-black duration-500" />
              </a>
            </div>
          </article>
          <article className="animate-fade-in">
            <img
              src={SoftwareGif}
              className="w-[600px] h-auto md:w-[700px] lg:w-[800px]"
            />
          </article>
        </div>
      </section>

      {}
      <footer className="bg-green-100 py-10 text-center text-gray-700 animate-fade-in">
      <p className="text-lg font-semibold">Let's Connect!</p>
        <p className="text-sm">zivbs123@gmail.com | 058-426-0772</p><br></br>
        <p className="text-sm mt-2">© {new Date().getFullYear()} Ziv Ben Simon</p>
      </footer>
    </>
  );
};

export default Home;
