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
    title: "Python",
    icon: <FaPython className="h-16 w-16 highlight" />,
    text: "Solid understanding of Python fundamentals, including data structures, algorithms, and scripting. Studied through academic courses and applied in various small projects and exercises focused on problem-solving and clean code practices.",
  },
  {
    id: nanoid(),
    title: "Java",
    icon: <FaJava className="h-16 w-16 highlight" />,
    text: "Strong foundation in object-oriented programming with Java, gained through academic and hands-on projects. Completed a final project using Java (available on my GitHub)",
  },
  {
    id: nanoid(),
    title: "DataBases",
    icon: <FaDatabase className="h-16 w-16 highlight" />,
    text: "Practical experience with MySQL, focusing on structured data storage, efficient querying, and relational database design.",
  },
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 highlight" />,
    text: "Skilled in building clean, responsive, and accessible web pages using HTML5 and CSS3.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 highlight" />,
    text: "Proficient in JavaScript, with experience creating dynamic and interactive web applications. Studied as part of academic coursework and through hands-on practice.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 highlight" />,
    text: "Experienced in building modular and scalable front-end applications using React. Built this portfolio site from scratch as part of my learning journey.",
  },
];
