import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-normal">
            Hi, I'm <span className="text-blue-500">Ayush Khobragade</span>
          </h1>

          <p className="tex-gray-400 text-lg mb-8 w-[80vw] mx-auto">
            I’m a Web developer with 2 years of experience building scalable web
            applications using React.js and modern web technologies. My
            expertise lies in crafting clean, functional, and high-performance
            UIs that enhance user experiences.
          </p>

          <p className="mt-4 text-lg text-gray-700 mb-8">
            Currently working on developing seamless, responsive websites with a
            focus on performance and accessibility.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
