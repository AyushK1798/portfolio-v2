import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route path

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Small delay to ensure rendering is complete
      }
    }
  }, [location]); // Runs when location changes

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span
            onClick={() => navigate("/#home")}
            className="cursor-pointer font-mono text-xl font-bold text-white"
          >
            Ayush<span className="text-blue-500">.Khobragade</span>
          </span>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate("/#home")}
              className="text-blue-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/#about")}
              className="text-blue-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigate("/#projects")}
              className="text-blue-300 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => navigate("/#contact")}
              className="text-blue-300 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
