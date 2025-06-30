// Hiển thị animation khi scroll đến

// Bottom to top
const observerUp = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showUp");
    }
  });
});
const hiddenUps = document.querySelectorAll(".hiddenUp");
hiddenUps.forEach((el) => {
  observerUp.observe(el);
});

// Top to bottom
const observerDown = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showDown");
    }
  });
});
const hiddenDowns = document.querySelectorAll(".hiddenDown");
hiddenDowns.forEach((el) => {
  observerDown.observe(el);
});

// Left to right
const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showLeft");
    }
  });
});
const hiddenLefts = document.querySelectorAll(".hiddenLeft");
hiddenLefts.forEach((el) => {
  observerLeft.observe(el);
});

// Right to left
const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showRight");
    }
  });
});
const hiddenRights = document.querySelectorAll(".hiddenRight");
hiddenRights.forEach((el) => {
  observerRight.observe(el);
});

// Fade
const observerFade = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showFade");
    }
  });
});
const hiddenFades = document.querySelectorAll(".hiddenFade");
hiddenFades.forEach((el) => {
  observerFade.observe(el);
});

// Menu mobile
var x = document.getElementById("Links");
function Menu() {
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// Chuyển đổi từ mobile sang desktop
function handleResize() {
  if (window.innerWidth > 780) {
    x.style.display = "";
  }
}
window.addEventListener("resize", handleResize);

const tabs = document.querySelectorAll(".Tabs");
const BoxTabs = document.querySelectorAll(".Box-Tab");

tabs.forEach( (tab, index) => {
  tab.addEventListener("click" , (e) => {
    tabs.forEach(tab => {tab.classList.remove("ActiveBtn", "showLeft")});
    tab.classList.add("ActiveBtn");

    BoxTabs.forEach(box => {box.classList.remove("Active-Box")});
    BoxTabs[index].classList.add("Active-Box", "showLeft");
  })
})

const openPopUp = document.querySelectorAll(".OpenPopUp");
const closePopUp = document.querySelectorAll(".ClosePopUp");
const popUp = document.getElementById("Pop-Up");

openPopUp.forEach(btn => {
  btn.addEventListener("click", () => {
    popUp.classList.add("Open");
  });
});
closePopUp.forEach(btn => {
  btn.addEventListener("click", () => {
    popUp.classList.remove("Open");
  });
});