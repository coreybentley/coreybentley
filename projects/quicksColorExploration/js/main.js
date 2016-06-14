		

window.onkeyup = function(e) {
	if(e.keyCode === 32){
        
		var elem = document.getElementById("html");
		var random = "#000000".replace(/0/g, function(){return (Math.floor((Math.random()*16))).toString(16);});
		elem.style.background = random;

		var replacementDiv = document.createElement("div");
		replacementDiv.id = "newContent";
		var replacementDivContent = document.createTextNode(random);
		replacementDiv.appendChild(replacementDivContent);

		var originalContent = document.getElementById("originalContent");
		originalContent.parentNode.replaceChild(replacementDiv, originalContent);

		var newContent = document.getElementById("newContent");
		newContent.id = "originalContent";

		document.getElementById("spacebar").style.display="none";


	
	}
	
}



		


