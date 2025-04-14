import portfolioImg from "../assets/portfolio.png";
import pcBuildImg from "../assets/PCBuild.PNG";
import SteganographyImg from "../assets/Steganography.png";
export const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      text: "A personal portfolio website built with React and Tailwind.",
      imageSrc: portfolioImg ,
      github: "https://github.com/ZivBNS/My-Website",
    },
    {
      id: 2,
      title: "Steganography",
      text: "A steganography application developed entirely in Java, allowing users to hide and extract secret messages within image files.",
      imageSrc: SteganographyImg,
      github: "https://github.com/ZivBNS/encrypting_and_decrypting",
    },
    {
      id: 3,
      title: "secound year small project",
      text: "An online store built using HTML, CSS, JavaScript, and Local Storage for client-side persistence.",
      imageSrc: pcBuildImg,
      github: "https://github.com/ZivBNS/secound_year_small_project",
    },
  ];
  