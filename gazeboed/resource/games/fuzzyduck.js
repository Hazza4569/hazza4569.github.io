ga.games.push( new Game(
    //ID:
    "fuzzyduck",

    //TITLE:
    "Fuzzy Duck",

    //DESCRIPTION:
    "{1} starts, loser " + ga.smallDrink + ".",

    //DOCUMENTATION:
    "After somebody says 'fuzzy duck', the person to their left must also say 'fuzzy duck'. This continues until " +
    "somebody instead replies 'does he?'. At this point play changes direction and the phrase changes from 'fuzzy " +
    "duck' to 'ducky fuzz'. So the person to the right of the player who said 'does he?' now says 'ducky fuzz' and " +
    "then the person to their right repeats, and so on until somebody says 'does he?' again and it reverts back to " +
    "the original direction with 'fuzzy duck'. There are restrictions on when you can say 'does he?': not immediately " +
    "after another player, and not twice in two of your consecutive turns.",

    //COLOURS (foreground, background):
    "blue", "yellow",

    //REQUIRED SETTINGS:
    [],

    //DISABLING SETTINGS:
    [],

    //MINIMUM PLAYERS:
    5,

    //MAXIMUM PLAYERS:
    Number.MAX_SAFE_INTEGER //nomax
    )
);