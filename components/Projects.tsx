import Image from "next/image";
import Link from "next/link";

import { getProjects } from "@/sanity/sanity-utils";
import Container from "./elements/Container";
import Heading from "./elements/Heading";

const Projects = async () => {
  const projects = await getProjects();
  return (
    <section id="projects" className="pt-16 md:pt-20">
      <Container>
        <Heading>Projects</Heading>
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
      </Container>
    </section>
  );
};

export default Projects;
