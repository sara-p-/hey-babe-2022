import fullpage from 'fullpage.js'
import { gsap } from 'gsap'

import {
  gsapSetOffscreenBottom,
  gsapAnimateFromBottom,
  // gsapWiggle,
  // gsapNewWiggle,
} from './animations'

export default function fullpageInit() {
  var fullPageInstance = new fullpage('#fullpage', {
    licenseKey: 'E6829413-73CE4988-9A78596A-95B5324A',
    sectionSelector: '.fullpage-section',
    fitToSectionDelay: 2000,
    onLeave: function (origin, destination, direction) {
      // Variables
      let leavingSection = this
      const plantArray = document.querySelectorAll(
        '#plants .image--plant.animate--from-bottom'
      )

      //Leaving/Entering 1 (Section 2 animations)
      if (origin.index == 0 && direction == 'down') {
        // gsapSetOffscreenBottom(plantArray) // Set leaves offscreen
        // gsapAnimateFromBottom(plantArray) // Animate the leaves up from the bottom: ;
      } else if (origin.index == 1 && direction == 'up') {
        console.log('going to section 1')
      }
    },
  })
}
