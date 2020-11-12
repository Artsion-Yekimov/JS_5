// NUMBER 1
document.write ('------------- NUMBER 1 -------------' + '<br>')
function number_1 (a, b, c) {
document.write ((a+b)/c)
}
number_1 (8, 2, 5)
//--------------------------------------------
// NUMBER 2
document.write ('<br>' + '------------- NUMBER 2 -------------' + '<br>')
function number_2 (a) {
    return a*a*a 
    return a*a
}
function number_2_1(a) {
    return a*a
}
document.write (`Куб числа  = ${number_2 (10)} <br>`)
document.write (`Квадрат числа  = ${number_2_1 (10)}`)
//--------------------------------------------
// NUMBER 3
document.write ('<br>' + '------------- NUMBER 3 -------------' + '<br>')
function min (a, b) {
    if (a<b) {
        document.write ("Минимальное число: " + a)
    } else {
        document.write ("Минимальное число: " + b + '<br>')
    }
}
min (15, 6)
function max (a, b) {
    if (a>b) {
        document.write ("Максимальное число: " + a)
    } else {
        document.write ("Максимальное число: " + b)
    }
}
max (15, 6)
//--------------------------------------------
// NUMBER 4
document.write ('<br>' + '------------- NUMBER 4 -------------' + '<br>')
function number_4 () {
    let arr;
    array = [];
    while (true) {
      arr = prompt ("Введите число");
      if (!+arr) { 
         break;
      }
     else {
        array.push (arr);
      }
     }
 return array;
 }
 function number4_1 (array) { 
    document.write (array)    //СДЕЛАЛ, НО НЕ ПОНЯЛ
 }
number_4 ();
number4_1 (array);            //МЕХАНИЗМ ДЕЙСТВИЯ number4_1 
//--------------------------------------------
// NUMBER 5
document.write ('<br>' + '------------- NUMBER 5 -------------' + '<br>')
function isEven (a) {
    if (a%2==0) return true
    else return false
}
let a = isEven (5);
if (a == true ) document.write (`Число четное`)
else document.write (`Число нечетное`)
//--------------------------------------------
// NUMBER 6
document.write ('<br>' + '------------- NUMBER 6 -------------' + '<br>')
function number_6 (a, b, c, d, e) {
    document.write ([a, b, c, d, e]) //Я НЕ ПОНИМАЮ КАК ПРИМЕНИТЬ ФУНКЦИЮ ИЗ 5 ЗАДАНИЯ
}
number_6 (1, 2, 3, 4, 5)
//--------------------------------------------
// NUMBER 8
document.write ('<br>' + '------------- NUMBER 8 -------------' + '<br>')
function number_8 (){
let height = 5;
for (let i=1; i<=height; i++){
    for (let k=1; k<=height-i;k++){
        document.write ("&ensp;")
    }
    for (let j=1; j<=i+i-1; j++){
        document.write("*");
    }document.write("<br>");
}
}
number_8 ();
//--------------------------------------------