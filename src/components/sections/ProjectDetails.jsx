import { useParams } from "react-router-dom";

const projectData = {
  "school-admin-dashboard": {
    title: "School Admin Dashboard",
    description: "A powerful dashboard for managing school operations.",
    // images: ["/images/school-dashboard1.png", "/images/school-dashboard2.png"],
    images: [
      "/images/school-dashboard1.png",
      "/images/school-dashboard2.png",
      "/images/school-dashboard3.png",
      "/images/school-dashboard4.png",
      "/images/school-dashboard5.png",
      "/images/school-dashboard6.png",
      "/images/school-dashboard7.png",
      "/images/school-dashboard8.png",
      "/images/school-dashboard9.png",
      "/images/school-dashboard10.png",
      "/images/school-dashboard11.png",
      "/images/school-dashboard12.png",
      "/images/school-dashboard13.png",
      "/images/school-dashboard14.png",
      "/images/school-dashboard15.png",
      "/images/school-dashboard16.png",
      "/images/school-dashboard17.png",
      "/images/school-dashboard18.png",
      "/images/school-dashboard19.png",
      "/images/school-dashboard20.png",
      "/images/school-dashboard21.png",
      "/images/school-dashboard22.png",
    ],
  },
  "repair-plus": {
    title: "Repair-plus",
    description:
      " A website offering device repair services enables users to book repair appointments and view the locations of their different service centers on a map for easy access.",
    images: [
      "/images/repair-plus1.png",
      "/images/repair-plus2.png",
      "/images/repair-plus3.png",
      "/images/repair-plus4.png",
      "/images/repair-plus5.png",
      "/images/repair-plus6.png",
      "/images/repair-plus7.png",
      "/images/repair-plus8.png",
      "/images/repair-plus9.png",
      "/images/repair-plus10.png",
    ],
  },
};

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <div className="text-center text-white">Project not found!</div>;
  }

  return (
    <div className="min-h-screen mt-10 flex flex-col items-center justify-center bg-black text-white p-10">
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <p className="text-gray-400 mb-6">{project.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Screenshot ${index + 1}`}
            className="w-full rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};
