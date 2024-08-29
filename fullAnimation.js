var tl = gsap.timeline({
  defaults: { duration: 0.7, ease: Back.easeOut.config(2), opacity: 0 },
});

var tl2 = gsap.timeline({ defaults: { duration: 1.5, delay: 1 } });

var tl3 = gsap.timeline({defaults:{duration: 1.5}})

tl.from(".card-bg", { delay: 1, scale: 0.2, transformOrigin: "center" }, "=.2")
  .from(".card-top", { scaleY: 0, transformOrigin: "top" })
  .from(".icon", { scale: 0.2, transformOrigin: "center" }, "=.7")
  .from(".blip1", { scale: 0 })
  .from(".blip2", { scale: 0 }, "=.2")
  .from(".blip3", { scale: 0 }, "=.3")
  .from(".blip4", { scale: 0 }, "=.5")
  .from(".blip5", { scale: 0 }, "=.7");

// -1 means repeat infinite
tl2.to(".whole-card", { y: 10, repeat: -1, yoyo: true });

// stagger animation: 
// multiple elements are animated in sequence with slight delays between them
tl3.from(".main-content", { opacity: 0, y: 40, stagger: .3})
