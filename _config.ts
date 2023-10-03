import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  location: new URL("https://curious.toys"),
  server: {
    page404: "/404/",
  },
});

site.use(tailwindcss());
site.use(postcss());

site.filter("currentYear", (): string => {
  return new Date().getFullYear().toString();
});

site.copy("static", ".");

export default site;
