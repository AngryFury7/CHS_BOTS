// in this file all the data regarding the bots will be contained 

//imports : -
import { Find } from "./needed.js";
import { Horse } from "./Peices/Horse.js";
import {King} from "./Peices/King.js"
import { Camel } from "./Peices/Camel.js";
import {Elephant} from "./Peices/Elephant.js"
import { Queen } from "./Peices/Queen.js";
import { Pawn } from "./Peices/Pawn.js";
import { PickOne } from "./needed.js";
import {cleanUp} from "./movement.js"

 console.log("Bot.js is loaded")  //Statement of initialization

let botTurn = ["Lumos"];


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

let AvailablePeiceforGame_WhiteD = []; //defaults 
let AvailablePeiceforGame_BlackD = []; //defaults 


let AvailablePeiceforGame_White = []; //by default the values are 16 in it which are the Peices ;
let AvailablePeiceforGame_Black = []; //by default the values are 16 in it which are the Peices 

PositionDefault.forEach((value,index) => {if(index >= 0 && index <=15){AvailablePeiceforGame_White.push(value);AvailablePeiceforGame_WhiteD.push(value)}else{AvailablePeiceforGame_Black.push(value);AvailablePeiceforGame_BlackD.push(value)}})

let Games = [[PositionDefault]]; //each Game wil be stored in form of an Array  inside the Array named as Games;

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
    if(botTurn[botTurn.length - 1] === "Lumos")
    {
        let totalAW_length = AvailablePeiceforGame_White.length;
        let Arrayofindents = [];
        for(let i = 0 ; i <= totalAW_length - 1 ; i++){Arrayofindents.push(i)}
        let choosenIndent = PickOne(Arrayofindents);
        let initialChosenIndent  = choosenIndent;
        let PeiceviaFind = Find(AvailablePeiceforGame_White[choosenIndent].positionN); // current selected Peice 
        let classofPeice;
        let type ;
        if(PeiceviaFind.classList.contains("El")){Elephant(PeiceviaFind); classofPeice = "El" ; type = "elephant"}
        if(PeiceviaFind.classList.contains("Hr")){Horse(PeiceviaFind); classofPeice = "Hr" ; type = "horse"}
        if(PeiceviaFind.classList.contains("Cm")){Camel(PeiceviaFind); classofPeice = "Cm" ; type = "camel"}
        if(PeiceviaFind.classList.contains("Kn")){King(PeiceviaFind); classofPeice = "Kn" ; type = "king"}
        if(PeiceviaFind.classList.contains("Qn")){Queen(PeiceviaFind); classofPeice = "Qn" ; type = "queen"}
        if(PeiceviaFind.classList.contains("Pw")){Pawn(PeiceviaFind); classofPeice = "Pw" ; type = "pawn"}
        


        let MovableLocs = []
        document.querySelectorAll(".movable").forEach((value,index) => { MovableLocs.push({V : value , type : "movable"}) });
        document.querySelectorAll(".enemyMove").forEach((value,index) => { MovableLocs.push({V : value , type : "enemyMove"}) });

        if(MovableLocs.length === 0){Lumos() ; return}


        Arrayofindents = [];
        for(let i = 0 ; i <= MovableLocs.length - 1 ; i++){Arrayofindents.push(i)}
        choosenIndent = PickOne(Arrayofindents);

        if(MovableLocs[choosenIndent].type === "movable")
        {
            let NewPeicePosition = MovableLocs[choosenIndent].V;

            PeiceviaFind.classList.remove(classofPeice);
            PeiceviaFind.classList.remove("whiteP");
            PeiceviaFind.classList.remove("Active");
            PeiceviaFind.firstElementChild.setAttribute("src" , "");
            NewPeicePosition.classList.add(classofPeice);
            NewPeicePosition.classList.add("whiteP");
            NewPeicePosition.classList.add("Active");
            NewPeicePosition.firstElementChild.setAttribute("src" , `./svgs/white_${type}.svg`);
            cleanUp();
            let UpdatedPS = [];

            let initID = AvailablePeiceforGame_White[initialChosenIndent].id;

            PositionDefault.forEach((value,index) => {
                if(value.id !== initID){UpdatedPS.push(value)};
                if(value.id === initID){UpdatedPS.push({id : value.id  , positionN : Number(NewPeicePosition.getAttribute("positionN"))})}
            })

            Games[Games.length - 1].push(UpdatedPS);            
        }



        if(MovableLocs[choosenIndent].type === "enemyMove")
            {
                let NewPeicePosition = MovableLocs[choosenIndent].V;

                let EnId = NewPeicePosition.getAttribute("PeiceID")
                let classes = ["El" , "Cm" , "Hr" , "Kn" , "Pw" , "Qn"]
                let typeofEn ;
                for( let i = 0; i<= 5 ; i++)
                {
                    if(NewPeicePosition.classList.contains(classes[i])){typeofEn = classes[i]}
                }
                PeiceviaFind.classList.remove(classofPeice);
                PeiceviaFind.classList.remove("Active"); // no need to do this 
                PeiceviaFind.firstElementChild.setAttribute("src" , ""); // done
                PeiceviaFind.classList.remove("whiteP"); 


                    NewPeicePosition.classList.remove(typeofEn)
                    NewPeicePosition.classList.add(classofPeice);
                NewPeicePosition.classList.add("whiteP");
                NewPeicePosition.classList.remove("blackP");
                NewPeicePosition.firstElementChild.setAttribute("src" , `./svgs/white_${type}.svg`);
                cleanUp();
                let UpdatedPS = [];
    
                let initID = AvailablePeiceforGame_White[initialChosenIndent].id;
    
                PositionDefault.forEach((value,index) => {
                    if(value.id !== initID && value.id !== EnId){UpdatedPS.push(value)};
                    if(value.id === initID){UpdatedPS.push({id : value.id  , positionN : Number(NewPeicePosition.getAttribute("positionN"))})}
                    if(value.id === EnId){UpdatedPS.push({id : value.id , positionN : undefined , state : "eliminated" , eliminatedby : initID})}
                })

                let UpdatedAPB = [];
                for(let i = 0 ; i<= AvailablePeiceforGame_Black.length - 1 ; i++)
                {
                    if(AvailablePeiceforGame_Black[i].id !== EnId){UpdatedAPB.push(AvailablePeiceforGame_Black[i])}
                }
    
                AvailablePeiceforGame_Black = UpdatedAPB;
                Games[Games.length - 1].push(UpdatedPS);            
            }

            botTurn.push("Nyx");
            Nyx();
            return
     }else{console.log("its Nyx's turn")}
}


