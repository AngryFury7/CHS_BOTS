// so now let's try to make the logic from the Start 

import { Find, PickOne } from "./needed.js";
import {Camel} from "./Peices/Camel.js"
import {Horse} from "./Peices/Horse.js"
import {King} from './Peices/King.js'
import {Queen} from './Peices/Queen.js'
import {Elephant} from './Peices/Elephant.js'
import {Pawn} from './Peices/Pawn.js'
import {cleanUp, MakeDefault} from "./movement.js"



let initPS =     [
    {id : "whiteElephant1",positionN : 1}, //index == 0
    {id : "whiteElephant2",positionN : 8},
    {id : "whiteHorse1",positionN : 2},
    {id : "whiteHorse2",positionN : 7},
    {id : "whiteCamel1",positionN : 3}, // index = 4
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
    {id : "whitePawn8",positionN : 16}, // index === 15
    // from here the black peices start 
    {id : "blackPawn1",positionN : 49},
    {id : "blackPawn2",positionN : 50},
    {id : "blackPawn3",positionN : 51},
    {id : "blackPawn4",positionN : 52},
    {id : "blackPawn5",positionN : 53},
    {id : "blackPawn6",positionN : 54},
    {id : "blackPawn7",positionN : 55},
    {id : "blackPawn8",positionN : 56},
    {id : "blackElephant1",positionN : 57},
    {id : "blackElephant2",positionN : 58},
    {id : "blackHorse1",positionN : 59},
    {id : "blackHorse2",positionN : 60},
    {id : "blackCamel1",positionN : 61},
    {id : "blackCamel2",positionN : 62},
    {id : "blackKing",positionN :63},
    {id : "blackQueen",positionN : 64}
]
let initAWPs = []; let initABPs = [];


let DefaultWps = initAWPs; let DefaultBps = initABPs;

initPS.forEach((value,index) => {
    if(index > 15)
    {
        let Peice = Find(value.positionN);
        let type;
        let typeName;
        let classcolor = "blackP"
        if(Peice.classList.contains("El")){type = "El" , typeName = "elephant"};
        if(Peice.classList.contains("Hr")){type = "Hr" , typeName = "horse"}
        if(Peice.classList.contains("Cm")){type = "Cm" , typeName = "camel"}
        if(Peice.classList.contains("Kn")){type = "Kn" , typeName = "king"}
        if(Peice.classList.contains("Qn")){type = "Qn" , typeName = "queen"}
        if(Peice.classList.contains("Pw")){type = "Pw" , typeName = "pawn"}
        initABPs.push({id : value.id , positionN : value.positionN , typ : type , typN : typeName , color : classcolor})
    }

    if(index <= 15)
    {
        let Peice = Find(value.positionN);
        let type;
        let typeName;
        let classcolor = "whiteP"
        if(Peice.classList.contains("El")){type = "El" , typeName = "elephant" };
        if(Peice.classList.contains("Hr")){type = "Hr" , typeName = "horse"}
        if(Peice.classList.contains("Cm")){type = "Cm" , typeName = "camel"}
        if(Peice.classList.contains("Kn")){type = "Kn" , typeName = "king"}
        if(Peice.classList.contains("Qn")){type = "Qn" , typeName = "queen"}
        if(Peice.classList.contains("Pw")){type = "Pw" , typeName = "pawn"}
        initAWPs.push({id : value.id , positionN : value.positionN , typ : type , typN : typeName , color : classcolor})
    }
});


// now since we have the default values of these Peices we can move forward with creating the Bots;

let botTurn = ["Lumos"];

let Game = [initPS];

let lengthofArray = undefined;
let DecidingArray = [];
let SelectedPeice_White = undefined;
let SelectedPeice_Black = undefined;

let movableBlocks = [];
let moveDecider = [];
let Classes = ["El" , "Hr" , "Cm" , "Kn" , "Qn " , "Pw"];
let typeofEnemy ; 
let initialPeiceID ;
let NewPosition ;




let MakeLumosDf = () => { 
 lengthofArray = undefined;
 DecidingArray = [];
 SelectedPeice_White = undefined;
 movableBlocks = [];
 moveDecider = [];
 typeofEnemy = undefined;
 initialPeiceID = undefined
 NewPosition = undefined
 SelectedPeice_Black = undefined
}

let Counts = [];
let timevalue = 140;


