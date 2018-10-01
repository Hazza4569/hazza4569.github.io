ga.games.push( new Game(
    //ID:
    "TwentyOne",

    //TITLE:
    "21",

    //DESCRIPTION:
    "{1} starts, loser " + ga.smallDrink + ".",

    //DOCUMENTATION:
    "The first player starts by saying either '1', '1 2', or '1 2 3'. Play continues to the left, each player " +
    "can say up to three numbers at a time to continue counting. The aim is to avoid having to say 21, the person " +
    "who does has to drink. The game can be made more complex by adding rules where if somebody says just two numbers " +
    "then play changes direction, and if somebody says three numbers the next player is skipped.",

    //COLOURS (foreground, background):
    "chocolate", "dodgerblue",

    //REQUIRED SETTINGS:
    [],

    //DISABLING SETTINGS:
    [],

    //MINIMUM PLAYERS:
    4,

    //MAXIMUM PLAYERS:
    Number.MAX_SAFE_INTEGER //nomax
    )
);
