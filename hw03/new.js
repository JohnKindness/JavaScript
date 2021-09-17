var i = 1;
while (i < 101){
  var some = 0;
  for (var a = 2; a < 101; ++a){
  if (i % a == 0){
    ++some; 
   }
  if (some < 2 && a == 100 && i != 1){
  console.log(i);
  break;
  }
  }
  ++i;
 }
 