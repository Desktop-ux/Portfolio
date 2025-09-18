
const lenis = new Lenis({
  smooth: true,
  lerp: 0.05,
});

// Pause Lenis at start
// lenis.stop();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// When loader is done, GSAP onComplete calls: lenis.start()

// Tell ScrollTrigger to use Lenis' scroll values
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// Make ScrollTrigger use GSAP’s ticker (better sync)
ScrollTrigger.defaults({
  scroller: document.body
});


const serves = document.querySelectorAll(".services .serve");
const serveHover = document.querySelector(".services .serve_hover");

// height of one .serve block (since each is 25%)
const step = 25;

serves.forEach((serve, index) => {
  serve.addEventListener("mouseenter", () => {
    // Move the highlight bar
    serveHover.style.top = `${index * step}%`;


    // Change the number color on hover
    serves.forEach(s => s.querySelector(".serve_title p").style.color = "#8953F8");
    serve.querySelector(".serve_title p").style.color = "white";
  });
});


let catHOver = document.querySelector(".cat_hover")
let cats = document.querySelectorAll(".categories p")



cats.forEach((cat, index) => {
  cat.addEventListener("click", () => {
    catHOver.style.left = `${index * step}%`




  })
})


document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".categories p");
  const allProjects = document.querySelector(".projects_All");
  const uiProjects = document.querySelector(".projects_ui");
  const animeProjects = document.querySelector(".projects_anime")
  const miniProjects = document.querySelector(".projects_mini")
  // Default: show All
  allProjects.style.display = "flex";
  uiProjects.style.display = "none";
  animeProjects.style.display = "none";
  miniProjects.style.display = "none";

  categories.forEach(cat => {
    cat.addEventListener("click", () => {
      let selected = cat.textContent.trim();

      if (selected === "All") {
        allProjects.style.display = "flex";
        uiProjects.style.display = "none";
        animeProjects.style.display = "none";
        miniProjects.style.display = "none";
      } else if (selected === "UI") {
        allProjects.style.display = "none";
        animeProjects.style.display = "none";
        uiProjects.style.display = "flex";
        miniProjects.style.display = "none";
      } else if (selected === "Anime") {
        allProjects.style.display = "none";
        animeProjects.style.display = "flex";
        uiProjects.style.display = "none";
        miniProjects.style.display = "none";
      } else if (selected === "Mini") {
        allProjects.style.display = "none";
        animeProjects.style.display = "none";
        uiProjects.style.display = "none";
        miniProjects.style.display = "flex";
      }
      else {
        // For "Anime", "Mini" (not implemented yet)
        allProjects.style.display = "none";
        uiProjects.style.display = "none";
        animeProjects.style.display = "none";
        miniProjects.style.display = "none";
      }

      // Active highlight
      categories.forEach(c => c.classList.remove("active"));
      cat.classList.add("active");
    });
  });
});


let skill_container = document.querySelectorAll(".skill");

skill_container.forEach((skill) => {
  skill.addEventListener("mouseenter", () => {
    let skill_img = skill.querySelector(".icon img"); // only inside this skill
    skill_img.style.filter = "grayscale(0)";

    skill_img.style.transition = "filter 0.3s ease"; // smooth animation
  });

  skill.addEventListener("mouseleave", () => {
    let skill_img = skill.querySelector(".icon img");
    skill_img.style.filter = "grayscale(100%)";
  });
});




let emojis = document.querySelector(".emoji");

let emojisArray = ["🤗", "😊", "😎", "🔥", "🚀", "🌟", "🥳", "🎉", "✨", "🙌"];

let index = 0;

function changeEmoji() {
  gsap.to(emojis, {
    opacity: 0,
    scale: 0.5,
    duration: 0.2,
    onComplete: () => {
      index = (index + 1) % emojisArray.length;
      emojis.textContent = emojisArray[index];
      gsap.to(emojis, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "back.out(2)"
      });
    }
  });
}

setInterval(changeEmoji, 1000); // Change emoji every 2 seconds


window.addEventListener("load", () => {
  // Force page to start at the top
  window.scrollTo(0, 0);



  let tl = gsap.timeline({
    onComplete: () => {
      // Enable scrolling AFTER animation finishes
      document.body.style.overflow = "auto";

      // If you’re using Lenis, restart it after enabling scroll
    
    }
  });

  // Loader animation
  tl.to(".loading", {
    y: "-100vh",
    duration: 1.5,
    delay: 2,
    ease: "power4.inOut"
  });

  // Reveal main content
  tl.to("main", {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out"
  }, "-=0.5");
});



let v2 = gsap.timeline()

v2.from(".view-2  h1", {
  scrollTrigger: {
    trigger: ".view-2  h1",
    start: "top 80%", 
    end: "bottom 60%",
    scrub: true,
    // markers: true
  },
  y: 50,
  opacity: 0,
  duration: 1


}, 1)

v2.from(".view-2  p", {
  scrollTrigger: {
    trigger: ".view-2  p",
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
    // markers: true
  },
  y: 50,
  opacity: 0,
  duration: 1
}, 1) 

v2.from(".view-2 .services", {
  scrollTrigger: {
    trigger: ".view-2 .services",
    start: "top 80%",     
    end: "bottom 60%",
    scrub: true,
    // markers: true
  },
  y: 150,
  opacity: 0,
  duration: 1.5 ,
  stagger:0.2
}, 1)

