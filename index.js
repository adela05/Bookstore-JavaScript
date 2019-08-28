// add the document root tag here
bookList = [
	{
		title: 'Into the Wild',
		image: 'images/intoTheWild.jpg',
		id: 'btn1'
	},
	{
		title: 'Underworld',
		image: 'images/Underworld.jpg',
		id: 'btn2'
	},
	{
		title: 'The Girl On The Train',
		image: 'images/girlOnTrain.jpg',
		id: 'btn3'
	},
	{
		title: 'Game of Thrones',
		image: 'images/gameOfThrones.jpg',
		id: 'btn4'
	},
	{
		title: 'Star Wars: Shattered Empire',
		image: 'images/starWars.jpg',
		id: 'btn5'
	}
];
class NavComponent {
	constructor(logo) {
		this.logo = logo;
		this.template = `
		<nav class="navbar navbar-light banner">
	  <span class="navbar-brand mb-0 h1 logo">${this.logo}</span>
	</nav>
		`;
	}
}

class BookComponent {
	constructor(title, image, id) {
		this.title = title;
		this.image = image;
		this.id = id;
		this.template = `
		<div class="books mt-4 mr-2 ml-3">	
		<div class="card" style="width: 12rem;">
  		<img class="card-img-top" src=${this.image} alt="Card image cap">
  		<div class="card-body">
    	<h5 class="card-title">${title}</h5>
		<button id=${this.id} type="button" class="btn btn-primary show">Show Description</button>
		</div>
		</div>
		</div>		
		`;
		// Event Listener for button1
		document.addEventListener('click', function(e) {
			if (e.target && e.target.id == 'btn1') {
				if (document.getElementById('btn1').innerText == 'Show Description') {
					document.getElementById(
						'text'
					).innerText = `A portrait of Chris McCandless chronicles his decision to withdraw from society and adopt the persona of Alexander Supertramp, offering insight into his beliefs about the wilderness and his tragic death in the Alaskan wilderness.`;
					document.getElementById('btn1').className = 'btn btn-danger';
					document.getElementById('btn1').innerText = 'Hide Description';
				} else {
					document.getElementById('text').innerText = '';
					document.getElementById('btn1').className = 'btn btn-primary';
					document.getElementById('btn1').innerText = 'Show Description';
				}
			}
		});
		// Event Listener for button2
		document.addEventListener('click', function(e) {
			if (e.target && e.target.id == 'btn2') {
				if (document.getElementById('btn2').innerText == 'Show Description') {
					document.getElementById(
						'text'
					).innerText = `The centuries-long struggle between vampires and their sworn enemies, the werewolves, takes a bizarre turn in modern-day Budapest when vampire warrior Selene, a Death Dealer, finds herself drawn to Michael, an inncent American recently infected with the lupine curse. Original. `;
					document.getElementById('btn2').className = 'btn btn-danger';
					document.getElementById('btn2').innerText = 'Hide Description';
				} else {
					document.getElementById('text').innerText = '';
					document.getElementById('btn2').className = 'btn btn-primary';
					document.getElementById('btn2').innerText = 'Show Description';
				}
			}
		});
		// Event Listener for button3
		document.addEventListener('click', function(e) {
			if (e.target && e.target.id == 'btn3') {
				if (document.getElementById('btn3').innerText == 'Show Description') {
					document.getElementById(
						'text'
					).innerText = `Obsessively watching a breakfasting couple every day to escape the pain of her losses, Rachel witnesses a shocking event that inextricably entangles her in the lives of strangers. Reprint. A #1 New York Times best-seller. Movie tie-in.`;
					document.getElementById('btn3').className = 'btn btn-danger';
					document.getElementById('btn3').innerText = 'Hide Description';
				} else {
					document.getElementById('text').innerText = '';
					document.getElementById('btn3').className = 'btn btn-primary';
					document.getElementById('btn3').innerText = 'Show Description';
				}
			}
		});
		// Event Listener for button4
		document.addEventListener('click', function(e) {
			if (e.target && e.target.id == 'btn4') {
				if (document.getElementById('btn4').innerText == 'Show Description') {
					document.getElementById(
						'text'
					).innerText = `A GAME OF THRONES is the first volume in the series. Kings and queens, knights and renegades, liars, lords and honest men... all will play the GAME OF THRONES. Summers span decades. Winter can last a lifetime. And the struggle for the Iron Throne has begun. It will stretch from the south, where heat breeds plot, lusts and intrigues; to the vast and savage eastern lands; all the way to the frozen north, where a 700-foot wall of ice protects the kingdom from the dark forces that lie beyond. The Game of Thrones. You win, or you die. Book One of A Song of Ice and Fire begins the greatest fantasy epic of the modern age. Winter is coming.`;
					document.getElementById('btn4').className = 'btn btn-danger';
					document.getElementById('btn4').innerText = 'Hide Description';
				} else {
					document.getElementById('text').innerText = '';
					document.getElementById('btn4').className = 'btn btn-primary';
					document.getElementById('btn4').innerText = 'Show Description';
				}
			}
		});
		// Event Listener for button5
		document.addEventListener('click', function(e) {
			if (e.target && e.target.id == 'btn5') {
				if (document.getElementById('btn5').innerText == 'Show Description') {
					document.getElementById(
						'text'
					).innerText = `For the first time in the new Star Wars canon, journey with us into the time after the end of Star Wars Episode VI Return of the Jedi! Writer Greg Rucka (PUNISHER, WOLVERINE, Gotham Central) and artist Marco Checchetto (AVENGERS WORLD, PUNISHER) take us past the destruction of the second Death Star - and into the chaos of a Shattered Empire. It's the explosive lead-in to this winter's blockbuster big-screen Star Wars revival, and everything you need to know is right here!`;
					document.getElementById('btn5').className = 'btn btn-danger';
					document.getElementById('btn5').innerText = 'Hide Description';
				} else {
					document.getElementById('text').innerText = '';
					document.getElementById('btn5').className = 'btn btn-primary';
					document.getElementById('btn5').innerText = 'Show Description';
				}
			}
		});
	}
}
class BookListComponent {
	template = `
	<div>
		${new NavComponent('My Favorite Books').template}
		</div>	
	<div>
	${bookList.map((e) => new BookComponent(e.title, e.image, e.id).template).join('')}	
	</div>	
	`;
}

document.getElementById('root').innerHTML = new BookListComponent().template;
