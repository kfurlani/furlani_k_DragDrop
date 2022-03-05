(() => {
	// set up the puzzle pieces and boards & make the connections to the elements on thr page
	// that we want the user to interact with
	let theButtons = document.querySelectorAll("#buttonHolder img"),
		  puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
		  dropZones = document.querySelectorAll(".drop-zone"),
		  theGameBoard = document.querySelector(".puzzle-board");

	const piecePaths = ["topLeft", "topRight","bottomLeft","bottomRight"];

	//theButtons become this: 
	//[
	// <img1>
	// <img2>
	// <img3>
	// <img4> 
	// ]

	function changeImageSet (){
	
		//debugger; //pause our code execution at this point
		let key = this.dataset.bgref;
		console.log(key);

		theGameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`;

		piecePaths.forEach((piece, index) => {
			puzzlePieces[index].src = `images/${piece + this.dataset.bgref}.jpg`; 
		})
		}

	function startDrag (event) {
		console.log("started dragging");
		event.dataTransfer.setData("draggedElement", event.target.id);
	}

	function draggedOver (event) {
		// event is the user event (a click, a drag, a drop)
		// some elements have default behaviour (like an anchor tag) -> we need to block that behaviour
		// and script our own
		// that's what event.preventDefault() does -> override the default behaviour (block it)
		event.preventDefault ();
		console.log("dragged over me");
	}

	function handleDrop (event) {
		event.preventDefault ();
		console.log("dropped on me");
		let currentEl = event.dataTransfer.getData("draggedElement");

		console.log(`dropped this element:`, currentEl);
		this.appendChild(document.querySelector(`#${currentEl}`));
	}

		//these are the triggers we want the user to use to fire off events
	theButtons.forEach(button => button.addEventListener("click", changeImageSet));
	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", startDrag));
	dropZones.forEach(zone => {
	 zone.addEventListener ("dragover" , draggedOver);
	 zone.addEventListener("drop" , handleDrop);
	});
	
})();
