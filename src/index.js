const messages = [
  "Oscar",
  "Ana",
  "Nicolay",
  "Yesica",
  "Diego",
  "Jesus",
  "Gonzalo",
  "Adrian",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