let Lumos = () => {
    if(botTurn[botTurn.length - 1] === "Lumos")
    {
        MakeLumosDf();

        lengthofArray = initAWPs.length;
        DecidingArray = [];
        for(let i = 0 ; i <= lengthofArray - 1 ; i++){DecidingArray.push(i)};
        let PeiceViaSelection = initAWPs[PickOne(DecidingArray)];
        SelectedPeice_White = Find(PeiceViaSelection.positionN);
        if(!Find(PeiceViaSelection.positionN)){console.log("this was not found",PeiceViaSelection.positionN,initAWPs)  ; return}
        if(SelectedPeice_White.classList.contains("El")){Elephant(SelectedPeice_White);}
        if(SelectedPeice_White.classList.contains("Hr")){Horse(SelectedPeice_White);}
        if(SelectedPeice_White.classList.contains("Kn")){King(SelectedPeice_White);}
        if(SelectedPeice_White.classList.contains("Qn")){Queen(SelectedPeice_White);}
        if(SelectedPeice_White.classList.contains("Pw")){Pawn(SelectedPeice_White);}
        if(SelectedPeice_White.classList.contains("Cm")){Camel(SelectedPeice_White);}
        movableBlocks = [];
        document.querySelectorAll(".blocks").forEach((value,index) => {if(value.classList.contains("movable")){movableBlocks.push({Value : value , type : "movable"})}if(value.classList.contains("enemyMove")){movableBlocks.push({Value : value , type : "enemyMove"})}});
        if(movableBlocks.length === 0){MakeLumosDf() ; Lumos() ; return}
        moveDecider = [];
        for(let i = 0 ; i <= movableBlocks.length - 1 ; i++){moveDecider.push(i)};
        let moveDecIndent = PickOne(moveDecider);
        let movableSB = movableBlocks[moveDecIndent];
        //console.log(movableSB.type);

        NewPosition = Number(movableSB.Value.getAttribute("positionN"))


        if(movableSB.type === "movable"){
            SelectedPeice_White.firstElementChild.setAttribute("src","");
            SelectedPeice_White.classList.remove("whiteP")
            SelectedPeice_White.classList.remove(PeiceViaSelection.typ);
            SelectedPeice_White.setAttribute("PeiceID" , "");
            SelectedPeice_White.classList.remove("Active");
            
            PeiceViaSelection.positionN = NewPosition;

            movableSB.Value.firstElementChild.setAttribute("src",`./svgs/white_${PeiceViaSelection.typN}.svg`);
            movableSB.Value.classList.add("Active");
            movableSB.Value.classList.add("whiteP");
            movableSB.Value.setAttribute("PeiceID" , PeiceViaSelection.id);
            movableSB.Value.classList.add(PeiceViaSelection.typ);
            // remainder : store the Game DATA 


            cleanUp();
        }

        if(movableSB.type === "enemyMove"){
            for(let i = 0 ; i <= 5 ; i++){if(movableSB.Value.classList.contains(Classes[i])){typeofEnemy = Classes[i]}}
            SelectedPeice_White.firstElementChild.setAttribute("src","");
            SelectedPeice_White.classList.remove("whiteP")
            SelectedPeice_White.classList.remove(PeiceViaSelection.typ);
            SelectedPeice_White.setAttribute("PeiceID" , "");
            SelectedPeice_White.classList.remove("Active");
            

            initialPeiceID = movableSB.Value.getAttribute("PeiceID");
            PeiceViaSelection.positionN = Number(NewPosition);
            for(let i = 0 ; i <= initABPs.length - 1 ; i++)
            {
                if(initABPs[i].id === initialPeiceID)
                initABPs.splice(i,1)
            }
            movableSB.Value.firstElementChild.setAttribute("src",`./svgs/white_${PeiceViaSelection.typN}.svg`);
            movableSB.Value.classList.add("whiteP");
            movableSB.Value.classList.remove("blackP");
            movableSB.Value.setAttribute("PeiceID" , PeiceViaSelection.id);

            if(typeofEnemy !== PeiceViaSelection.typ){
                movableSB.Value.classList.remove(typeofEnemy);
                movableSB.Value.classList.add(PeiceViaSelection.typ)
            }
            cleanUp();



            if(typeofEnemy === "Kn")
            {console.log("white is the winner of the Game") ;
                ResultDisplay("white");
                console.log(Game)
                //botTurn.push("Nyx");
                return}
        }

        Counts.push(1);
        botTurn.push("Nyx");
        if(Counts.length > 1000){console.log("limit exceeded");return}
        setTimeout(Nyx,timevalue)
        return 

        }
}




