
var form = document.forms['form']['form'];
var password = document.forms['form']['password'];

var formError = document.getElementById('formError');
var passError = document.getElementById('passError');

form.addEventListener('textInput', formVerify);
password.addEventListener('textInput', passVerify);

function validated(){
	if (form.value.length < 9) {
		form.style.border = "1px solid red";
		formError.style.display = "block";
		form.focus();
		return false;
	}
	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		passError.style.display = "block";
		password.focus();
		return false;
	}

}
function formVerify(){
	if (form.value.length >= 8) {
		form.style.border = "1px solid silver";
		formError.style.display = "none";
		return true;
	}
}
function passVerify(){
	if (passwrd.value.length >= 5) {
		password.style.border = "1px solid silver";
		passError.style.display = "none";
		return true;
	}
}

function forgotPassword() {
	alert('...............')   
  }
