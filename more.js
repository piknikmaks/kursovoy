function changeStyle() {
    var footer = document.querySelector('.category-footer');
    footer.style.top = '3810px';

    var moreButton = document.querySelector('.category-first-screen-more-button');
    moreButton.style.visibility = 'hidden';

    var item19 = document.querySelector('.category-first-screen-item-19');
    item19.style.visibility = 'visible';
    item19.style.top = '3043px';

    var item20 = document.querySelector('.category-first-screen-item-20');
    item20.style.visibility = 'visible';
    item20.style.top = '3043px';

    var item21 = document.querySelector('.category-first-screen-item-21');
    item21.style.visibility = 'visible';
    item21.style.top = '3043px';
}

function changeMoreStyle() {
    var moreSpace = document.querySelector('.category-first-screen-filter-brand');
    moreSpace.style.height = '577px';

    var moreBrands = document.querySelector('.category-first-screen-filter-more-frame-1');
    moreBrands.style.visibility = 'visible';
    moreBrands.style.height = '25px';
    
    var moreBrands = document.querySelector('.category-first-screen-filter-more-frame-2');
    moreBrands.style.visibility = 'visible';
    moreBrands.style.height = '25px';
    
    var moreBrands = document.querySelector('.category-first-screen-filter-more-frame-3');
    moreBrands.style.visibility = 'visible';
    moreBrands.style.height = '25px';

    var noButton = document.querySelector('.category-first-screen-filter-brand-more');
    noButton.style.visibility = 'hidden';
    noButton.style.order = '5';
    noButton.style.height = '0px';

    var bigRectangle = document.querySelector('.category-first-screen-filter-rectangle');
    bigRectangle.style.height = '1993px';
}

function moreNews() {
    var changeDisplay1 = document.getElementById("extraNews1");
    var changeDisplay2 = document.getElementById("extraNews2");
    var changeDisplay3 = document.getElementById("extraNews3");
    var changeDisplay4 = document.getElementById("extraNews4");
    changeDisplay1.style.visibility = 'visible';
    changeDisplay1.style.height = '480px';
    changeDisplay2.style.visibility = 'visible';
    changeDisplay2.style.height = '480px';
    changeDisplay3.style.visibility = 'visible';
    changeDisplay3.style.height = '480px';
    changeDisplay4.style.visibility = 'visible';
    changeDisplay4.style.height = '480px';

    var changeFooter = document.querySelector('.blog-footer');
    changeFooter.style.top = '3386px';

    var changeButton = document.querySelector('.blog-first-screen-button');
    changeButton.style.display = 'none';
}

function createDiv() {
    var news = document.getElementById("newsDiv");

    var div1 = document.createElement("div");
    div1.className = "blog-first-screen-news-item-size-1";
    div1.style.backgroundImage = "url(img/Battery.png)";
    var innerDiv1 = document.createElement("div");
    innerDiv1.className = "blog-first-screen-news-item-size-1-titles";
    var titleDiv1 = document.createElement("div");
    titleDiv1.className = "blog-first-screen-news-item-title";
    titleDiv1.innerHTML = "Акумуляторні батареї тягові: переваги та недоліки";
    innerDiv1.appendChild(titleDiv1);
    div1.appendChild(innerDiv1);

    var div2 = document.createElement("div");
    div2.className = "blog-first-screen-news-item-size-1";
    div2.style.backgroundImage = "url(img/DBJ.png)";
    var innerDiv2 = document.createElement("div");
    innerDiv2.className = "blog-first-screen-news-item-size-1-titles";
    var titleDiv2 = document.createElement("div");
    titleDiv2.className = "blog-first-screen-news-item-title";
    titleDiv2.innerHTML = "ДБЖ із зовнішнім або внутрішнім акумулятором: що практичніше?";
    innerDiv2.appendChild(titleDiv2);
    div2.appendChild(innerDiv2);

    var div3 = document.createElement("div");
    div3.className = "blog-first-screen-news-item-size-1";
    div3.style.backgroundImage = "url(img/Battery.png)";
    var innerDiv3= document.createElement("div");
    innerDiv3.className = "blog-first-screen-news-item-size-1-titles";
    var titleDiv3 = document.createElement("div");
    titleDiv3.className = "blog-first-screen-news-item-title";
    titleDiv3.innerHTML = "Акумуляторні батареї тягові: переваги та недоліки";
    innerDiv3.appendChild(titleDiv3);
    div3.appendChild(innerDiv3);

    var div4 = document.createElement("div");
    div4.className = "blog-first-screen-news-item-size-1";
    div4.style.backgroundImage = "url(img/DBJ.png)";
    var innerDiv4 = document.createElement("div");
    innerDiv4.className = "blog-first-screen-news-item-size-1-titles";
    var titleDiv4 = document.createElement("div");
    titleDiv4.className = "blog-first-screen-news-item-title";
    titleDiv4.innerHTML = "ДБЖ із зовнішнім або внутрішнім акумулятором: що практичніше?";
    innerDiv4.appendChild(titleDiv4);
    div4.appendChild(innerDiv4);

    news.appendChild(div1);
    news.appendChild(div2);
    news.appendChild(div3);
    news.appendChild(div4);

    var changeFooter = document.querySelector('.blog-footer');

    var currentFooter = window.getComputedStyle(changeFooter).top;

    topFooter = parseInt(currentFooter, 10);
    topFooter += 504;
    changeFooter.style.top = topFooter + 'px';

    var changeButton = document.querySelector('.blog-first-screen-button');

    var currentButton = window.getComputedStyle(changeButton).top;
    topButton = parseInt(currentButton, 10);

    topButton += 504;
    changeButton.style.top = topButton + 'px';
}