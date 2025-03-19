import { links } from "../data";

const Navbar = ({ setActiveSection }) => {
  return (
    <nav className="accent">
      <div className="mx-auto max-w-7xl px-5 flex flex-col sm:flex-row sm:gap-x-20 sm:item-center sm:py-8">
        <h1 className="text-4xl font-bold">Software Engineer</h1>
        <div className="flex items-center gap-x-9">
          {links.map((link) => {
            const { id, text } = link;
            return (
              <button
                key={id}
                onClick={() => setActiveSection(text)}
                className="capitalize text-lg tracking-wide hover:highlight duration-300"
              >
                {text}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
