import { createClient, groq } from "next-sanity";

import { Project } from "@/types/project";

export const getProjects = async (): Promise<Project[]> => {
  const client = createClient({
    projectId: process.env.SANITY_ID,
    dataset: "production",
    apiVersion: "2023-04-24",
  });

  return client.fetch(groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset -> url,
    url, 
    git, 
    content
  }`);
};
