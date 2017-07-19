// Handle visibility for submenus
var image = document.getElementById("menu");
var menu = document.querySelector("nav #menus");
var links = document.querySelectorAll("nav #menus p");
var length = links.length;

// At the beginning submenus are hidden
menu.className = 'hidden';

// Add event listener when user click on it
image.addEventListener('click', function(e) {
	// if visible, hides it else make it visible
	if(menu.className == 'visible') {
		menu.className = 'hidden';
		e.target.className = 'rotateOrigin';
	} else {
		menu.className = 'visible';
		e.target.className = 'rotate';
	}
});

// Add event listener when user clicks on a section = hide submenu
for(var i = 0, c = length; i < c; i++) {
	links[i].addEventListener('click', function() {
		image.className = 'rotateOrigin';
		menu.className = 'hidden';
	});
}