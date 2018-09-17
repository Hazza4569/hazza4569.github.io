//requires: JQuery, page*

class GameCanvas
{
    constructor(titleVert,descVert,titleScale,descScale,margin,ruleHeight,ruleRows,rulePadVert,rulePadHor,ruleMargin)
    {
        this.canvasType = "game";

        this.titleVert = titleVert;
        this.descVert = descVert;
        this.titleScale = titleScale;
        this.descScale = descScale;
        this.margin = margin;
        this.ruleHeight = ruleHeight; //height of each rule indicator
        this.ruleRows = ruleRows; //number of rows available for rules
        this.rulePadVert = rulePadVert; //padding/margin for rules
        this.rulePadHor = rulePadHor; //padding/margin for rules
        this.ruleMargin = ruleMargin;

        this.border = 2; //thickness of rulebox border in px

        $('#gametitle,#rulebar').css("display","flex");
        $('#gamedesc').css("display","inline-block");
        $('#gametitle').text("Title");
        $('#gamedesc').text("A fairly long description should go here. This is probably much shorter than most of the examples.");
    }

    SetPage(page)
    {
        this.page = page;
    }

    Initialise(resize = false)
    {
        this.page.bdrThick = 60;
        this.page.bdrEdge = 30;

        let w = window.innerWidth;
        let h = window.innerHeight;

        let edge = this.page.bdrThick + this.page.bdrEdge;

        let canvasHeight = h - 2*edge;
        let canvasWidth = w - 2*edge;
        let width = canvasWidth - 2*this.margin;
        let pad = edge + this.margin;

        let titleBottom = h - (edge + this.titleVert*canvasHeight/2);
        let descTop = edge + this.descVert*canvasHeight/2;

        let titleFontSize = 60*this.titleScale;
        let descFontSize = 30*this.descScale;

        let rulebarHeight = (this.ruleHeight+this.rulePadVert+2*this.border)*this.ruleRows + this.margin;
        let rulebarTop = h - edge - rulebarHeight;
        let rulePad = edge + this.ruleMargin;

        $('#gametitle,#gamedesc').css(
            {
                'width':width,
                'margin-left':pad,
                'margin-right':pad
            });

        $('#gametitle').css(
            {
                'top':pad,
                'bottom':titleBottom,
                'font-size':titleFontSize.toString()+"pt",
                'align-items':'flex-end',
                'justify-content':'center',
                'color':this.page.fgColour
            });

        $('#gamedesc').css(
            {
                'top':descTop,
                'bottom':h - rulebarTop,
                'font-size':descFontSize.toString()+"pt",
                'overflow-y':'scroll'
            });

        $('#rulebar').css(
            {
                'width':canvasWidth-2*this.ruleMargin,
                'margin-left':rulePad,
                'margin-right':rulePad,
                'top':rulebarTop,
                'bottom':rulePad,
                'align-items':'start',
                'flex-wrap':'wrap-reverse',
                'overflow-y':'scroll'
            });
    }

    AddRule(ruleid,ruleText)
    {
        let ruleBox = $("<div class=\"rulebox\" id=\"" + ruleid + "\">" + ruleText + "</div>");
        $('#rulebar').append(ruleBox);

        $('.rulebox').css(
            {
                'display':'flex',
                'align-items':'center',
                'justify-content':'center',
                'height':this.ruleHeight,
                'padding':'0 5px',
                'margin':this.rulePadVert.toString() + "px " + this.rulePadHor.toString() + "px",
                'border':this.border.toString() + "px solid " + this.page.fgColour.toString()
            });
    }

    RemoveRule(ruleid)
    {
        $("#"+ruleid).remove();
    }

    SetTitle(title)
    {
        $('#gametitle').text(title);
    }

    SetDescription(desc)
    {
        $('#gamedesc').text(desc);
    }

    SetFgColour(fgColour)
    {
        this.page.fgColour = fgColour
    }

    SetBgColour(bgColour)
    {
        this.page.bgColour = bgColour
    }

    Close()
    {
        $('#gametitle,#gamedesc,#rulebar').css("display","none");
    }
}