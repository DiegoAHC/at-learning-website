const btnHamburguer = document.querySelector('#btnHamburguer');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

btnHamburguer.addEventListener('click', function(){
  console.log('open hamburguer');

  // Cerrar Menu Hamburguesa
  if(header.classList.contains('open')){
    body.classList.remove('noscroll');
    header.classList.remove('open');

    // Menu Mobile
    fadeElements.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    
    // Overlay Mobile
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  }

  //Abrir Menu Hamburguesa
  else{
    body.classList.add('noscroll');
    header.classList.add('open');

    // Menu Mobile
    fadeElements.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
    
    // Overlay Mobile
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
  }
});