function compute(){ // provides all functionalites for what happens once the user clicks on the compute button
    var principal = document.getElementById("principal").value; 
	if (principal == "" || parseFloat(principal) <= 0){ // conditional statement checks if our principal value has been given a value and more importantly whether or not it is greater than 0
		alert("Enter a positive number");
		document.getElementById("principal").focus(); // If the alert is activated we want the principal input box to be focused on so the user can provide a 
		return; // exit function as we want the user to re-input the principal value so its a positive number
	}
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var interest = principal * years * rate/100;
	var year = new Date().getFullYear()+parseInt(years); 
	var result = document.getElementById("result");
	
	var amount = parseFloat(principal) + parseFloat(interest); 
	
	// update the html for our result by adjusting its innerHTML attribute
	result.innerHTML = "\<br\>If you deposit \<mark\>" +principal+"\</mark\>\<br\> at an interest rate of\<mark\> "+rate+"%\</mark\>\<br\>You will receive an amount of \<mark\>"+amount+"\</mark\>,\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>";
}

function updateRate(){ // function that updates the displayed rate value given from the range input bar
	var rateVal = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText = rateVal;
}

