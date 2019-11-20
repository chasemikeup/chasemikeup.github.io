// JavaScript Document

// change user
let nameButton = document.querySelector('button.ChangeName');
let myHeading = document.querySelector('h1.Name');
function setUserName() {
	let userName = prompt('Personalize the title of the website with your name! Please enter it here: ');
	if(!userName || userName === null)
		{
			myHeading.textContent = 'Chase Mike Up!'
		}
	else {
		localStorage.setItem('name', userName);
		myHeading.textContent = 'Chase ' + userName + ' Up!';
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
}
else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Chase ' + storedName + ' Up!';
}

nameButton.onclick = function() {
	setUserName();
}