"use client";
import Image from "next/image";
import Link from "next/link";
import { Tab } from "@headlessui/react";

import Container from "./elements/Container";
import Heading from "./elements/Heading";

import { getProjects } from "@/sanity/sanity-utils";

const Projects = async () => {
  const projects = await getProjects();
  const webApps = projects.filter((project) => project.type === "webapp");
  const layouts = projects.filter((project) => project.type === "layout");

  const projectsData = [projects, webApps, layouts];

  return (
    <section id="projects" className="pt-16 md:pt-20">
      <Container>
        <Heading>Projects</Heading>
        <Tab.Group>
          <Tab.List className="flex items-center justify-center gap-3 p-2 mb-2">
            {["All", "Web Apps", "Layouts"].map((tab, ind) => (
              <Tab
                key={ind}
                className={({ selected }) =>
                  `font-medium text-lg outline-0 hover:text-primary transition-transition ${
                    selected ? "text-primary border-b-primary border-b-2" : ""
                  }`
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="transition-transition">
            {projectsData.map((projects, ind) => (
              <Tab.Panel
                key={ind}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 py-8"
              >
                {projects.map((project) => (
                  <Link
                    href={`/projects/${project.slug}`}
                    key={project._id}
                    className="flex flex-col justify-between border-primary border-2 rounded-md overflow-hidden hover:scale-105 transition-transition"
                  >
                    <div className="overflow-hidden flex-1">
                      <Image
                        src={project.image}
                        alt={project.name}
                        height={500}
                        width={700}
                      />
                    </div>
                    <h3 className="font-bold text-lg mt-4 text-center p-3">
                      {project.name}
                    </h3>
                  </Link>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  );
};

export default Projects;
