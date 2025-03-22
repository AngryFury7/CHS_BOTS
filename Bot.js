// in this file all the data regarding the bots will be contained 

//imports : -
import { Find } from "./needed.js";
import { Horse } from "./Peices/Horse.js";
import { Camel } from "./Peices/Camel.js";
import {Elephant} from "./Peices/Elephant.js"
import { Queen } from "./Peices/Queen.js";
import { Pawn } from "./Peices/Pawn.js";

 console.log("Bot.js is loaded")  //Statement of initialization

let botTurn = ["lumos"];


let PositionDefault = 
[
    {id : "whiteElephant1",positionN : 1},
    {id : "whiteElephant2",positionN : 8},
    {id : "whiteHorse1",positionN : 2},
    {id : "whiteHorse2",positionN : 7},
    {id : "whiteCamel1",positionN : 3},
    {id : "whiteCamel2",positionN : 6},
    {id : "whiteKing",positionN :4},
    {id : "whiteQueen",positionN : 5},
    {id : "whitePawn1",positionN : 9},
    {id : "whitePawn2",positionN : 10},
    {id : "whitePawn3",positionN : 11},
    {id : "whitePawn4",positionN : 12},
    {id : "whitePawn5",positionN : 13},
    {id : "whitePawn6",positionN : 14},
    {id : "whitePawn7",positionN : 15},
    {id : "whitePawn8",positionN : 16},
    {id : "blackElephant1",positionN : 49},
    {id : "blackElephant2",positionN : 56},
    {id : "blackHorse1",positionN : 50},
    {id : "blackHorse2",positionN : 55},
    {id : "blackCamel1",positionN : 51},
    {id : "blackCamel2",positionN : 54},
    {id : "blackKing",positionN :52},
    {id : "blackQueen",positionN : 53},
    {id : "blackPawn1",positionN : 57},
    {id : "blackPawn2",positionN : 58},
    {id : "blackPawn3",positionN : 59},
    {id : "blackPawn4",positionN : 60},
    {id : "blackPawn5",positionN : 61},
    {id : "blackPawn6",positionN : 62},
    {id : "blackPawn7",positionN : 63},
    {id : "blackPawn8",positionN : 64}
];  // this ArrayContains the Default Position of the Peices and Each Game will start with this 


let AvailablePeiceforGame_White = []; //by default the values are 16 in it which are the Peices ;
let AvailablePeiceforGame_Black = []; //by default the values are 16 in it which are the Peices 

PositionDefault.forEach((value,index) => {if(index >= 0 && index <=15){AvailablePeiceforGame_White.push(value)}else{AvailablePeiceforGame_Black.push(value)}})



let Games = []; //each Game wil be stored in form of an Array  inside the Array named as Games;

// so Now we will have to Create a bots to do that AutoPlay Thing
// logic will not be written Again and will be used form Movement.js

/*
                                                                        Bot_No.  | Bot_Name  | Side
                                                                        Bot 1    | Lumos     | White
                                                                        Bot 2    | Nyx       | Black
 */

//but we will have to make the logic for the Bots and how they will Decide the sides 
/*
            Here is the logic for the Bots :- 


            ---->     Say for Lumos ::
                        {

                            it will choose any Peice form the Available for white to play ;
                            and then it will chose any thing from Either  Movable class  or form the EnemyMove class [And if both the EnemyMove class and movable class does not Exist then it will choose another Peice to play with];
                            now the bot will play using the rules of that Peice and see how this works 
                            then we will simply Update the GameStats and store them in the Array 
                            update the turn
                        }
*/




let Lumos = () => {
    if(botTurn[botTurn.length - 1] === "lumos")
    {}
}








