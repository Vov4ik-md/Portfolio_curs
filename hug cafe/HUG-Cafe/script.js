let tip = () => {
	let initialBill = Number(document.getElementById("totalbill").value);
	let serviceLevel = Number(document.querySelector('input[name="servlev"]:checked').value);
	let numberOfPeople = Number(document.getElementById("splitting").value);
	let result = (initialBill + initialBill * serviceLevel) / numberOfPeople
	document.getElementById("finalBill").innerHTML = result
}



/*let calculate = document.querySelector('.button')

calculate.addEventListener('click', function (event) {
	event.preventDefault(); 
	let initialBill = document.getElementById("totalbill");
  let serviceLevel = document.querySelector('input[name="servlev"]:checked');
  let numberOfPeople = document.getElementById("splitting");
	let billAmount = Number(initialBill.value);
	let tipsValue = Number(serviceLevel.value);
	let numbOfCust = Number(numberOfPeople.value);
	let result = (billAmount + billAmount * tipsValue) / numbOfCust;
	document.getElementById("finalBill").innerHTML = result;
})*/



/*const tip = () => {
	let billAmount = Number(initialBill.value)
	for (let i = 0; i < serviceLevel.length; i++) {
		if (serviceLevel[i].checked == true) {
			serviceLev = Number(document.querySelectorAll('.servlev')[i].value)
		}
	}
	let numOfPeople = Number(numberOfPeople.value)
	const result = (billAmount + billAmount * serviceLev) / numOfPeople
	document.getElementById('finalBill').innerHTML = `${result}`
}*/






//Var 1

/*let calculate = document.querySelector('.btn') 
 
calculate.addEventListener('click', function (event) { 
   event.preventDefault() 
   let totalBillAmount = document.getElementById('total') 
   let serviceLevel = document.querySelector('input[type="radio"]:checked') 
   let numberOfPersons = document.querySelector('select') 
   let resultTotal = document.querySelector('.total-per-person') 
   let result 
 
   let total = Number(totalBillAmount.value) 
   let service = Number(serviceLevel.value) 
   let person = Number(numberOfPersons.value) 
 
   result = (totalBillAmount + (totalBillAmount * service) / 100) / person 
   resultTotal.innerHTML = result.toFixed(2) 
   console.log(result.toFixed(2)) 
})*/

//var 2
/*const calculate = document.getElementById('calculate')

calculate.addEventListener('click', function (event) {
  event.preventDefault()
  const factura = Number(document.getElementById('bill').value)
  const service = Number(document.querySelector('input[type="radio"]:checked').value)
  const numPers = Number(document.getElementById('people').value)
  const total = document.getElementById('tip')
  let result = (factura + factura * service) / numPers
  total.innerHTML = (${result.toFixed(2)} lei pentru fiecare persoana)
})*/