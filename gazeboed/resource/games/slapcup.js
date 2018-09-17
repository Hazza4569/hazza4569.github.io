ga.games.push( new Game(
    //ID:
    "slapcup",

    //TITLE:
    "Slap Cup",

    //DESCRIPTION:
    "{1} and {2} start. Loser " + ga.mediumDrink + ".",

    //DOCUMENTATION:
    "Everybody stands around a table. Two starting players (at opposite sides) each have an empty cup and a ping pong ball. They have " +
    "to bounce the ball of the table and into the cup, as fast as possible. As soon as they manage this they can " +
    "pass the cup and ball to the person on their left, who then has to do the same thing. If anyone gets the ball in " +
    "first time they can pass to anybody they want, except the person with the other cup and ball. The game ends when " +
    "somebody gets the ball in while the person to their left has the other cup. You then slap that players cup out " +
    "the way before they get their ball in. The loser with the slapped cup has to drink.",

    //COLOURS (foreground, background):
    "red", "red",

    //REQUIRED SETTINGS:
    ["cups","ppballs","tabletop"],

    //DISABLING SETTINGS:
    ["fast"],

    //MINIMUM PLAYERS:
    6,

    //MAXIMUM PLAYERS:
    15
    )
);