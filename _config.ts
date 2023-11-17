import lume from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

import tailWindOptions from "./tailwind.config.js";

const site = lume({
  location: new URL("https://curious.toys"),
  src: "./src",
  server: {
    page404: "/404/",
  },
});

site
  .ignore("README.md")
  .copy("static", ".")
  .use(
    favicon({
      input: "/favicon.webp",
    })
  )
  .use(
    tailwindcss({
      extensions: [".mdx", ".jsx", ".tsx", ".md", ".html", ".njx"],
      options: tailWindOptions,
    })
  );

site.use(postcss());

site.filter("currentYear", (): string => {
  return new Date().getFullYear().toString();
});

site.copy("static", ".");

export default site;
