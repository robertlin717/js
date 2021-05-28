function increment(element){
  var add = document.getElementById(element).innerHTML;
  add++;
  document.getElementById(element).innerHTML = add;
}

function decrement(element) {
  var sub = document.getElementById(element).innerHTML;
  sub--;
  document.getElementById(element).innerHTML = sub;
  if (sub<=0){
      document.getElementById(element).innerHTML = 0;
  }
}

function increaseP(element){
    var add = document.getElementById(element).innerHTML;
    add++;
    document.getElementById(element).innerHTML = add;
    if (add >= 3){
        document.getElementById(element).innerHTML = 3;
    }
}

function decreaseP(element) {
    var sub = document.getElementById(element).innerHTML;
    sub--;
    document.getElementById(element).innerHTML = sub;
    if (sub<=1){
        document.getElementById(element).innerHTML = 1;
    }
}

var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
  var btn = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  btn.appendChild(txt);
  myList[i].appendChild(btn);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var clear = document.getElementById("clear1");
clear.onclick = function() {
    var list = document.getElementById("u1");
    list.innerHTML = "";
}

var clear1 = document.getElementById("clear1");
clear1.onclick = function(){
    var list1 = document.getElementById("u2");
    list1.innerHTML = "";
}
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("name1").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("u1").appendChild(li);
  }
  document.getElementById("name1").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function newElement1() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("name2").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("u2").appendChild(li);
    }
    document.getElementById("name2").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

//Time
window.onload = function () {
    var mins = 00;
    var seconds = 00;   
    var tens = 00;
    var appendMins = document.getElementById("mins");
    var appendSeconds = document.getElementById("seconds");
    var appendTens = document.getElementById("tens");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;
  
    buttonStart.onclick = function () {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    };
  
    buttonStop.onclick = function () {
      clearInterval(Interval);
    };
  
    buttonReset.onclick = function () {
      clearInterval(Interval);
      tens = "00";
      seconds = "00";
      mins = "00";
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
      appendMins.innerHTML = mins;
    };
  
    function startTimer() {
      tens++;
  
      if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
      }
  
      if (tens > 9) {
        appendTens.innerHTML = tens;
      }
  
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
  
      if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
      }

      if (seconds > 60) {
          console.log("mins");
          mins++;
          appendMins.innerHTML = "0" + mins;
          seconds = 0;
          appendSeconds.innerHTML = "0" + 0;
      }
    }
  };
  
  function reset(){
    document.getElementById("point1").innerHTML = 0;
    document.getElementById("point2").innerHTML = 0;
    document.getElementById("g1").innerHTML = 0;
    document.getElementById("g2").innerHTML = 0;
    document.getElementById("period").innerHTML = 1;
    document.getElementById("button-reset").click(); 
    document.getElementById("clear1").click();
    document.getElementById("clear2").click();
  }
