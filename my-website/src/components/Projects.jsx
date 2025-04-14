import ProjectsCard from "./ProjectsCard";
import SectionTitle from "./SectionTitle";
import useFetchProjects from "./fetchProjects";


const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <section className="background align-element py-20" id="about">
    <SectionTitle title="Projects" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
