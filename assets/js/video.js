let navegador = navigator.userAgent;
if (
	navigator.userAgent.match(/Android/i) ||
	navigator.userAgent.match(/webOS/i) ||
	navigator.userAgent.match(/iPhone/i) ||
	navigator.userAgent.match(/iPad/i) ||
	navigator.userAgent.match(/iPod/i) ||
	navigator.userAgent.match(/BlackBerry/i) ||
	navigator.userAgent.match(/Windows Phone/i)
) {
	document.getElementById("set-height").innerHTML = `
    <video
    id="v0"
    tabindex="0"
    autobuffer
    preload
    playsinline
    autoplay
    type="video/mp4"
    src="./assets/img/pruebaaa.mp4"></video>
    `;
} else {
	document.getElementById("set-height").innerHTML = `
    <video
    id="v0"
    tabindex="0"
    autobuffer
    preload
    playsinline
    type="video/mp4"
    src="./assets/img/pruebaaa.mp4"></video>
    `;
}

//Detectar si es windows o mac
if (navigator.appVersion.indexOf("Win") != -1) {
	console.log("Windows");
	document.getElementById("videoCont").innerHTML = ``;
	//Quitar los estilos del id videoCont

	new ScrollyVideo({
		scrollyVideoContainer: "videoCont",
		src: "./assets/img/pruebaaa.mp4",
	});
	document.getElementById("videoCont").style = ``;
} else if (navigator.appVersion.indexOf("Mac") != -1) {
	var frameNumber = 0, // start video at frame 0
		// lower numbers = faster playback
		playbackConst = 1200,
		// get page height from video duration
		setHeight = document.getElementById("set-height"),
		// select video element
		vid = document.getElementById("v0");

	// Use requestAnimationFrame for smooth playback
	function scrollPlay() {
		var frameNumber = window.pageYOffset / playbackConst;
		vid.currentTime = frameNumber;
		window.requestAnimationFrame(scrollPlay);
	}

	window.requestAnimationFrame(scrollPlay);
}
