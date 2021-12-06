const slides = document.querySelectorAll('.slide')

for (const slider of slides) {
  slider.addEventListener('click', () => {
    clearActiveClasses()

      slider.classList.add('active')
  })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
     slide.classList.remove('active')
    })
}