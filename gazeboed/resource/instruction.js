//requires:

//Instruction class is essentially just a data structure. It stores all the
//information for a game instance such that a history may be maintained.
class Instruction
{
    constructor( id, displayText, displayColours )
    {
        this.id = id;
        this.title = displayText[0];
        this.description = displayText[1];
        this.ruleLabel = displayText[2];
        this.bgColour = displayColours[0];
        this.fgColour = displayColours[1];
    }
}