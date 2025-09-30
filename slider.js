let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}

function changeBorder1() {
    var changeBorder1Label1 = document.querySelector('.product-first-screen-slider-label-1');
    changeBorder1Label1.style.border = '1px solid #03A366';

    var changeBorder1Label2 = document.querySelector('.product-first-screen-slider-label-2');
    changeBorder1Label2.style.border = '1px solid #E9EDE9';

    var changeBorder1Label3 = document.querySelector('.product-first-screen-slider-label-3');
    changeBorder1Label3.style.border = '1px solid #E9EDE9';

    var changeBorder1Label4 = document.querySelector('.product-first-screen-slider-label-4');
    changeBorder1Label4.style.border = '1px solid #E9EDE9';
}

function changeBorder2() {
    var changeBorder2Label1 = document.querySelector('.product-first-screen-slider-label-1');
    changeBorder2Label1.style.border = '1px solid #E9EDE9';

    var changeBorder2Label2 = document.querySelector('.product-first-screen-slider-label-2');
    changeBorder2Label2.style.border = '1px solid #03A366';

    var changeBorder2Label3 = document.querySelector('.product-first-screen-slider-label-3');
    changeBorder2Label3.style.border = '1px solid #E9EDE9';

    var changeBorder2Label4 = document.querySelector('.product-first-screen-slider-label-4');
    changeBorder2Label4.style.border = '1px solid #E9EDE9';

    var changeBorder3Label4 = document.querySelector('.product-first-screen-slider-label-5');
    changeBorder3Label4.style.border = '1px solid #E9EDE9';
}

function changeBorder3() {
    var changeBorder3Label1 = document.querySelector('.product-first-screen-slider-label-1');
    changeBorder3Label1.style.border = '1px solid #E9EDE9';

    var changeBorder3Label2 = document.querySelector('.product-first-screen-slider-label-2');
    changeBorder3Label2.style.border = '1px solid #E9EDE9';

    var changeBorder3Label3 = document.querySelector('.product-first-screen-slider-label-3');
    changeBorder3Label3.style.border = '1px solid #03A366';

    var changeBorder3Label4 = document.querySelector('.product-first-screen-slider-label-4');
    changeBorder3Label4.style.border = '1px solid #E9EDE9';
    
    var changeBorder3Label4 = document.querySelector('.product-first-screen-slider-label-5');
    changeBorder3Label4.style.border = '1px solid #E9EDE9';
}

function changeBorder4() {
    var changeBorder4Label1 = document.querySelector('.product-first-screen-slider-label-1');
    changeBorder4Label1.style.border = '1px solid #E9EDE9';

    var changeBorder4Label2 = document.querySelector('.product-first-screen-slider-label-2');
    changeBorder4Label2.style.border = '1px solid #E9EDE9';

    var changeBorder4Label3 = document.querySelector('.product-first-screen-slider-label-3');
    changeBorder4Label3.style.border = '1px solid #E9EDE9';

    var changeBorder4Label4 = document.querySelector('.product-first-screen-slider-label-4');
    changeBorder4Label4.style.border = '1px solid #03A366';
    
    var changeBorder3Label4 = document.querySelector('.product-first-screen-slider-label-5');
    changeBorder3Label4.style.border = '1px solid #E9EDE9';
}

function changeBorder5() {
    var changeBorder4Label1 = document.querySelector('.product-first-screen-slider-label-1');
    changeBorder4Label1.style.border = '1px solid #E9EDE9';

    var changeBorder4Label2 = document.querySelector('.product-first-screen-slider-label-2');
    changeBorder4Label2.style.border = '1px solid #E9EDE9';

    var changeBorder4Label3 = document.querySelector('.product-first-screen-slider-label-3');
    changeBorder4Label3.style.border = '1px solid #E9EDE9';

    var changeBorder4Label4 = document.querySelector('.product-first-screen-slider-label-4');
    changeBorder4Label4.style.border = '1px solid #E9EDE9';
    
    var changeBorder3Label4 = document.querySelector('.product-first-screen-slider-label-5');
    changeBorder3Label4.style.border = '1px solid #03A366';
}