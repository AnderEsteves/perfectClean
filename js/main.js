function menuShow (){
  let menuMobile = document.querySelector('.mobile__navLinks');
  let header = document.querySelector('header');

  if(menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open');
    header.classList.remove('open');
    document.querySelector('.icon').src='assets/hamburger-menu.svg';
  }else{
    menuMobile.classList.add('open');
    header.classList.add('open');
    document.querySelector('.icon').src='assets/close-button.svg';
  }
}



