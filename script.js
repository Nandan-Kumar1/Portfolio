"use strict";
// const aboutbtn = document.querySelector(".navbar-item navbar-item__1");
// const educationbtn = document.querySelector(".navbar-item navbar-item__2");
// const projectbtn = document.querySelector(".navbar-item navbar-item__3");
// const skillbtn = document.querySelector(".navbar-item navbar-item__4");

const navbtn = document.querySelectorAll(".navbar-item");

navbtn.forEach(function (ele) {
  ele.addEventListener("click", function () {
    const sectionClass = ele.innerHTML;
    const section = document.querySelector(`.${sectionClass}`);
    if (section) {
      const offset = section.offsetTop - 10;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  });
});
