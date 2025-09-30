function addComment(){
    var changePopUp = document.querySelector(".order-pop-up")
    changePopUp.style.visibility = 'visible';

    var changeFrame = document.querySelector('.product-pop-up-rectangle-1');
    changeFrame.style.top = '588px';

    var changeStar = document.querySelector('.product-pop-up-rating-star-1');
    changeStar.style.visibility = 'hidden';

    var changeStar = document.querySelector('.product-pop-up-rating-star-2');
    changeStar.style.visibility = 'hidden';

    var changeStar = document.querySelector('.product-pop-up-rating-star-3');
    changeStar.style.visibility = 'hidden';

    var changeStar = document.querySelector('.product-pop-up-rating-star-4');
    changeStar.style.visibility = 'hidden';

    var changeStar = document.querySelector('.product-pop-up-rating-star-5');
    changeStar.style.visibility = 'hidden';

    var changeStar = document.querySelector('.product-pop-up-rating-star-grey-1');
    changeStar.style.visibility = 'visible';
    
    var changeStar = document.querySelector('.product-pop-up-rating-star-grey-2');
    changeStar.style.visibility = 'visible';

    var changeStar = document.querySelector('.product-pop-up-rating-star-grey-3');
    changeStar.style.visibility = 'visible';

    var changeStar = document.querySelector('.product-pop-up-rating-star-grey-4');
    changeStar.style.visibility = 'visible';
    
    var changeStar = document.querySelector('.product-pop-up-rating-star-grey-5');
    changeStar.style.visibility = 'visible';
}

function closeComment(){
    var changePopUp = document.querySelector(".order-pop-up")
    changePopUp.style.visibility = 'hidden';

    var changeFrame = document.querySelector('.product-pop-up-rectangle-1');
    changeFrame.style.top = '0px';

    var changeStar = document.querySelector('.product-pop-up-rating-star-1');
    changeStar.style.visibility = 'hidden';

    var changeStar = document.querySelector('.product-pop-up-rating-star-2');
    changeStar.style.visibility = 'hidden';

    var changeStar = document.querySelector('.product-pop-up-rating-star-3');
    changeStar.style.visibility = 'hidden';

    var changeStar = document.querySelector('.product-pop-up-rating-star-4');
    changeStar.style.visibility = 'hidden';

    var changeStar = document.querySelector('.product-pop-up-rating-star-5');
    changeStar.style.visibility = 'hidden';

    var changeStar = document.querySelector('.product-pop-up-rating-star-grey-1');
    changeStar.style.visibility = 'hidden';
    
    var changeStar = document.querySelector('.product-pop-up-rating-star-grey-2');
    changeStar.style.visibility = 'hidden';

    var changeStar = document.querySelector('.product-pop-up-rating-star-grey-3');
    changeStar.style.visibility = 'hidden';

    var changeStar = document.querySelector('.product-pop-up-rating-star-grey-4');
    changeStar.style.visibility = 'hidden';

    var changeStar = document.querySelector('.product-pop-up-rating-star-grey-5');
    changeStar.style.visibility = 'hidden';
}

function orderConfirmed(){
    var changePopUp = document.querySelector(".after-order-pop-up")
    changePopUp.style.visibility = 'visible';

    document.body.style.overflowY = 'hidden';

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    var changePopUp2 = document.querySelector(".after-order-pop-up-frame")
    changePopUp2.style.top = '300px';

    var orderId = document.getElementById('orderId');
    var randomNumber = Math.floor(Math.random() * 10000000);
    orderId.value = randomNumber;
}

function closeConfirmed(){
    var changePopUp = document.querySelector(".after-order-pop-up")
    changePopUp.style.visibility = 'hidden';

    document.body.style.overflowY = 'visible';

    var changePopUp2 = document.querySelector(".after-order-pop-up-frame")
    changePopUp2.style.top = '0px';
}