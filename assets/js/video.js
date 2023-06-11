var frameNumber = 0, // start video at frame 0
	// lower numbers = faster playback
	playbackConst = 1200,
	// get page height from video duration
	setHeight = document.getElementById("set-height"),
	// select video element
	vid = document.getElementById("v0");
// var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
/*
vid.addEventListener('loadedmetadata', function() {
});
*/

// Use requestAnimationFrame for smooth playback
function scrollPlay() {
	var frameNumber = window.pageYOffset / playbackConst;
	vid.currentTime = frameNumber;
	window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);