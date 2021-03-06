var canvas, ctx, pacman = [], isPaused=false, score=0, tick=0, food, headfwd, currentheadfwd, WIDTH=20, requestId;
var fps = 90;
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;
var pacman;
var animID=0;


canvas = document.getElementById('myCanvas');

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
 
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


function init() {
  console.log("|----init()")

  if(canvas.getContext && canvas.getContext('2d')) {
    console.log("|-----init:getContext")

    context = canvas.getContext('2d'); 	//context
    canvas.width = 600;
    canvas.height = 400;
    canvas.style.top = 0;
    canvas.style.bottom = 0;
    canvas.style.left = 0;
    canvas.style.right = 0;
    canvas.style.zIndex = -1;
    window.addEventListener('keydown', key_down, true);
    window.addEventListener('keyup', key_up, true);

  }
  else {
    // text
    var text = document.createElement("div");
    text.innerHTML = "This game can't play on browser:";
    text.setAttribute('class', 'text'); 
    document.getElementById("container").appendChild(text);
    // Browser
    var browser = document.createElement("div");
    browser.innerHTML = get_browser();
    browser.setAttribute('class', 'browser-version'); 
    document.getElementById("container").appendChild(browser);
    // text
    var text1 = document.createElement("div");
    text1.innerHTML = "version";
    text1.setAttribute('class', 'text'); 
    document.getElementById("container").appendChild(text1);
    // Version
    var version = document.createElement("div");
    version.innerHTML = get_browser_version();
    version.setAttribute('class', 'browser-version'); 
    document.getElementById("container").appendChild(version);
    // text
    var text3 = document.createElement("div");
    text3.innerHTML = "=( sorry";
    text3.setAttribute('class', 'text'); 
    document.getElementById("container").appendChild(text3);
  }
  init_pacman();
}

function init_pacman() {
    console.log("|----init_pacman()")
	var rad = 20;
	pacman = {  
    		x:rad*Math.floor(Math.random()*canvas.width/(rad*2)),
      	 	y: rad*Math.floor(Math.random()*canvas.height/(rad*2)),
         r: rad,
         c: "#FFC300",
            };
  console.log("x:"+pacman.x+", y:"+pacman.y)
  draw_pacman();
}


function draw_pacman() {
  context.beginPath();
  context.arc(pacman.x, pacman.y, pacman.r, 0, Math.PI*2);
  context.fillStyle = pacman.c;
  context.fill(); 
  context.closePath();
}

/** Find out the browser version and  name by **/
function get_browser(){
  var N=navigator.appName, ua=navigator.userAgent, tem;
  var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
  if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
  M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
  return M[0];
}

function get_browser_version(){
  var N=navigator.appName, ua=navigator.userAgent, tem;
  var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
  if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
  M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
  return M[1];
}

function update(){
  requestAnimationFrame(update);
	//window.setTimeout(requestAnimationFrame(update), 11)//
  reset();
  now = Date.now();
  delta = now - then;
  console.log("--- update -----");

  if (delta > interval) {  
    // do game calculation/updates and so on
    context.beginPath();
		context.arc( pacman.x, pacman.y, pacman.r, 0, 6);
		context.fillStyle = pacman.c;
		context.fill();   
    then = now - (delta % interval);
  }
}

function key_up(e) {
  //cancelAnimationFrame(animID);
}

function key_down(e) {
  // SPACE BAR
  if(e.keyCode == 13) {
    isPaused = !isPaused;
  }

  // LEFT KEY
  if(e.keyCode == 37 && !isPaused) {
    pacman.x -= 10;
    console.info('LEFT'); 
  }
  // RIGHT KEY
  else if(e.keyCode == 39 && !isPaused) {
    pacman.x += 10;
    console.info('RIGHT'); 
  }
  // UP KEY
  else if(e.keyCode == 38 && !isPaused) {
    pacman.y += 10;
    console.info('UP');   
  }
  //DOWN KEY
  else if(e.keyCode == 40 && !isPaused){
    pacman.y += 10;
    console.info('DOWN'); 
  }
  
}
function reset() {
  canvas.width = canvas.width;
}
(function animloop(){
  console.log("--- animloop -----")
  //requestAnimationFrame(animloop);
  //update();
})();

window.onload = function () {  
  console.log("--- on load -----")
  canvas.width = canvas.width;
  canvas.height = canvas.height;
  init();
};
