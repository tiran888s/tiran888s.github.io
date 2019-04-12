function hide(){
	var Menu;
	Menu=document.getElementById('collapse-menu');	
	Menu.style.display="none"; 
	Menu.classList.remove("animated", "zoomOut"); 
	document.getElementById("btn-nav").src="img/menu.png";
	}
function imgX(){
	document.getElementById("btn-nav").src="img/X.png";
}
function toggle_my(){
	var chbox;
	var Menu;
	chbox=document.getElementById('toggle');
	Menu=document.getElementById('collapse-menu');
		 if (chbox.checked) {
		 	imgX()
		 	Menu.style.display="flex";
		 	Menu.classList.add("animated", "zoomIn");
	}
		 	else {Menu.classList.remove("zoomIn");
		 			Menu.classList.add("zoomOut");
		 		setTimeout(hide, 900);
		 		}
}









