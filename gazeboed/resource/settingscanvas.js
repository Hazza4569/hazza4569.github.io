//requires: JQuery

class SettingsCanvas
{
    constructor()
    {
        this.canvasType = "settings";

        this.sliderWidth = 50;

        $('#settingstitle,#settingsinput').css("display","inline-block");
        $('#navigationbuttons').css("display","flex");

        $('#namesinput').val("");
        $('#namesinput').focus();
    }

    SetPage(page)
    {
        this.page = page;
    }

    Initialise(resize = false)
    {
        this.page.bdrThick = 20;
        this.page.bdrEdge = 10;

        let w = window.innerWidth;
        let h = window.innerHeight;

        let edge = this.page.bdrThick + this.page.bdrEdge;
        let ctrWidth = w - edge*2;
        let ctrHeight = h - edge*2;

        let ttlFontSize = Math.min(0.06*ctrHeight,0.06*ctrWidth);//px //Math.min(80*w/1366, 80*h/767)*0.75;
        let ttlHeight = ttlFontSize + 20;

        let buttonBarMargin = 5;
        let buttonHeight = 0.055*ctrHeight;
        let buttonPad = 5;
        let buttonMargin = 2;
        let buttonBarHeight = buttonHeight + 2*buttonMargin + 2*buttonBarMargin;
        let buttonBarTop = h - (buttonBarHeight+edge);

        $('#settingstitle').css(
            {
                'width':ctrWidth,
                'margin':"0 " + edge.toString() + "px",
                'top':edge,
                'color':this.page.fgColour,
                'font-size':ttlFontSize.toString() + "px",
                'height':ttlHeight
            });

        $('#navigationbuttons').css(
            {
                'width':ctrWidth - 2*buttonBarMargin,
                'margin':buttonBarMargin.toString() + "px " + (edge+buttonBarMargin).toString() + "px",
                'bottom':edge,
                'top':buttonBarTop,
                'left':0,
                'justify-content':'flex-end'
            });

        $('#advancedbtn,#startgamebtn').css(
            {
                'height':buttonHeight,
                'padding':buttonPad,
                'margin':buttonMargin
            });

        let settingsInputTop = edge + ttlHeight;
        let settingsInputBottom = h - buttonBarTop;

        $('#settingsinput').css(
            {
                'top':settingsInputTop,
                'bottom':settingsInputBottom,
                'width':ctrWidth,
                'margin':"0 " + edge.toString() + "px",
                'overflow':'scroll'
            });

        let nameInputWidth = 300;
        let innerMargins = 20;

        let optionsWidth = Math.max( ctrWidth - nameInputWidth - 3*innerMargins, 200 );
        let optionsLeft = nameInputWidth + 1.5*innerMargins;

        $('#nameinputs').css(
        {
            'top':0,
            'bottom':0,
            'left':0,
            'width':nameInputWidth,
            'margin':innerMargins,
            'margin-right':innerMargins/2
        });

        $('#optionsdiv').css(
            {
                'top':0,
                'bottom':0,
                'left':optionsLeft,
                'width':optionsWidth,
                'margin':innerMargins,
                'margin-left':innerMargins/2
            });

        let inputHeight = 40;
        let inputWidth = 0.7 * nameInputWidth;
        let addWidth = nameInputWidth - inputWidth - 10;
        let inputPad = 10;

        $('.textinput').css(
            {
                'height':inputHeight,
                'width':inputWidth,
                'padding':"0 " + inputPad.toString() + "px",
                'font-size':"18px",
                'margin':0,
                'border':'2px solid red'
            });

        $('#addname').css(
            {
                'height':inputHeight,
                'width':addWidth,
                'margin':0,
                'padding':0
            });

        let namesboxMargin = 4;
        let settingsInputHeight = (h - settingsInputBottom) - settingsInputTop;
        let namesboxHeight = settingsInputHeight - 2*innerMargins - inputHeight - 2*namesboxMargin;
        this.nameHeight = 0.1*namesboxHeight;
        this.nameWidth = nameInputWidth - 2*namesboxMargin;

        $('#namesboxcontainer').css(
            {
                'top':inputHeight,
                'bottom':0,
                'left':0,
                'right':0,
                'margin':namesboxMargin
            });
    }

