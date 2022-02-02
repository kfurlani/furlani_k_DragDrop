(() => {
	// set up the puzzle pieces and boards & make the connections to the elements on thr page
	// that we want the user to interact with
	const theButtons = document.querySelectorAll("#buttonHolder img");
		  theGameBoard = document.querySelector(".puzzle-board");

	//theButtons become this: 
	//[
	// <img1>
	// <img2>
	// <img3>
	// <img4> 
	// ]

	function changeBgImg (){
		debugger; //pause our code execution at this point
		let key = this.dataset.bgref;
		console.log(key);

		theGameBoard.style.backgroundImage = `url(../images/backGround${key}.jpg)`;
		}
		//these are the triggers we want the user to use to fire off events
	theButtons.forEach(button => button.addEventListener("click", changeBgImg));
	
})();
