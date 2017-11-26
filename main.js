let video = document.getElementById('video');
video.volume = 0.2;


video.addEventListener('pause', function (evt) {
	
	video.currentTime = 5;
});

/*
let video = document.getElementById('video');
console.log(video);

video.volume = 0.2;
video.currentTime = 5;

video.currentTime = 2;
setTimeout( function () {
	video.pause();
	console.log('pause');
},3000);
setTimeout( function () {
	video.play();
	console.log('play');
},4000);


video.addEventListener('pause', function (evt) {
	console.log('paused');
	video.classList.toggle('desaturate');
});

video.addEventListener('play', function (evt) {
	console.log('played');
	video.classList.toggle('desaturate');
});


video.volume = 0.2;












*/