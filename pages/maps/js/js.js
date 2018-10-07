function navBar(){
  	$("#nav-bar").load("navbar.html");
}
function genModal(title, video){
	var title = title;
	var body = video;
	var video = document.getElementById('videoTag');
	$('.modal-title').html(title);
	video.setAttribute("src",body);
	video.load();
}