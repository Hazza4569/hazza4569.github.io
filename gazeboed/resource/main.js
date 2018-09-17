let canvas = new TitleCanvas(0.5,1105,795,0.45,1,1.4);
let page = new Page('green','red',20,10,1,canvas);

function exitTitle()
{
    page.canvas.Close();
    //canvas = new GameCanvas(0.85,0.85,1,0.75,15,35,2,2,5,10);
    canvas = new SettingsCanvas();
    page.SetCanvas(canvas);
    ga.FillOptions(page.canvas);
    //canvas.AddSetting("Test Option","test");
}

function startGame()
{
    ga.FillActiveGames();
    if ( ga.activeGames.length === 0 ) return;

    page.canvas.Close();
    canvas = new GameCanvas(0.85,0.85,1,0.75,50,35,2,2,5,10);

    page.SetCanvas(canvas);
    ga.Forward(canvas);
    page.UpdateStyles();
}






function onResize()
{
    page.UpdateStyles(true);
}

function nameClose(e)
{
    let id = e.parentElement.parentElement.id;

    //remove from array
    if ( !ga.DeletePlayerByID(id) )
    {
        console.log("SOFTWARE BUG: No element found to delete.");
        return;
    }

    page.canvas.DeleteName(id);
    $('#namesinput').focus();
}

function onAddClick()
{
    let name = $('#namesinput').val();

    //check if contains any illegal characters
    let regex = /^[A-Za-z]+[\w\-:.]*$/;
    if ( !regex.test(name.replace(/ /g,'_')) )
    {
        console.log("ERROR: name contains invalid characters.");
        return;
    }

    //check if exists already
    if ( ga.PlayerExists(name) )
    {
        console.log("ERROR: name entered already ");
        return;
    }
    ga.AddPlayer(name);
    page.canvas.AddName(name);

    $('#namesinput').val("");
}

$('#namesinput').bind('keydown', function(event) {
    //console.log(event.keyCode);
    if ( event.keyCode === 13) //enter
    {
        onAddClick();
    }
});

$('body').bind('keydown', function(e) {
    if ( canvas.canvasType !== "game" ) return;

    if ( e.key === " " )
    {
        ga.Append(page.canvas);
        page.UpdateStyles();
    }
    else if ( e.keyCode === 39 || e.keyCode === 40 )
    {
        ga.Forward(page.canvas);
        page.UpdateStyles();
    }
    else if ( e.keyCode === 37 || e.keyCode === 38 )
    {
        ga.Backward(page.canvas);
        page.UpdateStyles();
    }
});

window.addEventListener( 'resize', onResize, false );

