const franc = require("franc");
const langs = require("langs");
const userInput = process.argv[2];
const langCode = franc(userInput);
if (langCode === "und") {
  console.log("Cannot figured out try more text");
} else {
  const language = langs.where("3", langCode);
  console.log(`My best guess is: ${language.name}`);
}
