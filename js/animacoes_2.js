document.addEventListener('DOMContentLoaded', () => {
  new TypeIt("#textoAnimado", {
    speed: 100,
    loop: true,
  })
    .type("um site incrível?", { delay: 2000 })
    .delete(17)
    .type("uma aplicação web para seu negócio?", { delay: 2000 })
    .delete(35)
    .type("posts para seu instagram?", { delay: 2000 })
    .delete(25)
    .type("uma identidade visual de sucesso?", { delay: 2000 })
    .go();
    })

