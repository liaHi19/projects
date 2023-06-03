import { getProject } from "@/sanity/sanity-utils";

interface pageProps {
  params: { project: string };
}

const ProjectPage = async ({ params }: pageProps) => {
  const slug = params.project;
  const project = await getProject(slug);

  return <div>{project.name}</div>;
};

export default ProjectPage;
