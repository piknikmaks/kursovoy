function updatePrice() {
    var productAmountInput = document.getElementById("productAmount");
    var priceOutputInput = document.getElementById("priceOutput");
    var productAmount = parseInt(productAmountInput.value);
    var price = productAmount * 31491;
    priceOutputInput.value = price;
}
  
function increment() {
    var productAmountInput = document.getElementById("productAmount");
    var value = parseInt(productAmountInput.value);
    productAmountInput.value = value + 1;
    updatePrice();
}
  
function decrement() {
    var productAmountInput = document.getElementById("productAmount");
    var value = parseInt(productAmountInput.value);
    if (value > 0) {
      productAmountInput.value = value - 1;
      updatePrice();
    }
}

function cartAmount() {
    var changeAmount = document.querySelector(".header-bottom-cart-amount");
    changeAmount.style.visibility = 'visible';

    var changePopUp = document.querySelector('.product-pop-cart');
    changePopUp.style.visibility = 'hidden';

    var changeFrame2 = document.querySelector('.product-pop-cart-frame');
    changeFrame2.style.top = '0px';
}