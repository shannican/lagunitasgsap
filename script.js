function show(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#pages"),
smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#pages", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#pages").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
show();

var tl = gsap.timeline();

tl.from("#page1>h1",{
  delay:0.2,
  opacity:0,
  duration:0.8,
})
.from("#bottle",{
  opacity:0,
  duraion:0.6,
},"-=0.4")
.from("#page1dog",{
  scale:3.5,
  opacity:0,
  duration:0.6,
})

function bottlepin(){
  gsap.to("#bottle",{
    scrollTrigger:{
        trigger:"#bottle",
        scroller:"#pages",
        // markers:true,
        pin:true,
        start:"top 7%",
        end:"top -368%",
        scrub:2
    },
    rotate:-15,
})
}
bottlepin();
// show();
gsap.to("#bottle",{
  scrollTrigger:{
    trigger:"#bottle",
    scroller:"#pages",
    // markers:true,
    start:"top 5%",
    scrub:2,
    end:"top 5%"
  },
  scale:"0.47",
})

gsap.to("#page3-part2 #png1",{
  scrollTrigger:{
    trigger:"#page3-part2 #png1",
    scroller:"#pages",
    start:"top 80%",
  },
  scale:1,
  duration:1,
})
gsap.to("#page3-part2 #png2",{
  scrollTrigger:{
    trigger:"#page3-part2 #png2",
    scroller:"#pages",
    start:"top 80%",
  },
  scale:1,
  duration:1,
})
gsap.to("#page3-part2 #png3",{
  scrollTrigger:{
    trigger:"#page3-part2 #png3",
    scroller:"#pages",
    start:"top 80%",
  },
  scale:1,
  duration:1,
})
gsap.to("#page3-part2 #img",{
  scrollTrigger:{
    trigger:"#page3-part2 #img",
    scroller:"#pages",
    start:"top 80%",
  },
  scale:1,
  duration:1,
})
// gsap.to("#btl1",{
//   scrollTrigger:{
//     scroller:"#pages",
//     trigger:"#btl1",
//     start:"top 25%",
//     scrub:true,
//   },
//   y:"-200%",
//   duraion:0.5,
//   rotate:-11,
// })
var tl2 = gsap.timeline();
tl2.to("#btl1",{
  scrollTrigger:{
    scroller:"#pages",
    trigger:"#btl1",
    start:"top 25%",
    scrub:true,
  },
  y:"-200%",
  duraion:0.5,
  rotate:-11,
  onStart:function onStart(){
    gsap.to("#text1",{
      scrollTrigger:{
        scroller:"#pages",
        trigger:"#text1",
        start:"top 85%",
        end:"top 30%",
        scrub:0.1,
      },
      // y:"-20%",
      opacity:0,
      
    })
  }
})
tl2.to("#btl2",{
  scrollTrigger:{
    scroller:"#pages",
    trigger:"#btl2",
    start:"top 25%",
    scrub:true,
  },
  delay:0.2,
  y:"-200%",
  duraion:0.5,
  rotate:-11,
  onStart:function onStart(){
    gsap.to("#text2",{
      scrollTrigger:{
        scroller:"#pages",
        trigger:"#text2",
        start:"top 85%",
        end:"top 30%",
        scrub:0.1,
      },
      // y:"-20%",
      opacity:0,
      
    })
  }
})
tl2.to("#btl3",{
  scrollTrigger:{
    scroller:"#pages",
    trigger:"#btl3",
    start:"top 25%",
    scrub:true,
  },
  delay:1.5,
  y:"-200%",
  duraion:0.5,
  rotate:-11,
  onStart:function onStart(){
    gsap.to("#text3",{
      scrollTrigger:{
        scroller:"#pages",
        trigger:"#text3",
        start:"top 85%",
        end:"top 30%",
        scrub:0.1,
      },
      // y:"-20%",
      opacity:0,
      
    })
  }
})
tl2.to("#btl4",{
  scrollTrigger:{
    scroller:"#pages",
    trigger:"#btl4",
    start:"top 25%",
    scrub:true,
  },
  delay:3,
  y:"-200%",
  duraion:0.5,
  rotate:-11,
  onStart:function onStart(){
    gsap.to("#text4",{
      scrollTrigger:{
        scroller:"#pages",
        trigger:"#text4",
        start:"top 85%",
        end:"top 30%",
        scrub:0.1,
      },
      // y:"-20%",
      opacity:0,
      
    })
  }
})

