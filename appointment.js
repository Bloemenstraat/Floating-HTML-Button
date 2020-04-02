function collapse () {
    const bouton = document.getElementsByClassName('appointment')[0];
    const carte = document.getElementsByClassName('card')[0];
    
    if (bouton.style.width == '1.5em') {
      bouton.style.width = '100%';
      bouton.style.height = '1.5em';
      bouton.style.borderRadius = '100px';
      bouton.style.padding = '15px 0 15px 0';
      bouton.childNodes[1].style.opacity = '1';
      bouton.childNodes[3].style.opacity = '0';
      carte.style.opacity = '0';      
      carte.style.pointerEvents = 'none';
    }
    else {
      try {
        clearInterval(boucle);
      }
      catch (err) {}

      bouton.style.width = '1.5em';
      bouton.style.height = '1.5em'; 
      bouton.style.borderRadius = '50%';
      bouton.style.padding = '15px';
      bouton.childNodes[1].style.opacity = '0';
      bouton.childNodes[3].style.opacity = '1';
      carte.style.opacity = '1';
      carte.style.pointerEvents = 'all';
    }
}

function anim() {
  const e = document.getElementsByClassName('appointment')[0];  
  e.classList.remove('ring');
  void e.offsetWidth;
  e.classList.add('ring');
}

boucle = setInterval(anim, 3000);
boucle();