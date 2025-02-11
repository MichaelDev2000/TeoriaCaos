document.addEventListener("DOMContentLoaded", (event) => {
  // Animación suave al hacer scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Animación de aparición para las cards
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear")
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  document.querySelectorAll(".autor-card, .aporte-card, .aplicacion-card, .relevancia-card").forEach((card) => {
    observer.observe(card)
  })

  // Efecto parallax para la sección hero
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallax = document.querySelector(".hero")
    parallax.style.backgroundPositionY = -(scrolled * 0.5) + "px"
  })

  // Contador de estadísticas
  const counters = document.querySelectorAll(".counter")
  const speed = 200

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target")
      const count = +counter.innerText
      const inc = target / speed

      if (count < target) {
        counter.innerText = Math.ceil(count + inc)
        setTimeout(updateCount, 1)
      } else {
        counter.innerText = target
      }
    }

    updateCount()
  })
})
