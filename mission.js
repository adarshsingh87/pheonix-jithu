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

function SubForm () {
	const formData = {
"name": document.getElementById('name-input').value,
"Email": document.getElementById('email-input').value,
"PhNumber": document.getElementById('phone-input').value,
"impact": document.getElementById('impact-input').value,
"My public events which you may be able to attend": document.getElementById('pub-events').checked,
"My articles or books": document.getElementById('articles-and-books').checked,
"Opportunities the Phoenix community get to support a scholarship for a student who needs it, to pursue further education": document.getElementById('support-a-scholarship').checked
}

    $.ajax({
        url:'https://api.apispreadsheets.com/data/15691/',
        type:'post',
        data: formData,
        success: function(){
          alert('Success')
        },
        error: function(){
          alert('Error occurred')
        }
		} );
}

  var firebaseConfig = {
    apiKey: "AIzaSyCYYB2rA5SKxDrmnvmx5dSPHKxzv07AERw",
		authDomain: "realtime-view-counter-cb7a5.firebaseapp.com",
		databaseURL: "https://realtime-view-counter-cb7a5-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "realtime-view-counter-cb7a5",
    storageBucket: "realtime-view-counter-cb7a5.appspot.com",
    messagingSenderId: "861723606283",
    appId: "1:861723606283:web:88afc27b0b5775781b760e"
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

$('.form-submit').on('click', function() {
  counter++;

  
  database.ref('counter').set({
    clickCounter: counter
  })
  renderCounter();
})
