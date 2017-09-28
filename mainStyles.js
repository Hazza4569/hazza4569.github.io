var bkgColour = 'green';
var forColour = 'red';
var bdrThick = 20; //pixels
var bdrEdge = 10; //pixels
var bdrCorners = 1; //0 for filled corners, 1 for cutout
var lgoSize = 0.5; //size of logo as canvas percentage
var lgoVert = 0.4; //vertical height of logo, 0 is top, 1 is middle, 2 is bottom
var ttlScale = 1; //font size scale for title
var subScale = 1.2

function updateStyles()
{
	var w = window.innerWidth;
	var h = window.innerHeight;
	var ttlFontSize = Math.min(80*w/1366, 80*h/767)*ttlScale;

	var bdrCorner = bdrThick*bdrCorners;
	var topWidth = (w-2*bdrCorner-2*bdrEdge).toString()+"px";
	var sideHeight = (h-2*bdrCorner-2*bdrEdge).toString()+"px";
	var bdrThickProp = bdrThick.toString()+"px";
	var bdrEdgeProp = bdrEdge.toString()+"px";
	var bdrCutEdge = (bdrEdge+bdrCorner).toString()+"px";
	$('.hBorder').css(
	{
		'height':bdrThickProp,
		'width':topWidth,
		'background-color':bkgColour
	});
	$('.vBorder').css(
	{
		'height':sideHeight,
		'width':bdrThickProp,
		'background-color':bkgColour
	});
	$('.top').css(
	{
		'left':bdrCutEdge,
		'top':bdrEdgeProp
	});
	$('.left').css(
	{
		'left':bdrEdgeProp,
		'top':bdrCutEdge
	});
	$('.right').css(
	{
		'right':bdrEdgeProp,
		'top':bdrCutEdge
	});
	$('.bottom').css(
	{
		'left':bdrCutEdge,
		'bottom':bdrEdgeProp
	});

	var edge = bdrThick + bdrEdge;
	var ctrWidth = w - edge*2;
	var ctrHeight = h - edge*2;
	var lgoWidth = Math.min(ctrWidth*lgoSize, ctrHeight*lgoSize*230/180);
	var lgoHeight = Math.min(ctrHeight*lgoSize, ctrWidth*lgoSize*180/230);

	var lgoWidthProp=lgoWidth.toString()+"px";
	var lgoHeightProp=lgoHeight.toString()+"px";
	var lgoLeft = (edge + (ctrWidth-lgoWidth)/2).toString()+"px";
	var lgoTop = edge + ((ctrHeight-lgoHeight)/2)*lgoVert;
	var lgoTopProp = lgoTop.toString()+"px";

	$('#logo').css(
	{
		'width':lgoWidthProp,
		'height':lgoHeightProp,
		'left':lgoLeft,
		'top':lgoTopProp
	});

	var ttlWidth = ctrWidth*ttlFontSize/(180*(w-edge*2)/(1309-edge*2))
	var ttlHeight = ttlFontSize*7/4;
	var lgoBot = edge + lgoTop + lgoHeight;

	var ttlWidthProp = ttlWidth.toString()+"px";
	var ttlHeightProp = ttlHeight.toString()+"px";
	var ttlLeft =  (edge + (ctrWidth-ttlWidth)/2).toString()+"px";
	var ttlTop = (lgoBot-40).toString()+"px";

	$('#title').css(
	{
		'width':ttlWidthProp,
		'height':ttlHeightProp,
		'left':ttlLeft,
		'top':ttlTop,
		'color':forColour,
	});
	$('#ttl2').css(
	{
		'font-size':ttlFontSize.toString()+"pt"
	});
	$('#ttl1').css(
	{
		'font-size':(ttlFontSize/3).toString()+"pt"
	})

	var subFontSize = (Math.min(18*w/800, 18*h/500)*subScale).toString()+"px";
	var subOffset = 50*w/800*h/700;
	var subWidth = 1.4*lgoWidth;
	var subHeight = 60;
	var subTop = (lgoBot+subOffset).toString()+"px";
	var subLeft = (edge + (ctrWidth-subWidth)/2).toString()+"px";

	$('#subtitle').css(
	{
		'width':subWidth.toString()+"px",
		'height':subHeight.toString()+"px",
		'left':subLeft,
		'top':subTop,
		'font-size':subFontSize
	});


	console.log(w,h);
	console.log(lgoBot);
};

updateStyles();
var rndElem = Math.ceil(973*Math.random());
$('#subtitle').text("Be afraid, for tonight you're gonna get absolutely "+nouned[rndElem]+"...");
window.addEventListener( 'resize', updateStyles, false );