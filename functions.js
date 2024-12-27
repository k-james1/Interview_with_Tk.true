const chapters = document.querySelectorAll('.chapter');

chapters.forEach((chapter) => { //それぞれのチャプターについての
  gsap.fromTo(chapter, {autoAlpha: 0, y: 50}, {
    duration: .3,
    autoAlpha: 1,
    y: 0,
    ease: 'power4.inOut',
    scrollTrigger: {
      trigger: chapter,
      start: 'top 80%',
      toggleActions: 'play none none none',
      once: true,
    }
  });
});

const Boxes = document.querySelectorAll('.Box');

Boxes.forEach((Box) => { //それぞれのチャプターについての
  gsap.fromTo(Box, {autoAlpha: 0, y: 50}, {
    duration: .5,
    autoAlpha: 1,
    y: 0,
    ease: 'power4.inOut',
    scrollTrigger: {
      trigger: Box,
      start: 'top 80%',
      toggleActions: 'play none none none',
      once: true,
    }
  });
});


gsap.from("body",{
    scrollTrigger:{
      trigger:"body",
      start:"center center",
      end:"bottom bottom",
      scrub: true,
    },
    duration:0.1,
    backgroundColor:"#3a7ca5",
    ease:"none",
  });