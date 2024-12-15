

gsap.from(".section1 .content span:nth-child(2)", {
  x: '100vh',
  opacity: 0,
  duration: 1.5,
},0);
gsap.from(".section1 .content span:nth-child(1)", {
    x: '-100vh',
    opacity: 0,
    duration: 1,
  },1);

  gsap.from(".section1 .content p", {
    rotate:'90deg',
    transformOrigin: 'left center',
    opacity: 0,
    duration: 1.5,
  },2);

  gsap.from(".section1 .content img", {
    y:'80vh',
    duration: .5,
  },2);
// Section 2 
gsap.registerPlugin(ScrollTrigger);
const timeScroll = gsap.timeline({
    scrollTrigger: {
      trigger: '.section2',
      start: 'top top',
      //markers: true,
      toggleActions: "play reverse play reverse",
    },
});  


timeScroll
.from(".section2 div span", {
  y: '-700vh',
  duration: .5,
  stagger:.5,
  
},)
.from(".section2 div p", {
    rotationY: 180,
    duration: 1,
    opacity:0,
    
  },);

//Section3
gsap.registerPlugin(ScrollTrigger);
const timeSkills = gsap.timeline({
    scrollTrigger: {
      trigger: '.section3',
      start: 'top center',
      //markers: true,
    },
}); 
timeSkills 
.from(".section3 span", {
    y: '100vh',
    duration: .5,
    stagger:.5
  },1)
  .from(".section3 h2", {
    x: '-100vh',
    scale:2.5,
    duration: .5,
    stagger:.5
  },0)
  
.to(".horizontal-sections", {
  xPercent: -34,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-sections",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%",
  },
});
//section 4
gsap.registerPlugin(ScrollTrigger);
const timeProject = gsap.timeline({
    scrollTrigger: {
    trigger: '.section4',
    start: "center left",
    toggleActions: "play reverse play reverse",
    },
});  

timeProject
.from(".section4 .portfolio-item",{
    x:'500vw',
    duration:1,
    stagger:0.5
});

// Section 5 
const contactHeading = document.querySelector(".section5 h2");
const letters = contactHeading.textContent.split("");
contactHeading.innerHTML = ""; 
letters.forEach((letter) => {
  const span = document.createElement("span");
  span.textContent = letter;
  contactHeading.appendChild(span);
});
gsap.registerPlugin(ScrollTrigger);
const timeContact = gsap.timeline({
    scrollTrigger: {
      trigger: '.section5',
      start: 'top top',
      pin: true,
      scrub: true,
    },
});  
timeContact.from(".section5 h2 span", {
  opacity: 0,
  y: -100,
  stagger: 0.1,
  duration: 1,
  
})
.from('.section5 p',{
    y:50,
    opacity:0,
    duration:1,
},0)
.from('.section5 .contact-btn',{
    scale:0,
    opacity:0,
    duration:1,
},0)
.to('.section5',{
    background:' rgb(0, 0, 0) no-repeat',
    duration:1,
},1)
.from ('.section5', {
    background:'url(./images/laptop.png)no-repeat',
    x:100,
    zIndex:3,
    duration,
    backgroundPosition: '90% 90%',
    backgroundSize: '300px',
},0);
