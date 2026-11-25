function getResults() {
	let html = document.getElementById('html');
	if(html.checked) { // if filled in
		console.log("The user chose html");
	}

	let css = document.getElementById('css');
	if(css.checked) {
		console.log("The user chose css");
	}

	let javascript = document.getElementById('javascript');
	if(javascript.checked) {
		console.log("The user chose javascript");
	}
}