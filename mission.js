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

$('.counter-cont').height($('.counter-cont').innerWidth())


	var firebaseConfig = {
    apiKey: "AIzaSyBijIp4DieeK6eSjZnZsHVckfJKUkcZoMA",
		authDomain: "website-counter-79808.firebaseapp.com",
		databaseURL: "https://website-counter-79808-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "website-counter-79808",
    storageBucket: "website-counter-79808.appspot.com",
    messagingSenderId: "1002380118417",
    appId: "1:1002380118417:web:646ef5f3edb4f2e3883230"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

	var database = firebase.database();

var counter = 0;

database.ref('counter').on('value', function(snapshot) {
  if (snapshot.val() && snapshot.val().clickCounter) {
    counter = snapshot.val().clickCounter;
  }
  
  renderCounter();
}, function(errorObject) {
  // In case of error this will print the error
  console.log("The read failed: " + errorObject.code);
});


if (!counter) {
  counter = 0;
} else {
  counter = parseInt(counter);
}

function renderCounter() {
  $('#counter').html(counter);
}

// $('.form-submit').on('click', function() {
//   counter++;

  
//   database.ref('counter').set({
//     clickCounter: counter
//   })
//   renderCounter();
// })


function SubForm () {
	const formData = {
		"name": document.getElementById( 'name-input' ).value,
		"Email": document.getElementById( 'email-input' ).value,
		"PhNumber": document.getElementById( 'phone-input' ).value,
		"impact": document.getElementById( 'impact-input' ).value,
		"My public events which you may be able to attend": document.getElementById( 'pub-events' ).checked,
		"My articles or books": document.getElementById( 'articles-and-books' ).checked,
		"Opportunities the Phoenix community get to support a scholarship for a student who needs it, to pursue further education": document.getElementById( 'support-a-scholarship' ).checked
	}
	
	if ( formData.name === '' || formData.Email === '' ) {
		alert('Please fill the Name and Email fields')
	} else {
			$.ajax({
        url:'https://sheetdb.io/api/v1/ljcjmmvki2tha',
        type:'post',
        data: formData,
				success: function () {
					counter++;
          database.ref('counter').set({
            clickCounter: counter
          })
					renderCounter();
					document.getElementById('close').click()
          alert('Success')
        },
        error: function(){
          alert('Error occurred')
        }
		});
	}
}
