export default function intersectionObserver() {

  // Observing Elements
  const elems = document.querySelectorAll('.animate')
  // console.log(elems)

  const options = {
    root: null,
    // rootMargin: '-50% 0px', // Center of viewport
    threshold: 0
  }
  
  const observer = new IntersectionObserver((entries) =>
  {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        // Check
        // console.log(entry.target.dataset)

        // Action
        entry.target.classList.add('animated')
      
      }
    })
  
  }, options)

  // Start Observing
  elems.forEach(box => {
    observer.observe(box)
  })

}