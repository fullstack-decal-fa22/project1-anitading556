var myWindow;

function checkStart() {
	if (start == true) {
		alert('Please close this tab. Click "back" on new tab for Home Page.');
	}
}
// Functions to open a new tab to each of the 4 sites.
function openHome() {
	checkStart()
	myWindow = window.open ('index.html');
	start = false;
}

function openAbout() {
	checkStart()
	myWindow = window.open ('about.html');
	start = false;
}

function openPortfolio() {
	checkStart()
	myWindow = window.open ('portfolio.html');
	start = false;
}

function openContact() {
	checkStart()
	myWindow = window.open ('contact.html');
	start = false;
}
