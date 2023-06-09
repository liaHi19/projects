"use client";
import Image from "next/image";
import { FaGithubAlt } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

import { PortableText } from "@portabletext/react";

import Container from "@/components/elements/Container";
import Heading from "@/components/elements/Heading";

import { getProject } from "@/sanity/sanity-utils";

import GoBack from "@/components/elements/GoBack";

interface pageProps {
  params: { project: string };
}

const ProjectPage = async ({ params }: pageProps) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-7rem)] py-20 md:py-24">
      <Container>
        <div className="mb-2">
          <GoBack />
        </div>
        <Heading>{project.name}</Heading>
        <ul className="flex items-center justify-end mb-6 lg:mb-8 gap-4">
          <li>
            <a
              className="p-2 flex items-center justify-center gap-2 border-border rounded-md border-2 dark:border-bgAlt transition-transition hover:border-primary text-primary font-medium"
              href={project.git}
              target="_blank"
            >
              <FaGithubAlt />
              code
            </a>
          </li>
          <li>
            <a
              className="p-2 flex items-center justify-center gap-2 border-border rounded-md border-2 dark:border-bgAlt transition-transition hover:border-primary text-primary font-medium"
              href={project.url}
              target="_blank"
            >
              <TbExternalLink />
              demo
            </a>
          </li>
        </ul>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center lg:gap-8 my-5 lg:my-8">
          <a
            href={project.url}
            target="_blank"
            className="hover:scale-105 rounded-md overflow-hidden transition-transition"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={800}
              height={800}
              priority
            />
          </a>
          <div>
            <PortableText value={project.content} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-5">
          <h3 className="text-lg lg:text-2xl mb-4 font-bold">Stack</h3>
          <ul className="flex items-center justify-center gap-4 max-w-3xl flex-wrap">
            {project.technologies.map((tech, ind) => (
              <li
                className="p-2 rounded-md bg-primary font-medium text-sm"
                key={`${ind}_${tech}`}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default ProjectPage;
