  const target = document.querySelectorAll('[data-anime], [data-anime1] ');
  const animationClass = 'animate';
  const cor = document.querySelectorAll('.link');
  
  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) {
    window.addEventListener('scroll', function() {
      animeScroll();
    });
  }
