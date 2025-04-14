import aboutSvg from "../assets/paint-image.png";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
  <section className="background align-element py-20" id="about">
    <div className="align-element grid  md:grid-cols-2 items-center gap-16">
        <img
          src={aboutSvg}
          className="w-full h-100"
        />
        <article>
          <SectionTitle title="about me" />
          <p className="text mt-8 leading-loose">
            Hi, I’m Ziv Ben Simon! 👋 <br></br>I am a dedicated Software Engineering student (B.Sc., Second Year) with a strong passion for building technology-driven solutions and continuously expanding my skill set. I enjoy tackling new challenges, developing projects, and staying up to date with the latest advancements in the field.
            Driven by curiosity and a commitment to excellence, I actively engage in self-learning, hands-on projects, and technical coursework to deepen my understanding of software development. My goal is to refine my expertise in problem-solving, coding best practices, and software architecture while working on meaningful, real-world applications.
            I am currently seeking an internship opportunity where I can apply my knowledge, collaborate with experienced professionals, and contribute to innovative and impactful projects.
            Looking forward to connecting and growing as a developer!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
