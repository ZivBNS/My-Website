import SectionTitle from "./SectionTitle";

const Resume = () => {
  return (
    <section className="background align-element py-20" id="resume">
      <SectionTitle title="Resume" />
      <div className="flex flex-col items-center justify-center mt-12 space-y-6">
        <a
          href="/resume.pdf"
          download="Ziv_Ben_Simon_Resume.pdf"
          className="bg-green-500 text-white px-6 py-3 rounded font-semibold hover:bg-green-600 transition"
        >
          Download Resume
        </a>
        <iframe
          src="/resume.pdf"
          width="90%"
          height="800px"
          className="rounded shadow-lg"
          title="Resume PDF"
        ></iframe>
      </div>
    </section>
  );
};

export default Resume;
