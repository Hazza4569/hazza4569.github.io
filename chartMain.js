var w = 640; var h = 360; // set width and height of video

var colour = 'cyan'; //set theme colour
var colour2 = 'magenta';
document.getElementsByTagName("h1")[0].style.color = colour;

var v = document.getElementById("vid"); 

var txt = document.getElementById("text");
var title = document.getElementById("title");
var suvat = document.getElementById("suvat");

var btnDiv = document.getElementById("notmydiv");
var drop = document.getElementById("drop");

var theCanvas = document.getElementById("vidCanvas")
var ctx = theCanvas.getContext('2d');

var comCanvas = document.getElementById("compCanvas");
var cty = comCanvas.getContext('2d');

var comCanvas2 = document.getElementById("compCanvas2");
var ctz = comCanvas2.getContext('2d');						//canvases are for drawing over video

var graph = document.getElementById("graph");

var e = document.getElementById("myList");

var L = document.getElementById("left");
var bkg = document.getElementById("white");


var numPoints = 40;	//set number of points to plot curve in
//(higher number for better res, lower for better performance)

var xscale = 2.13; //empirical values needed to scale drawings to correct size,
var yscale = 2.4;  //not sure why needed, but couldn't get to work without.
var arrScale = 35 * numPoints/360; //scale size of velocity arrows

var t = 1; //initialise counter
var x,y; 
var vx, vy,ax,ay;

window.addEventListener( 'resize', onWindowResize, false );
v.addEventListener('ended',onVidEnd,false);

init();


function init()
{
	//for resize events
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

	[x,y,vx,vy,ax,ay] = getPoints();

	ctx.clearRect(0,0,theCanvas.width,theCanvas.height); //clear canvases on resize to prevent odd shapes
	cty.clearRect(0,0,comCanvas.width,comCanvas.height);
	ctz.clearRect(0,0,comCanvas2.width,comCanvas2.height);
	Plotly.purge('graph');

	ctx.lineWidth = 3;				//arc
	ctx.strokeStyle = colour;		//	
	cty.lineWidth = 1;				//component velocities
	cty.strokeStyle = "red";		//
	ctz.strokeStyle = "black";		//resultant velocity
	ctz.lineWidth = 1;				//

	//STYLING:
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
    btnDiv.style.width = pad;
    btnDiv.style.padding = "10px " + pad.toString() + "px";

    btn.style.backgroundColor = colour;

    drop.style.top = cntHeight + "px";
    drop.style.width = 1;
    drop.style.padding = "10px " + pad.toString() + "px";

    graph.style.width = w;
    graph.style.height = h;
    graph.style.padding = "0px " + pad.toString() + "px";

    cntHeight += 45;
    graph.style.top = cntHeight + "px";

    txtInit();


    var rWidth = Math.max(0.8*pad - 10,0)

    L.style.width = window.innerWidth + "px"; //background div
    L.style.height = "1300px";
    //L.style.backgroundColor = colour;  //can be used to switch to coloured bg instead of picture

    bkg.style.left = rWidth + "px";
    bkg.style.width = (window.innerWidth - 2*rWidth).toString() + "px"
    bkg.style.top = "80px"
    bkg.style.height = "1200px";

    title.style.width="400px";
    title.style.left= (window.innerWidth/2 - 200).toString() + "px";
    title.style.padding = "-5px";
    title.style.height="70px";
    title.style.top="20px";

    //GRAPHS(); //Make graph
}

function txtInit()
{
    var pad = ((window.innerWidth-w)/2);
    cntHeight = 15 + h + 80 - 5 + 45;

    if (btn.disabled) {cntHeight+=340}

    txt.style.top = cntHeight + "px";
    var txtWidth = (w);
    txt.style.width = txtWidth.toString() + "px";
    txt.style.padding = "10px " + (pad).toString() + "px";

    suvat.style.width = (377*w/640).toString() + "px";
    suvat.style.height = (165*w/640).toString() + "px";
}

function Run()
{
    if (btn.value=="Analyse")
    {
        analyse();
    }
    else
    {
        throwBall();
    }
};

function throwBall()
{
    btn.value = "Analyse";
    ctx.clearRect(0,0,theCanvas.width,theCanvas.height);
    Plotly.purge('graph');
    txtInit();
    v.play();
}

function analyse()
{
    btn.disabled = true;
    btn.style.backgroundColor = '#cccccc';
    txtInit();
    GRAPHS();
    t=1;
    animate();
}

function animate() //animate loop works recursively without a setInterval, based on advancement of video 
{
	ballPos = (147.7*v.currentTime-66.33); //position of ball in pixels as function of video time
	if (t < ballPos*numPoints/640) //NB: numpoints/640 is conversion from pixels to points plotted over
	{
        if (btn.disabled)
        {
		  ctx.beginPath();
		  ctx.moveTo(x[t-1],y[t-1]);
		  ctx.lineTo(x[t],y[t]);
		  ctx.stroke();
		  components();
		  updateGraph();
        }
		t++;
	}

	if (t<=numPoints+2)
	{
		setTimeout(animate,0.001); //setTimeout is only required to prevent too much unnecessary recursion
	}
    else
    {
        cty.clearRect(0,0,comCanvas.width,comCanvas.height);
        ctz.clearRect(0,0,comCanvas2.width,comCanvas2.height);
        btn.disabled=false;
        btn.value="Throw!"
        btn.style.backgroundColor = colour;
    }
}

