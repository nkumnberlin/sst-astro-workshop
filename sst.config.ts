import { SSTConfig } from "sst";
import { API } from "./stacks/BangerStack";

export default {
  config(_input) {
    return {
      name: "astro-sst-workshop",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app.stack(API);
  }
} satisfies SSTConfig;
