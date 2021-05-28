

var num1;
var num2;

var remainder = num1 % num2;

function add(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("display").value = sum;
    document.getElementById("num1").value = null;
    document.getElementById("num2").value = null;
}

function sub(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    var sub = num1 - num2;
    document.getElementById("display").value = sub;
    document.getElementById("num1").value = null;
    document.getElementById("num2").value = null;
}

function div(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    var div = num1 / num2;
    var remainder = num1 % num2;
    document.getElementById("num1").value = null;
    document.getElementById("num2").value = null;
    document.getElementById("display").value = `Dif: ${div} Remain: ${remainder}`;
}

function time(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    var time = num1 * num2;
    document.getElementById('display').value = time;
    document.getElementById("num1").value = null;
    document.getElementById("num2").value = null;
}

function reset(){
    document.getElementById("num1").value = null;
    document.getElementById("num2").value = null; 
    document.getElementById("display").value = null; 
}

function equal(){
    document.getElementById("num1").value = `No functionality`;
}