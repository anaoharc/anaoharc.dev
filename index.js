function hoverAnimated(el) {
    const width = el.offsetWidth;
    const position = el.offsetLeft;
    insertAnimations(width, position);
  }
  
  function outside() {
  
    if (document.querySelector('.active')) {
      const active = document.querySelector('.active');
      const width = active.offsetWidth;
      const position = active.offsetLeft;
      insertAnimations(width, position);
      return;
    }
  
    const animations = document.querySelector('.animations');
    animations.style.left = '0px';
    animations.style.width = '0px';
  }
  
  function activeClass(el) {
    const width = el.offsetWidth;
    const position = el.offsetLeft;
  
    const removeActive = document.querySelectorAll('nav a');
  
    removeActive.forEach(element => {
      element.classList.remove('active');
    });
  
    el.classList.add('active');
  
    insertAnimations(width, position);
  
  }
  
  function insertAnimations(width, position) {
    const animations = document.querySelector('.animations');
    animations.style.left = position + 'px';
    animations.style.width = width + 'px';
  }