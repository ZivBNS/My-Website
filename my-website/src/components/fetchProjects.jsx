import { useState, useEffect } from "react";
import { projects as projectsData } from "./projectsData";

const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProjects(projectsData);
      setIsLoading(false);
    }, 1000); // סימולציה של טעינת נתונים
  }, []);

  return { isLoading, projects };
};

export default useFetchProjects;
