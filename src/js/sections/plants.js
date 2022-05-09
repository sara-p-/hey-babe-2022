import { letterSplitting } from '../modules/html-componants'
import { replaceChar, elementArea } from '../modules/helpers'

export default function plants() {
  // ********************* Hey Babe Letters *********************//
  // Creating the individual spans for all the letters
  const heyBabe = document.querySelector('h1.hey-babe')
  letterSplitting(heyBabe)
  // Replacing the " " and the "." (This is absolutely not the best way to do this. It's gross and you should probably change it)
  const spaces = document.querySelectorAll('span.letter--space > span')
  const periods = document.querySelectorAll('span.letter--period > span')
  replaceChar(spaces, ' ')
  replaceChar(periods, '.')

  // ********************* Hovering on the individual leaves *********************//
  // const allPlants = document.querySelectorAll('.image--plant')

  // allPlants.forEach((item, index)=> {
  //   item.addEventListener('mouseover', (e) => {

  //   })
  // })

  // ********************* Clicking on the individual leaves *********************//
  // const allPlants = document.querySelectorAll('.image--plant')
  // const allPlantCoords = []

  // allPlants.forEach((item, index) => {
  //   // Get the coordinates of all items and push them into an array
  //   allPlantCoords[index] = [item, elementArea(item)]

  //   item.addEventListener('click', (e) => {
  //     const area = elementArea(item) // get the location info for the clicked item
  //   })

  //   // Loop through the array and add class to affected plants
  // })
  // console.log(allPlantCoords)
}
