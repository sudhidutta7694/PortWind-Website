var full = document.getElementById("full")
var footer = document.getElementById("footer")
document.addEventListener("DOMContentLoaded", function () {
    var loader = document.getElementById("loader");
    setTimeout(function () {
      loader.style.display = "none";
      full.classList.remove("hidden")
      footer.classList.remove("hidden")
    }, 3000);
  });
  