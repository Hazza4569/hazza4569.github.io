ga.games.push( new Game(
    //ID:
    "truthorshot",

    //TITLE:
    "Truth or Shot",

    //DESCRIPTION:
    "{1}, ask {2} a question. If they can't answer they " + ga.DrinkTenseChange(ga.largeDrink) + ".",

    //DOCUMENTATION:
    "The first player asks the second player a question. The second player can then choose to answer the question " +
    "or take the forfeit drink. If the question is disappointing the first player could be made to drink instead.",

    //COLOURS (foreground, background):
    "grey", "black",

    //REQUIRED SETTINGS:
    [],

    //DISABLING SETTINGS:
    ["nothink"],

    //MINIMUM PLAYERS:
    3,

    //MAXIMUM PLAYERS:
    Number.MAX_SAFE_INTEGER //nomax
    )
);