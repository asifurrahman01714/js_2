var num1= prompt("Enter the first number : ");
var num2= prompt("Enter the second number : ");
num1= parseInt(num1);
num2= parseInt(num2);
add=num1+num2;
sub=num1-num2;
mul=num1*num2;
div=num1/num2;
modulus=num1%num2;
document.write("Addition : "+ add+"<br/>");
document.write("Subtraction : "+ sub+"<br/>");
document.write("Multiplication : "+ mul +"<br/>");
document.write("Division : "+ div.toFixed(3)+"<br/>");
document.write("Modulus : "+ modulus.toPrecision(4)+"<br/>");
