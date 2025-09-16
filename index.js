
const lenis = new Lenis({
  duration: 2.0, // higher duration = smoother scroll
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  lerp: 0.05,
  direction: 'vertical'
});


function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


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



