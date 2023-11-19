const labelWelcome = document.querySelector('.welcome')
const labelDate = document.querySelector('.date')
const labelBalance = document.querySelector('.balance__value')
const labelSumIn = document.querySelector('.summary__value--in')
const labelSumOut = document.querySelector('.summary__value--out')
const labelSumInterest = document.querySelector('.summary__value--interest')

const containerApp = document.querySelector('.app')
const containerMovements = document.querySelector('.movements')

const btnLogin = document.querySelector('.login__btn')
const btnTransfer = document.querySelector('.form__btn--transfer')
const btnLoan = document.querySelector('.form__btn--loan')
const btnClose = document.querySelector('.form__btn--close')
const btnSort = document.querySelector('.btn--sort')

const inputLoginUsername = document.querySelector('.login__input--user')
const inputLoginPin = document.querySelector('.login__input--pin')
const inputTransferTo = document.querySelector('.form__input--to')
const inputTranfesAmount = document.querySelector('.form__input--amount')
const inputLoanAmount = document.querySelector('.form__input--loan--amount')
const inputCloseUsername = document.querySelector('.form__input--user')
const inputClosePin = document.querySelector('.form__input--pin')



//! Initial data

const account1 = {
	owner: 'Vladimir Borgan',
	movements: [150, 700, 1245, -630, 200, -1010],
	interesRate: 1.6,
	pin: 1234
}
const account2 = {
	owner: 'Ion Antonescu',
	movements: [1150, 870, 245, -1630, 20, -1110],
	interesRate: 1.3,
	pin: 4321
}
const account3 = {
	owner: 'Anatol Ionescu',
	movements: [5510, 7100, -1245, -1630, 2200, -10110],
	interesRate: 0.9,
	pin: 1111
}

const accounts = [account1, account2, account3]

labelDate.textContent = new Date().toLocaleDateString('en-GB')


//! Afisam tranzactiile

const displayMovements = function (transactions, sortAsc) {
	containerMovements.innerHTML = ""
	const copyOfMovements1 = transactions.map((a) => a)  //copie a array-ului transactions
	const copyOfMovements2 = sortAsc ? copyOfMovements1.sort((a, b) => a-b) : transactions
	copyOfMovements2.forEach(function (mov, i) {
		const type = mov > 0 ? 'deposit' : 'withdrawal'
		const html = `<div class="movements__row"><div class="movements__type movements__type--${type}">${i+1} ${type}</div>
			<div class="movements__value">${mov}</div></div>`
		//containerMovements.appendChild(html)
		containerMovements.insertAdjacentHTML("afterbegin", html)
	})
}
displayMovements(account1.movements)

//! Calculam si afisam balanta totala

const calcBalance = function (acc) {
	const balance = acc.movements.reduce((arr, mov) => arr + mov, 0)
	acc.balance = balance  //adaugam proprietatea balance la fiecrae obiect - account
	labelBalance.textContent = `${balance} $`
}
calcBalance(account1)

//* Creem account Usernames

const createUserName = function (allAccounts) {
	allAccounts.forEach(function (acc) {
		acc.username = acc.owner.toLowerCase()
			.split(' ') // transform string in array 
			.map(name => name[0])//choose first element
			.join('') //join firsts elements of each 'after split' array
		console.log(acc.username)
		
	})
}

createUserName(accounts)

function updateUI(account) {
	displayMovements(account.movements)
	calcBalance(account)
	//calcDisplaySummary(account)
}

//! Login form

let currentAcc

btnLogin.addEventListener('click', function (e) {
	// prevent default evita transmiterea formuarului si refresh la pagina
	e.preventDefault()
	//cautam acc cu username specificat
	currentAcc = accounts.find(acc => acc.username === inputLoginUsername.value)
	//comparam pin-ul
	if (currentAcc?.pin === Number(inputLoginPin.value)) {
		//schimbam UI comform acc logat
		labelWelcome.textContent = `Welcome back, ${currentAcc.owner}!`
		containerApp.style.opacity = 1
		// Curatim inputurile / forma de logare
		inputLoginUsername.value = inputLoginPin.value = ''
		inputLoginPin.blur()
		//adaptam tranzactiile comform currentAcc
		updateUI(currentAcc)
	} else {
		inputLoginUsername.value = inputLoginPin.value = ""
		inputLoginUsername.focus()
		alert(`Ati introdus credentiale gresite!`)
	}
})

//Transfer banesc
btnTransfer.addEventListener('click', function (e) {
	e.preventDefault()
	const amount = Number(inputTranfesAmount.value)
	const userTransfer = inputTransferTo.value
	//golim forma transfer
	inputTranfesAmount.value = inputTransferTo.value = ''
	//transfer
		//Verificarea sumei disponibile
	//Gasirea userAcc unde tranferam suma
	const receiverAcc = accounts.find(acc => acc.username === userTransfer)
	if (amount <= currentAcc.balance && amount > 0 && receiverAcc ) {
		
		//extragem suma din contul curent
	currentAcc.movements.push(-amount)
		//adaugam suma transferata in contul user-ului selectat
	receiverAcc.movements.push(amount)
	} else {
		alert('Credit insuficient pentru a transfera suma solicitata')
	}
	//update UI
	updateUI(currentAcc)
})

btnLoan.addEventListener('click', function (e) {
	e.preventDefault()
	//Se accepta numai cererile cu sume mai mici decat 30% din balanta contului
	const amount = Number(inputLoanAmount.value)
	inputLoanAmount.value = ''
	currentAcc.movements.push(amount)
	updateUI(currentAcc)
})

btnClose.addEventListener('click', function (e) {
	e.preventDefault()
	// gasim
	const userToDelete = inputCloseUsername.value 
	const pinUserToDelete = Number(inputClosePin.value)
	if (userToDelete === currentAcc.username && pinUserToDelete === currentAcc.pin) {
		const index = accounts.findIndex(acc => acc.username === currentAcc.username)
		// stergem contul
		accounts.splice(index, 1)
		//ascundem continutul
		containerApp.style.opacity = 0
		inputCloseUsername.value = inputClosePin.value = ''
		//Schimbam mesajul de salut
		labelWelcome.textContent = 'Log in to get started'
	} else {
		alert('Ati introdus datele gresite')
	}
}
)

//! Sortare
let sortAsc = false
btnSort.addEventListener('click', function (e) {
	e.preventDefault()
	displayMovements(currentAcc.movements, !sortAsc)
	sortAsc = !sortAsc
})
