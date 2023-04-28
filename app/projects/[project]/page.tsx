import { getProject } from "@/sanity/sanity-utils";
import { FC } from "react";

interface pageProps {
  params: { project: string };
}

const ProjectPage = async ({ params }: pageProps) => {
  const slug = params.project;
  const project = await getProject(slug);

  return <div>{project.name}</div>;
};

export default ProjectPage;
