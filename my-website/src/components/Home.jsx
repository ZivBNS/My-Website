import SoftwareGif from "../assets/softwareGif.gif";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Home = () => {
  return (
    <section className="accent py-24 sm:flex justify-around">
      <div className="mx-auto max-w-7xl  px-8  grid  md:grid-cols-2 items-center gap-8">
        <article className="">
          <h1 className="text-6xl font-bold tracking-wider">
            Hello, I'm
          </h1>
          <h1 className="text-7xl font-bold tracking-wider hover:scale-125 transition duration-500">
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
        <article className="hidden md:block w-full flex justify-center items-center">
          <img
            src={SoftwareGif}
            className="w-[600px] h-auto md:w-[700px] lg:w-[800px]" 
            />
        </article>
      </div>
    </section>
  );
};
export default Home;
