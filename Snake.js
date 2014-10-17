


//Constants
	var COLS= 26, ROWS = 26;
	//ID's
	var EMPTY = 0, SNAKE = 1, FRUIT = 2; 
	// directions
	var LEFT = 0, UP=1, RIGHT=2, DOWN=3;
	//keyCodes
	var KEY_LEFT = 37, KEY_UP = 38, KEY_RIGHT = 39, KEY_DOWN = 40;
	
	var canMove = true;
	
	var WALLS = 3;
	
	var WIN = 4;
	var WIN2 = 5;
	var WIN3 = 6;
	var WIN4 = 7;
	var WIN5 = 8;
	var WIN6 = 9;
	

	var grid = {
		
		width: null, 
		height: null, 
		_grid: null,
		
		init: function(d, c, r){
			this.width = c;
			this.height = r;
			
			this._grid = [];
			for (var x=0; x < c; x++) {
				this._grid.push([]);
				for (var y=0; y < r; y++){
				this._grid[x].push(d);
				}
			}
		},
		
		set: function(val, x, y){
			this._grid[x][y] = val;
		},
		
		get: function(x, y){
			return this._grid[x][y];
		}
	}
	
	var snake = {
	
		direction: null, 
		last: null,
		_queue: null, 
		
		init: function(d, x, y){
			this.direction = d;
			
			this._queue = [];
			this.insert(x, y);
		},
		
		insert: function(x, y){
			this._queue.unshift({x:x, y:y});
			this.last = this._queue[0];
		},
		
		remove: function(){
			return this._queue.pop();
		}
	}
	
	function setFood(){
		var empty = [];
		for (var x = 0; x < grid.width; x++){
			for (var y = 0; y < grid.height; y++){
				if (grid.get(x, y) === EMPTY){
					empty.push({x:x, y:y});
				}
			}
		}
		var randpos = empty[Math.floor(Math.random()*empty.length)];
		grid.set(FRUIT, randpos.x, randpos.y);
	}
	
	
	
	//game objects
	var canvas, ctx, keystate, frames;
	var score = 0;
	var level = 1;
	var tempScore = 0;
	var clickUp = false;
	var clickDown = false;
	var clickLeft = false;
	var clickRight = false;

	
	function main(){
		canvas = document.createElement("canvas");
		canvas.width = COLS * 30;
		canvas.height = ROWS * 30;
		ctx = canvas.getContext("2d");
		document.body.appendChild(canvas);
		
		ctx.font = "21px Helvetica";
		
		frames = 0;
		keystate = {};
		document.addEventListener("keydown", function(evt) {
			keystate[evt.keyCode] = true;
		});
		document.addEventListener("keyup", function(evt) {
			delete keystate[evt.keyCode];
		});
		
		init();
		loop();
	}
	// initiating game levels
	function init(){
		tempScore = 0;
		frames = 0;
		clickUp = false;
		clickDown = false;
		clickLeft = false;
		clickRight = false;
		grid.init(EMPTY, COLS, ROWS);
		
		var sp = {x:Math.floor(COLS/2), y:ROWS-1};
		snake.init(DOWN, sp.x, sp.y);
		
		grid.set(SNAKE, sp.x, sp.y);
		
		setFood();
		placeWalls();
		placeWin();
	}
	
	function initlvl2(){
		tempScore = 0;
		frames = 0;
		clickUp = false;
		clickDown = false;
		clickLeft = false;
		clickRight = false;
		main();
		grid.init(EMPTY, COLS, ROWS);
		
		var sp = {x:Math.floor(COLS/2), y:ROWS-1};
		snake.init(DOWN, sp.x, sp.y);
		
		grid.set(SNAKE, sp.x, sp.y);
		
		setFood();
		placeWallslvl2();
		placeWinlvl2();
	}
	
	function initlvl3(){
		tempScore = 0;
		frames = 0;
		clickUp = false;
		clickDown = false;
		clickLeft = false;
		clickRight = false;
		main();
		grid.init(EMPTY, COLS, ROWS);
		
		var sp = {x:Math.floor(COLS/2), y:ROWS-1};
		snake.init(DOWN, sp.x, sp.y);
		
		grid.set(SNAKE, sp.x, sp.y);
		
		setFood();
		placeWallslvl3();
		placeWinlvl3();
	}
	function initlvl4(){
		tempScore = 0;
		frames = 0;
		clickUp = false;
		clickDown = false;
		clickLeft = false;
		clickRight = false;
		main();
		grid.init(EMPTY, COLS, ROWS);
		
		var sp = {x:Math.floor(COLS/2), y:ROWS-1};
		snake.init(RIGHT, COLS-18, ROWS-15);
		
		grid.set(SNAKE, COLS-18, ROWS-55);
		
		setFood();
		placeWallslvl4();
		placeWinlvl4();;
	}
	
	function initlvl5(){
		tempScore = 0;
		frames = 0;
		clickUp = false;
		clickDown = false;
		clickLeft = false;
		clickRight = false;
		main();
		grid.init(EMPTY, COLS, ROWS);
		
		var sp = {x:Math.floor(COLS/2), y:ROWS-1};
		snake.init(RIGHT, COLS-18, ROWS-15);
		
		grid.set(SNAKE, COLS-18, ROWS-55);
		
		setFood();
		placeWallslvl5();
		placeWinlvl5();;
	}
	
		function initlvl6(){
		tempScore = 0;
		frames = 0;
		clickUp = false;
		clickDown = false;
		clickLeft = false;
		clickRight = false;
		main();
		grid.init(EMPTY, COLS, ROWS);
		
		var sp = {x:Math.floor(COLS/2), y:ROWS-1};
		snake.init(RIGHT, COLS-18, ROWS-15);
		
		grid.set(SNAKE, COLS-18, ROWS-55);
		
		setFood();
		placeWallslvl6();
		placeWinlvl6();;
	}
	function loop(){
		update();
		draw();
		
		window.requestAnimationFrame(loop, canvas);
	}
	//placing the walls and the win square for all the levels.
	function placeWalls(){

		grid.set(WALLS, COLS-1, ROWS-5);
		grid.set(WALLS, COLS-18, ROWS-4);
	}
	
	function placeWin(){

		grid.set(WIN, COLS-17, ROWS-8);
	}
	
	function placeWallslvl2(){

		grid.set(WALLS, COLS-21, ROWS-15);
		grid.set(WALLS, COLS-18, ROWS-24);
		grid.set(WALLS, COLS-3, ROWS-1);
		grid.set(WALLS, COLS-4, ROWS-23);
		grid.set(WALLS, COLS-22, ROWS-22);
		grid.set(WALLS, COLS-17, ROWS-16);
		grid.set(WALLS, COLS-5, ROWS-5);
		grid.set(WALLS, COLS-23, ROWS-6);
		grid.set(WALLS, COLS-22, ROWS-19);
	}
	
	function placeWinlvl2(){

		grid.set(WIN2, COLS-17, ROWS-18);
	}
	
	function placeWallslvl3(){

		grid.set(WALLS, COLS-21, ROWS-5);
		grid.set(WALLS, COLS-19, ROWS-1);
		grid.set(WALLS, COLS-9, ROWS-1);
		grid.set(WALLS, COLS-8, ROWS-11)
		grid.set(WALLS, COLS-18, ROWS-11);
		grid.set(WALLS, COLS-20, ROWS-26);
		grid.set(WALLS, COLS-16, ROWS-25);
		
	}
	
	function placeWinlvl3(){

		grid.set(WIN3, COLS-17, ROWS-8);
	}
	
	function placeWallslvl4(){

		grid.set(WALLS, COLS-16, ROWS-15);
		grid.set(WALLS, COLS-20, ROWS-15);
		grid.set(WALLS, COLS-15, ROWS-16);
		grid.set(WALLS, COLS-14, ROWS-15);
		grid.set(WALLS, COLS-19, ROWS-3);
		grid.set(WALLS, COLS-4, ROWS-4);
		grid.set(WALLS, COLS-5, ROWS-23);
		grid.set(WALLS, COLS-19, ROWS-22);
		grid.set(WALLS, COLS-18, ROWS-5);
		grid.set(WALLS, COLS-24, ROWS-6);
		grid.set(WALLS, COLS-23, ROWS-1);
		grid.set(WALLS, COLS-2, ROWS-2);
		grid.set(WALLS, COLS-3, ROWS-15);
		grid.set(WALLS, COLS-16, ROWS-14);
		

		
	}
	
	function placeWinlvl4(){

		grid.set(WIN4, COLS-15, ROWS-15);
	}
	
	function placeWallslvl5(){

		grid.set(WALLS, COLS-16, ROWS-15);
		grid.set(WALLS, COLS-17, ROWS-20);
		grid.set(WALLS, COLS-17, ROWS-10);
		grid.set(WALLS, COLS-6, ROWS-19);
		grid.set(WALLS, COLS-6, ROWS-11);
		grid.set(WALLS, COLS-7, ROWS-24);
		grid.set(WALLS, COLS-7, ROWS-4);
		grid.set(WALLS, COLS-24, ROWS-5);
		grid.set(WALLS, COLS-23, ROWS-2);
		grid.set(WALLS, COLS-21, ROWS-3);
		grid.set(WALLS, COLS-22, ROWS-1);
		grid.set(WALLS, COLS-22, ROWS-26);
		grid.set(WALLS, COLS-19, ROWS-2);
		grid.set(WALLS, COLS-20, ROWS-26);
		grid.set(WALLS, COLS-7, ROWS-25);
		grid.set(WALLS, COLS-8, ROWS-7);
		grid.set(WALLS, COLS-26, ROWS-8);



		
	}
	
	function placeWinlvl5(){

		grid.set(WIN5, COLS-25, ROWS-5);
	}
	
		function placeWallslvl6(){

		grid.set(WALLS, COLS-6, ROWS-5);
		grid.set(WALLS, COLS-8, ROWS-2);




		
	}
	
	function placeWinlvl6(){

		grid.set(WIN6, COLS-5, ROWS-5);
	}
	//snake movement across the screen with time.
	function update(){
		frames++;
		//canMove = true;
		if (keystate[KEY_LEFT] /*&& snake.direction !== RIGHT*/ && canMove == true){
		snake.direction = LEFT;
		canMove = false;
		}
		if (keystate[KEY_UP] /*&& snake.direction !== DOWN*/ && canMove == true){ 
		snake.direction = UP;
		canMove = false;
		}
		if (keystate[KEY_RIGHT] /*&& snake.direction !== LEFT*/ && canMove == true){ 
		snake.direction = RIGHT;
		canMove = false;
		}
		if (keystate[KEY_DOWN] /*&& snake.direction !== UP*/ && canMove == true){
		snake.direction = DOWN;
		canMove = false;
		}
		if (keystate[KEY_DOWN] /*&& snake.direction !== UP*/ && canMove == true){
		snake.direction = DOWN;
		canMove = false;
		}
		if (clickUp == true && canMove == true){
		snake.direction = UP;
		canMove = false;
		}
		if (clickDown == true && canMove == true){
		snake.direction = DOWN;
		canMove = false;
		}
		if (clickLeft == true && canMove == true){
		snake.direction = LEFT;
		canMove = false;
		}
		if (clickRight == true && canMove == true){
		snake.direction = RIGHT;
		canMove = false;
		}
		// more with snake movement.
		if (frames%5 === 0){
			var nx = snake.last.x;
			var ny = snake.last.y;
			
			switch (snake.direction){
				case LEFT:
					nx--;
					break;
				case UP:
					ny--;
					break;
				case RIGHT:
					nx++;
					break;
				case DOWN:
					ny++;
					break;
			
			}
			//reset the game when leaving boundaries.
			if (0 > nx || nx > grid.width-1 || 0 > ny || ny > grid.height-1
			|| grid.get(nx, ny) === SNAKE){
				return stop();
			}
			// hitting walls stopping movement and picking up fruit.
			if (grid.get(nx, ny) === WALLS){
				var tail = {x:nx, y:ny};
				return stop();
			}
			else if (grid.get(nx, ny) === FRUIT){
				var tail = {x:nx, y:ny};
				score++;
				tempScore++;
				setFood();
			}
			else if (grid.get(nx, ny) === WIN){
				var tail = {x:nx, y:ny};
				score++;
				level++;
				tempScore++;
				return initlvl2();
			}
			else if (grid.get(nx, ny) === WIN2){
				var tail = {x:nx, y:ny};
				score++;
				level++;
				tempScore++;
				return initlvl3();
			}
			else if (grid.get(nx, ny) === WIN3){
				var tail = {x:nx, y:ny};
				score++;
				level++;
				tempScore++;
				return initlvl4();
			}
			else if (grid.get(nx, ny) === WIN4){
				var tail = {x:nx, y:ny};
				score++;
				level++;
				tempScore++;
				return initlvl5();
			}
			else if (grid.get(nx, ny) === WIN5){
				var tail = {x:nx, y:ny};
				score++;
				level++;
				tempScore++;
				return initlvl6();
			}
			else if (grid.get(nx, ny) === WIN6){
				var tail = {x:nx, y:ny};
				score++;
				level++;
				tempScore++;
				//return initlvl7();
			}
			else{
				var tail = snake.remove();
				grid.set(EMPTY, tail.x, tail.y);
				tail.x = nx;
				tail.y = ny;
			}
			
			grid.set(SNAKE, tail.x, tail.y);
			
			
			snake.insert(tail.x, tail.y);
		
		}
	}
	
	function stop(){
		snake.direciton = null;
		canMove = true;
		update();
	}
	
	function moveUp(){
		clickUp = true;
		clickDown = false;
		clickRight = false;
		clickLeft = false;
		snake.direciton = UP;
		update();
	}
	function moveDown(){
		clickUp = false;
		clickDown = true;
		clickRight = false;
		clickLeft = false;
		snake.direciton = DOWN;
		update();
	}
	function moveLeft(){
		clickUp = false;
		clickDown = false;
		clickRight = false;
		clickLeft = true;
		snake.direciton = LEFT;
		update();
	}
	function moveRight(){
		clickUp = false;
		clickDown = false;
		clickRight = true;
		clickLeft = false;
		snake.direciton = RIGHT;
		update();
	}
	//retry button
	function retry(){
		if (level === 1){
			score -= tempScore;
			init();
		}
		else if (level === 2){
			score -= tempScore;
			initlvl2();
		}
		else if (level === 3){
			score -= tempScore;
			initlvl3();
		}
		else if (level === 4){
			score -= tempScore;
			initlvl4();
		}
		else if (level === 5){
			score -= tempScore;
			initlvl5();
		}
		else if (level === 6){
			score -= tempScore;
			initlvl6();
		}
	}

	$("body").on("swiperight",function swipeRight(){
			moveRight();
	});
	$("body").on("swipeleft",function swipeLeft(){
			moveLeft();
			
	});
	$("body").on('swipeup',function swipeUp() {
			moveUp();
	});
	$("body").on('swipedown',function swipeDown() {
			moveDown();
	});
	


	//drawing the game board 
	function draw(){
		var tw = canvas.width/grid.width;
		var th = canvas.height/grid.height;
		
		for (var x = 0; x < grid.width; x++){
			for (var y = 0; y < grid.height; y++){
				switch (grid.get(x, y)){
					case EMPTY:
						ctx.fillStyle = "#fff";
						break;
					case SNAKE:
						ctx.fillStyle = "#0ff";
						break;
					case FRUIT:
						ctx.fillStyle = "#f00";
						break;
					case WALLS:
						ctx.fillStyle = "#ff0";
						break;
					case WIN:
						ctx.fillStyle = "#00FF00";
						break;
					case WIN2:
						ctx.fillStyle = "#00FF00";
						break;
					case WIN3:
						ctx.fillStyle = "#00FF00";
						break;
					case WIN4:
						ctx.fillStyle = "#00FF00";
						break;
					case WIN5:
						ctx.fillStyle = "#00FF00";
						break;
					case WIN6:
						ctx.fillStyle = "#00FF00";
						break;
				}
				ctx.fillRect(x*tw, y*th, tw, th);
			}
		}  
		ctx.fillStyle = "#000";
		ctx.fillText("SCORE: " + score, 10, canvas.height-10);
		ctx.fillText("LEVEL: " + level, 680, canvas.height-10);
	}
	function newGame(){
		main();
	}
	function mainMenu(){
		window.location.href = '#pageone';
		location.reload();
		
	}
