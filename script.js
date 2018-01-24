

// Custom function
function calculateTip() {

	//storing the data of inputs
	var billAmount = document.getElementById("billAmount").value;
	var serviceQuality = document.getElementById("serviceQuality").value;
	var numPeople = document.getElementById("totalPeople").value;


	//Quick validation
	if(billAmount === "" || serviceQuality == 0) {

		window.alert("please enter some values");
		return; // we need to kill the function at this point,bcz we didn't have added anything,we don't want to keep the function continue
				// to perform the calculation,so need to stop by adding return; and we also can add this befor window.alert();


	} 

	// check to see if this input is empty or less than or equal to 1
	if (numPeople === "" || numPeople<= 1) {
		numPeople = 1;

		document.getElementById("each").style.display = "none";

	} else {

		document.getElementById("each").style.display = "block";
	}


	// Do some Math
	var total = (billAmount * serviceQuality) / numPeople;
	total = Math.round(total * 100) / 100; //this will round the decimal number in two decimal places
	total = total.toFixed(2);

	// Display the Tip
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;
}






// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


// clicking the button calls our custom function

document.getElementById("calculate").onclick = function() { calculateTip(); };