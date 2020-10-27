/////////// Menu Btn ///////////

var menuBtn = document.getElementById('menu-btn');
var menu = document.getElementById('menu');

menuBtn.addEventListener("click", menuControl);

function menuControl() {
    menu.classList.toggle('open');
}

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
    });
}