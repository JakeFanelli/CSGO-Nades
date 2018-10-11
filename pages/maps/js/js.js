function navBar(){
  	$("#nav-bar").load("navbar.html");
}
function genModal(title, video){
	var title = title;
	var body = video;
	console.log(video);
	var body1 = body.concat(".webm");
	var body2 = body.concat(".mov");
	var body3 = body.concat(".mp4");
	console.log(body1);
	console.log(body2);
	console.log(body3);
	var video = document.getElementById('videoTag');
	$('.modal-title').html(title);
	video.setAttribute("src",body1);
	video.setAttribute("src",body2);
	video.setAttribute("src",body3);
	video.load();
}