var smokeClicked = false;
var flashClicked = false;
var molotovClicked = false;

function navBar(){
	$("#nav-bar").load("navbar.html");
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

function smokeClick(){
	var smoke = document.getElementById('smokeButton');
	var flash = document.getElementById('flashButton');
	var molotov = document.getElementById('molotovButton');
	if(smokeClicked===false){//if not clicked already
		smokeClicked=true;
		$('.smokes').show();
		if(flashClicked == false){
			$('.flashes').hide();
		}
		if(molotovClicked == false){
			$('.molotovs').hide();
		}
	}else{//if clicked already
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
		flashClicked=true;
		$('.flashes').show();
		if(smokeClicked == false){
			$('.smokes').hide();
		}
		if(molotovClicked == false){
			$('.molotovs').hide();
		}
	}else{//if clicked already
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
		molotovClicked=true;
		$('.molotovs').show();
		if(smokeClicked == false){
			$('.smokes').hide();
		}
		if(flashClicked == false){
			$('.flashes').hide();
		}
	}else{//if clicked already
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