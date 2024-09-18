let menuList = document.getElementById("menuList");
let toggle = document.getElementById("toggle");
menuList.style.maxHeight = "0px";
function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}
toggle.addEventListener("click", toggleMenu);

function changetoggle() {
  if (menuList.style.maxHeight === "300px") {
    toggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    toggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
}
toggle.addEventListener("click", changetoggle);
