const btnMore = document.querySelector('.viewmore')
const hidden = document.querySelector('.hidden')
const btnSubmit = document.querySelector('.submit')
let inputName = document.querySelector('.numele')
let inputMail = document.querySelector('.mail')
let inputSubiect = document.querySelector(".subiect")
let inputMessage = document.querySelector(".mesaj")

let inputArr =[inputName, inputMail, inputSubiect, inputMessage]


$(document).ready(function () {
	$(window).scroll(function () {
		//sticky navbar on scroll script
		if (this.scrollY > 20) {
			$('.navbar').addClass("sticky");
		} else {
			$('.navbar').removeClass("sticky");
		}

		//scroll-up buton show/hide script
		if (this.scrollY > 500) {
			$('.scroll-up-btn').addClass("show");
		} else {
			$('.scroll-up-btn').removeClass("show");
		}
	});

	// toggle menu/navbar script
	$('.menu-btn').click(function () {
		$('.navbar .menu').toggleClass("active");
		$('menu-btn i').toggleClass("active");
	});
	
	// typing text animation script
	var typed = new Typed(".typing", {
		strings: ["FrontEnd", "Software"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});

	btnMore.addEventListener('click', function () {
		if (hidden.style.display === "none") {
			hidden.style.display = 'block'
		} else {
			hidden.style.display = 'none'
		}
	},false
	)

	btnSubmit.addEventListener('click', function (e) {
		e.preventDefault
		if (inputName.value == '' || inputMail.value == '' || inputSubiect.value == '' || inputMessage.value == '') {
			alert('Completeaza toate campurile')
		} else {
			alert('Mesajul tau a fost inregistrat')
			inputName.value = "";
			inputMail.value = "";
			inputSubiect.value = "";
			inputMessage.value = "";
		}
	})


	/*btnSubmit.addEventListener('click', function (e)  {
		e.preventDefault
		for (let i = 0; i <= inputArr.length; i++) {
			if (!inputArr[i].value) {
				alert('Completeaza toate campurile')
			} else {
				alert('Mesajul tau a fost inregistrat')
				inputArr[i].value == "";
			}
			
		}
	}
	)*/
	//var typed = new Typed(".typing", {
		//strings: ["FrontEnd Developer", "React Developer", "Software Developer"],
		//typeSpeed: 100,
		//backSpeed: 60,
		//loop: true
	//});

	// owl carousel script
	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplay: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			600: {
				items: 2,
				nav: false
			},
			1000: {
				items: 3,
				nav: false
			}
		}
	});
});