let Nyx = () => {
    if(botTurn[botTurn.length - 1] === "Nyx")
        {
            let totalAB_length = AvailablePeiceforGame_Black.length;
            let Arrayofindents = [];
            for(let i = 0 ; i <= totalAB_length - 1 ; i++){Arrayofindents.push(i)}
            let choosenIndent = PickOne(Arrayofindents);
            let initialChosenIndent  = choosenIndent;
            let PeiceviaFind = Find(AvailablePeiceforGame_Black[choosenIndent].positionN); // current selected Peice 
            let classofPeice;
            let type ;
            if(PeiceviaFind.classList.contains("El")){Elephant(PeiceviaFind); classofPeice = "El" ; type = "elephant"}
            if(PeiceviaFind.classList.contains("Hr")){Horse(PeiceviaFind); classofPeice = "Hr" ; type = "horse"}
            if(PeiceviaFind.classList.contains("Cm")){Camel(PeiceviaFind); classofPeice = "Cm" ; type = "camel"}
            if(PeiceviaFind.classList.contains("Kn")){King(PeiceviaFind); classofPeice = "Kn" ; type = "king"}
            if(PeiceviaFind.classList.contains("Qn")){Queen(PeiceviaFind); classofPeice = "Qn" ; type = "queen"}
            if(PeiceviaFind.classList.contains("Pw")){Pawn(PeiceviaFind); classofPeice = "Pw" ; type = "pawn"}
            
    
    
            let MovableLocs = []
            document.querySelectorAll(".movable").forEach((value,index) => { MovableLocs.push({V : value , type : "movable"}) });
            document.querySelectorAll(".enemyMove").forEach((value,index) => { MovableLocs.push({V : value , type : "enemyMove"}) });
    
            if(MovableLocs.length === 0){Nyx() ; return}
    
    
            Arrayofindents = [];
            for(let i = 0 ; i <= MovableLocs.length - 1 ; i++){Arrayofindents.push(i)}
            choosenIndent = PickOne(Arrayofindents);
    
            if(MovableLocs[choosenIndent].type === "movable")
            {
                let NewPeicePosition = MovableLocs[choosenIndent].V;
    
                PeiceviaFind.classList.remove(classofPeice);
                PeiceviaFind.classList.remove("blackP");
                PeiceviaFind.classList.remove("Active");
                PeiceviaFind.firstElementChild.setAttribute("src" , "");
                NewPeicePosition.classList.add(classofPeice);
                NewPeicePosition.classList.add("blackP");
                NewPeicePosition.classList.add("Active");
                NewPeicePosition.firstElementChild.setAttribute("src" , `./svgs/black_${type}.svg`);
                cleanUp();
                let UpdatedPS = [];
    
                let initID = AvailablePeiceforGame_Black[initialChosenIndent].id;
    
                PositionDefault.forEach((value,index) => {
                    if(value.id !== initID){UpdatedPS.push(value)};
                    if(value.id === initID){UpdatedPS.push({id : value.id  , positionN : Number(NewPeicePosition.getAttribute("positionN"))})}
                })
    
                Games[Games.length - 1].push(UpdatedPS);            
            }
    
    
    
            if(MovableLocs[choosenIndent].type === "enemyMove")
                {
                    let NewPeicePosition = MovableLocs[choosenIndent].V;
    
                    let EnId = NewPeicePosition.getAttribute("PeiceID")
                    let classes = ["El" , "Cm" , "Hr" , "Kn" , "Pw" , "Qn"]
                    let typeofEn ;
                    for( let i = 0; i<= 5 ; i++)
                    {
                        if(NewPeicePosition.classList.contains(classes[i])){typeofEn = classes[i]}
                    }
                    PeiceviaFind.classList.remove(classofPeice);
                    PeiceviaFind.classList.remove("Active"); // no need to do this 
                    PeiceviaFind.firstElementChild.setAttribute("src" , ""); // done
                    PeiceviaFind.classList.remove("blackP"); 
    
    
                    NewPeicePosition.classList.remove(typeofEn)
                    NewPeicePosition.classList.add(classofPeice);
                    NewPeicePosition.classList.add("blackP");
                    NewPeicePosition.classList.remove("whiteP");
                    NewPeicePosition.firstElementChild.setAttribute("src" , `./svgs/black_${type}.svg`);
                    cleanUp();
                    let UpdatedPS = [];
        
                    let initID = AvailablePeiceforGame_Black[initialChosenIndent].id;
        
                    PositionDefault.forEach((value,index) => {
                        if(value.id !== initID && value.id !== EnId){UpdatedPS.push(value)};
                        if(value.id === initID){UpdatedPS.push({id : value.id  , positionN : Number(NewPeicePosition.getAttribute("positionN"))})}
                        if(value.id === EnId){UpdatedPS.push({id : value.id , positionN : undefined , state : "eliminated" , eliminatedby : initID})}
                    })
    
                    let UpdatedAPB = [];
                    for(let i = 0 ; i<= AvailablePeiceforGame_White.length - 1 ; i++)
                    {
                        if(AvailablePeiceforGame_White[i].id !== EnId){UpdatedAPB.push(AvailablePeiceforGame_White[i])}
                    }
        
                    AvailablePeiceforGame_White = UpdatedAPB;
                    Games[Games.length - 1].push(UpdatedPS);            
                }
    
                botTurn.push("Lumos");
                Lumos();
                return
         }else{console.log("its Lumos's turn")}
}
Lumos();

document.querySelector(".StartGame").addEventListener('click',() => {

    Lumos();
})









