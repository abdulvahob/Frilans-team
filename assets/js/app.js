function windowScroll(){var t=document.getElementById("navbar");50<=document.body.scrollTop||50<=document.documentElement.scrollTop?t.classList.add("nav-sticky"):t.classList.remove("nav-sticky")}window.addEventListener("scroll",function(t){t.preventDefault(),windowScroll()});var tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),tooltipList
=tooltipTriggerList.map(function(t){return new bootstrap.Tooltip(t)});

setColor('green')

let banner__color = document.querySelector('.page-title-box')
console.log(banner__color);
banner__color.style.backgroundColor = "#4caf50  !important"
banner__color.style.color = "#4caf50  !important"