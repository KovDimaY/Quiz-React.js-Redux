// Transforms string to the array of objects with characters
export function stringToArray(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    result.push({
      id: i,
      value: string[i]
    });
  }
  return result;
}

// Shuffles given array randomly
export function shuffleArray(array) {
  for (let i = 0; i < 2 * array.length; i++) {
    const index1 = Math.floor(Math.random() * array.length);
    const index2 = Math.floor(Math.random() * array.length);
    if (index1 !== index2) {
      const temp = array[index1];
      array[index1] = array[index2];
      array[index2] = temp;
    }
  }
  return array;
}

// Transforms an array of objects back to the string
export function arrayToString(array) {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    result += array[i].value
  }
  return result;
}
