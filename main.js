const btnMenu = document.getElementById('btnMenu')
const navBar = document.querySelector('header>nav')
btnMenu.addEventListener('click', openCloseMenu)

function openCloseMenu() {
  navBar.classList.toggle('showMenu')
  if(navBar.classList == 'showMenu'){
    btnMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }else{
    btnMenu.innerHTML = '<i class="fa-solid fa-bars"></i>'
  }
} 

const widthScreen = window.screen.width;
console.log(widthScreen)
if(widthScreen >= 768){
  document.querySelector('.m-bg_curve').src = "fylo-dark-theme-landing-page-master/images/bg-curvy-desktop.svg";
}