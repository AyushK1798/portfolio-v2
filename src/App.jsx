import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { ProjectDetails } from "./components/sections/ProjectDetails";
import "./index.css";
import { useEffect } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // Check if the current route is a project details page
  const isProjectPage = location.pathname.startsWith("/projects/");

  useEffect(() => {
    // Skip loading screen for project pages
    if (isProjectPage) {
      setIsLoaded(true);
    }
  }, [isProjectPage]);

  return (
    <>
      {!isLoaded && !isProjectPage && (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      )}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Routes>
          {/* Main Home Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
          {/* Project Details Page */}
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import { LoadingScreen } from "./components/LoadingScreen";
// import { Navbar } from "./components/Navbar";
// import { MobileMenu } from "./components/MobileMenu";
// import { Home } from "./components/sections/Home";
// import { About } from "./components/sections/About";
// import { Projects } from "./components/sections/Projects";
// import { Contact } from "./components/sections/Contact";
// import { ProjectDetails } from "./components/sections/ProjectDetails";
// import "./index.css";

// function App() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <Router>
//       {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
//       <div
//         className={`min-h-screen transition-opacity duration-700 ${
//           isLoaded ? "opacity-100" : "opacity-0"
//         } bg-black text-gray-100`}
//       >
//         <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//         <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

//         <Routes>
//           {/* Main Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Home />
//                 <About />
//                 <Projects />
//                 <Contact />
//               </>
//             }
//           />
//           {/* Project Details Page */}
//           <Route path="/projects/:id" element={<ProjectDetails />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
