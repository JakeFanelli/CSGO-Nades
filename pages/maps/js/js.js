function navBar(){
  	$("#nav-bar").load("navbar.html");
}
function filterBar(){
	$("#filterRow").load("filterbar.html");
}
function modal(){
	$("#myModal").load("modal.html");
}
function genModal(title, video){
	var title = title;
	var body = video;
	var video = document.getElementById('videoTag');
	$('.modal-title').html(title);
	video.setAttribute("src",body);
	video.load();
}

var smokeClicked = false;
var flashClicked = false;
var molotovClicked = false;
$(document).ready(function(){
$("#smokeButton").hover(function(){
	if(smokeClicked===false){
		console.log("aye what up");
		$(this).css("background-color", "#000");
		$(this).css("color", "#fff");
	}else{
		$(this).css("background-color", "#222");
		$(this).css("color", "#9d9d9d");
	}
	}, function(){
	if(smokeClicked===false){
		$(this).css("background-color", "#222");
		$(this).css("color", "#9d9d9d");
	}else{
		$(this).css("background-color", "#000");
		$(this).css("color", "#fff");
	}
});
$("#flashButton").hover(function(){
	if(flashClicked===false){
		$(this).css("background-color", "#000");
		$(this).css("color", "#fff");
	}else{
		$(this).css("background-color", "#222");
		$(this).css("color", "#9d9d9d");
	}
	}, function(){
	if(flashClicked===false){
		$(this).css("background-color", "#222");
		$(this).css("color", "#9d9d9d");
	}else{
		$(this).css("background-color", "#000");
		$(this).css("color", "#fff");
	}
});
$("#molotovButton").hover(function(){
	if(molotovClicked===false){
		$(this).css("background-color", "#000");
		$(this).css("color", "#fff");
	}else{
		$(this).css("background-color", "#222");
		$(this).css("color", "#9d9d9d");
	}
	}, function(){
	if(molotovClicked===false){
		$(this).css("background-color", "#222");
		$(this).css("color", "#9d9d9d");
	}else{
		$(this).css("background-color", "#000");
		$(this).css("color", "#fff");
	}
});
});

function smokeClick(){
	var smoke = document.getElementById('smokeButton');
	var flash = document.getElementById('flashButton');
	var molotov = document.getElementById('molotovButton');
	if(smokeClicked===false){//if not clicked already
		smoke.style.setProperty("background", "#000");
		smoke.style.setProperty("color", "#fff");
		smokeClicked=true;
		$('.smokes').show();
		if(flashClicked == false){
			$('.flashes').hide();
		}
		if(molotovClicked == false){
			$('.molotovs').hide();
		}
	}else{//if clicked already
		smoke.style.setProperty("background", "#222222");
		smoke.style.setProperty("color", "#9d9d9d");
		smokeClicked=false;
		if(flashClicked==false&&molotovClicked==false){
			$('.smokes').show();
			$('.flashes').show();
			$('.molotovs').show();
		}else{
			$('.smokes').hide();
		}
	}
}
function flashClick(){
	var smoke = document.getElementById('smokeButton');
	var flash = document.getElementById('flashButton');
	var molotov = document.getElementById('molotovButton');
	if(flashClicked===false){//if not clicked already
		flash.style.setProperty("background", "#000");
		flash.style.setProperty("color", "#fff");
		flashClicked=true;
		$('.flashes').show();
		if(smokeClicked == false){
			$('.smokes').hide();
		}
		if(molotovClicked == false){
			$('.molotovs').hide();
		}
	}else{//if clicked already
		flash.style.setProperty("background", "#222222");
		flash.style.setProperty("color", "#9d9d9d");
		flashClicked=false;
		if(smokeClicked==false&&molotovClicked==false){
			$('.smokes').show();
			$('.flashes').show();
			$('.molotovs').show();
		}else{
			$('.flashes').hide();
		}
	}
}
function molotovClick(){
	var smoke = document.getElementById('smokeButton');
	var flash = document.getElementById('flashButton');
	var molotov = document.getElementById('molotovButton');
	if(molotovClicked===false){//if not clicked already
		molotov.style.setProperty("background", "#000");
		molotov.style.setProperty("color", "#fff");
		molotovClicked=true;
		$('.molotovs').show();
		if(smokeClicked == false){
			$('.smokes').hide();
		}
		if(flashClicked == false){
			$('.flashes').hide();
		}
	}else{//if clicked already
		molotov.style.setProperty("background", "#222222");
		molotov.style.setProperty("color", "#9d9d9d");
		molotovClicked=false;
		if(flashClicked==false&&smokeClicked==false){
			$('.smokes').show();
			$('.flashes').show();
			$('.molotovs').show();
		}else{
			$('.molotovs').hide();
		}
	}
}