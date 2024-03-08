export const formatLargeNumber = (number: number): string => {
  const suffixes: string[] = ["", "k", "million", "billion", "trillion"];
  const suffixNum: number = Math.floor(("" + number).length / 3);
  let shortNumber: number = parseFloat((suffixNum !== 0 ? (number / Math.pow(1000, suffixNum)) : number).toPrecision(2));
  if (shortNumber % 1 !== 0) {
    shortNumber = parseFloat(shortNumber.toFixed(1));
  }
  return shortNumber + suffixes[suffixNum];
};
