// JavaScript Document
var t;
var currentIndex = 1;

function next(){
	clearInterval(t);
	if(currentIndex < 8){
		currentIndex++;
		document.getElementById("hinhslide").src = "Images/slider/" + currentIndex + ".jpg";
	}
	else{
		currentIndex=1;
		document.getElementById("hinhslide").src = "Images/slider/" + currentIndex + ".jpg";
	}
	t = setInterval("next()", 3000);
	
}
function back(){
	clearInterval(t);
	if(currentIndex > 1){
		currentIndex--;
		document.getElementById("hinhslide").src = "Images/slider/" + currentIndex + ".jpg";
	}
	else{
		currentIndex=8;
		document.getElementById("hinhslide").src = "Images/slider/" + currentIndex + ".jpg";
	}
	t = setInterval("back()", 3000);
}
t = setInterval("next()", 2000);