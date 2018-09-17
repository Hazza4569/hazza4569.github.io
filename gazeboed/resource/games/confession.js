ga.games.push( new Game(
    //ID:
    "confession",

    //TITLE:
    "Confession",

    //DESCRIPTION:
    "{1}, tell a secret most people in the room don't know. If you can't, " +
    ga.DrinkTenseChange(ga.largeDrink) + ".",

    //DOCUMENTATION:
    "The chosen player has to tell a secret that the majority of the other players didn't know about them. If they " +
    "fail to come up with something, or if everyone just finds the secret to be a bit shit, they have to " +
    "take a drink or shot, as indicated.",

    //COLOURS (foreground, background):
    "grey", "black",

    //REQUIRED SETTINGS:
    [],

    //DISABLING SETTINGS:
    ["nothink"],

    //MINIMUM PLAYERS:
    2,

    //MAXIMUM PLAYERS:
    Number.MAX_SAFE_INTEGER //nomax
    )
);