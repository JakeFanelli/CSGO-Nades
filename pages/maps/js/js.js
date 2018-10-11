function navBar(){
  	$("#nav-bar").load("navbar.html");
}
function genModal(title, video){
	var title = title;
	var body = video;
	console.log(video);
	var bodyWebm = body.concat(".webm");
	var bodyMp4 = body.concat(".mp4");
	var video = document.getElementById('videoTag');
	$('.modal-title').html(title);
	video.setAttribute("src",bodyWebm);
	video.setAttribute("src",bodyMp4);
	video.load();
}