    AddName(name, first = false)
    {
        let id = name.replace(/ /g,'_');
        let nameBox = $("<div id=\"" + id + "\" class=\"name\">" + name +
            "<div class=\"closebutton\">" +
            "<i class=\"fas fa-times closeicon\" onclick=\"nameClose(this)\"></i>" +
            "</div></div>");

        //remove curve from current last element:
        if ( $('#namesbox').children().length > 0 )
        {
            $('#namesbox div.name').last().css(
                {
                    'border-top-right-radius': 0,
                    'border-top-left-radius': 0
                });
        }

        $('#namesbox').append(nameBox);

        let namePad = 10;
        this.nameBorder = 2;
        let iconPad = 5;

        $('.name').css(
            {
                'height':this.nameHeight,
                'padding':namePad,
                'border':this.nameBorder.toString() + "px solid grey",
                'border-bottom':'none',
                'width':this.nameWidth
            });

        // $('.topname').css(
        //     {
        //         'border-top':nameBorder.toString() + "px solid grey"
        //     });

        $('.closebutton').css(
            {
                'right':namePad - iconPad + 5
            });

        $('.closeicon').css(
            {
                'padding':iconPad
            });

        //add curved bottom to newly added element
        $("#"+id).css(
            {
                'border-top-right-radius': 8,
                'border-top-left-radius': 8
            });

        //add curved top if it's the first element
        $('#namesbox div.name').first().css(
            {
                'border-bottom-right-radius': 8,
                'border-bottom-left-radius': 8,
                'border-bottom':this.nameBorder.toString() + "px solid grey"
            });
    }

    DeleteName(id)
    {
        $("#"+id).remove();
        if ( $('#namesbox').children().length > 0 )
        {
            $('#namesbox div.name').first().css(
                {
                    'border-bottom-right-radius': 8,
                    'border-bottom-left-radius': 8,
                    'border-bottom':this.nameBorder.toString() + "px solid grey"
                });

            $('#namesbox div.name').last().css(
                {
                    'border-top-right-radius': 8,
                    'border-top-left-radius': 8
                });
        }
    }

    AddSetting(text, tag, docs)
    {
        let optionBox = $("<div class=\"settingoption\" id = \"stg" + tag + "\"> " + text +
            "<label class=\"switch\">" +
            "<input type=\"checkbox\" name=\"level_control\">" +
            "<span class=\"slider\"></span>" +
            "</label>" +
            "</div>");

        $('#optionsflex').append(optionBox);

        let divBottomMargin = 10;
        let divLeftMargin = 10;
        let divPad = 5;
        let divWidth = 250;

        let sliderWidth = this.sliderWidth;
        let sliderHeight = sliderWidth/1.85;

        $('.settingoption').css(
            {
                'height':sliderHeight + 2*divPad,
                'width':divWidth,
                'margin': "0 0 " + divBottomMargin + "px " + divLeftMargin + "px",
                'padding':divPad
            });

        $('.switch').css(
            {
                'width':sliderWidth,
                'height':sliderHeight,
                'margin-left': divWidth - sliderWidth - 2*divPad
            });

        $('.slider').css(
            {
                'border-radius':sliderHeight
            });

        let circleRadius = sliderWidth/2.;
        let circleLeft = 0.018*sliderWidth;
        let shadowDim1 = 0.02*sliderWidth;
        let shadowDim2 = -shadowDim1*0.1;
        let shadowSetting = shadowDim2.toString() + "px " + shadowDim1 + "px rgba(0,0,0,0.3);";

        let translate = sliderWidth - circleRadius - 2*circleLeft;
        let translateString = "transform: translateX(" + translate + "px);";
        let checkedColour = this.page.fgColour;

        //For editing the .slider:before we have to do it
        //slightly differently as it is not in the dom.
        $("<style> .slider:before{" +
            "height:" + circleRadius + "px;" +
            "width:" + circleRadius + "px;" +
            "left:" + circleLeft + "px;" +
            "-moz-box-shadow: " + shadowSetting +
            "-webkit-box-shadow: " + shadowSetting +
            "-o-box-shadow: " + shadowSetting +
            "box-shadow: " + shadowSetting +
            "}" +
            "input:checked + .slider {background-color: " + checkedColour + ";}" +
            "input:focused + .slider {box-shadow: 0 0 " + shadowDim1 + "px " + checkedColour + ";}" +
            "input:checked + .slider:before {" +
            "-webkit-" + translateString + "-ms-" + translateString + translateString +
            "</style>").appendTo("head");

        $('#stg'+tag).on( "click", function()
        {
            let checkbox = $(this).find('input');
            checkbox.prop('checked',!checkbox.prop('checked'));

            let tag = $(this).attr('id').substr(3);
            ga.settings.SetEnabled( tag, checkbox.prop('checked') );
        });

    }

    Close()
    {
        $('#settingstitle,#settingsinput,#navigationbuttons').css("display","none");
    }
}