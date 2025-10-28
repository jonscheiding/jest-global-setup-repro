import fs from "fs";
import chalk from "chalk";

async function globalSetup() {
  console.log(chalk.blue("\n🌎 🌍 🌏 globalSetup loaded"));
  fs.writeFileSync(".globalSetup", "");
}

export default globalSetup;