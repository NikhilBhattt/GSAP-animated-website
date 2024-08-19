function section1Animation() {
  let t1 = gsap.timeline()
  
  t1.from('nav h1', {
    opacity: 0,
    y: -50,
    duration: .45,
    delay: .8,
    stagger: .25
  })
  t1.from('.section1 .left h1', {
    x: -100,
    opacity: 0,
    duration: .45
  })
  t1.from('.section1 .left p', {
    x: -100,
    opacity: 0,
    duration: .6
  }, "together")
  t1.from('.section1 .right img', {
    x: 100,
    opacity: 0,
    duration: .6
  }, "together")
  t1.from('.section1 .left button', {
    opacity: 0,
    duration: .5,
    scrub: 2
  })
  t1.from('.section1 .bottom img', {
    y: 40,
    opacity: 0,
    duration: .3,
    stagger: .15
  })
}

function section2Animation() {
  let t2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section2',
      scroller: 'body',
      start: 'top -100%',
      end: 'top -200%',
      scrub: 2,
      markers: true
    }
  })
  
  t2.from('.services', {
    x: -100,
    opacity: 0,
    duration: .2,
  })
  t2.from('.cards .left', {
    x: '-50%',
    opacity: 0,
    duration: .3,
    stagger: .5
  }, "together")
  t2.from('.cards .right', {
    x: '50%',
    opacity: 0,
    duration: .3,
    stagger: .5
  }, "together")
}

function animationLoad() {
  gsap.to('.animation h1', {
    x: '-150%',
    scrollTrigger: {
      trigger: '.animation',
      scroller: 'body',
      start: 'top 0',
      end: 'top -150%',
      scrub: 2,
      pin: true
    }
  })
}

section1Animation()
section2Animation()
animationLoad()