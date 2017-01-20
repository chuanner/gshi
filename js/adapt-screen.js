function setFontSize() {
	document.documentElement.style.fontSize = window.innerWidth / 16 + 'px';
}
setFontSize();
window.addEventListener('resize', function() {
	setFontSize();
});

window.addEventListener('load', function() {
	FastClick.attach(document.body);
}, false);