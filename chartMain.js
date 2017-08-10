var w = 640; var h = 360;
var vidDone = true;
var runs = 0;

var theCanvas = document.getElementById("vidCanvas")
var ctx = theCanvas.getContext('2d');
ctx.lineWidth = 3;
ctx.strokeStyle = "blue";
var v = document.getElementById("vid");
v.addEventListener('ended',onVidEnd,false);

var txt = document.getElementById("text");

var suvat = document.getElementById("suvat");

var btnDiv = document.getElementById("notmydiv");

var comCanvas = document.getElementById("compCanvas");
var cty = comCanvas.getContext('2d');

var comCanvas2 = document.getElementById("compCanvas2");
var ctz = comCanvas2.getContext('2d');

var graph = document.getElementById("graph");

var btn2 = document.getElementById("btn2");

var numPoints = 60;

var xscale = 2.13;
var yscale = 2.4;
var arrScale = 35 * numPoints/360;



var tmrInterval = 0.1;
var tmrDiff = 0;
//var timer = new Timer(animateParabola,tmrInterval);
//timer.stop()

var frameTime = 1/25; //25fps video
var lastAnimate = -1;
var frameItr = [];

var t = 1;
var f = 1;
var x,y;

window.addEventListener( 'resize', onWindowResize, false );

init();

function init()
{
	if (window.innerWidth < 660)
    {
    	w = window.innerWidth - 20;
    	h = w*360/640;
    }
    else
    {
    	w = 640;
    	h = 360;
    }

	[x,y] = getPoints();
	ctx.clearRect(0,0,theCanvas.width,theCanvas.height);
	cty.clearRect(0,0,comCanvas.width,comCanvas.height);
	ctz.clearRect(0,0,comCanvas2.width,comCanvas2.height);

	var pad = ((window.innerWidth-w)/2);
	var toppad = 80;
	var btnpad = ((window.innerWidth - btn.clientWidth)/2);
	var imgpad = (window.innerWidth - suvat.width)/2;

	var cntHeight = 0;

	v.width = w;
    v.height = h;
    v.style.padding = toppad.toString() + "px " + pad.toString() + "px";
	vidCanvas.style.width = w;
    vidCanvas.style.height = h;
    vidCanvas.style.padding = toppad.toString() + "px " + pad.toString() + "px";
    comCanvas.style.width = w;
    comCanvas.style.height = h;
    comCanvas.style.padding = toppad.toString() + "px " + pad.toString() + "px";
    comCanvas2.style.width = w;
    comCanvas2.style.height = h;
    comCanvas2.style.padding = toppad.toString() + "px " + pad.toString() + "px";

    cntHeight += h + toppad - 5;
    btnDiv.style.top = cntHeight + "px";

    graph.style.width = w;
    graph.style.height = h;
    graph.style.padding = "0px " + pad.toString() + "px";

    cntHeight += 30;
    graph.style.top = cntHeight + "px";

    cntHeight += 320;
    txt.style.top = cntHeight + "px";
    
    //btnDiv.style.left = (window.innerWidth - btn.width)/2;
    btnDiv.style.width = w;
    btnDiv.style.padding = "10px " + btnpad.toString() + "px";
    suvat.style.width = 377*w/640;
    suvat.style.height = 165*w/640;
    suvat.style.padding = "0px " + imgpad.toString() + "px";

    GRAPHS();


    //vidCanvas.padding = 100;


}




function Run()
{
	btn.disabled = true;
	ctx.clearRect(0,0,theCanvas.width,theCanvas.height);
	v.play();
	vidDone = false;
	t=1;
	f=-1
	lastAnimate = -1;
	//timer.restart(0);
	Plotly.purge('graph');
	GRAPHS();
	animate();

};

function animate()
{
	ballPos = (147.7*v.currentTime-66.33);
	if (t < ballPos*numPoints/640)
	{
		ctx.beginPath();
		ctx.moveTo(x[t-1],y[t-1]);
		ctx.lineTo(x[t],y[t]);
		ctx.stroke();
		components();
		updateGraph();

		lastAnimate = v.currentTime;
		t++;
	}

	if (t<=numPoints+2)
	{
		setTimeout(animate,0.01);
	}
}

function components()
{	
	cty.clearRect(0,0,comCanvas.width,comCanvas.height);
	cty.lineWidth = 1;
	cty.strokeStyle = "red";

	cty.beginPath();
	/*cty.moveTo(x[t-1],y[t-1]);
	cty.lineTo(x[t-1],y[t-1]+ (y[t]-y[t-1])*100);*/
	

	arrow(cty, x[t-1] , y[t-1] , x[t-1]+ (x[t]-x[t-1])*arrScale, y[t-1]);
	arrow(cty , x[t-1] , y[t-1] , x[t-1] , y[t-1]+ (y[t]-y[t-1])*arrScale);

	cty.stroke()

	ctz.clearRect(0,0,comCanvas2.width,comCanvas2.height);
	ctz.strokeStyle = "black";
	ctz.lineWidth = 1;

	ctz.beginPath();
	arrow(ctz, x[t-1] , y[t-1] , x[t-1]+ (x[t]-x[t-1])*arrScale, y[t-1]+ (y[t]-y[t-1])*arrScale);
	// console.log("ARROWS!");

	ctz.stroke();
}

function GRAPHS()
{
	var [f,g] = [x,y];

 	Plotly.plot('graph', [
 	{
   		y: [150-g[0]],
   		x: [f[0]],
   		mode: 'lines',
   		line: {color: '#80CAF6'}
   		
	}], 
	{
		margin: {t:10,l:10,r:10,b:20},
		xaxis: {range: [0,320], showticklabels: false},
		yaxis: {range: [0,150], showticklabels: false},
		legend: false
	});
}

function updateGraph()
{
	var [f,g] = [x,y];
  	Plotly.extendTraces('graph',
   	{
   	    y: [[150-g[t]]],
   	    x: [[f[t]]]
   	}, [0])
}


function arrow(context, fromx, fromy, tox, toy)
{
   var headlen = 5;   // length of head in pixels
   var angle = Math.atan2(toy-fromy,tox-fromx);
   context.moveTo(fromx, fromy);
   context.lineTo(tox, toy);
   context.lineTo(tox-headlen*Math.cos(angle-Math.PI/6),toy-headlen*Math.sin(angle-Math.PI/6));
   context.moveTo(tox, toy);
   context.lineTo(tox-headlen*Math.cos(angle+Math.PI/6),toy-headlen*Math.sin(angle+Math.PI/6));
}

function onVidEnd(e)
{
	btn.disabled=false;
	cty.clearRect(0,0,comCanvas.width,comCanvas.height);
	ctz.clearRect(0,0,comCanvas2.width,comCanvas2.height);
	//timer.stop();
	//console.log(t,frames);
}

function onWindowResize() {

    
    init();
}

function getPoints()
{
	//var points = [];
	var x = [];
	var y = [];
	for (var i= 0; i <= numPoints+2; i++)
	{
		x[i]=(640/numPoints)*i;
		y[i]=11561*x[i]*x[i]/7811120 - 8473069*x[i]/7811120 + 296;
		//points[i] = new Two.Vector(x[i]*w/640,y[i]*h/360);
		x[i] = x[i]*w/640/xscale; y[i] = y[i]*h/360/yscale;

	}
	return [x,y];
}

function Timer(fn, t)
{
    var timerObj = setInterval(fn, t);

    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    // start timer using current settings (if it's not already running)
    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }

    // start with new interval, stop current interval
    this.restart = function(newT) {
        t = newT;
        return this.stop().start();
    }
}
