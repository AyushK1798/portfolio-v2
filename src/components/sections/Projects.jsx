import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom"; // ✅ Import Link

export const Projects = () => {
  const projectList = [
    {
      title: "ZingaSuite",
      description:
        "ZingaSuite is a suite of products that includes ZingaProject (Project Management), Zingashop (E-commerce Enabler), and Zingalify. It is designed to provide businesses with an integrated suite of tools to manage and grow their online presence.",
      technologies: ["ReactJs", "Redux", "Chart.js", "REST API"],
      link: "#", // No link available
    },
    {
      title: "TechBrove E-Commerce",
      description:
        "A full-stack e-commerce platform with product catalog, cart, and Razorpay payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Razorpay"],
      link: "https://techbrove-ecom.vercel.app/",
    },
    {
      title: "Quirky Ink",
      description:
        "Designed and developed a responsive portfolio website for Quirky Ink, a brand specializing in exquisite wall art.",
      technologies: ["React"],
      link: "https://quirky-ink.vercel.app/",
    },
    {
      title: "School Admin Dashboard",
      description:
        "An admin panel for schools to manage students, attendance, assignments, and online exams.",
      technologies: ["React", "React-Bootstrap", "Axios", "REST API"],
      link: "/projects/school-admin-dashboard", // ✅ Internal Route
    },
    {
      title: "AI Chat Modal",
      description:
        "An AI-powered chatbot using Google Gemini API for real-time intelligent responses.",
      technologies: ["React", "Node.js", "Express.js", "Google Gemini API"],
      link: "https://ai-chat-modal-frontend.vercel.app/",
    },
    {
      title: "3D Chair Configurator",
      description:
        "A 3D chair customization tool allowing users to modify and preview chairs in real time.",
      technologies: ["Three.js", "React.js"],
      link: "https://3-d-chair-configurator-7xaz.vercel.app/",
    },
    {
      title: "Repair-plus",
      description:
        "A website offering device repair services enables users to book repair appointments and view the locations of their different service centers on a map for easy access.",
      technologies: ["ReactJs", "Axios", "REST API"],
      link: "/projects/repair-plus", // ✅ Internal Route
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectList.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                      hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  {project.link !== "#" ? (
                    project.link.startsWith("http") ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                      >
                        View Project →
                      </a>
                    ) : (
                      <Link
                        to={project.link} // ✅ Use Link for internal routing
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                      >
                        View Project →
                      </Link>
                    )
                  ) : (
                    <span className="text-gray-500 italic">Coming Soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
