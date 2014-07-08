var canvas, ctx, pacman = [], isPaused=false, score=0, tick=0, food, headfwd, currentheadfwd, WIDTH=20, requestId;


canvas = document.getElementById('myCanvas');

(function() {
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
}());


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
}

function game_start() {
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
  reset();

  if (!isPaused){
  }
  window.requestAnimationFrame(function(/* time */ time){
    // time ~= +new Date // the unix time
  });
}

function reset() {
  canvas.width = canvas.width;
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
};
