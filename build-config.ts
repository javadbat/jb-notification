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
  {
    name: "jb-notification-wrapper",
    path: "./wrapper/lib/jb-notification-wrapper.ts",
    outputPath: "./wrapper/dist/jb-notification-wrapper.js",
    umdName: "JBNotificationWrapper",
    external: [],
    globals: {},
    dir:"./wrapper",
  },
];
export const reactComponentList: ReactComponentBuildConfig[] = [
];