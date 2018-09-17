ga.games.push( new Game(
    //ID:
    "whoami",

    //TITLE:
    "Who am I?",

    //DESCRIPTION:
    "{1} pick a famous person for {2} and put it on their forehead. {2} Asks yes/no questions to guess who they are. " +
    "For every question answered no, " + ga.DrinkTenseChange(ga.smallDrink) + ".",

    //DOCUMENTATION:
    "One player picks a famous person or character for another to 'be'. This second player then asks yes or no " +
    "questions to try and determine who they are. For every no they get they drink.",

    //COLOURS (foreground, background):
    "darkorange", "darkseagreen",

    //REQUIRED SETTINGS:
    ["paperpen"],

    //DISABLING SETTINGS:
    ["fast","nothink"],

    //MINIMUM PLAYERS:
    4,

    //MAXIMUM PLAYERS:
    Number.MAX_SAFE_INTEGER //nomax
    )
);