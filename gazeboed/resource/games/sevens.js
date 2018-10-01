ga.games.push( new Game(
    //ID:
    "sevens",

    //TITLE:
    "Sevens",

    //DESCRIPTION:
    "{1} starts. Loser " + ga.smallDrink + ".",

    //DOCUMENTATION:
    "The first player starts the game by saying 'one'. The player to their right " + 
    "then says 'two', and so on counting upwards. If the number that falls on your " + 
    "turn either contains a 7 or is a multiple of 7 then you say nothing instead. " +
    "The game ends when somebody loses by saying the wrong number.",

    //COLOURS (foreground, background):
    "yellowgreen", "cornflowerblue",

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
