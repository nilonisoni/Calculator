function add(n) {
	a = document.getElementById("ans");
	a.innerHTML = a.innerHTML + n;
}
function op(o) {
	tempValue = document.getElementById("ans").innerHTML;
	document.getElementById("ans").innerHTML = "";
	tempOp = o;
}
function calc() {
	a = document.getElementById("ans");
	newValue = a.innerHTML;

	if(tempOp=="+") {
	a.innerHTML = parseInt(tempValue) + parseInt(newValue)
	}
	else if(tempOp=="-") {
	a.innerHTML = parseInt(tempValue) - parseInt(newValue)
	}
	else if(tempOp=="x") {
	a.innerHTML = parseInt(tempValue) * parseInt(newValue)
	}
	else if(tempOp=="/") {
	a.innerHTML = parseInt(tempValue) / parseInt(newValue)
	}
	else if(tempOp=="&#x221a") {
	a.innerHTML = math.sqrt(parseInt(tempValue))
	}
	else if(tempOp=="&#x03C0") {
	a.innerHTML = parseInt(tempValue) * parseInt(math.PI)
	}
}
function clearInput() {
	document.getElementById("ans").value = "";
	
}
function removeLast() {
	a = document.getElementById("ans").value;
	document.getElementById("ans").value = temp.substr(0,temp.length-1)
}