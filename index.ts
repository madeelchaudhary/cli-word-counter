#! /usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";

import { sleep, getAString } from "./src/utils.js";
import { askName, getText, askToContinue } from "./src/prompts.js";

let userName: string;

async function welcome() {
  const beautifyStr = getAString(75, "*");
  const rainbowTitle = chalkAnimation.rainbow(
    `\n${beautifyStr}
                        Hello, ${userName.toUpperCase()}!
     Count the number of words, characters, sentences, and paragraphs\n${beautifyStr}\n`
  );

  rainbowTitle.start();
  await sleep();
  rainbowTitle.stop();
}

async function startCounting() {
  do {
    try {
      const userText = await getText();

      const characters = userText.length;
      const words = userText.trim().match(/\S+/g);
      const sentences = userText.trim().match(/(\.( |\s|$))|!|\?/g);
      const paragraphs = userText
        .trim()
        .match(/[^\r\n]+((\r|\n|\r\n)[^\r\n]+)*/g);

      console.log(
        chalk.bold.green(
          `Text Contains ${characters} characters, ${
            words ? words.length : 0
          } words, ${sentences ? sentences.length : 0} sentences, and ${
            paragraphs ? paragraphs.length : 0
          } paragraphs.\n`
        )
      );
    } catch (error) {
      console.log(`${chalk.bold.red(chalk.bgWhite(error))}\n`);
    }
  } while (await askToContinue());

  const karaokeTitle = chalkAnimation.karaoke("Thanks for exploring!");
  karaokeTitle.start();
  await sleep();
  karaokeTitle.stop();
  process.exit(0);
}

userName = await askName();
await welcome();
startCounting();
