// ******************** SECTION 2 - PLANTS **********************//

// Function that will loop through the given array, and replace the innerText with the given char (used for Hey Babe)
export function replaceChar(array, char) {
  array.forEach((item) => {
    item.innerText = char
  })
}

// Function that returns the pixel value needed to place any plant off the screen
export function calculateOffset(item) {
  const screenHeight = window.innerHeight
  let offset = item.offsetTop
  if (offset < 0) {
    offset = offset * -1
  }
  return screenHeight + offset
}

// Function that returns the pixel area of a leaf when clicked
export function elementArea(item) {
  const area = item.getBoundingClientRect()
  return area
}

// Function that returns the other leaves that are within the pixel area
export function otherElementArea(array, item) {
  let closePlants = []
  array.forEach((element, index) => {})
}

// Function that spits out an array of plants that need to be moved away from the clicked plant
export function closePlants(array) {}
