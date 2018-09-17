//requires:

class GameAgent
{
    constructor()
    {
        this.players = []; //list of players in the game.
        this.games = []; //array of all possible games.
        this.activeGames = []; //list of games in play.
        this.history = []; //list of instructions that have been in play recently.
        this.counter = -1; //used to track location within the history array.
        this.settings = new Settings();

        this.smallDrink = "drinks";
        this.mediumDrink = this.smallDrink;
        this.largeDrink = "takes a shot"
    }

    SetPlayers(players)
    {
        this.players = players;
    }

    AddPlayer(name)
    {
        this.players.push(name);
    }

    DeletePlayer(name)
    {
        let index = $.inArray(name,this.players);
        if ( index === -1 ) return false;
        this.players.splice(index,1);
        return true;
    }

    PlayerExists(name)
    {
        //see if name (or one with the same id) exists already
        let arrElem = this.players.find(
            function(element)
            {
                return element.replace(/ /g,'_') === name.replace(/ /g,'_');
            });

        return ( arrElem !== undefined );
    }

    GetNameFromID(id)
    {
        return this.players.find(
            function(element)
            {
                return ( element.replace(/ /g,'_') === id );
            });
    }

    DeletePlayerByID(id)
    {
        return this.DeletePlayer(this.GetNameFromID(id));
    }

    FillOptions(canvas)
    //should be passed the settings canvas.
    {
        for (let i = 0; i < this.settings.list.length; i++)
        {
            let setting = this.settings.list[i];
            canvas.AddSetting(setting.text, setting.tag, setting.docs)
        }
    }

    FillActiveGames()
    {
        this.activeGames = [];
        for (let i = 0; i < this.games.length; i++)
        {
            let game = this.games[i];
            if ( game.Enabled(this.players, this.settings) )
            {
                this.activeGames.push(game);
            }
        }
    }

    NewInstruction()
    //should be passed the game canvas
    {
        let rndNum = Math.floor( this.activeGames.length*Math.random() );
        let game = this.activeGames[rndNum];

        return game.GenerateInstruction(this.players);
    }

    DisplayInstruction(instruction,canvas)
    {
        canvas.SetTitle(instruction.title);
        canvas.SetDescription(instruction.description);
        canvas.SetFgColour(instruction.fgColour);
        canvas.SetBgColour(instruction.bgColour);
    }

    Forward(canvas)
    {
        let instruction;
        if ( this.counter === (this.history.length - 1) )
        {
            instruction = this.NewInstruction();
            this.history.push(instruction);
        }
        else
        {
            instruction = this.history[this.counter+1];
        }
        this.DisplayInstruction(instruction, canvas);
        this.counter++
    }

    Backward(canvas)
    {
        if ( this.counter < 0 ) console.log("SOFTWARE BUG: GameAgent counter < 0");
        else if ( this.counter > 0 )
        {
            this.DisplayInstruction(this.history[this.counter-1], canvas);
            this.counter--;
        }
    }

    Append(canvas)
    {
        let instruction = this.NewInstruction();
        this.counter = this.history.length;
        this.history.push(instruction);
        this.DisplayInstruction(instruction, canvas);
    }

    DrinkTenseChange(drink)
    {
        return drink.replace("drinks", "drink").replace("takes", "take");
    }
}