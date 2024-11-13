
const palavras = [
    "O Exorcista",
    "Halloween",
    "A Hora do Pesadelo",
    "O Massacre da Serra Elétrica",
    "Atividade Paranormal",
    "It - A Coisa",
    "O Silêncio dos Inocentes",
    "Hereditário",
    "Corra",
    "Os Outros"
  ];
  
  function showRandomWord() {

    const randomIndex = Math.floor(Math.random() * palavras.length);

    alert(palavras[randomIndex]);
  }


  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
      const slides = document.querySelectorAll('.carousel-images img');
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; // Esconde todas as imagens
      }
      slideIndex++;
      if (slideIndex > slides.length) {
          slideIndex = 1; // Reinicia o índice se ultrapassar o número de slides
      }
      slides[slideIndex - 1].style.display = "block"; // Mostra a imagem atual
      setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
  }
  
  function moveSlide(n) {
      slideIndex += n; // Adiciona ou subtrai ao índice
      const slides = document.querySelectorAll('.carousel-images img');
      if (slideIndex > slides.length) {
          slideIndex = 1; // Reinicia se ultrapassar
      } 
      if (slideIndex < 1) {
          slideIndex = slides.length; // Vai para o último slide
      }
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; // Esconde todas as imagens
      }
      slides[slideIndex - 1].style.display = "block"; // Mostra a imagem atual
  }
