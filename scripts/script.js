 var cart = [{"id":"1","name":"dfasdf","price":"25"},{"id":"2","name":"df","price":"35"}]
// cart.document.getElementById('cart'); hena el mfrod ba5od el 7aga 2ly 3nd lo2y f el cart 3shan b3d keda hzhrhom f el doc 3ndy
$('.Cheakout').click(function(){
  $('.visability').css("display","block");
});
$('.Cheakout').click(function(){
  var selectedItems = [];
  selectedItems = cart;
  // selectedItems.document.getElementById('selected');
  var selectedDiv = document.getElementById('selected');
    var test = document.createElement("ul");

  for(var i = 0; i < selectedItems.length; i++){
    var item = document.createElement("ul");
   for (var key in selectedItems[i]) {




 var description = document.createElement("li");
 description.innerHTML=(key+" "+selectedItems[i][key]);
 item.appendChild(description);
}


selectedDiv.appendChild(test);


  var node = document.createElement("li");
  test.appendChild(node);
  // var text =document.createTextNode(selectedItems);
  node.appendChild(item);
  // text.innerHTML= selectedItems;
  selectedDiv.appendChild(test);
  console.log(selectedDiv);
}

});
// function findObjectByKey(array, key, value) { //hena deh function btaa5od el name we el price of the  product and put each product in a p tag
//     for (var i = 0; i < array.length; i++) {
//         if (array[i][key] === value) {
//             return array[i];
//             var para = document.createElement("p");
//             var node = document.createTextNode(array[i]);
//              para.appendChild(node);
//             var element = document.getElementById("numberOfProduct");
//             element.appendChild(para);
//         }
//     }
//
// }
// Array.prototype.sum = function (prop) {  //deh el mfrod nha bt3ml sum l elprice bta3 kol el items 2ly mwgoda f  el array 2ly m7tot f number of product
//     var total = 0
//     for ( var i = 0, _len = this.length; i < _len; i++ ) {
//         total += this[i][prop]
//     }
//     return total
// }
