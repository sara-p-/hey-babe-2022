export function createLetterGroup(letter) {
  if (letter === ' ') {
    letter = 'space'
  }
  if (letter === '.') {
    letter = 'period'
  }
  const letterGroup = document.createElement('span')
  letterGroup.classList.add('letter', 'letter--' + letter)

  // Create the individual letters wihtin each group
  for (let index = 1; index < 4; index++) {
    let span = document.createElement('span')
    span.classList.add(
      'letter__item',
      // 'letter__item--' + letter,
      'letter__item--' + index
    )
    span.innerText = letter
    letterGroup.append(span)
  }

  return letterGroup
}

export function letterSplitting(words) {
  const text = words.innerText.toLowerCase()
  words.innerText = ''
  const wordsArray = text.split('')
  console.log(wordsArray)

  wordsArray.forEach((letter, index) => {
    let letterSpan = createLetterGroup(letter)
    console.log(letterSpan)
    words.append(letterSpan)
  })
}