let Nyx = () => {

    if(botTurn[botTurn.length - 1] === "Nyx")
    {       MakeLumosDf();

        lengthofArray = initABPs.length;
        DecidingArray = [];
        for(let i = 0 ; i <= lengthofArray - 1 ; i++){DecidingArray.push(i)};
        let PeiceViaSelection = initABPs[PickOne(DecidingArray)];
        SelectedPeice_Black = Find(PeiceViaSelection.positionN);
        if(SelectedPeice_Black.classList.contains("El")){Elephant(SelectedPeice_Black);}
        if(SelectedPeice_Black.classList.contains("Hr")){Horse(SelectedPeice_Black);}
        if(SelectedPeice_Black.classList.contains("Kn")){King(SelectedPeice_Black);}
        if(SelectedPeice_Black.classList.contains("Qn")){Queen(SelectedPeice_Black);}
        if(SelectedPeice_Black.classList.contains("Pw")){Pawn(SelectedPeice_Black);}
        if(SelectedPeice_Black.classList.contains("Cm")){Camel(SelectedPeice_Black);}
        movableBlocks = [];
        document.querySelectorAll(".blocks").forEach((value,index) => {if(value.classList.contains("movable")){movableBlocks.push({Value : value , type : "movable"})}if(value.classList.contains("enemyMove")){movableBlocks.push({Value : value , type : "enemyMove"})}});
        if(movableBlocks.length === 0){MakeLumosDf() ; Nyx() ; return}
        moveDecider = [];
        for(let i = 0 ; i <= movableBlocks.length - 1 ; i++){moveDecider.push(i)};
        let moveDecIndent = PickOne(moveDecider);
        let movableSB = movableBlocks[moveDecIndent];
        //console.log(movableSB.type);

        NewPosition = Number(movableSB.Value.getAttribute("positionN"))


        if(movableSB.type === "movable"){
            SelectedPeice_Black.firstElementChild.setAttribute("src","");
            SelectedPeice_Black.classList.remove("blackP")
            SelectedPeice_Black.classList.remove(PeiceViaSelection.typ);
            SelectedPeice_Black.setAttribute("PeiceID" , "");
            SelectedPeice_Black.classList.remove("Active");
            
            PeiceViaSelection.positionN = NewPosition;

            movableSB.Value.firstElementChild.setAttribute("src",`./svgs/black_${PeiceViaSelection.typN}.svg`);
            movableSB.Value.classList.add("Active");
            movableSB.Value.classList.add("blackP");
            movableSB.Value.setAttribute("PeiceID" , PeiceViaSelection.id);
            movableSB.Value.classList.add(PeiceViaSelection.typ);
            // remainder : store the Game DATA 
            cleanUp();
        }

        if(movableSB.type === "enemyMove"){
            for(let i = 0 ; i <= 5 ; i++){if(movableSB.Value.classList.contains(Classes[i])){typeofEnemy = Classes[i]}}
            SelectedPeice_Black.firstElementChild.setAttribute("src","");
            SelectedPeice_Black.classList.remove("blackP")
            SelectedPeice_Black.classList.remove(PeiceViaSelection.typ);
            SelectedPeice_Black.setAttribute("PeiceID" , "");
            SelectedPeice_Black.classList.remove("Active");
            
            initialPeiceID = movableSB.Value.getAttribute("PeiceID");
            PeiceViaSelection.positionN = Number(NewPosition);
            for(let i = 0 ; i <= initAWPs.length - 1 ; i++)
            {
                if(initAWPs[i].id === initialPeiceID)
                initAWPs.splice(i,1)
            }
            movableSB.Value.firstElementChild.setAttribute("src",`./svgs/black_${PeiceViaSelection.typN}.svg`);
            movableSB.Value.classList.add("blackP");
            movableSB.Value.classList.remove("whiteP");
            movableSB.Value.setAttribute("PeiceID" , PeiceViaSelection.id);

            if(typeofEnemy !== PeiceViaSelection.typ){
                movableSB.Value.classList.remove(typeofEnemy);
                movableSB.Value.classList.add(PeiceViaSelection.typ)
            }
            // remainder : store the Game DATA 
            cleanUp();

            if(typeofEnemy === "Kn")
                {console.log("black is the winner of the Game") ; 
                    ResultDisplay("black");
                    botTurn.push("Lumos");
                    console.log(Game)
                    return}
        }

        botTurn.push("Lumos");
        Counts.push(1)
        if(Counts.length  > 1000){console.log("limit exceeded");return}
        setTimeout(Lumos,timevalue)
        return 

        }
}

let Scale = [0]
const ResultDisplay = (colorInput) => {
    {
        document.querySelector(".ResultImg").setAttribute("src",`./svgs/${colorInput}_king.svg`);
        document.querySelector(".ResultText").innerHTML = `${colorInput} is the Winner !`;
        gsap.set(document.querySelector(".ResultText"),{
            color : "rgb(255,255,255)"
        })
    }
    gsap.to(document.querySelector(".Result"),{
        scale : 1 , 
        duration : 0.3 ,
        ease : Power4.easeInOut
    })

    Scale.push(1)

    document.querySelector(".SpanofGame").innerHTML = "Restart"

    document.querySelector('.StartGame').addEventListener('click',Lumosinit)
}

