import chalk from "chalk";
import { Config } from "jest";

console.log(chalk.blue("🫚  🫚  🫚  root config file loaded"));

const jestConfig: Config = {
  projects: ["<rootDir>/packages/package1", "<rootDir>/packages/package2"],
  globalSetup: "<rootDir>/jest.globalSetup.ts",
};

export default jestConfig;
