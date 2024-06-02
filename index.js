
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".two",
      start: "0% 95%",
      end: "50% 50%",  
      scrub: true,         
       markers: true       
    }
  });

  tl.to("#fanta", {
    top:"120%",
    left: "0%", 
})

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "50% 50%",  
    scrub: true,         
     markers: true       
  }
});

tl2.to("#fanta", {
  top:"240%",
  left: "70%", 
})