// Function that will loop through the given array, and replace the innerText with the given char
export function replaceChar(array, char) {
  array.forEach((item) => {
    item.innerText = char
  })
}
