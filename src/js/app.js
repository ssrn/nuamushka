const productsOutOfSale = document.querySelectorAll('.product--disabled.js-check');

Array.from(productsOutOfSale).forEach(function(productOutOfSale) {
  productOutOfSale.classList.remove('js-check');
});

const productsOnSale = document.querySelectorAll('.product.js-check');

Array.from(productsOnSale).forEach(function(product) {
  product.addEventListener('click', function() {
    product.classList.toggle('product--checked');

    if(!product.classList.contains('product--checked') && product.classList.contains('product--selected')) {
      product.classList.remove('product--selected');
    }
  });

  product.addEventListener('mouseleave', function() {
    if(product.classList.contains('product--checked') && !product.classList.contains('product--selected')) {
      product.classList.add('product--selected');
    }
  });
});

const links = document.querySelectorAll('.product.js-check .link');

Array.from(links).forEach(function(link) {
  const product = link.closest('.product');

  link.addEventListener('click', function() {
    product.classList.toggle('product--checked');

    if(!product.classList.contains('product--checked') && product.classList.contains('product--selected')) {
      product.classList.remove('product--selected');
    }
  });

  link.addEventListener('mouseleave', function() {
    if(product.classList.contains('product--checked') && !product.classList.contains('product--selected')) {
      product.classList.toggle('product--selected');
    }
  });
});
