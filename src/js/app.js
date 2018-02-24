var productsAvailable = document.querySelectorAll('.product--available');

for (var i = 0; i < productsAvailable.length; ++i) {
  var productCard = productsAvailable[i].querySelectorAll('.product__card');
  var buyLink = productsAvailable[i].querySelectorAll('.product__buy-link');

  productCard[0].addEventListener('click', handleProductClick);
  productCard[0].addEventListener('mouseleave', handleProductMouseLeave);
  buyLink[0].addEventListener('click', handleProductClick);
}

function handleProductClick(evt) {
  var product = evt.currentTarget.closest('.product--available');

  product.classList.toggle('product--checked');
  if(!product.classList.contains('product--checked') && product.classList.contains('product--selected')) {
    product.classList.remove('product--selected');
  }
}

function handleProductMouseLeave(evt) {
  var product = evt.currentTarget.closest('.product--available');

  if(product.classList.contains('product--checked') && !product.classList.contains('product--selected')) {
    product.classList.add('product--selected');
  }
}
