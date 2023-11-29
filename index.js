


function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    var button = document.querySelector("[aria-controls=mobile-menu]");
    if (menu.style.display === "none") {
      menu.style.display = "block";
      button.setAttribute("aria-expanded", "true");
    } else {
      menu.style.display = "none";
      button.setAttribute("aria-expanded", "false");
    }
  }
  
  var button = document.querySelector("[aria-controls=mobile-menu]");
  button.addEventListener("click", toggleMenu);