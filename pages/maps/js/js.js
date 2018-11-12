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
$(document).ready(function() {
	var smoke = document.getElementById('smokeButton');
	var flash = document.getElementById('flashButton');
	var molotov = document.getElementById('molotovButton');
	$('#smokeButton').click(function() {
		smokeClick();
	});
	$('#flashButton').click(function() {
		flashClick();
	});
	$('#molotovButton').click(function() {
		molotovClick();
	});
	$("#smokeButton").mouseover(function(){
		if(smokeClicked==false){
			smoke.classList.add("selectedCheck");
			smoke.classList.remove("unselectedCheck");
		}else{
			smoke.classList.remove("selectedCheck");
			smoke.classList.add("unselectedCheck");
		}
	});
	$("#smokeButton").mouseout(function(){
		if(smokeClicked==false){
			smoke.classList.remove("selectedCheck");
			smoke.classList.add("unselectedCheck");
		}else{
			smoke.classList.add("selectedCheck");
			smoke.classList.remove("unselectedCheck");
		}
	});
	$("#flashButton").mouseover(function(){
		if(flashClicked==false){
			flash.classList.add("selectedCheck");
			flash.classList.remove("unselectedCheck");
		}else{
			flash.classList.remove("selectedCheck");
			flash.classList.add("unselectedCheck");
		}
	});
	$("#flashButton").mouseout(function(){
		if(flashClicked==false){
			flash.classList.remove("selectedCheck");
			flash.classList.add("unselectedCheck");
		}else{
			flash.classList.add("selectedCheck");
			flash.classList.remove("unselectedCheck");
		}
	});
	$("#molotovButton").mouseover(function(){
		if(molotovClicked==false){
			molotov.classList.add("selectedCheck");
			molotov.classList.remove("unselectedCheck");
		}else{
			molotov.classList.remove("selectedCheck");
			molotov.classList.add("unselectedCheck");
		}
	});
	$("#molotovButton").mouseout(function(){
		if(molotovClicked==false){
			molotov.classList.remove("selectedCheck");
			molotov.classList.add("unselectedCheck");
		}else{
			molotov.classList.add("selectedCheck");
			molotov.classList.remove("unselectedCheck");
		}
	});
	$('input[name=smokebox]').change(function(){
		if($(this).is(':checked')) {
			smoke.classList.add("selectedCheck");
			smoke.classList.remove("unselectedCheck");
		} else {
			smoke.classList.remove("selectedCheck");
			smoke.classList.add("unselectedCheck");
		}
	});
	$('input[name=flashbox]').change(function(){
		if($(this).is(':checked')) {
			flash.classList.add("selectedCheck");
			flash.classList.remove("unselectedCheck");
		} else {
			flash.classList.remove("selectedCheck");
			flash.classList.add("unselectedCheck");
		}
	});
	$('input[name=molotovbox]').change(function(){
		if($(this).is(':checked')) {
			molotov.classList.add("selectedCheck");
			molotov.classList.remove("unselectedCheck");
		} else {
			molotov.classList.remove("selectedCheck");
			molotov.classList.add("unselectedCheck");
		}
	});
})