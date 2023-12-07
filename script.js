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

//Serviços 
var swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});

// Send Email
const Inputname = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

var enviar = document.getElementsByClassName('form-contact')[0];

enviar.addEventListener('submit', (e) => {
  e.preventDefault();

  let conteudoEmail = `
  <b>Nome: </b> ${Inputname.value}&nbsp;
  <br>
  <b>Email: </b> ${email.value}
  <br>
  <b>Mensagem: </b> ${message.value}
  <br>
  `
  Email.send({
    SecureToken: "6b9f2de2-f93f-4b10-ae44-09f96f22417b",
    To: 'doggosbrasil@hotmail.com',
    From: "doggosbrasil@hotmail.com",
    Subject: "Nova Mensagem " + email.value,
    Body: conteudoEmail
  }).then(
    alert("Sua Mensagem foi encaminhada com Sucesso!!!"),
  );
  enviar.reset();
})

// Send Email

// Trocar tema
const checkBoxTheme = document.getElementById("checkbox")
const themeSystem = localStorage.getItem("themeSystem") || "light"

checkBoxTheme.addEventListener('click', () => {
  let oldTheme = localStorage.getItem("themeSystem") || "light"
  let newTheme = oldTheme == "light" ? "dark" : "light"

  localStorage.setItem("themeSystem", newTheme)
  defineCurrentTheme(newTheme)
})

function trocarTema() {
  let oldTheme = localStorage.getItem("themeSystem") || "light"
  let newTheme = oldTheme == "light" ? "dark" : "light"

  localStorage.setItem("themeSystem", newTheme)
  defineCurrentTheme(newTheme)
}


function defineCurrentTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme)
}

defineCurrentTheme(themeSystem)
// Trocar tema

