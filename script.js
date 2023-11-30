$('.carousel').carousel()

function showSideBar() {
  let statusbar = document.getElementsByClassName("side-bar");
  console.log(statusbar)
  if (statusbar[0].className.valueOf("show-sidebar")) {
    statusbar[0].className = statusbar[0].className.replace("", "show-sidebar ")
    console.log("On")
  } else {
    statusbar[0].className = statusbar[0].className.replace("show-sidebar", "")
    console.log("Off")
  }
}