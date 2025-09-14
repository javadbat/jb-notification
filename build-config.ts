import type { ReactComponentBuildConfig, WebComponentBuildConfig } from "../../tasks/build/builder/src/types.ts";

export const webComponentList: WebComponentBuildConfig[] = [
  {
    name: "jb-notification",
    path: "./lib/jb-notification.ts",
    outputPath: "./dist/jb-notification.js",
    umdName: "JBNotification",
    external: ["jb-core","jb-core/theme"],
    globals: {},
  },
  {
    name: "jb-notification-wrapper",
    path: "./wrapper/lib/jb-notification-wrapper.ts",
    outputPath: "./wrapper/dist/jb-notification-wrapper.js",
    umdName: "JBNotificationWrapper",
    external: ["jb-core", "jb-notification"],
    globals: {},
    dir:"./wrapper",
  },
    {
    name: "jb-notification-manager",
    path: "./manager/lib/jb-notification-manager.ts",
    outputPath: "./manager/dist/jb-notification-manager.js",
    umdName: "JBNotificationManager",
    external: ["jb-core", "jb-notification"],
    globals: {"jb-notification":"JBNotification"},
    dir:"./manager",

  },
];
export const reactComponentList: ReactComponentBuildConfig[] = [
];