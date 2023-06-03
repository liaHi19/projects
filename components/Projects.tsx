import Image from "next/image";
import Link from "next/link";

import { getProjects } from "@/sanity/sanity-utils";

const Projects = async () => {
  const projects = await getProjects();
  return (
    <div>
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id}>
          <div>{project.name}</div>
          <Image
            height={300}
            width={750}
            src={project.image}
            alt={project.name}
          />
        </Link>
      ))}
    </div>
  );
};

export default Projects;
