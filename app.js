const nav = document.querySelector("nav");
const menuIcon = document.querySelector("#menu-btn");
const heroSlide = document.querySelector(".content");
const image = document.querySelector(".image");
const projects = document.querySelector(".projects");
const pojectPhotos = document.querySelectorAll(".img");
let slider = document.querySelector(".slider");
let innerSlider = document.querySelector(".inner_slider");
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = 0.05;

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-times");
  nav.classList.toggle("mobile");
  heroSlide.classList.toggle("toggle_slide");
};

window.addEventListener("scroll", () => {
  image.style.backgroundSize = 10 + +window.pageYOffset / 15 + "%";
  image.style.opacity = 10 + +window.pageYOffset / 9 + "%";
  // image.style.backgroundSize = '10rem';
});

// Project section

pojectPhotos.forEach((img, index) => {
  img.style.backgroundImage = `url(./images/photos/${index + 1}.jpg)`;
});

// function lerp(start, end, fraction) {
//   return start * (1 - fraction) + end * fraction;
// }

// function inverseLerp(a, b, v) {
//   return clamp((v - a) / (b - a));
// }

// function clamp(v, min = 0, max = 1) {
//   return Math.min(max, Math.max(min, v));
// }

// function interpolate(input, output, easing = (v) => v) {
//   const rangeLength = input.length;
//   const finalIndex = rangeLength - 1;

//   return (v) => {
//     let i = 1;

//     // Find index of range start
//     for (; i < rangeLength; i += 1) {
//       if (input[i] > v || i === finalIndex) break;
//     }

//     const range = inverseLerp(input[i - 1], input[i], v);
//     let result = lerp(output[i - 1], output[i], easing(range));

//     return result;
//   };
// }

// projects.style.height = `${slider.scrollWidth}px`;

// const rect = slider.getBoundingClientRect();

// const _lerp = interpolate(
//   [rect.top + rect.height / 2, rect.top + rect.height],
//   [0, slider.scrollWidth]
// );

// document.addEventListener("scroll", () => {
//   innerSlider.scrollTo({ left: _lerp(window.scrollY) });
// });

const lerp = (start, end, t) => {
  return start * (1 - t) + end * t;
};

const setTransform = (el, transform) => {
  el.style.transform = transform;
};

const init = () => {
  // projects.style.height = `${slider.scrollWidth}px`;
  projects.style.height = "2700px";
  sliderWidth = slider.getBoundingClientRect().width;
  imageWidth = sliderWidth / pojectPhotos.length;
  // projects.style.height = `${
  //   sliderWidth - (window.innerWidth - window.innerHeight)
  // }px`;

  // console.log(`${sliderWidth - (window.innerWidth - window.innerHeight)}px`);
  // console.log(`${slider.scrollWidth}pxh`);
};

sliderTop = slider.getBoundingClientRect().top;
console.log(`${sliderTop}px`);

const animate = () => {
  const rect = projects.getBoundingClientRect().top;
  window.addEventListener("scroll", () => {
    if (rect < 0) {
      target = window.scrollY - sliderTop - 50;
    }
  });

  current = parseFloat(lerp(current, target, ease)).toFixed(2);
  // target = window.scrollY;
  // console.log(rect);
  setTransform(innerSlider, `translateX(-${current}px)`);
  requestAnimationFrame(animate);
};

window.addEventListener("resize", init);
init();
animate();
