let tl = gsap.timeline();
tl.to('.box1', {
  //   x: 300,
  rotation: 360,
  delay: 1,
  duration: 1,
  opacity: 0.6,
})
  .to('.box2', {
    x: 300,
    // rotation: 360,
    // delay: 1,
    duration: 1,
    // opacity: 0.6,
    ease: 'elastic.inOut',
  })
  .to('.box3', {
    x: -150,
    scale: 2,
    // delay: 1,
    duration: 1,
    ease: 'power1.out',
    // opacity: 0.6,
  });
// tl.reverse(0);