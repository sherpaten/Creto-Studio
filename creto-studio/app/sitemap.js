const baseUrl = "https://cretostudio.com";

export default function sitemap() {
  const routes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/packages",
    "/portfolio",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" || route === "/projects" || route === "/packages" ? 0.9 : 0.8,
  }));
}
