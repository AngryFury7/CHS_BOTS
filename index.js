import {El , Search , Cm , Qn , Kn , Hr,Pw,cleanUp,Testing,Update } from './movement.js'
console.log('index.js is loaded successfully');

let Activeblock = (element,className) => {
    element.classList.add(className)
    //classname should be string and should be like '.Active.whiteP' or ".Active.blackP"
}


// i am setting this as default thing and will change and i can do this first block.forEach as function which will run initially 
let blocks = document.querySelectorAll('.blocks');
blocks.forEach((value,index) => {
    value.classList.add(`block${index+1}`);
    
    let A = index+1; 
    let i = 0;
    for(i ; i<=7;i++){
        if(i%2 === 0)
        {
            if(A>=((8*i) + 1) && A<=(8*(i+1))) 
                {
                    if(A%2 ===0)
                    {value.classList.add('dark_block')}
                }
        }

        if(i%2 !== 0 )
        {
            if(A>=((8*i) + 1) && A<=(8*(i+1))) 
                {
                    if(A%2 !==0)
                    value.classList.add('dark_block')
                }
        }

        if(A<=16 && A>=1){
             Activeblock(value,'Active');
            Activeblock(value,'whiteP')
        }

   






        if(A<=64 && A>=49){
            Activeblock(value,'Active');
            Activeblock(value,'blackP')
        }

        if(A===1){Activeblock(value,'El')};
        if(A===8){Activeblock(value,'El')}
        if(A===57){Activeblock(value,'El')}
        if(A===64){Activeblock(value,'El')}

        if(A===2){Activeblock(value,'Hr')};
        if(A===7){Activeblock(value,'Hr')}
        if(A===58){Activeblock(value,'Hr')}
        if(A===63){Activeblock(value,'Hr')}

        if(A===3){Activeblock(value,'Cm')};
        if(A===6){Activeblock(value,'Cm')}
        if(A===59){Activeblock(value,'Cm')}
        if(A===62){Activeblock(value,'Cm')}

        //if(A===1){Activeblock(value,'El1')};
        //if(A===8){Activeblock(value,'El2')}
        //if(A===57){Activeblock(value,'El1')}
        //if(A===64){Activeblock(value,'El2')}
//
        //if(A===2){Activeblock(value,'Hr1')};
        //if(A===7){Activeblock(value,'Hr2')}
        //if(A===58){Activeblock(value,'Hr1')}
        //if(A===63){Activeblock(value,'Hr2')}
//
        //if(A===3){Activeblock(value,'Cm1')};
        //if(A===6){Activeblock(value,'Cm2')}
        //if(A===59){Activeblock(value,'Cm1')}
        //if(A===62){Activeblock(value,'Cm2')}

        if(A===4){Activeblock(value,'Kn')};
        if(A===60){Activeblock(value,'Kn')}
        if(A===61){Activeblock(value,'Qn')}
        if(A===5){Activeblock(value,'Qn')}

        if(A>=9 && A<=16){Activeblock(value,'Pw')};
        //if(A===9){Activeblock(value,`Pw${A-8}`)}
        //if(A===10){Activeblock(value,`Pw${A-8}`)}
        //if(A===11){Activeblock(value,`Pw${A-8}`)}
        //if(A===12){Activeblock(value,`Pw${A-8}`)}
        //if(A===13){Activeblock(value,`Pw${A-8}`)}
        //if(A===14){Activeblock(value,`Pw${A-8}`)}
        //if(A===15){Activeblock(value,`Pw${A-8}`)}
        //if(A===16){Activeblock(value,`Pw${A-8}`)}
//
//
        if(A>=49 && A<=56){Activeblock(value,'Pw')};
        //if(A===49){Activeblock(value,`Pw${A-48}`)}
        //if(A===50){Activeblock(value,`Pw${A-48}`)}
        //if(A===51){Activeblock(value,`Pw${A-48}`)}
        //if(A===52){Activeblock(value,`Pw${A-48}`)}
        //if(A===53){Activeblock(value,`Pw${A-48}`)}
        //if(A===54){Activeblock(value,`Pw${A-48}`)}
        //if(A===55){Activeblock(value,`Pw${A-48}`)}
        //if(A===56){Activeblock(value,`Pw${A-48}`)}



        value.classList.add('notClicked')

    }
})



let X = [1,2,3,4,5,6,7,8];
let Y = [1,2,3,4,5,6,7,8];



//now i will have to make functions for the El / Hr / Cm / Kn / Qn / Pw so the can search and i can add two conditions for them 




Testing();
Update();






/*
document.querySelectorAll(".movable").forEach((value,index) => {
    value.classList.remove("movable")
})*/ 

document.querySelector('.testing').addEventListener('click',()=> {

   document.querySelectorAll(".movable").forEach((value,index) => {
    console.log(value.getAttribute("X"),value.getAttribute("Y") , "this is movable items");
   })

   document.querySelectorAll(".enemyMove").forEach((value,index) => {
    console.log(value.getAttribute("X"),value.getAttribute("Y") , "this is enemyItems");
   })
})


 document.querySelectorAll('.blocks').forEach((value,index) => {
    value.addEventListener('click',()=> {
        if(!value.classList.contains("Active"))
        {
            if(!value.classList.contains("movable") && !value.classList.contains("enemyMove")){cleanUp() ; console.log("clicked non Active class")};
           // if(!value.classList.contains("enemyMove")){cleanUp() ; console.log("clicked non Active class")}
        }
    })
 })



















