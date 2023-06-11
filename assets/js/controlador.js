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
