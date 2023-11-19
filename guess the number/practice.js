/*console.log(document.getElementById('myHeader'))
const myElement = document.getElementsByClassName('btn tryagain')
console.log(myElement, 'my element')
const allButtons = document.getElementsByTagName('button')
console.log(allButtons, 'all buttons')
const mytext = document.querySelector('.text')
console.log(mytext, 'my text')
mytext.textContent = 'Incepe a ghici'
document.querySelector('.tryagain').setAttribute('title', 'try again')
document.getElementsByTagName('h1').innerText = 'Ghiceste numarul'
document.querySelector('h1').textContent = 'Ghiceste numarul'
const myNewEl = document.createElement('div')
myNewEl.textContent = 'ai 20 de incercari'
console.log(myNewEl)
const beforeEl = document.querySelector('.label-score')
document.querySelector('.right').insertBefore(myNewEl, beforeEl)*/

//Manipulating CSS

/*const buttonAgain = document.querySelector('.tryagain')

if (buttonAgain.innerText === 'Again') {
	buttonAgain.style.backgroundColor = 'green'
} else {
	buttonAgain.style.backgroundColor = 'blue
}*/

//cssText

//document.querySelector('h1').style.cssText = 'font-family: Sans-serif; color: red; font-size: 16px'

//  ClassList

//  Events
function chgCol() {
  selectNumber.style.backgroundColor = "red";
}

let selectNumber = document.querySelector(".number");
//prindem eventul mouseEnter si schimbam culoarea in rosu
selectNumber.addEventListener("mouseenter", chgCol);
//capturam clickul pe el si chemam functie externa
selectNumber.addEventListener("click", function () {
  afisat("click");
  selectNumber.removeEventListener("mouseenter", chgCol);
});
// salvam functia aparte

function afisat(a) {
  selectNumber.textContent = a;
}

//capturam iesirea mouse-ului din element si returnam valorile initiale

const culoareaInitiala = (selectNumber.style.backgroundColor = "white");

selectNumber.addEventListener("mouseleave", function () {
  selectNumber.style.backgroundColor = culoareaInitiala;
  selectNumber.textContent = "?";
});

//remove event Listner

//selectNumber.removeEventListener('mouseenter', chgCol)



//functii cu Argumente suplimentare

function handleClickWithArg(message) {
	console.log(message)
}

let myMessage = 'Mesaj personalizat: Butonul a fost tastat'
element.addEventListener('click', () => { handleClickWithArg(myMessage) })


//! Exercitiu - creem programa care calculeaza numarul de clicuri facute pe un element alex

let clickAgain = document.querySelector('.tryagain')
let a = 1

clickAgain.addEventListener('click', (event) => {
	console.log(`a fost facut ${event.type} de ${a} ori`)
	a++
})


// cod scris in data de 13.10 la lectie

const buttonAgain = document.querySelector(".tryagain");
const butonulCheck = document.querySelector(".check");
const messageElement = document.querySelector(".text");
const secretNumberElem = document.querySelector(".number");
const guessElem = document.querySelector(".guess");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".higscore");

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

butonulCheck.addEventListener("click", function () {
  let guess = Number(guessElem.value);
  //if no number in input
  if (!guess) {
    messageElement.messageElement = "No number!";
  } else if (guess == secretNumber) {
    messageElement.textContent = "Bingo";
    document.body.style.backgroundColor = "lightgreen";
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      messageElement.textContent = "To high !";
      score--;
      scoreEl.textContent = score;
    } else {
      messageElement.textContent = "GAME OVER!!!";
      scoreEl.textContent = "0";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      messageElement.textContent = "To low !";
      score--;
      scoreEl.textContent = score;
    } else {
		
      messageElement.textContent = "GAME OVER!!!";
      scoreEl.textContent = "0";
    }
  }
});

buttonAgain.addEventListener("click", function (event) {
  score = 20;
  scoreEl.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  messageElement.textContent = "Start guessing...";
  document.body.style.backgroundColor = "";
  guessElem.value = "";
  secretNumberElem.textContent = "?";
});