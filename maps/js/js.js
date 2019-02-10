var smokeClicked = false;
var flashClicked = false;
var molotovClicked = false;
var tButtonClicked = true;
var ctButtonClicked = false;

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
	if(smokeClicked==false){//if not clicked already
		smokeClicked=true;
		showAllSmokes();
		if(flashClicked == false){
			hideAllFlashes();
		}
		if(molotovClicked == false){
			hideAllMollys();
		}
		if(tButtonClicked==true){
			$('.ctsmoke').hide();
		}else{
			$('.tsmoke').hide();
		}
	}else{//if clicked already
		smokeClicked=false;
		if(flashClicked==false&&molotovClicked==false){
			showAllNades();
			if(tButtonClicked==true){
				hideCTNades();
			}else{
				hideTNades();
			}
		}else{
			hideAllSmokes();
		}
	}
}

function flashClick(){
	var smoke = document.getElementById('smokeButton');
	var flash = document.getElementById('flashButton');
	var molotov = document.getElementById('molotovButton');
	if(flashClicked==false){//if not clicked already
		flashClicked=true;
		showAllFlashes();
		if(smokeClicked == false){
			hideAllSmokes();
		}
		if(molotovClicked == false){
			hideAllMollys();
		}
		if(tButtonClicked==true){
			$('.ctflash').hide();
		}else{
			$('.tflash').hide();
		}
	}else{//if clicked already
		flashClicked=false;
		if(smokeClicked==false&&molotovClicked==false){
			showAllNades();
			if(tButtonClicked==true){
				hideCTNades();
			}else{
				hideTNades();
			}
		}else{
			hideAllFlashes();
		}
	}
}

function molotovClick(){
	var smoke = document.getElementById('smokeButton');
	var flash = document.getElementById('flashButton');
	var molotov = document.getElementById('molotovButton');
	if(molotovClicked==false){//if not clicked already
		molotovClicked=true;
		showAllMollys();
		if(flashClicked == false){
			hideAllFlashes();
		}
		if(smokeClicked == false){
			hideAllSmokes();
		}
		if(tButtonClicked==true){
			$('.ctmolly').hide();
		}else{
			$('.tmolly').hide();
		}
	}else{//if clicked already
		molotovClicked=false;
		if(flashClicked==false&&smokeClicked==false){
			showAllNades();
			if(tButtonClicked==true){
				hideCTNades();
			}else{
				hideTNades();
			}
		}else{
			hideAllMollys();
		}
	}
}

function tClick(){
	ctButtonClicked=false;
	tButtonClicked=true;
	$('.t').show();
	$('.ct').hide();
	if(smokeClicked==false&&flashClicked==false&&molotovClicked==false){
		$('.t').show();
		$('.ct').hide();
	}else{ 
		if(smokeClicked==true){
			$('.ctsmoke').hide();
			$('.tsmoke').show();
		}else{
			$('.smokes').hide();
		}
		if(flashClicked==true){
			$('.ctflash').hide();
			$('.tflash').show();
		}else{
			$('.flashes').hide();
		}
		if(molotovClicked==true){
			$('.ctmolly').hide();
			$('.tmolly').show();
		}else{
			$('.molotovs').hide();
		}
	}
}
function ctClick(){
	tButtonClicked=false;
	ctButtonClicked=true;
	if(smokeClicked==false&&flashClicked==false&&molotovClicked==false){
		$('.ct').show();
		$('.t').hide();
	}else{ 
		if(smokeClicked==true){
			$('.tsmoke').hide();
			$('.ctsmoke').show();
		}else{
			$('.smokes').hide();
		}
		if(flashClicked==true){
			$('.tflash').hide();
			$('.ctflash').show();
		}else{
			$('.flashes').hide();
		}
		if(molotovClicked==true){
			$('.tmolly').hide();
			$('.ctmolly').show();
		}else{
			$('.molotovs').hide();
		}
	}
}
function loaded(){
	tButtonClicked=true;
	ctButtonClicked=false;
	$('.ct').hide();
}
function showAllMollys(){
	$('.molotovs').show();
}
function showAllSmokes(){
	$('.smokes').show();
}
function showAllFlashes(){
	$('.flashes').show();
}
function hideAllMollys(){
	$('.molotovs').hide();
}
function hideAllSmokes(){
	$('.smokes').hide();
}
function hideAllFlashes(){
	$('.flashes').hide();
}
function hideTNades(){
	$('.tsmoke').hide();
	$('.tflash').hide();
	$('.tmolly').hide();
}
function hideCTNades(){
	$('.ctsmoke').hide();
	$('.ctflash').hide();
	$('.ctmolly').hide();
}
function showAllNades(){
	$('.smokes').show();
	$('.flashes').show();
	$('.molotovs').show();
}