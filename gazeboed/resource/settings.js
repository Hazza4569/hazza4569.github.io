//requires:

//this class is mostly just a place to hard code all of the settings for the game
class Settings
{
    constructor()
    {
        this.list = [];

        //Equipment
        this.AddSetting("cups", "Cups", "Select this option if you have paper/plastic cups available.");
        this.AddSetting("ppballs", "Ping pong balls", "Select this option if you have ping pong balls available.");
        this.AddSetting("cards", "Cards", "Select this option if you have playing cards available.");
        this.AddSetting("paperpen", "Paper/pen",
            "Select this option if you have paper and pen available, post it notes are recommended for some games.");

        //Options
        this.AddSetting("dirtypint", "Dirty pint",
            "Select this if you want an ongoing dirty pint which people will have to add to " +
            "and drink from at various points.");
        this.AddSetting("tabletop", "Tabletop mode",
            "Select this option if people are sat round a table while playing.");
        this.AddSetting("fast", "Fast mode", "Select this to remove games which take a bit more time.");
        this.AddSetting("shots", "Shots",
            "Select this to enable shots as a penalty for certain games. " +
            "If not selected, these penalties will be drink two fingers instead.");
        this.AddSetting("automate", "Automated categories",
            "Allow games such as categories and never have I ever to provide their own categories or activities.");
        this.AddSetting("rush", "Rush games",
            "Enabling this will allow games that punish people for not acting immediately after the game appears. " +
            "These games generally require movement.");
        this.AddSetting("nothink", "No thinking",
            "Activate to remove games that will require players to think creatively, " +
            "i.e. choosing their own category or coming up with a question to ask someone.");
        this.AddSetting("team", "Team games",
            "Select to allow team games that will likely require everyone to move " +
            "to stand with their team (e.g. flipcup).")
    }

    AddSetting(tag, text, docs = "", enabled = false)
    {
        this.list.push( new Setting(tag, text, docs, enabled) );
    }

    IsActive(tag)
    {
        let setting = this.GetSettingFromTag(tag);

        if ( setting === undefined )
        {
            console.log("SOFTWARE BUG: Settings::IsActive, no setting found with given tag, " + tag + ".");
            return undefined;
        }

        return setting.enabled;
    }

    SetEnabled(tag, enabled=true)
    {
        let setting = this.GetSettingFromTag(tag);

        if ( setting === undefined )
        {
            console.log("SOFTWARE BUG: Settings::SetEnabled, no setting found with given tag.");
        }
        else
        {
            setting.Enable(enabled);
        }

    }

    GetSettingFromTag(tag)
    {
        let setting = this.list.find(
            function(element)
            {
                return ( element.tag === tag );
            });

        return setting;
    }
}