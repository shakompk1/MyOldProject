window.onload = function() {
	let snowFlake = ["&#10052;","&#10054;","&#10053;"];
	let snowColor = ["red","green","yellow","black","purple"];
	let snowSize = ["1em","2em","3em"];
	let pole = document.getElementById('pole');
	let screenWidth  = pole.clientWidth;
	let screenHeigth  = pole.clientHeight;
	let lastFlake = 0;
	let firstFlake = 0;
	let counter = 0;
	let count = 0;
	let snow = [];

	setInterval(go, 50);
	
	function Snejinka(posX, symb, color, size) {
		this.posX = posX;
		this.posY = 0;
		this.symb = symb;
		this.color = color;
		this.size = size;
	}
	
	
	function createFlake() {
		snow.push();
		snow[lastFlake] = new Snejinka(
			(Math.floor(Math.random() * screenWidth)), 	// posX
			snowFlake[lastFlake % snowFlake.length],  	// symb
			snowColor[lastFlake % snowColor.length],  	// color
			snowSize[lastFlake % snowSize.length],  	// size
		);
		console.log(snow[lastFlake]);
		addToField(lastFlake);
		lastFlake++;
	}
	
	function addToField(id) {
		var node = document.createElement("span");
		node.setAttribute("id", id);
		node.innerHTML = snow[id].symb;
		pole.appendChild(node);
	}
	
	function go() {
		counter++;
		if (counter == 1) createFlake();
		if (counter > 5 ) counter=0;
		
		for(i = firstFlake; i < lastFlake; i++){
			snow[i].posX = snow[i].posX + Math.sin(snow[i].posY/80)*2
			img = document.getElementById(i);
			img.style.left = snow[i].posX + 'px';
			img.style.top = snow[i].posY + 'px';
			img.style.color = snow[i].color;
			img.style.fontSize = snow[i].size;
			
			if (snow[i].posY < screenHeigth) snow[i].posY += 5;
			else {
				img.remove();
				delete snow[i];
				firstFlake++;
			}
						
		}
	}
	
}













