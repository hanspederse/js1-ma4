var lastname = document.getElementById('lastName');
var err = document.getElementsByClassName('error');
document.querySelector('button').onclick = function(e) {	
	if(lastname.value.length < 5){
		e.preventDefault();
		err[0].style.display = 'block';
	}else{
		err[0].style.display = 'none';
	}
}