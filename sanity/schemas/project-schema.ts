export const TYPES = [
  { title: "Web-app", value: "webapp" },
  { title: "Layout", value: "layout" },
];

const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: TYPES.map(({ title, value }) => ({
          title,
          value,
        })),
        layout: "radio",
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "url", title: "Url", type: "url" },
    { name: "git", title: "Git", type: "url" },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default project;
