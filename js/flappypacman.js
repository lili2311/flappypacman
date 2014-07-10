var canvas, ctx, pacman = [], isPaused=false, score=0, tick=0, food, headfwd, currentheadfwd, WIDTH=20, requestId;


canvas = document.getElementById('myCanvas');

/**(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
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
}());**/


function init() {
  if(canvas.getContext && canvas.getContext('2d')) {
    context = canvas.getContext('2d'); 	//context
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.bottom = 0;
    canvas.style.left = 0;
    canvas.style.right = 0;
    canvas.style.zIndex = -1;
  }
  else {/**
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
    document.getElementById("container").appendChild(text3);**/
  }
}

function game_start() {
}

/** Find out the browser version and  name by **/
/**function get_browser(){
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
}**/
//create the particles

var ps = [];
var MAX_NUM = 500;
var colors = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ];

function spawn() {
  for(var i=0; ps.length < MAX_NUM; i++) {
    ps[i] = { x: Math.random()*window.innerWidth,
              y: Math.random()*window.innerHeight,
              r: Math.random()*5,
              c: colors[Math.floor(Math.random()*colors.length)]
            };                  
   }
}

function update(){
  reset();
  
  for(var i=0; i<ps.length; i++) {
    ctx.beginPath();
		ctx.arc( ps[i].x, ps[i].y, ps[i].r, 0, 6);
		ctx.fillStyle = ps[i].c;
		ctx.fill(); 
  }

  if (!isPaused){
      window.requestAnimationFrame(update);
  }
}

function reset() {
  canvas.width = canvas.width;
    //reset the x and y coordinates if leaves the canvas
    for(var i=0; i<ps.length; i++) {
        //reset if y or coordinate has left the canvas
        if(ps[i].y > c.height) {
            ps[i].y = Math.random()*window.innerHeight;
            ps[i].color = colors[Math.floor(Math.random() * colors.length)];
        }
        //reset if x or coordinate has left the canvas
        if(ps[i].x > c.width || ps[i].x < 0){
          ps[i].x = Math.random()*window.innerWidth;
          ps[i].color = colors[Math.floor(Math.random() * colors.length)];
        }
	}
}
function stop() {
	if (requestId)
	window.cancelAnimationFrame(requestId);
	requestId = 0;
}

window.onload = function () {  
  canvas.width = canvas.width;
  canvas.height = canvas.height;
  init();
  spawn();
};
