import lume from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import jsx from "lume/plugins/jsx.ts";
import metas from "lume/plugins/metas.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  location: new URL("https://curious.toys"),
  src: "./src",
  server: {
    page404: "/404.html",
  },
});

site
  .ignore("README.md")
  .copy("static", ".")
  .add("theme.css")
  .use(favicon({ input: "/static/img/logo-icon.svg" }))
  .use(jsx())
  .use(metas())
  .use(tailwindcss())
  .use(postcss());

site.filter("currentYear", (): string => {
  return new Date().getFullYear().toString();
});

export default site;
