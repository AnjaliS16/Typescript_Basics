var number1 = document.getElementById('num1');
var number2 = document.getElementById('num2');
var addbutton = document.getElementById('addbutton');
var numArray = [];
var stringArray = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj);
}
addbutton.addEventListener('click', function () {
    var num1 = number1.value;
    var num2 = number2.value;
    var result = add(+num1, +num2);
    numArray.push(result);
    var stringresult = add(num1, num2);
    stringArray.push(stringresult);
    console.log('number result>>', result);
    console.log('string result>>', stringresult);
    printResult({ val: result, timestamp: new Date() });
});
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('It worked!');
    }, 1000);
});
myPromise.then(function (result) {
    console.log(result.split('w'));
});
