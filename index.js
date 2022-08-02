const res = [
  "have you checked the docs and actually read it ? or do I need to teach you how to read? quackkk",
  "are you 200% sure there is no typooo?",
  "did you try to google it or try stackoverflow? it's not that hard ",
  "did you try to restart your computer? or maybe restart your brain ?  drink some water and try again",
  "did you try to restart your IDE?",
  "elaborate elaborate elaborate! I'm not a mind reader quackkk",
  "have you thought about changing career? never too late to learn something else",
  "maybe you don't have imposter syndrome, maybe you're just a bad developer",
  "maybe you should try to learn something else, like cooking or gardening",
  "try copy paste answers from stackoverflow, it's not cheating, it's called plagiarism",
];
const randomIndex = Math.floor(Math.random() * res.length);

const meanDock = {
  help: () => "try greet() or ask()",
  greet: () => "🦆 quack quack 🦆 I'm busy, leave me alone 🦆",
  ask: (question) => {
    if (!question)
      return "quackkkk greatttt! now you're asking me questions without telling me the question 🦆";
    if (question.length < 15) {
      return "🦆 quack quack 🦆 what did you say ? I was busy eating ";
    } else if (question.length > 80) {
      return "🦆 quack quack 🦆 question too long for me to understand, TL;DR";
    } else {
      return `🦆 quackkkkk ${res[randomIndex]}🦆`;
    }
  },
};

module.exports = meanDock;
