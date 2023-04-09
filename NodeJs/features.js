// const gfName = "MrRandom";
// module.exports = gfName;
const generateNumber = () => {
  return `${Math.floor(Math.random() * 100)}%`;
};
module.exports = generateNumber;
