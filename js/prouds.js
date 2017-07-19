var prouds = document.querySelectorAll('.proud');
for(var i = 0, c = prouds.length; i < c; i++) {
	switch(i) {
		case 0:
			prouds[i].style.backgroundColor = "#F44336";
			break;
		case 1:
			prouds[i].style.backgroundColor = "#E91E63";
			break;
		case 2:
			prouds[i].style.backgroundColor = "#9C27B0";
			break;
		case 3:
			prouds[i].style.backgroundColor = "#673AB7";
			break;
	}
}