$('.carousel').carousel()

//SideBar

var checkSideBar;

function showSideBar() {
  statusbar = document.getElementsByClassName("side-bar");
  if (statusbar[0].className.includes("show-sidebar")) {
    statusbar[0].className = statusbar[0].className.replace("show-sidebar", "")
    checkSideBar = false
  } else {
    statusbar[0].className = statusbar[0].className.replace("", "show-sidebar ")
    checkSideBar = true
  }
}

window.addEventListener('resize', function () {
  var largura = window.innerWidth;

  if (largura > 768 && checkSideBar) {
    showSideBar()
  }
});

//SideBar