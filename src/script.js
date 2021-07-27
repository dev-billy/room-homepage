import * as image1 from "./images/desktop-image-hero-1.jpg";
import * as image2 from "./images/desktop-image-hero-2.jpg";
import * as image3 from "./images/desktop-image-hero-3.jpg";

import * as closeIcon from "./images/icon-close.svg";
import * as hamIcon from "./images/icon-hamburger.svg";
const data = [
  {
    backgroundImg: image1,
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    backgroundImg: image2,
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    backgroundImg: image3,
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];
const totalLength = data.length;

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const title = document.getElementById("intro-title");
const text = document.getElementById("intro-text");
const img = document.getElementById("intro-img");
let current = 0;

title.innerHTML = data[current].title;
text.innerHTML = data[current].text;
img.style.backgroundImage = `url(${data[current].backgroundImg})`;
// title.innerHTML = data[0].title;

nextBtn.addEventListener("click", (e) => {
  if (current === totalLength - 1) {
    current = 0;
  } else {
    current += 1;
  }
  title.innerHTML = data[current].title;
  text.innerHTML = data[current].text;
  img.style.backgroundImage = `url(${data[current].backgroundImg})`;
});
prevBtn.addEventListener("click", (e) => {
  if (current === 0) {
    current = totalLength - 1;
  } else {
    current -= 1;
  }
  title.innerHTML = data[current].title;
  text.innerHTML = data[current].text;
  img.style.backgroundImage = `url(${data[current].backgroundImg})`;
});

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementsByTagName("nav")[0];
const navList = document.getElementsByClassName("nav-list")[0];
const nameLogo = document.getElementById("name-logo");

menuBtn.addEventListener("click", () => {
  if (nameLogo.style.display === "") {
    nav.style.backgroundColor = "#fff";
    menuBtn.firstElementChild.src = closeIcon;
    navList.style.display = "flex";
    nameLogo.style.display = "none";
    navList.style.listStyle = "none";
  } else {
    nav.style.background = "none";
    menuBtn.firstElementChild.src = hamIcon;
    navList.style.display = "none";
    nameLogo.style.display = "";
    navList.style.listStyle = "none";
  }
});
