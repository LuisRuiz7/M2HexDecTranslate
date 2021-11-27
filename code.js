function hexa() {
	if(document.myForm.name.value != "")
	document.getElementById('txt').innerHTML = "&#X" + document.myForm.name.value;
	else
	document.getElementById('txt').innerHTML = null;
}

function dec() {
	if(document.myForm.name.value != "")
	document.getElementById('txt').innerHTML = "&#" + document.myForm.name.value;
	else
	document.getElementById('txt').innerHTML = null;
}

function openNav() {
  if(document.getElementById("mySidenav").style.width == "0px") {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
  } else {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
  }
}