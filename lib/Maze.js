class Maze {
	var N = 1;
	var S = 2;
	var E = 4;
	var W = 8;

	var DEFAULT_WIDTH = 10;
	var DEFAULT_HEIGHT = 10;
 
	var _w = 0;
	var _h = 0;

	function DX(direction) {
		switch ( direction ) {
		case Maze.E:
			return +1;
		case Maze.W:
			return -1;
		case Maze.N:
		case Maze.S:
			return 0;
		}
		// error condition, but should never reach here
		return -1;
	}

	function DY(direction) {
		switch ( direction ) {
		case Maze.E:
		case Maze.W:
			return 0;
		case Maze.N:
			return -1;
		case Maze.S:
			return 1;
		}
		// error condition, but should never reach here
		return -1;
	}

	function OPPOSITE(direction) {
		switch ( direction ) {
		case Maze.E:
			return Maze.W;
		case Maze.W:
			return Maze.E;
		case Maze.N:
			return Maze.S;
		case Maze.S:
			return Maze.N;
		}
		// error condition, but should never reach here
		return -1;
	}

	function Maze() {
		this.(DEFAULT_WIDTH,DEFAULT_HEIGHT);
	}
	function Maze(w, h) {
		initialize(w,h);
		var _random = Math.random();
	}
	function Maze(w, h, seed) {
		initialize(w,h);
		var _random = Math.random();
		var _seed = seed;
	}
	function initialize(w, h) {
		var _w = w; var _h = h; 
		var _grid;
		for ( int j=0; j < h; ++j ) {
			for ( int i=0; i < w; ++i ) {
				_grid[j][i] = 0;
			}
		}
	}

	function draw() {

		// // draw the "top" line
		// System.out.print(" ");
		// for ( int i=0; i < (_w*2 - 1); ++i ) {
		// 	System.out.print("_");
		// }
		// System.out.println("");

		// // draw each row
		// for ( int j=0; j < _h; ++j ) {
		// 	System.out.print("|");
		// 	for ( int i=0; i < _w; ++i ) {
		// 		// render "bottom" using the "S" switch
		// 		System.out.print((_grid[j][i] & Maze.S) != 0 ? " " : "_");

		// 		// render "side" using "E" switch
		// 		if ( (_grid[j][i] & Maze.E) != 0 ) {
		// 			System.out.print(((_grid[j][i] | _grid[j][i+1]) & Maze.S) != 0 ? " " : "_" );
		// 		} else {
		// 			System.out.print("|");
		// 		}
		// 	}
		// 	System.out.println("");
		// }

		// output maze metadata
		outputMetadata();
	}

	function outputMetadata() {
		var meta = " " + _w + " " + _h;
		if ( _seed != null ) {
			meta += " " + _seed;
		} else { 
			meta += " random";
		}
		console.log(meta);	
	}
}