import { createClient, groq } from "next-sanity";

import { Project } from "@/types/project";
import clientConfig from "./config/client-config";

export const getProjects = async (): Promise<Project[]> => {
  return createClient(clientConfig).fetch(groq`*[_type == "project"]{
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

export const getProject = async (slug: string): Promise<Project> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset -> url,
    url, 
    git, 
    content
  }`,
    { slug }
  );
};
