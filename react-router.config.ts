
import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",

  basename: process.env.GITHUB_ACTIONS
    ? "/sidequests.blog/"
    : "/",

  ssr: false,

  // add routes here
  prerender: [
    "/",
  ],
} satisfies Config;
