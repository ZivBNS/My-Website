import { links } from "../data";

const Navbar = ({ setActiveSection, activeSection }) => {
  return (
    <nav className="accent shadow-sm animate-navbar-slide">
      <div className="mx-auto max-w-7xl px-5 py-3 flex items-center justify-start gap-x-10 transition-all duration-500">
        {}
        <h1 className="text-4xl font-bold text-green-700 whitespace-nowrap">
          Software Engineer
        </h1>

        <div className="flex items-center gap-x-5">
          {links.map(({ id, text }) => {
            const isActive = activeSection === text;

            return (
              <button
                key={id}
                onClick={() => setActiveSection(text)}
                className={`capitalize text-xl tracking-wide transition duration-300 ${
                  isActive
                    ? "text-green-700 underline underline-offset-4 font-semibold"
                    : "text-gray-800 hover:text-green-700"
                }`}
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
