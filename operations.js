function addNumbers()
{
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
number1=Number (number1);
number2=Number (number2);
let result=number1+number2;
document.getElementById("result1").innerText="THE RESULT IS :"+result;
}

function subNumbers()
{
    let number3 = document.getElementById("num3").value;
    let number4 = document.getElementById("num4").value;
number3=Number (number3);
number4=Number (number4);
let result=number3-number4;
document.getElementById("result2").innerText="THE RESULT IS :"+result;
}

function mulNumbers()
{
    let number5 = document.getElementById("num5").value;
    let number6 = document.getElementById("num6").value;
number5=Number (number5);
number6=Number (number6);
let result=number5*number6;
document.getElementById("result3").innerText="THE RESULT IS :"+result;
}