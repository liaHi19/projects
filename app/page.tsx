import { getProjects } from "@/sanity/sanity-utils";

const HomePage = async () => {
  const projects = await getProjects();
  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </div>
  );
};

export default HomePage;
