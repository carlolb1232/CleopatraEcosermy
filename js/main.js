var nav = document.querySelector('.nav');
var logo = document.querySelector('.nav__container--logo');
var nosotros = document.querySelector('.nosotros_item');
var operaciones = document.querySelector('.operaciones_item');
var contacto = document.querySelector('.contacto_item');
var programa = document.querySelector('.programa_item');
var mostrarMenu = document.querySelector('.nav__container__menu');
var barras = document.querySelector('.fa-bars')

window.addEventListener("scroll", ()=>{
    if (window.pageYOffset>199){
        nav.classList.add("nav__active");
        logo.classList.add("nav__container--logo__active");
        nosotros.classList.add("nav__container__menu__item__active");
        operaciones.classList.add("nav__container__menu__item__active");
        contacto.classList.add("nav__container__menu__item__active");
        programa.classList.add("nav__container__menu__item__active");
    }else{
        nav.classList.remove("nav__active");
        logo.classList.remove("nav__container--logo__active");
        nosotros.classList.remove("nav__container__menu__item__active");
        operaciones.classList.remove("nav__container__menu__item__active");
        contacto.classList.remove("nav__container__menu__item__active");
        programa.classList.remove("nav__container__menu__item__active");
    }
})

barras.addEventListener("click",()=>{
    // console.log("clkiiicj")
    mostrarMenu.classList.toggle("mostrarMenu")
})

nosotros.addEventListener("click",()=>{
    // console.log("clkiiicj")
    mostrarMenu.classList.toggle("mostrarMenu")
})
operaciones.addEventListener("click",()=>{
    // console.log("clkiiicj")
    mostrarMenu.classList.toggle("mostrarMenu")
})
contacto.addEventListener("click",()=>{
    // console.log("clkiiicj")
    mostrarMenu.classList.toggle("mostrarMenu")
})
programa.addEventListener("click",()=>{
    // console.log("clkiiicj")
    mostrarMenu.classList.toggle("mostrarMenu")
})



