const sleep = (ms = 1000) => new Promise((reslove) => setTimeout(reslove, ms));
const getAString = (size, str) => {
    return Array.from({ length: size }, () => str).join("");
};
export { sleep, getAString };
