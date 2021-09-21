let basket = {'orange' : 100, 'meat' : 300, 'sugar' : 150};

function countBasketPrice(){
  var full_price = 0;
  for (var key in basket){
    full_price = full_price + basket[key];
  }
  console.log(full_price);
}

countBasketPrice();
