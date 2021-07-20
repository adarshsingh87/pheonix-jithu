document.querySelector('#year').innerHTML = new Date().getFullYear();

// navbar

const navSlide = () => {
	const burger = document.querySelector('.burger')
	const nav = document.querySelector('.nav-links')
	const navLinks = document.querySelectorAll('.nav-links li')
	const navLinksAncor = document.querySelectorAll('.nav-links li a')
	// Toggle nav
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active')
		//animate links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 5 + 0.3
				}s`
			}
		})
		//burger animation
		burger.classList.toggle('toggle')
	})
	navLinksAncor.forEach((link) => {
		link.addEventListener('click', () => {
			nav.classList.remove('nav-active')
			navLinks.forEach((link, index) => {
				if (link.style.animation) {
					link.style.animation = ''
				}
			})
			burger.classList.remove('toggle')
		})
	})
}

navSlide()

// ! carousel
$('.pri-carousel').owlCarousel({
	margin: 30,
	nav: false,
	autoplay:true,
  autoplayTimeout:4000,
	loop: true,
	responsive: {
		0: {
			items: 1,
		},
		640: {
			items: 2,
		},
		960: {
			items: 3,
		},
	},
})

$('.sec-carousel').owlCarousel({
	margin: 30,
	nav: false,
	autoplay:true,
  autoplayTimeout:4000,
	loop: true,
	responsive: {
		0: {
			items: 1,
		},
		640: {
			items: 1,
		},
		960: {
			items: 1,
		},
	},
})
