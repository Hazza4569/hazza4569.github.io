//requires: JQuery, page*

class TitleCanvas
{
    constructor(logoSize,logoWidth,logoHeight,logoVert,titleScale,subScale)
    {
        this.canvasType = "title";

        this.logoSize = logoSize; //size of logo as canvas percentage
        this.logoWidth = logoWidth;
        this.logoHeight = logoHeight;
        this.logoVert = logoVert; //vertical position of logo, 0 is top, 1 is middle, 2 is bottom
        this.titleScale = titleScale; //font size scale for title
        this.subScale = subScale;

        $("#title,#logo,#subtitle").css("display","inline-block");
    }

    SetPage(page)
    {
        this.page = page;
    }

    Initialise(resize = false)
    {
        let w = window.innerWidth;
        let h = window.innerHeight;

        let edge = this.page.bdrThick + this.page.bdrEdge;
        let ctrWidth = w - edge*2;
        let ctrHeight = h - edge*2;
        let lgoWidth = Math.min(ctrWidth*this.logoSize, ctrHeight*this.logoSize*this.logoWidth/this.logoHeight);
        let lgoHeight = Math.min(ctrHeight*this.logoSize, ctrWidth*this.logoSize*this.logoHeight/this.logoWidth);

        let lgoWidthProp=lgoWidth.toString()+"px";
        let lgoHeightProp=lgoHeight.toString()+"px";
        let lgoLeft = (edge + (ctrWidth-lgoWidth)/2).toString()+"px";
        let lgoTop = edge + ((ctrHeight-lgoHeight)/2)*this.logoVert;
        let lgoTopProp = lgoTop.toString()+"px";

        $('#logo').css(
            {
                'width':lgoWidthProp,
                'height':lgoHeightProp,
                'left':lgoLeft,
                'top':lgoTopProp
            });

        let ttlFontSize = Math.min(80*w/1366, 80*h/767)*this.titleScale;

        let ttlWidth = ctrWidth*ttlFontSize/(180*(w-edge*2)/(1309-edge*2))
        let ttlHeight = ttlFontSize*7/4;
        let lgoBot = edge + lgoTop + lgoHeight;

        let ttlWidthProp = ttlWidth.toString()+"px";
        let ttlHeightProp = ttlHeight.toString()+"px";
        let ttlLeft =  (edge + (ctrWidth-ttlWidth)/2).toString()+"px";
        let ttlTop = (lgoBot-30).toString()+"px";

        $('#title').css(
            {
                'width':ttlWidthProp,
                'height':ttlHeightProp,
                'left':ttlLeft,
                'top':ttlTop,
                'color':this.page.fgColour,
            });
        $('#ttl2').css(
            {
                'font-size':ttlFontSize.toString()+"pt"
            });
        $('#ttl1').css(
            {
                'font-size':(ttlFontSize/3).toString()+"pt"
            });

        let subFontSize = (Math.min(18*w/800, 18*h/500)*this.subScale).toString()+"px";
        let subOffset = 50*w/800*h/700;
        let subWidth = 1.4*lgoWidth;
        let subHeight = 60;
        let subTop = (lgoBot+subOffset).toString()+"px";
        let subLeft = (edge + (ctrWidth-subWidth)/2).toString()+"px";

        $('#subtitle').css(
            {
                'width':subWidth.toString()+"px",
                'height':subHeight.toString()+"px",
                'left':subLeft,
                'top':subTop,
                'font-size':subFontSize
            });

        if (!resize)
        {
            let rndElem = Math.floor(973 * Math.random());
            $('#subtitle').text("Be afraid, for tonight you're gonna get absolutely " + nouned[rndElem] + "...");
        }
    }

    Close()
    {
        $("#title,#logo,#subtitle").css("display","none");
    }
}