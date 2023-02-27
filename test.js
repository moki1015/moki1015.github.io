//打招呼
function welcome(){
    var hello = '歡迎光臨！請問想要點什麼呢？';
    document.getElementById('hello').textContent = hello;
}
welcome();

//點餐
document.getElementById('click').onclick = function order(){
  var count = '好的！沒有問題，我幫您算一下，這樣總共是';
  var pizzaPrice = 300;
  var beerPrice = 45;
  var pizzaNum = parseInt(document.getElementById('pizzaNum').value);
  var beerNum = parseInt(document.getElementById('beerNum').value);
  document.getElementById('ok').textContent = count;
  document.getElementById('total').textContent = (pizzaPrice * pizzaNum) + (beerPrice * beerNum)+'元'
}
