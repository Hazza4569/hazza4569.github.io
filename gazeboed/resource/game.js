//requires: Instruction

class Game
{
    constructor( id, title, description, docs, fgColour, bgColour,
                 requireTags, excludeTags, minPlayers,
                 maxPlayers = Number.MAX_SAFE_INTEGER, ruleLabel = "__NONE__" )
    {
        this.id = id;
        this.title = title;
        this.description = description;
        this.fgColour = fgColour;
        this.bgColour = bgColour;
        this.requireTags = requireTags;
        this.excludeTags = excludeTags;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        this.ruleLabel = ruleLabel;

        //enabled and disabled bools can force a game to be on or off,
        //irrelevant of other conditions.
        this.enabled = false;
        this.disabled = false;

        //Would be nice to be able to animate... flashing red and blue borders on security check?
    }

    GetDisplayText(players)
    {
        let regex = /{([1-9]+)}/g;
        if ( !(this.title.match(regex) || this.description.match(regex) || this.ruleLabel.match(regex)) )
        {
            return [this.title, this.description, this.ruleLabel];
        }
        else
        {
            let randPlayers = shuffle(players);
            let title = this.title.replace( regex, function(match,offset){return randPlayers[offset-1];} );
            let desc = this.description.replace( regex, function(match,offset){return randPlayers[offset-1];} );
            let rule = this.ruleLabel.replace( regex, function(match,offset){return randPlayers[offset-1];} );
            return [title, desc, rule];
        }
    }

    GetColourScheme()
    {
        return [this.bgColour, this.fgColour];
    }

    ID()
    {
        return this.id;
    }

    Enabled(players,settings)
    {
        //OVERRIDES:
        if ( this.disabled ) return false;
        if ( this.enabled ) return true;

        //VALID NO. OF PLAYERS:
        if ( (players.length < this.minPlayers) || (players.length > this.maxPlayers) ) return false;

        //ALLOWED BY SETTINGS:
        //check required settings active:
        for (let i = 0; i < this.requireTags.length; i++)
        {
            if ( !settings.IsActive(this.requireTags[i]) ) return false;
        }

        //check excluded settings inactive:
        for (let i = 0; i < this.excludeTags.length; i++)
        {
            if ( settings.IsActive(this.excludeTags[i]) ) return false;
        }

        return true;
    }

    ForceEnable(enabled = true)
    {
        this.enabled = enabled;
    }

    Disable(disabled = true)
    {
        this.disabled = disabled;
    }

    GenerateInstruction(players)
    {
        return new Instruction(this.ID(),this.GetDisplayText(players),this.GetColourScheme());
    }
}



function shuffle(items) {
    let array = items;
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}