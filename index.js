// Menu
let ubicacionPrincipal = window.pageYOffset;
let nav = document.getElementsByTagName("nav");

  AOS.init();

const mov = window.addEventListener("scroll", function(){
    let desplazaminetoActual = window.pageYOffset;

    console.log(desplazaminetoActual);

    if(ubicacionPrincipal >= desplazaminetoActual){
        nav[0].style.top = "0px";

    }else{
        nav[0].style.top = "-200px"
    }

    ubicacionPrincipal =desplazaminetoActual;
})


const color = window.addEventListener("scroll", function(){
  let desplazaminetoActual = window.pageYOffset;
  let pix = 300;

  console.log(desplazaminetoActual);

  if(desplazaminetoActual >= pix){
      colors();
  }else{
    nav[0].style.background = 'transparent';
  }

  ubicacionPrincipal =desplazaminetoActual;

})

function colors(){
  let nav = document.getElementsByTagName("nav");
  nav[0].style.background = 'black';
  // const icon = document.getElementById('icon-search');
  // icon.style.color = 'blue';
  // const btn =  document.getElementsByid('talts');
  // btn.style.background = 'white';
}

// Swiper
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
  },

});