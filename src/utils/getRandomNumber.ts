export function getRandomNumber(min: number, max?: number) {
  return max
    ? Math.floor(Math.random() * (max - min) + min)
    : Math.floor(Math.random() * min);
}

export function getRandomNumberFromRanges(ranges: number[]) {
  const randomIndex = getRandomNumber(ranges.length);
  const randomRange = ranges[randomIndex];

  return ranges[randomIndex - 1]
    ? getRandomNumber(ranges[randomIndex - 1], randomRange)
    : getRandomNumber(randomRange);
}
