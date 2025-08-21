import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    instagram?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "https://nurahsanadzim.com/", // your site url
  title: "Nur Ahsan Adzim",
  slogan: "のる",
  description: "Cloud Engineer",
  social: {
    github: "https://github.com/nurahsanadzim", // leave empty if you don't want to show the github
    linkedin: "https://www.linkedin.com/in/nurahsanadzim", // leave empty if you don't want to show the linkedin
    email: "", // leave empty if you don't want to show the email
    instagram: "https://www.instagram.com/nurahsanadzim", // leave empty if you don't want to show the email
    rss: false, // set this to false if you don't want to provide an rss feed
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "", // your google analysis id
  search: true, // set this to false if you don't want to provide a search feature
};
