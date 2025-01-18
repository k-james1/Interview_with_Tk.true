const loading = document.querySelector("[data-opening-animation]");

window.addEventListener("load", () => {
  gsap.to(
    loading,{
      clipPath:"inset( 0 0 100%  0)",
      duration:2,
      ease:"power3.inOut",
    }
  );
});

gsap.fromTo(".logo",{y:50,autoAlpha:0,},
  {
    y:0,
    autoAlpha:1,
    scrollTrigger:{
      trigger:".logo",
      start:"top bottom",
    },
  }
);

gsap.fromTo(".bun-container",{y:-50,autoAlpha:0,},
  {
    y:0,
    autoAlpha:1,
    scrollTrigger:{
      trigger:".bun-container",
      start:"top center",
    },
  }
);

const tl = gsap.timeline({
  scrollTrigger:{
    trigger:".intro-animation",
    start:"center center",
    toggleActions: 'play none none reverse',
    pin:true,
    ease: 'power4.inOut',
  },
});
tl.to(".intro-illust",{
  x:-220,
})
.from(".intro-copy",{
  autoAlpha:0,
},'<')


const tables = document.querySelectorAll('.table');
tables.forEach((table) => {
gsap.fromTo(table, {x:-100, autoAlpha:0,},
  {
    x:0,
    autoAlpha:1,
    scrollTrigger:{
      trigger:table,
      start:"top 60%",
      ease:"none",
    }
  });
});

const chapters = document.querySelectorAll('.chapter');

chapters.forEach((chapter) => { 
  gsap.fromTo(chapter, {autoAlpha: 0, y: 50}, {
    duration: .5,
    autoAlpha: 1,
    y: 0,
    ease: 'power4.inOut',
    scrollTrigger: {
      trigger: chapter,
      start: 'top 70%',
      toggleActions: 'play none none none',
      once: true,
    }
  });
});

const Boxes = document.querySelectorAll('.Box');

Boxes.forEach((Box) => { 
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

gsap.from(".first-copy",{
  autoAlpha:0,
  duration:2,
});

const tl2 =gsap.timeline({ 
  scrollTrigger:{
    trigger:".ending-animation",
    start:"top top",
    toggleActions: 'play none none none',
    pin:true,
  },
});
tl2.from(".ending-animation img",{autoAlpha:0,});
tl2.to(".ending-animation img",{autoAlpha:0,},"+=3.5");
tl2.to(".ending-copy",{opacity:1,},"+=.5");

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