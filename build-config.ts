import type { ReactComponentBuildConfig, WebComponentBuildConfig } from "../../tasks/build/builder/src/types.ts";

export const webComponentList: WebComponentBuildConfig[] = [
  {
    name: "jb-notification",
    path: "./lib/jb-notification.ts",
    outputPath: "./dist/jb-notification.js",
    umdName: "JBNotification",
    external: [],
    globals: {},
  },
];
export const reactComponentList: ReactComponentBuildConfig[] = [
];