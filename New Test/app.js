var num1Elem = document.getElementById('num1');
var num2Elem = document.getElementById('num2');
var buttonElem = document.querySelector('button');
function Add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
buttonElem.addEventListener('click', function () {
    var num1 = num1Elem.value;
    var num2 = num2Elem.value;
    var result = Add(+num1, +num2);
    var stringResult = Add(num1, num2);
    console.log(result);
    console.log(stringResult);
});
