const sleep = (ms: number = 1000) =>
  new Promise((reslove) => setTimeout(reslove, ms));

const getAString = (size: number, str: string) => {
  return Array.from({ length: size }, () => str).join("");
};

export { sleep, getAString };
