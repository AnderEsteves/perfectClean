function menuShow (){
  let menuMobile = document.querySelector('.mobile__navLinks');

  if(menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open');
  }else{
    menuMobile.classList.add('open');
  }


}