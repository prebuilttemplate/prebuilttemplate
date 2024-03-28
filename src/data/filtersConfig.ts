import { FilterConfig } from '@/types/filterTypes';

const USECASE_FILTERS = {
  id: "usecase",
  name: "Use Case",
  options: [
    { value: "AI", label: "AI" },
    { value: "Starter", label: "Starter" },
    { value: "ecommerce", label: "Ecommerce" },
    { value: "Portfolio", label: "Portfolio" },
    { value: "blog", label: "Blog" },
  ] as const,
};

const FRAMEWORK_FILTERS = {
  id: "framework",
  name: "Framework",
  options: [
    { value: "Next.js", label: "Next.js", icon: "nextjsIcon" },
    { value: "Astro", label: "Astro", icon: "astroIcon" },
    { value: "react", label: "React", icon: "reactIcon" },
  ] as const,
};

// Additional Filters
const CSS_FILTERS = {
    id: "css",
    name: "CSS",
    options: [
      { value: "CSS", label: "CSS" },
      { value: "Tailwind", label: "Tailwind" },
    ] as const,
};

const CMS_FILTERS = {
    id: "cms",
    name: "CMS",
    options: [
      { value: "Sanity", label: "Sanity" },
    ] as const,
};

const DATABASE_FILTERS = {
    id: "database",
    name: "Database",
    options: [
      { value: "Vercel Postgres", label: "Vercel Postgres" },
      { value: "Firebase", label: "Firebase" },
    ] as const,
};

const AUTHENTICATION_FILTERS = {
    id: "auth",
    name: "Authentication",
    options: [
      { value: "Clerk", label: "Clerk" },
    { value: "Auth0", label: "Auth0" },

    ] as const,
};

export const FILTER_CONFIGS: ReadonlyArray<FilterConfig>  = [
    USECASE_FILTERS,
    FRAMEWORK_FILTERS,
    CSS_FILTERS,
    CMS_FILTERS,
    DATABASE_FILTERS,
    AUTHENTICATION_FILTERS,
  ];