import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaDatabase,
} from "react-icons/fa";

export const links = [
  { id: nanoid(), text: "home" },
  { id: nanoid(), text: "skills" },
  { id: nanoid(), text: "about" },
  { id: nanoid(), text: "projects" },
  { id: nanoid(), text: "resume" },

];


export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 highlight" />,
    text: "My Udemy training in HTML and CSS taught me to build clean, accessible, and visually appealing web pages..",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 highlight" />,
    text: "I gained a strong grasp of JavaScript through Udemy courses, using it to create interactive, responsive applications.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 highlight" />,
    text: "Through Udemy courses, I built a solid foundation in React, creating modular applications with dynamic features.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 highlight" />,
    text: "I’ve built a solid foundation in Python through my college coursework, gaining experience in writing programs with good algorithms and data structures.",
  },
  {
    id: nanoid(),
    title: "Java",
    icon: <FaJava className="h-16 w-16 highlight" />,
    text: "I have developed a strong foundation in Java through CampusIL coursework and practical projects, where I gained experience building small-scale games.",
  },
  {
    id: nanoid(),
    title: "DataBases",
    icon: <FaDatabase className="h-16 w-16 highlight" />,
    text: "I have experience working with MongoDB and PostgreSQL. My goal is to keep data organized and easy to access, making it a joy for developers like me to work with.",
  },
];
