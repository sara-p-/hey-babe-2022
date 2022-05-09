import { gsap } from 'gsap'
import { calculateOffset } from './helpers'

// ******************** SECTION 2 - PLANTS **********************//
// Set the item below the bottom of the screen (used right before the plant animation)
export function gsapSetOffscreenBottom(array) {
  array.forEach((element, index) => {
    let offset = element.offsetTop
    gsap.set(element, {
      y: calculateOffset(element),
    })
  })
}

// Wiggle those leaves!
export function gsapWiggle(item) {
  const wiggle = gsap
    .timeline({
      repeat: -1,
      // repeatDelay: 0.3,
      yoyo: true,
    })
    .fromTo(
      item,
      {
        rotation: -2,
      },
      {
        rotation: 2,
        duration: 1,
      }
    )

  return wiggle
}

// Animate each leaf so it moves up the screen
export function gsapAnimateFromBottom(array) {
  const animateUp = []
  array.forEach((element, index) => {
    animateUp[index] = gsap
      .timeline({
        // paused: true,
        delay: Math.random(),
      })
      .to(element, {
        y: 0,
        duration: Math.random() * (5 - 3) + 3,
        ease: 'back',
      })

    animateUp[index].add(gsapWiggle(element))
  })
}
