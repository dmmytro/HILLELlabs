import './styles/main.css'

const container = document.querySelector('.container');
const checkMale = document.getElementById('male');
const checkFemale = document.getElementById('female');
const checkDead = document.getElementById('dead');
const checkAlive = document.getElementById('alive');
const liveStatus = document.getElementsByClassName('live-status');

function createCard(data) {
	const card = document.createElement('div');
	card.classList.add('card');

	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');

	const cardTitle = document.createElement('div');
	cardTitle.classList.add('title');
	const cardTitleH1 = document.createElement('h1');
	cardTitleH1.innerHTML = data.name;
	cardTitle.append(cardTitleH1);

	const cardStatus = document.createElement('div');
	cardStatus.classList.add('status');
	const cardLiveStatus = document.createElement('div');
	cardLiveStatus.classList.add('live-status');

	if(liveStatus === 'Dead'){
		cardLiveStatus.classList.add('dead');
	}

	const cardStatusP = document.createElement('p');
	const cardStatusPText = document.createTextNode(data.species +  ' - ' + data.status);
	cardStatus.append(cardLiveStatus);
	cardStatusP.append(cardStatusPText);
	cardStatus.append(cardStatusP);
	cardTitle.append(cardStatus);
	cardInfo.append(cardTitle);

	const cardContent = document.createElement('div');
	cardContent.classList.add('content');
	const cardContentText = document.createTextNode(data.location.name);
	cardContent.append(cardContentText);
	cardInfo.append(cardContent);

	card.append(cardInfo);

	const cardImage = document.createElement('div');
	cardImage.classList.add('card-image');
	const image = document.createElement('img');
	image.src = data.image;
	image.alt = 'Some image';
	cardImage.append(image);
	card.append(cardImage);

	container.append(card);
}

let characterList = [];

checkMale.addEventListener("click", () => {
	getCards(checkMale, characterList, 'Male')
});

checkFemale.addEventListener("click", () => {
	getCards(checkFemale, characterList, 'Female')
});

checkDead.addEventListener("click", () => {
	getCards(checkDead, characterList, 'Dead')
});

checkAlive.addEventListener("click", () => {
	getCards(checkAlive, characterList, 'Alive')
});

let getCharacters = function(){
	let charactersArray = [];
	for (let i = 0; i <= 12; i++) {
		charactersArray.push(i);	
	}
	return charactersArray.toString();
}
const api = `https://rickandmortyapi.com/api/character/${getCharacters()}`


function setData(data) {
	return (characterList = data);
}

function drawCharacter(data){
	data.forEach(element => createCard(element));
}

getPeople();
async function getPeople(){
	await fetch(api)
	.then(resp => resp.json())
	.then(setData)
	.then(drawCharacter)

}

function getCards(element, characters, option){
	container.replaceChildren();
	if (element.checked === true) {	
		checkBoxWork(option);
		filterPeople(characters, option);
	}else{
		container.replaceChildren();
		drawCharacter(characters);
	}
}

function checkBoxWork(option){
	const checkBoxes = [
		{
			name: checkMale,
			status: 'Male'
		},

		{
			name: checkFemale,
			status: 'Female'
		},

		{
			name: checkDead,
			status: 'Dead'
		},

		{
			name: checkAlive,
			status: 'Alive'
		}
	];

	checkBoxes.forEach(element => {
		if (element.status != option) {
			element.name.checked = false;
		}
	});
}

function filterPeople(chracters, value){
	chracters.forEach(element => {
		if(element.gender === value || element.status === value){
			createCard(element);
		}
	});
}


