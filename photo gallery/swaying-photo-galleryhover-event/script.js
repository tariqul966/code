/*!
Swaying photo gallery - hover event
Created on AUGUST 29, 2023
Copyright (c) 2023 by Wakana Y.K. (https://codepen.io/wakana-k/pen/oNJxbPw)
*/
/*
Related works : 
Portforio design @wakana-k - https://codepen.io/wakana-k/pen/BaxKKvE
Swaying photo gallery - scroll event @wakana-k - https://codepen.io/wakana-k/pen/WNLrWMm
*/
"use strict";
(function () {
  window.onload = () => {
    function split(str) {
      let array = str.split(",");
      array[0] = parseFloat(array[0]);
      array[1] = parseFloat(array[1]);
      return array;
    }
    function animStart(evt) {
      let elem = evt.target;
      if (elem.classList && elem.classList.contains("active") == false) {
        elem.classList.add("active");
        let durations = split(
          window.getComputedStyle(elem).getPropertyValue("animation-duration")
        );
        let delays = split(
          window.getComputedStyle(elem).getPropertyValue("animation-delay")
        );

        let time = (delays[1] + durations[1]) * 1000;
        setTimeout(() => {
          animEnd(elem);
        }, time);
      }
    }
    function animEnd(elem) {
      elem.classList.remove("active");
      elem.offsetWidth;
    }
    function init() {
      const items = document.querySelectorAll("#gallery figure");
      items.forEach((item, index) => {
        //
        item.addEventListener("pointerenter", animStart);
        item.addEventListener("pointerdown", animStart);
        item.addEventListener("pointermove", animStart);
        //
        let img = item.dataset.img;
        if (img) {
          var backgroundImage = window
            .getComputedStyle(item)
            .getPropertyValue("background-image");
          item.style.backgroundImage =
            "url( " + img + " )" + "," + backgroundImage;
        } else {
          item.style.backgroundBlendMode = "none";
          let e = new Event("pointerenter");
          item.dispatchEvent(e);
        }
      });
    }
    init();
  };
})();