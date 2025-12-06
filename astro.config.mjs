// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";


import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://nafiulislam.site",
  integrations: [
    icon(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
    sentry({
      project: "javascript-astro",
      org: "nafiulislamtony",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    })],
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
      minify: 'esbuild',
    }
  },
  
  // Optimize build
  build: {
    inlineStylesheets: "auto",
  },
  
  // Compress HTML
  compressHTML: true,
});