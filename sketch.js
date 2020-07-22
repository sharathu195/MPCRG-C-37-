var canvas, BGimg;
var gameState = 0;
var database, playerCount;
var form, player, game;
var distance = 0;
var allPlayers;
var car1, car2, car3, car4, cars;

function setup(){
    canvas = createCanvas(displayWidth-30, displayHeight-150);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 4){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
}
