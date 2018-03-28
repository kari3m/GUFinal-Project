$('button').click( function() {
   var counter = $('#cart').val();
   counter++ ;
   console.log(counter);
  $('#cart').val(counter);
});
var cart = [];
$('button').click(function(){
  cart = $('#cart');
  cart.push($('.selectedImg'));
  console.log(cart);
});
