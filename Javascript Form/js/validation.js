function validateForm(e){
	e.preventDefault();

	  // regular expressions
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var regEmail = /^\S+@\S+$/;
    var regPassword =  /^[A-Za-z]\w{7,10}$/;
    var regPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;



        //input from the user
    var name = document.getElementById('name').value.trim();
    var e_mail = document.getElementById('email').value.toLowerCase().trim();
    var password= document.getElementById("password").value.trim();
    var confirmpass = document.getElementById('confirm-password').value.trim()
    var phone = document.getElementById('phone').value.trim()

        //validation
    	if(!regName.test(name)){
	    document.getElementById('nameErr').innerHTML = 'Please enter a valid first and last name.';
	    document.getElementById('name').focus();

	    }

	    if(!regEmail.test(e_mail)){
	    document.getElementById('emailErr').innerHTML = 'Please enter a valid email address.';
	    document.getElementById('email').focus();

	    }  

	    if(!regPassword.test(password)){
        document.getElementById('passErr').innerHTML = 'Please enter a valid Password';
	    document.getElementById('password').focus();

	    }

	    if( password !== confirmpass ){
	    	document.getElementById('confirmPassErr').innerHTML = 'Please re-enter your Password';
	    	document.getElementById('confirm-password').focus();
	    }	

	    if(!regPhone.test(phone)){
	    document.getElementById('phoneErr').innerHTML = 'Please enter the number in +XX XXXXX XXXXX format';
        document.getElementById('phone').focus();

        } 



}
