alert("here is a calulator")
var opp = prompt("what do you what to do (add, subtract, multiply, devide)")

if (opp==="add" || opp==="+"){
	var x = parseInt(prompt("first number to add"));
	var y = parseInt(prompt("second number to add"));
	var z = x + y
	alert("your answer is "+z)
}
else if (opp==="subtract" || opp === "-"){
	var x = parseInt(prompt("first number to subtract"));
	var y = parseInt(prompt("second number to subtract"));
	var z = x - y
	alert("your answer is "+z)

}
else if (opp==="multiply" || opp === "*"){
	var x = parseInt(prompt("first number to multiply"));
	var y = parseInt(prompt("second number to multiply"));
	var z = x * y
	alert("your answer is "+z)

}
else if (opp==="devide" || opp ==="/"){
	var x = parseInt(prompt("first number to devide"));
	var y = parseInt(prompt("second number to devide"));
	var z = x / y
	alert("your answer is "+z)

}
else{
	alert("Please try again")
}