Array.prototype.forEach.call(document.querySelectorAll('.product--available'), function(product) {
  var productCard = product.querySelector('.product__card');
  var buyLink = product.querySelectorAll('.product__buy-link');

  productCard.addEventListener('click', handleProductClick);
  productCard.addEventListener('mouseleave', handleProductMouseLeave);
  buyLink.addEventListener('click', handleProductClick);
});

function findClosest(el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

function handleProductClick(evt) {
  var product = findClosest(evt.currentTarget, 'product--available');

  product.classList.toggle('product--checked');
  if(!product.classList.contains('product--checked') && product.classList.contains('product--selected')) {
    product.classList.remove('product--selected');
  }
}

function handleProductMouseLeave(evt) {
  var product = findClosest(evt.currentTarget, 'product--available');

  if(product.classList.contains('product--checked') && !product.classList.contains('product--selected')) {
    product.classList.add('product--selected');
  }
}
