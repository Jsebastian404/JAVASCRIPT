const sumar = (num1,num2)=>{
	return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
	return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2)=>{
	return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=>{
	return parseInt(num1) * parseInt(num2);
}


alert("¿Que operación deseas realizar?");
let operacion = prompt("1: suma,  2: resta,  3: división,  4: multiplicación");
	let numero1 = prompt("ahora digite el primer número para realizar operacion");
	let numero2 = prompt("ahora digite el segundo número para realizar operacion");

if (operacion == 1) {
	resultado = sumar(numero1,numero2);
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2) {
	resultado = restar(numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3) {
resultado = dividir(numero1,numero2)
alert(`tu resultado es ${resultado}`);
}	



else if (operacion == 4) {
	resultado = multiplicar(numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}

else {
	alert("no se ha encontrado la operación")
}


