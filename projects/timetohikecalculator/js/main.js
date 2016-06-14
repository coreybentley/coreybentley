//Create BHT value

var totalMiles = document.getElementById("totalmiles");
var htDisplay = document.getElementsByClassName("htdisplay")[0];
var htH1 = htDisplay.getElementsByTagName("h1");
var printAveragePerHourMessage = runOnce(averagePerHourMessage);


totalMiles.onkeyup = function (){
	printAveragePerHourMessage();
	htH1[0].innerHTML = (totalMiles.value / 2) + "hr(s)";	
}

	
//run the passed function one time
function runOnce(aFunction){
  var count = 0;
  return function newFunction(){
   count += 1; 
   if(count === 1){
      aFunction();
    }
  }
}

function averagePerHourMessage(){
	if(totalMiles.value > 0 ){
		//Create average per hour message
		var htP = htDisplay.getElementsByTagName("p");
		var avgPerHourh3= document.createElement("h3");
		var avgPerHourText = document.createTextNode("The average person walks 2 miles per/hour.");
		avgPerHourh3.appendChild(avgPerHourText);
		htDisplay.insertBefore(avgPerHourh3, htP[0]);

		//Create EHT (Elevation Hike Time)
		var body = document.getElementsByTagName("body")[0];
		var elevationDiv = document.createElement("div")
		var elevationParagraph= document.createElement("p");
		var elevationHorizontalRule = document.createElement("hr");
		var elevationText = document.createTextNode("Elevation typically adds 30min per 1000ft.");
		elevationDiv.className = "ht container";
		elevationParagraph.appendChild(elevationText);
		elevationDiv.appendChild(elevationParagraph);
		elevationDiv.appendChild(elevationHorizontalRule);
		body.appendChild(elevationDiv);



	}
}










//set totalelevation focus to calculateBaseHikeTime function