const Lumosinit = () => {
    document.querySelector(".StartGame").removeEventListener('click',Lumosinit)
    if(Scale[Scale.length - 1] === 1)
    {
        gsap.to(document.querySelector(".Result"),{
            scale : 0 ,
            duration : 0.3,
            ease : Power4.easeInOut
        })


        Counts.splice(0,Counts.length)


        MakeLumosDf();
        initAWPs = DefaultWps;
        initABPs = DefaultBps;

        document.querySelectorAll(".blocks").forEach((value,index) => {
            if(value.classList.contains("Active")){value.classList.remove("Active")}
            if(value.classList.contains("ActiveA")){value.classList.remove("ActiveA")}
            if(value.classList.contains("whiteP")){value.classList.remove("whiteP")}
            if(value.classList.contains("blackP")){value.classList.remove("blackP")}
            if(value.classList.contains("El")){value.classList.remove("El")}
            if(value.classList.contains("Hr")){value.classList.remove("Hr")}
            if(value.classList.contains("Kn")){value.classList.remove("Kn")}
            if(value.classList.contains("Cm")){value.classList.remove("Cm")}
            if(value.classList.contains("Qn")){value.classList.remove("Qn")}
            if(value.classList.contains("Pw")){value.classList.remove("Pw")};
            if(value.classList.contains("Clicked")){value.classList.remove("Clicked")};
            if(value.classList.contains("notClicked")){value.classList.remove("notClicked")}
            value.setAttribute("PeiceID" , "")
        })


         document.querySelectorAll(".blocks").forEach((value,index) => {
                let A = index + 1
                if(A<=16 && A>=1)
                {
                   value.classList.add('Active');
                   value.classList.add('whiteP');
                   value.classList.add('ActiveA');
               }
        
               if(A<=64 && A>=49)
                {
                   value.classList.add('Active');
                   value.classList.add('blackP');
                   value.classList.add('ActiveA');
                }
        
                if(A===1){value.classList.add('El')};
                if(A===8){value.classList.add('El')}
                if(A===57){value.classList.add('El')}
                if(A===64){value.classList.add('El')}
        
                if(A===2){value.classList.add('Hr')};
                if(A===7){value.classList.add('Hr')}
                if(A===58){value.classList.add('Hr')}
                if(A===63){value.classList.add('Hr')}
        
                if(A===3){value.classList.add('Cm')};
                if(A===6){value.classList.add('Cm')}
                if(A===59){value.classList.add('Cm')}
                if(A===62){value.classList.add('Cm')}
        
        
                if(A===4){value.classList.add('Kn')};
                if(A===60){value.classList.add('Kn')}
                if(A===61){value.classList.add('Qn')}
                if(A===5){value.classList.add('Qn')}
        
                if(A>=9 && A<=16){value.classList.add('Pw')};
        
                if(A>=49 && A<=56){value.classList.add('Pw')};
        
                value.classList.add("notClicked");
        
                for(let i = 0 ; i <= 31 ; i++)
                {
                    if(Number(value.getAttribute("positionN")) === initPS[i].positionN){value.setAttribute("PeiceID",`${initPS[i].id}`)}
                }
        
                value.firstElementChild.setAttribute("src","");
        
                let color;
                if(value.classList.contains("whiteP")){color = "white"};
                if(value.classList.contains("blackP")){color = "black"};
        
                if(value.classList.contains("El")){value.firstElementChild.setAttribute("src",`./svgs/${color}_elephant.svg`)};
                if(value.classList.contains("Hr")){value.firstElementChild.setAttribute("src",`./svgs/${color}_horse.svg`)}
                if(value.classList.contains("Cm")){value.firstElementChild.setAttribute("src",`./svgs/${color}_camel.svg`)}
                if(value.classList.contains("Kn")){value.firstElementChild.setAttribute("src",`./svgs/${color}_king.svg`)}
                if(value.classList.contains("Qn")){value.firstElementChild.setAttribute("src",`./svgs/${color}_queen.svg`)}
                if(value.classList.contains("Pw")){value.firstElementChild.setAttribute("src",`./svgs/${color}_pawn.svg`)}
                
            })


     setTimeout(Lumos,1000)

        Scale.push(0)
    }else{setTimeout(Lumos,900)}


    document.querySelector(".SpanofGame").innerHTML = "..."

    ;}

document.querySelector(".StartGame").addEventListener('click',Lumosinit)


/* lengthofArray = initAWPs.length;
DecidingArray = [];
for(let i = 0 ; i <= lengthofArray - 1 ; i++){DecidingArray.push(i)};
let PeiceViaSelection = initAWPs[1];
SelectedPeice_White = Find(PeiceViaSelection.positionN);
console.log(PeiceViaSelection , SelectedPeice_White); */







































































