function GRAPHS()
{
	var f = x;
	var h, g, yrange;
    var h2, g2, yrange2;
    var h3, g3, yrange3;
	[g,h,yrange] = choice2('Distance',0);
    [g2,h2,yrange2] = choice2('Velocity',0);
    [g3,h3,yrange3] = choice2('Acceleration',0);

    var traceDistY = {
        y: [[g]],
        x: [f[0]],
        mode: 'lines',
        line: {color: colour},
        name: 'Vertical'
    };

    var traceDistX = {
        y: [[h]],
        x: [f[0]],
        mode: 'lines',
        line: {color: colour2},
        name: 'Horizontal'
    };

    var traceVelY = {
        y: [[g2]],
        x: [f[0]],
        xaxis: 'x2',
        yaxis: 'y2',
        mode: 'lines',
        line: {color: colour},
        showlegend: false
        //name: 'Vertical'
    };

    var traceVelX = {
        y: [[h2]],
        x: [f[0]],
        mode: 'lines',
        xaxis: 'x2',
        yaxis: 'y2',
        line: {color: colour2},
        showlegend: false
        //name: 'Horizontal'
    };

    var traceAccY = {
        y: [[g3]],
        x: [f[0]],
        xaxis: 'x3',
        yaxis: 'y3',
        mode: 'lines',
        line: {color: colour},
        showlegend: false
        //name: 'Vertical'
    };

    var traceAccX = {
        y: [[h3]],
        x: [f[0]],
        mode: 'lines',
        xaxis: 'x3',
        yaxis: 'y3',
        line: {color: colour2},
        showlegend: false
        //name: 'Horizontal'
    };



 	Plotly.plot('graph', [traceDistY,traceDistX,traceVelX,traceVelY,traceAccX,traceAccY], 
	{
		margin: {t:10,l:20,r:10,b:20},
		xaxis: {domain: [0,1], range: [0,320], showticklabels: false,title: 'time'},
		yaxis: {domain: [0,0.45], range: yrange, showticklabels: false, title: 'Distance'},
        xaxis2: {domain: [0,0.45], anchor: 'y2', range: [0,320], showticklabels: false},
        yaxis2: {domain: [0.55,1], anchor: 'x2', range: yrange2, showticklabels: false, title: 'Velocity'},
        xaxis3: {domain: [0.55,1], anchor: 'y3', range: [0,320], showticklabels: false},
        yaxis3: {domain: [0.55,1], anchor: 'x3', range: yrange3, showticklabels: false, title: 'Acceleration'},
		showlegend: true, legend: {x:0.8,y:0.58},
        showgrid: true
	});
    console.log(ax,ay)
}

function updateGraph()
{
	var f = x;
	var h, g, yrange;
    var h2, g2, yrange2;
    var h3, g3, yrange3;
    [g,h,yrange] = choice2('Distance',t);
    [g2,h2,yrange2] = choice2('Velocity',t);
    [g3,h3,yrange3] = choice2('Acceleration',t);
    Plotly.extendTraces('graph', 
   	{
   	    y: [[g],[h],[g2],[h2],[g3],[h3]], 
   	    x: [[f[t]],[f[t]],[f[t]],[f[t]],[f[t]],[f[t]]]
   	}, [0,1,2,3,4,5])
}

function components()
{	
	cty.clearRect(0,0,comCanvas.width,comCanvas.height);
	cty.beginPath();

	arrow(cty, x[t-1] , y[t-1] , x[t-1]+ vx[t]*arrScale, y[t-1]);
	arrow(cty , x[t-1] , y[t-1] , x[t-1] , y[t-1]+ vy[t]*arrScale);

	cty.stroke()

	ctz.clearRect(0,0,comCanvas2.width,comCanvas2.height);
	ctz.beginPath();

	arrow(ctz, x[t-1] , y[t-1] , x[t-1]+ vx[t]*arrScale, y[t-1]+ vy[t]*arrScale);

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
	
}

function onWindowResize() {
    init();
}

function getPoints()
{
	var x = [];
	var y = [];
	var vx = [];
	var vy = [];
    var ax = [];
    var ay = [];
	x[0] = 0;
	y[0] = 296/yscale;
	for (var i= 1; i <= numPoints+2; i++)
	{
		x[i]=(640/numPoints)*i;

		//QUADRATIC EQUATION FOR PARABOLA:
		y[i]=11561*x[i]*x[i]/7811120 - 8473069*x[i]/7811120 + 296;

		x[i] = x[i]*w/640/xscale; y[i] = y[i]*h/360/yscale;

		vx[i] = x[i]-x[i-1];
		vy[i] = y[i]-y[i-1];

	}
	vy[0] = vy[1];
	vx[0] = vx[1];

    for (var i= 1; i <= numPoints+2; i++)
    {
        ax[i] = 0
        ay[i] = vy[i]-vy[i-1];
    }
    ax[0]=ax[1];
    ay[1]=ay[2];
    ay[0]=ay[1];

	return [x,y,vx,vy,ax,ay];
}

function choice(i,j) //returns value to plot for given drop down choice, and range of plot
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

function choice2(i,j)
{
    if (i=="Distance")
    {
        return [(150-y[j])*2,x[j],[0,320]]
    }
    else if (i=="Velocity")
    {
        return [-vy[j],vx[j],[-10,10]]
    }
    else if (i=="Acceleration")
    {
        return [-ay[j],ax[j],[-0.5,0.05/Math.pow(numPoints/60,3)]]
    }
}
