const productsOutOfSale = document.querySelectorAll('.product--out-of-stock.js-check');

Array.from(productsOutOfSale).forEach(function(productOutOfSale) {
  productOutOfSale.classList.remove('js-check');
});

const productsOnSale = document.querySelectorAll('.product.js-check');

Array.from(productsOnSale).forEach(function(product) {
  product.addEventListener('click', function() {
    product.classList.toggle('checked');
  });

  product.addEventListener('mouseleave', function() {
    if(product.classList.contains('checked') && !product.classList.contains('selected')) {
      product.classList.add('selected');
    } else if(!product.classList.contains('checked') && product.classList.contains('selected')) {
      product.classList.remove('selected');
    }
  });
});

const links = document.querySelectorAll('.product.js-check .link');

Array.from(links).forEach(function(link) {
  const product = link.closest('.product');

  link.addEventListener('click', function() {
    product.classList.toggle('checked');
  });

  link.addEventListener('mouseleave', function() {
    if(product.classList.contains('checked') && !product.classList.contains('selected')) {
      product.classList.add('selected');
    } else if(!product.classList.contains('checked') && product.classList.contains('selected')) {
      product.classList.remove('selected');
    }
  });
});
