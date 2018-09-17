//requires: JQuery

class Page
{
    constructor(bgColour,fgColour,bdrThick,bdrEdge,bdrCorners,canvas)
    {
        this.bgColour = bgColour;
        this.fgColour = fgColour;
        this.bdrThick = bdrThick;
        this.bdrEdge = bdrEdge;
        this.bdrCorners = bdrCorners; //0 for filled corners, 1 for cutout
        this.canvas = canvas;

        this.UpdateStyles();
    }

    UpdateStyles(resize = false)
    {
        let w = window.innerWidth;
        let h = window.innerHeight;

        let bdrCorner = this.bdrThick*this.bdrCorners;
        let topWidth = (w-2*bdrCorner-2*this.bdrEdge).toString()+"px";
        let sideHeight = (h-2*bdrCorner-2*this.bdrEdge).toString()+"px";
        let bdrThickProp = this.bdrThick.toString()+"px";
        let bdrEdgeProp = this.bdrEdge.toString()+"px";
        let bdrCutEdge = (this.bdrEdge+bdrCorner).toString()+"px";
        $('.hBorder').css(
            {
                'height':bdrThickProp,
                'width':topWidth,
                'background-color':this.bgColour
            });
        $('.vBorder').css(
            {
                'height':sideHeight,
                'width':bdrThickProp,
                'background-color':this.bgColour
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

        this.canvas.SetPage(this);
        this.canvas.Initialise(resize);
    }

    SetCanvas(canvas)
    {
        this.canvas = canvas;
        this.UpdateStyles();
    }
}