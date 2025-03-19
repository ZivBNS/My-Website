import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const ProjectsCard = ({ url, imageSrc, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md block hover:shadow-xl duration-300">
      <img
        src={imageSrc}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64 "
      />
      <div className="capitalize p-8">
        <h2 className="text text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 sub-text leading-loose">{text}</p>
        <div className="mt-4 flex">
          <a href={url}>
            <TbWorldWww
              className={
                url
                  ? "h-8 w-8 mr-2 sub-text hover:text-black duration-300"
                  : "hidden"
              }
            />
          </a>
          <a href={github}>
            <FaGithubSquare
              className={
                github
                  ? "h-8 w-8 mr-2 sub-text hover:text-black duration-300"
                  : "hidden"
              }
            />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
