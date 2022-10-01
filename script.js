var myWindow;

// Functions to open a new tab to each of the 4 sites.
function openHome() {
	myWindow = window.open ('homePage.html');
}

function openAbout() {
	checkStart()
	myWindow = window.open ('about.html');
}

function openPortfolio() {
	checkStart()
	myWindow = window.open ('portfolio.html');
}

function openContact() {
	checkStart()
	myWindow = window.open ('contact.html');
}
