var a = 245;
var numbers = {}
if (a > 999){
  console.log('Number so big');
} else {
  var first = a % 10;
  numbers['Еденицы'] = first;
  var second = a % 100 - first
  numbers['Десятки'] = second / 10;
  var third = a - (first + second)
  numbers['Сотни'] = third / 100;
  console.log(numbers)
}
