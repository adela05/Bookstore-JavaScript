// add the document root tag here
class NavComponent {
	constructor(navName) {
		this.navName = navName;
		this.template = `
		<nav class="navbar navbar-light bg-light">
  		<span class="navbar-brand mb-0 h1">${navName}</span>
		</nav>		
		`;
	}
}
class ButtonComponent {
	constructor() {
		this.template = `<button id="wild" type="button" class="btn btn-primary">Show Description</button>
		<p id="text"></p>
		`;
		//Add the Event Listener here
	}
}
class BookComponent {
	constructor(title, description) {
		this.title = title;
		this.template = `
	<div class="card" style="width: 18rem;">
  		<img class="card-img-top" src=".." alt="Card image cap">
  		<div class="card-body">
    	<h5 class="card-title">${title}</h5>
		${new ButtonComponent().template}
  		</div>
	</div>
		`;
	}
}

class BookListComponent {
	constructor(description) {
		this.description = description;
		this.bookList = [
			{
				title: 'Into the Wild',
				description:
					'A portrait of Chris McCandless chronicles his decision to withdraw from society and adopt the persona of Alexander Supertramp, offering insight into his beliefs about the wilderness and his tragic death in the Alaskan wilderness.'
			},
			{
				title: 'Underworld',
				description:
					'The centuries-long struggle between vampires and their sworn enemies, the werewolves, takes a bizarre turn in modern-day Budapest when vampire warrior Selene, a Death Dealer, finds herself drawn to Michael, an inncent American recently infected with the lupine curse. Original. (A Sony Pictures film, written by Danny McBride, releasing September 2003, starring Kate Beckinsale, Scott Speedman, Shane Brolly, Robby Gee, Erwin Leder, Wentworth Miller, Sophia Myles, Bill Nighy, & Michael Sheen) (Horror)'
			},
			{
				title: 'The Girl On The Train',
				description:
					'Obsessively watching a breakfasting couple every day to escape the pain of her losses, Rachel witnesses a shocking event that inextricably entangles her in the lives of strangers. Reprint. A #1 New York Times best-seller. Movie tie-in.'
			},
			{
				title: 'Game of Thrones',
				description:
					'HBO hit series A GAME OF THRONES is based on George R. R. Martin internationally bestselling series A SONG OF ICE AND FIRE, the greatest fantasy epic of the modern age. A GAME OF THRONES is the first volume in the series. Kings and queens, knights and renegades, liars, lords and honest men... all will play the GAME OF THRONES. Summers span decades. Winter can last a lifetime. And the struggle for the Iron Throne has begun. It will stretch from the south, where heat breeds plot, lusts and intrigues; to the vast and savage eastern lands; all the way to the frozen north, where a 700-foot wall of ice protects the kingdom from the dark forces that lie beyond. The Game of Thrones. You win, or you die. Book One of A Song of Ice and Fire begins the greatest fantasy epic of the modern age. Winter is coming.'
			},
			{
				title: 'Star Wars: Shattered Empire',
				description:
					'For the first time in the new Star Wars canon, journey with us into the time after the end of Star Wars Episode VI Return of the Jedi! Writer Greg Rucka (PUNISHER, WOLVERINE, Gotham Central) and artist Marco Checchetto (AVENGERS WORLD, PUNISHER) take us past the destruction of the second Death Star - and into the chaos of a Shattered Empire.'
			}
		];

		var cardText = this.bookList.filter((e) => e.description);

		template = `
	<div>
	${new NavComponent('My Favorite Books').template}
	<div class="container-fluid">
	${this.bookList.map((e) => new BookComponent(e).template).join('')}
	${this.cardText.map((e) => new BookComponent(e).template).join('')}
	</div>
    </div>
	`;
	}
}
document.getElementById('root').innerHTML = new BookListComponent().template;

// document.addEventListener('click', function(e) {
// 	if (e.target && e.target.id == 'wild') {
// 		if (!document.getElementsById('text').innerText) {
// 			document.getElementById('text').innerText = text;
// 			document.getElementById('wild').innerText = 'Hide Description';
// 		} else {
// 			document.getElementById('text').innerText = text;
// 			document.getElementById('wild').innerText = 'Show Description';
// 		}
// 	}
// });
