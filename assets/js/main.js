

(function () {
  console.log('>>> app.ready');

  var slideIndex = 0;
  var slides = document.getElementsByClassName("slider__item");

  function showSlides(n) {
    var i;

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    if (n > slides.length) {slideIndex = 0;}
    if (slideIndex > slides.length-1) {slideIndex = 0;}

    // console.log(slideIndex, n, slides.length);

    if( slideIndex < slides.length ){
      slides[slideIndex].style.display = "block";
    }

  }

  showSlides(slides.length);

  setInterval(() => {    
    showSlides(slideIndex++);
  }, 5000);

})()