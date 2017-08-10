var w = 640; var h = 360;
var vidDone = true;
var runs = 0;

var colour = 'green';

var theCanvas = document.getElementById("vidCanvas")
var ctx = theCanvas.getContext('2d');
ctx.lineWidth = 3;
ctx.strokeStyle = colour;
var v = document.getElementById("vid");
v.addEventListener('ended',onVidEnd,false);

var txt = document.getElementById("text");

var suvat = document.getElementById("suvat");

var btnDiv = document.getElementById("notmydiv");
var drop = document.getElementById("drop");

var comCanvas = document.getElementById("compCanvas");
var cty = comCanvas.getContext('2d');

var comCanvas2 = document.getElementById("compCanvas2");
var ctz = comCanvas2.getContext('2d');

var graph = document.getElementById("graph");

var btn2 = document.getElementById("btn2");

var e = document.getElementById("myList");

var axsTime = document.getElementById("time");

var L = document.getElementById("left");
var R = document.getElementById("right");
var bkg = document.getElementById("white");

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
var vx, vy;

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

	[x,y,vx,vy] = getPoints();
	ctx.clearRect(0,0,theCanvas.width,theCanvas.height);
	cty.clearRect(0,0,comCanvas.width,comCanvas.height);
	ctz.clearRect(0,0,comCanvas2.width,comCanvas2.height);

	var pad = ((window.innerWidth-w)/2);
	var toppad = 80;
	var btnpad = ((window.innerWidth - btn.clientWidth)/2);
	var imgpad = (window.innerWidth - suvat.width)/2;

	var cntHeight = 15;

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


    v.style.top = cntHeight + "px";
    vidCanvas.style.top = cntHeight + "px";
    comCanvas.style.top = cntHeight + "px";
    comCanvas2.style.top = cntHeight + "px";

    cntHeight += h + toppad - 5;
    btnDiv.style.top = cntHeight + "px";
    //btnDiv.style.left = pad;
    btnDiv.style.width = pad;
    btnDiv.style.padding = "10px " + pad.toString() + "px";

    btn.style.backgroundColor = colour;
    //e.style.backgroundColor = colour;

    drop.style.top = cntHeight + "px";
    //drop.style.left = pad;
    drop.style.width = 1;
    drop.style.padding = "10px " + pad.toString() + "px";

    graph.style.width = w;
    graph.style.height = h;
    graph.style.padding = "0px " + pad.toString() + "px";

    cntHeight += 45;
    graph.style.top = cntHeight + "px";

    cntHeight += 320 + 25;
    txt.style.top = cntHeight + "px";
    var txtWidth = (w);
    txt.style.width = txtWidth.toString() + "px";
    txt.style.padding = "10px " + (pad).toString() + "px";
    //txt.style.left = (0.2*window.innerWidth).toString + "px";


    axsTime.style.top = cntHeight+5 + "px";
    axsTime.style.padding = "20px";

    suvat.style.width = (377*w/640).toString() + "px";
    suvat.style.height = (165*w/640).toString() + "px";
    //suvat.style.padding = "0px " + imgpad.toString() + "px";


    var rWidth = Math.max(0.8*pad - 10,0)


    L.style.width = window.innerWidth + "px";
    L.style.height = "1300px";
    L.style.backgroundColor = colour;

    bkg.style.left = rWidth + "px";
    bkg.style.width = (window.innerWidth - 2*rWidth).toString() + "px"
    bkg.style.top = "80px"
    bkg.style.height = "1200px";

    GRAPHS();

    //vidCanvas.padding = 100;


}




function Run()
{
	btn.disabled = true;
	btn.style.backgroundColor = '#ccffcc';
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

function GRAPHS()
{
	var f = x;
	var g, yrange;
	[g,yrange] = choice(e.options[e.selectedIndex].value,0);

 	Plotly.plot('graph', [
 	{
   		y: [[g]],
   		x: [f[0]],
   		mode: 'lines',
   		line: {color: colour}
   		
	}], 
	{
		margin: {t:10,l:20,r:10,b:20},
		xaxis: {range: [0,320], showticklabels: false,title: 'time'},
		yaxis: {range: yrange, showticklabels: false, title: e.options[e.selectedIndex].value},
		showlegend: false
	});
}

function updateGraph()
{
	var f = x;
	var g, yrange;
	[g,yrange] = choice(e.options[e.selectedIndex].value,t);
  	Plotly.extendTraces('graph',
   	{
   	    y: [[g]],
   	    x: [[f[t]]]
   	}, [0])
}

function components()
{	
	cty.clearRect(0,0,comCanvas.width,comCanvas.height);
	cty.lineWidth = 1;
	cty.strokeStyle = "red";

	cty.beginPath();
	/*cty.moveTo(x[t-1],y[t-1]);
	cty.lineTo(x[t-1],y[t-1]+ (y[t]-y[t-1])*100);*/
	

	arrow(cty, x[t-1] , y[t-1] , x[t-1]+ vx[t]*arrScale, y[t-1]);
	arrow(cty , x[t-1] , y[t-1] , x[t-1] , y[t-1]+ vy[t]*arrScale);

	cty.stroke()

	ctz.clearRect(0,0,comCanvas2.width,comCanvas2.height);
	ctz.strokeStyle = "black";
	ctz.lineWidth = 1;

	ctz.beginPath();
	arrow(ctz, x[t-1] , y[t-1] , x[t-1]+ vx[t]*arrScale, y[t-1]+ vy[t]*arrScale);
	// console.log("ARROWS!");

	ctz.stroke();
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
	btn.style.backgroundColor = colour;
	cty.clearRect(0,0,comCanvas.width,comCanvas.height);
	ctz.clearRect(0,0,comCanvas2.width,comCanvas2.height);
}

function onWindowResize() {
    init();
}

function getPoints()
{
	//var points = [];
	var x = [];
	var y = [];
	var vx = [];
	var vy = [];
	x[0] = 0;
	y[0] = 296/yscale;
	for (var i= 1; i <= numPoints+2; i++)
	{
		x[i]=(640/numPoints)*i;
		y[i]=11561*x[i]*x[i]/7811120 - 8473069*x[i]/7811120 + 296;
		//points[i] = new Two.Vector(x[i]*w/640,y[i]*h/360);
		x[i] = x[i]*w/640/xscale; y[i] = y[i]*h/360/yscale;

		vx[i] = x[i]-x[i-1];
		vy[i] = y[i]-y[i-1];
	}
	vy[0] = vy[1];
	vx[0] = vx[1];
	return [x,y,vx,vy];
}

function choice(i,j)
{
    if (i=="Y coordinate")
    {
        return [150-y[j],[0,150]];
    }
    else if (i=="Y velocity")
    {
        return [-vy[j],[-10,10]];
    }
    else if (i=="X velocity")
    {
        return  [vx[j],[0,10]];
    }
    else if (i=="X coordinate")
    {
        return  [x[j],[0,320]];
    }
}
