document.getElementById("button1").addEventListener("click", function(){

var num1 = document.getElementById("number1").value;
var num2 = document.getElementById("number2").value;

var result = parseInt(num1) + parseInt(num2);
        
document.getElementById("output").innerHTML = result;

});