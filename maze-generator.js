var args = process.argv;
var width = parseInt(args[0]);
var height = parseInt(args[0]);
var seed = parseInt(args[0]);
var delay = 0.01;

const N = 1;
const S = 2;
const E = 4;
const W = 8;
const DX = { E => 1, W => -1, N =>  0, S => 0 }
const DY = { E => 0, W =>  0, N => -1, S => 1 }
const OPPOSITE = { E => W, W =>  E, N =>  S, S => N }