let v3 = gsap.timeline({delay: v2.duration()})

v3.from(".view-3 h1", {
  scrollTrigger: {
    trigger: ".view-3 h1",
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
    // markers: true
  },
  y: 50,
  opacity: 0,
  duration: 1   
}, 2)

v3.from(".view-3 .categories", {
  scrollTrigger: {
    trigger: ".view-3 .categories", 
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
    // markers: true
  },
  y: 50,
  opacity: 0,
  duration: 1   
}, 2)

v3.from(".view-3 p", {
  scrollTrigger: {
    trigger: ".view-3 p",     
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
    // markers: true
  },
  y: 50,
  opacity: 0,
  duration: 1   
}, 2)

v3.from(".view-3 .projects", {
  scrollTrigger: {
    trigger: ".view-3 .projects",   
    start: "top 100%",
    end: "bottom 60%",
    scrub: true,  
    // markers: true
    ease: "power2.out"
  },
  y: 60,
  opacity: 0,
  duration: 1,
  // stagger:0.2
}, 2)

v3.from(".view-3 .pro", {
  scrollTrigger: {
    trigger: ".view-3 .pro",   
    start: "top 100%",   
    end: "bottom 40%",
    scrub: true,  
    // markers: true,
    ease: "bounce.out"
  },
  y: 60,
  opacity: 0,
  duration: 1.5 ,
  stagger:0.1

},2)

let v4 = gsap.timeline({delay: v3.duration()})
v4.from(".view-4 h1", {
  scrollTrigger: {
    trigger: ".view-4 h1",    
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,  
    // markers: true
  },
  y: 50,
  opacity: 0,
  duration: 1   
}, 3)

v4.from(".view-4 .ed", {
  scrollTrigger: {
    trigger: ".view-4 .education",    
    start: "top 60%",
    end: "bottom 80%",
    scrub: true,  
    // markers: true
    ease: "power2.out"
  },
  x: -80,
  opacity: 0,
  duration: 1 ,
  stagger:0.1
}, 4)

v4.from(".view-4 .ed h1", {
  scrollTrigger: {
    trigger: ".view-4 .ed ",    
    start: "top 60%",
    end: "bottom 80%",
    scrub: true,
    // markers: true
  },
  x: -50,
  opacity: 0,
  duration: 1   
}, 4)




let v5 = gsap.timeline({delay: v4.duration()})
v5.from(".view-5 h1", {
  scrollTrigger: {
    trigger: ".view-5 h1",
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
    // markers: true
  },
  y: 50,
  opacity: 0,
  duration: 1   
}, 4)

v5.from(".view-5 p", {
  scrollTrigger: {
    trigger: ".view-5 p",
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
    // markers: true
  },
  y: 50,
  opacity: 0,
  duration: 1   
}, 4)



v5.from(".view-5 .skills", {
  scrollTrigger: {
    trigger: ".view-5 .skills",
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
    // markers: true
    ease: "power2.out"
  },
  y: 60,
  opacity: 0,
  duration: 1.5 ,
  stagger:0.2
},4)


let v6 = gsap.timeline({delay: v5.duration()})
v6.from(".view-6 .details", {
  scrollTrigger: {
    trigger: ".view-6 .details",
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
    // markers: true  
    ease: "power2.out"
  },
  y: 60,  
  x:-50,
  opacity: 0,
  duration: 1.5 ,
  stagger:0.2
}, 5)

v6.from(".view-6 .form", {
  scrollTrigger: {
    trigger: ".view-6 ",
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
    // markers: true
    ease: "power2.out"
  },
  y: 60,
  x:80,
  opacity: 0,
  duration: 1.5 ,
  stagger:0.2
}, 5 )

v6.from(".view-6 .form h1" , {
  scrollTrigger: {
    trigger: ".view-6 .form h1",
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
    // markers: true
  },
  y: 50,
  opacity: 0,
  duration: 1   
}, 5)
v6.from(".view-6 .form p" , {
  scrollTrigger: {
    trigger: ".view-6 .form h1",
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
    // markers: true
  },
  y: 50,
  opacity: 0,
  duration: 1   
}, 5)


v6.from(".view-6 .form select" , {
  scrollTrigger: {
    trigger: ".view-6 .form h1",
    start: "top 60%",
    end: "bottom 80%",
    scrub: true,
    // markers: true
  },
  y: 50,
  opacity: 0,
 
}, 5)
v6.from(".view-6 .form textarea" , {
  scrollTrigger: {
    trigger: ".view-6 .form h1",
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
    // markers: true
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger:0.2   
}, 5)
v6.from(".view-6 .form .submit" , {
  scrollTrigger: {
    trigger: ".view-6 .form h1",
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
    // markers: true
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger:0.2   
}, 5)



document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      lenis.scrollTo(target);
    }
  });
});

  // For desktop button
  document.querySelector(".cv_desk").addEventListener("click", function () {
    window.open("resume.pdf", "_blank"); // replace with your PDF path
  });

  // For mobile button
  document.querySelector(".cv").addEventListener("click", function () {
    window.open("resume.pdf", "_blank"); // replace with your PDF path
  });



  
