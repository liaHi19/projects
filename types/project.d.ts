import { PortableTextBlock } from "sanity";

export interface Project {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  git: string;
  content: PortableTextBlock[];
}
