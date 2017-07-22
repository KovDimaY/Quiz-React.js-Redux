// Transforms string to the array of objects with characters
export function stringToArray(string) {
  let result = []
  for (let i = 0; i < string.length; i++) {
    result.push({
      id: i,
      value: string[i]
    });
  }
  return result;
}
