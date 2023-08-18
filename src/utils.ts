export const getRandomWord = (words: string[]) =>
  words[Math.floor(Math.random() * words.length)];
