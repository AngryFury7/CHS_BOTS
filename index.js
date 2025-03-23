//import {cleanUp,Testing,ActiveblockMover,AllowTurn,PositionObserver} from './movement.js'
console.log('index.js is loaded successfully');

let Activeblock = (element,className) => {element.classList.add(className)}


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
            Activeblock(value,'whiteP');
            Activeblock(value,'ActiveA');

        }

        if(A<=64 && A>=49){
            Activeblock(value,'Active');
            Activeblock(value,'blackP');
            Activeblock(value,'ActiveA');
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


        if(A===4){Activeblock(value,'Kn')};
        if(A===60){Activeblock(value,'Kn')}
        if(A===61){Activeblock(value,'Qn')}
        if(A===5){Activeblock(value,'Qn')}

        if(A>=9 && A<=16){Activeblock(value,'Pw')};

        if(A>=49 && A<=56){Activeblock(value,'Pw')};

        value.classList.add('notClicked')

    }
})



let X = [1,2,3,4,5,6,7,8];
let Y = [1,2,3,4,5,6,7,8];






































