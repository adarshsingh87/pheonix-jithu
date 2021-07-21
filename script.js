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
	autoHeight:true,
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

function expandCard (i) {
	const cardContainer = $('.help-main-container')
	const card1 = $('.card1')
	const card2 = $('.card2')
	const card3 = $('.card3')
	switch(i){
		case 1:
			cardContainer.addClass('expanded-card-cont')
			card1.toggleClass('expanded-cards')
			card2.removeClass('expanded-cards')
			card3.removeClass('expanded-cards')
			break
		case 2:
			cardContainer.addClass('expanded-card-cont')
			card2.toggleClass( 'expanded-cards' )
			card1.removeClass('expanded-cards')
			card3.removeClass('expanded-cards')
			break
		case 3:
			cardContainer.addClass('expanded-card-cont')
			card3.toggleClass( 'expanded-cards' )
			card2.removeClass('expanded-cards')
			card1.removeClass('expanded-cards')
			break
		default:
			break
	}
}
