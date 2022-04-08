import { letterSplitting } from './html-componants'
import { replaceChar } from './helpers'

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
}
