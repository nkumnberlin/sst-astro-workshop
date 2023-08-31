import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import image from "@astrojs/image";
import aws from "astro-sst/lambda";

export default defineConfig({
  integrations: [react(), image()],
  output: 'server',
  adapter: aws(),
  experimental: {
    viewTransitions: true
  }
});
