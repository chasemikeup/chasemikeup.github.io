// JavaScript Document

document.querySelector('p').onclick = function() {
	alert('Stop poking me and start running!')
}

// change the picture when clicked
let myImage = document.querySelector('img');
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/runner-sunset.jpg') {
			myImage.setAttribute('src', 'images/kipchoge-nike.jpg')
		}
	else {
		myImage.setAttribute('src', 'images/runner-sunset.jpg')
	}
}

// change user
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
	let userName = prompt('Please enter your name: ');
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

myButton.onclick = function() {
	setUserName();
}

