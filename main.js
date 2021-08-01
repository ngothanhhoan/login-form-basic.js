function checkInfo() {
	var userInputValue = document.getElementById("user-info").value,
	 	passwordInputValue = document.getElementById("password-info").value
  
	if(userInputValue == 'Tranvansu' && passwordInputValue == 'Ngothanhhoan') { 
	  alert('Logged in successfully')
	  document.querySelector("#check-user").innerHTML = '';
	  document.querySelector("#check-password").innerHTML = '';
	}
  
	if (userInputValue !== 'Ngothanhhoan' && passwordInputValue == 'Ngothanhhoan') { // ! = not
	  document.querySelector("#check-user").innerHTML = 'User: Ngothanhhoan';
	  document.querySelector("#check-password").innerHTML = '';
	}
  
	if (userInputValue == 'Ngothanhhoan' && passwordInputValue !== 'Ngothanhhoan') {
	  document.querySelector("#check-user").innerHTML = '';
	  document.querySelector("#check-password").innerHTML = 'Password: Ngothanhhoan';
	}
	
	if (userInputValue !== 'Ngothanhhoan' && passwordInputValue !== 'Ngothanhhoan') {
	  document.querySelector("#check-user").innerHTML = 'User: Ngothanhhoan';
	  document.querySelector("#check-password").innerHTML = 'Password: Ngothanhhoan';
	}
  };
  
  function forgotPassword() {
	alert('Quên thì thôi!')   
  }
  