let tl = gsap.timeline();

function navAnimation (){
  
tl.from(".nav-line", {
  opacity: 0,
  delay: 1
});

tl.from(".nav-h2-div", {
  y: -100,
  duration: 1,
  ease: "power3.inout",
});

gsap.fromTo(
  ".btn",
  { opacity: 0 } ,// Start state
  { opacity: 1, delay: 1.6}// End state with delay and duration
);

}
navAnimation()

function heroAnimation(){
  tl.from(
    '#say-hi, #about', {
      y: 80,
      opacity: 0,
      ease: 'Power3.in',
      duration: 1,
      stagger: 0.4
    }, "anim"
  )
  
  tl.from(
    "#personal-img", {
      y: 80,
      opacity: 0,
      ease: 'Power3.in',
      duration: 1
    }, "anim"
  )
}

heroAnimation()

function marqueAnimation(){
  window.addEventListener(
    'wheel', function(dets){
      if(dets.deltaY > 0){
        gsap.to(
          '#part-2', {
              transform: 'translateX(-50%)',
              duration: 12,
              repeat: -1,
              ease: 'power3'
          }
      )
      }
      else {
        gsap.to(
            '#part-2', {
                transform: 'translateX(0%)',
                duration: 7,
                repeat: -1,
                ease: 'power3'
            }
        )
      }
    }
  )
}
marqueAnimation()

function scrollDownAnimation(){
  gsap.from(
    '#scroll-down-span', {
      opacity: 0,
      scale: 0,
      delay:1,
      duration: 0.8
    }
  )
  
  gsap.to(
    '#scroll-down-span', {
      y: 20,
      repeat: -1,
      delay: 1.2,
      duration: 1, 
      yoyo: true
    }
  )
}
scrollDownAnimation()

function skillsAnimation(){
  gsap.from(
    '#skills-images img', {
      scrollTrigger: {
        trigger: '#skills-images img',
        scroller: 'body',
        start: 'top 90%'
      },
      opacity: 0,
      
      scale: 0,
      y: 40,
      stagger: 0.2,
      duration: 0.8,
      ease: 'back.out',
      
    }
  )
}

skillsAnimation()

gsap.from(
  "#projects #project", {
    scrollTrigger: {
      trigger: '#projects #project',
      scroller: 'body',
      start: 'top 80%'
    },
    
      y: 200,
    delay: 1,
    opacity: 0,
    scale: 0,
    duration: 1.6,
    ease: "back.out"
  }, {
    y: 0,
    opacity: 1,
    scale: 1
  }
)