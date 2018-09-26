module.exports = function getZerosCount(number) {
  let zerosCount = 0;
  for (let i = 5; number/i > 1; i *= 5) zerosCount += Math.floor(number/i);
  return zerosCount;
}
