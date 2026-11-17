"use strict";
const dialog = document.querySelector(".image-dialog");
const imageWrap = dialog.querySelector(".dialog-image-wrap");
const caption = document.getElementById("dialog-caption");
let previousFocus;
document.querySelectorAll("[data-image]").forEach(button => {
  button.addEventListener("click", () => {
    const [x,y,width,height] = button.dataset.crop.split(",").map(Number);
    const frame = document.createElement("div");
    frame.className = "crop";
    frame.style.aspectRatio = width + " / " + height;
    const img = document.createElement("img");
    img.src = button.dataset.image;
    img.alt = button.dataset.caption;
    img.width = 1920;
    img.height = 1080;
    img.style.width = (1920 / width * 100) + "%";
    img.style.left = (-x / width * 100) + "%";
    img.style.top = (-y / height * 100) + "%";
    frame.append(img);
    imageWrap.replaceChildren(frame);
    imageWrap.style.width = "min(" + Math.min(width,1050) + "px, 86vw)";
    caption.textContent = button.dataset.caption;
    previousFocus = button;
    dialog.showModal();
    document.body.classList.add("modal-open");
    dialog.querySelector(".dialog-close").focus();
  });
});
dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  const box = dialog.getBoundingClientRect();
  if(event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  previousFocus?.focus();
});
const gifToggle = document.querySelector(".gif-toggle");
const gifStill = document.getElementById("gif-still");
const gifAnimation = document.getElementById("gif-animation");
gifToggle.addEventListener("click", () => {
  const playing = gifToggle.getAttribute("aria-pressed") !== "true";
  gifToggle.setAttribute("aria-pressed", String(playing));
  gifAnimation.hidden = !playing;
  gifStill.hidden = playing;
  gifToggle.textContent = playing ? "원본 정지 Ⅱ" : "원본 재생 ▷";
});
const navLinks = [...document.querySelectorAll("nav a")];
if("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    for(const entry of entries) if(entry.isIntersecting) {
      navLinks.forEach(link => {
        if(link.hash === "#" + entry.target.id) link.setAttribute("aria-current","location");
        else link.removeAttribute("aria-current");
      });
    }
  }, {rootMargin:"-15% 0px -65% 0px"});
  document.querySelectorAll(".work-section").forEach(section => observer.observe(section));
}

