import inquirer from "inquirer";

async function askName() {
  const answers = await inquirer.prompt({
    name: "user_name",
    type: "input",
    message: "What is your name?",
    default() {
      return "Stranger";
    },
  });
  return answers.user_name;
}

async function getText(): Promise<string> {
  const answers = await inquirer.prompt({
    name: "text",
    type: "editor",
    message: "Enter your text:",
  });

  if (!answers.text) {
    throw "You must enter valid text!";
  }
  return answers.text;
}

async function askToContinue() {
  const answers = await inquirer.prompt({
    name: "userChoice",
    type: "confirm",
    message: "Will you give it another try!",
  });
  return answers.userChoice;
}

export { askName, getText, askToContinue };
