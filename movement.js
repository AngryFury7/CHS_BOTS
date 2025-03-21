// this file contains information about the different types of movement of the peices and the working of the Peices 


export let Search = (a,b) => {
    let Arrayone = [];
    let P = [];
    if(a>=1 && a<=8 && b>=1 && b<=8){
     let JP = document.querySelectorAll('.blocks').forEach((value,index) => {
         if(Number(value.getAttribute("X")) === a){
            Arrayone.push(value);
        }

        if(Arrayone.length === 8){
            Arrayone.forEach((value,index) => {
                if(Number(value.getAttribute("Y")) === b)
                {
                    P.push(value);
                    return true
                }
            })
        } 
    });}
    else{
        P.push("Error : check your values !!!!!!!!!!!!!!!")
    }
    return P[0]
} 


///////////////////////////////////////////////////////////////////////////////////


 
//----------------------------------------------------------------------------------------------------------------------------------

export const Cm = () => {
    document.querySelectorAll(".Cm").forEach((value,index) => {
        let Cm_X = Number(value.getAttribute("X"));
        let Cm_Y = Number(value.getAttribute("Y"));
        let disCX = Cm_X - 1;;
        let disCY = Cm_Y - 1;
        let disEX = 8 - Cm_X;
        let disEY = 8 - Cm_Y;
        
        
        //first --> TR BR BL TL diagonals in the 

        let ArrayofmovementsCm_TR= []; //done 
        let TRX = Cm_X ; 
        let TRY = Cm_Y ;
        for(let i = 1 ; i <= 7 ; i++)
        {
            TRX = TRX + 1 ;
            TRY = TRY + 1 ;
            if(TRX > 8 || TRY > 8){break}else{
            ArrayofmovementsCm_TR.push({x : TRX , y : TRY})}
        }

        let ArrayofmovementsCm_BR= [];  //done 
        let BRX = Cm_X ; 
        let BRY = Cm_Y ;
        for(let i = 1 ; i <= 7 ; i++)
        {
            BRX = BRX + 1 ;
            BRY = BRY -1  ;
            if(BRX > 8 || BRY < 1){break}else{
            ArrayofmovementsCm_BR.push({x : BRX , y : BRY})}
        }



        let ArrayofmovementsCm_TL= [];  
        let TLX = Cm_X ; 
        let TLY = Cm_Y ;
        for(let i = 1 ; i <= 7 ; i++)
        {
            TLX = TLX -1  ;
            TLY = TLY + 1  ;
            if(TLX < 1 || TLY > 8){break}else{
            ArrayofmovementsCm_TL.push({x : TLX , y : TLY})}
        }

        let ArrayofmovementsCm_BL= [];  //done 
        let BLX = Cm_X ; 
        let BLY = Cm_Y ;
        for(let i = 1 ; i <= 7 ; i++)
        {
            BLX = BLX -1   ;
            BLY = BLY - 1  ;
            if(BLX < 1 || BLY < 1){break}else{
            ArrayofmovementsCm_BL.push({x : BLX , y : BLY})}
        }



        let breakerCm = (Arrayji,colorI) => {
            if(Arrayji.length !== 0){
                let indexo = [0] ; 
                for(let i = 0 ; i <= Arrayji.length -1 ; i++)
                {
                    if(Search(Arrayji[i].x,Arrayji[i].y).classList.contains("Active"))
                    {
                        if(Search(Arrayji[i].x,Arrayji[i].y).classList.contains(colorI))
                        {
                            Search(Arrayji[i].x,Arrayji[i].y).classList.add("enemyMove")
                        }

                        break 
                    }else{
                        Search(Arrayji[i].x,Arrayji[i].y).classList.add("movable")
                    }
                }
            }
        }


        value.addEventListener('click',()=> {

            if( !value.classList.contains("Active"))
            {
               // console.log("yep this contains the Active class");;
               //cleanUp();
                return 
            }
            cleanUp();

            if(value.classList.contains("whiteP")){
                breakerCm(ArrayofmovementsCm_TR,"blackP");
                breakerCm(ArrayofmovementsCm_BR,"blackP")
                breakerCm(ArrayofmovementsCm_TL,"blackP")
                breakerCm(ArrayofmovementsCm_BL,"blackP");
               // console.log("clicked white")
            }

            if(value.classList.contains("blackP")){
                breakerCm(ArrayofmovementsCm_TR,"whiteP");
                breakerCm(ArrayofmovementsCm_BR,"whiteP")
                breakerCm(ArrayofmovementsCm_TL,"whiteP")
                breakerCm(ArrayofmovementsCm_BL,"whiteP");
               // console.log("clicked black")
            }
        })




    })
}



//----------------------------------------------------------------------------------------------------------------------------------
export const  Qn = () => {
document.querySelectorAll('.Qn').forEach((value,index)=> {
    let Qn_X = Number(value.getAttribute("X"))
    let Qn_Y = Number(value.getAttribute("Y"))



    let ArrayofmovementsQn_TR= []; //done 
    let TRX = Qn_X ; 
    let TRY = Qn_Y ;
    for(let i = 1 ; i <= 7 ; i++)
    {
        TRX = TRX + 1 ;
        TRY = TRY + 1 ;
        if(TRX > 8 || TRY > 8){break}else{
        ArrayofmovementsQn_TR.push({x : TRX , y : TRY})}
    }

    let ArrayofmovementsQn_BR= [];  //done 
    let BRX = Qn_X ; 
    let BRY = Qn_Y ;
    for(let i = 1 ; i <= 7 ; i++)
    {
        BRX = BRX + 1 ;
        BRY = BRY -1  ;
        if(BRX > 8 || BRY < 1){break}else{
        ArrayofmovementsQn_BR.push({x : BRX , y : BRY})}
    }



    let ArrayofmovementsQn_TL= [];  
    let TLX = Qn_X ; 
    let TLY = Qn_Y ;
    for(let i = 1 ; i <= 7 ; i++)
    {
        TLX = TLX -1  ;
        TLY = TLY + 1  ;
        if(TLX < 1 || TLY > 8){break}else{
        ArrayofmovementsQn_TL.push({x : TLX , y : TLY})}
    }

    let ArrayofmovementsQn_BL= [];  //done 
    let BLX = Qn_X ; 
    let BLY = Qn_Y ;
    for(let i = 1 ; i <= 7 ; i++)
    {
        BLX = BLX -1   ;
        BLY = BLY - 1  ;
        if(BLX < 1 || BLY < 1){break}else{
        ArrayofmovementsQn_BL.push({x : BLX , y : BLY})}
    }

    let ArrayofmovementsQn_top = [];
    let T = Qn_Y;
    
    for(let i = 0 ; i <= 8 ; i++)
    {
        T = T+1 ;
        
        if(T>8){break}else{ArrayofmovementsQn_top.push({x : Qn_X , y : T })}
    }

    let ArrayofmovementsQn_bottom = [];
    let B = Qn_Y;
    
    for(let i = 0 ; i <= 8 ; i++)
    {
        B = B-1 ;
        
        if(B<1){break}else{ArrayofmovementsQn_bottom.push({x : Qn_X , y : B })}
    }


    let ArrayofmovementsQn_left = [];
    let L = Qn_X;
    
    for(let i = 0 ; i <= 8 ; i++)
    {
        L = L-1 ;
        
        if(L<1){break}else{ArrayofmovementsQn_left.push({x : L , y : Qn_Y })}
    }


    let ArrayofmovementsQn_right = [];
    let R = Qn_X;
    
    for(let i = 0 ; i <= 8 ; i++)
    {
        R = R+1 ;
        
        if(R>8){break}else{ArrayofmovementsQn_right.push({x : R , y : Qn_Y })}
    }



    value.addEventListener('click',()=> {

        if( !value.classList.contains("Active"))
            {
               // console.log("yep this contains the Active class");
              // cleanUp();
                return 
            }

        let breakerQn = (Arrayji,colorI) => {
            if(Arrayji.length !== 0){
                let indexo = [0] ; 
                for(let i = 0 ; i <= Arrayji.length -1 ; i++)
                {
                    if(Search(Arrayji[i].x,Arrayji[i].y).classList.contains("Active"))
                    {
                        if(Search(Arrayji[i].x,Arrayji[i].y).classList.contains(colorI))
                        {
                            Search(Arrayji[i].x,Arrayji[i].y).classList.add("enemyMove")
                        }

                        break 
                    }else{
                        Search(Arrayji[i].x,Arrayji[i].y).classList.add("movable")
                    }
                }
            }
        }
        cleanUp();
        console.log("queen")


        if(value.classList.contains("whiteP"))
        {
            breakerQn(ArrayofmovementsQn_BL,"blackP")
            breakerQn(ArrayofmovementsQn_BR,"blackP")
            breakerQn(ArrayofmovementsQn_TL,"blackP")
            breakerQn(ArrayofmovementsQn_TR,"blackP")
            breakerQn(ArrayofmovementsQn_bottom,"blackP")
            breakerQn(ArrayofmovementsQn_top,"blackP")

        }

        if(value.classList.contains("blackP"))
            {
                breakerQn(ArrayofmovementsQn_BL,"whiteP")
                breakerQn(ArrayofmovementsQn_BR,"whiteP")
                breakerQn(ArrayofmovementsQn_TL,"whiteP")
                breakerQn(ArrayofmovementsQn_TR,"whiteP")
                breakerQn(ArrayofmovementsQn_bottom,"whiteP")
                breakerQn(ArrayofmovementsQn_top,"whiteP")
    
            }


    })

})
}

//----------------------------------------------------------------------------------------------------------------------------------
export const  Kn = () => {
    document.querySelectorAll('.Kn').forEach((value,index)=> {
        let Kn_X = Number(value.getAttribute("X"))
        let Kn_Y = Number(value.getAttribute("Y"))
    
    
    
        let ArrayofmovementsKn_TR= []; //done 
        let TRX = Kn_X ; 
        let TRY = Kn_Y ;
        for(let i = 1 ; i <= 1 ; i++)
        {
            TRX = TRX + 1 ;
            TRY = TRY + 1 ;
            if(TRX > 8 || TRY > 8){break}else{
            ArrayofmovementsKn_TR.push({x : TRX , y : TRY})}
        }
    
        let ArrayofmovementsKn_BR= [];  //done 
        let BRX = Kn_X ; 
        let BRY = Kn_Y ;
        for(let i = 1 ; i <=1 ; i++)
        {
            BRX = BRX + 1 ;
            BRY = BRY -1  ;
            if(BRX > 8 || BRY < 1){break}else{
            ArrayofmovementsKn_BR.push({x : BRX , y : BRY})}
        }
    
    
    
        let ArrayofmovementsKn_TL= [];  
        let TLX = Kn_X ; 
        let TLY = Kn_Y ;
        for(let i = 1 ; i <= 1 ; i++)
        {
            TLX = TLX -1  ;
            TLY = TLY + 1  ;
            if(TLX < 1 || TLY > 8){break}else{
            ArrayofmovementsKn_TL.push({x : TLX , y : TLY})}
        }
    
        let ArrayofmovementsKn_BL= [];  //done 
        let BLX = Kn_X ; 
        let BLY = Kn_Y ;
        for(let i = 1 ; i <= 1 ; i++)
        {
            BLX = BLX -1   ;
            BLY = BLY - 1  ;
            if(BLX < 1 || BLY < 1){break}else{
            ArrayofmovementsKn_BL.push({x : BLX , y : BLY})}
        }
    
        let ArrayofmovementsKn_top = [];
        let T = Kn_Y;
        
        for(let i = 0 ; i <= 0 ; i++)
        {
            T = T+1 ;
            
            if(T>8){break}else{ArrayofmovementsKn_top.push({x : Kn_X , y : T })}
        }
    
        let ArrayofmovementsKn_bottom = [];
        let B = Kn_Y;
        
        for(let i = 0 ; i <= 0 ; i++)
        {
            B = B-1 ;
            
            if(B<1){break}else{ArrayofmovementsKn_bottom.push({x : Kn_X , y : B })}
        }
    
    
        let ArrayofmovementsKn_left = [];
        let L = Kn_X;
        
        for(let i = 0 ; i <= 0 ; i++)
        {
            L = L-1 ;
            
            if(L<1){break}else{ArrayofmovementsKn_left.push({x : L , y : Kn_Y })}
        }
    
    
        let ArrayofmovementsKn_right = [];
        let R = Kn_X;
        
        for(let i = 0 ; i <= 0 ; i++)
        {
            R = R+1 ;
            
            if(R>8){break}else{ArrayofmovementsKn_right.push({x : R , y : Kn_Y })}
        }
    
    
    
        value.addEventListener('click',()=> {

            if( !value.classList.contains("Active"))
                {
                   // console.log("yep this contains the Active class");
                  // cleanUp();

                    return 
                }
                cleanUp();

    
            let breakerKn = (Arrayji,colorI) => {
                if(Arrayji.length !== 0){
                    let indexo = [0] ; 
                    for(let i = 0 ; i <= Arrayji.length -1 ; i++)
                    {
                        if(Search(Arrayji[i].x,Arrayji[i].y).classList.contains("Active"))
                        {
                            if(Search(Arrayji[i].x,Arrayji[i].y).classList.contains(colorI))
                            {
                                Search(Arrayji[i].x,Arrayji[i].y).classList.add("enemyMove")
                            }
    
                            break 
                        }else{
                            Search(Arrayji[i].x,Arrayji[i].y).classList.add("movable")
                        }
                    }
                }
            }
    
            if(value.classList.contains("whiteP"))
            {
                breakerKn(ArrayofmovementsKn_BL,"blackP")
                breakerKn(ArrayofmovementsKn_BR,"blackP")
                breakerKn(ArrayofmovementsKn_TL,"blackP")
                breakerKn(ArrayofmovementsKn_TR,"blackP")
                breakerKn(ArrayofmovementsKn_bottom,"blackP")
                breakerKn(ArrayofmovementsKn_top,"blackP")
    
            }
    
            if(value.classList.contains("blackP"))
                {
                    breakerKn(ArrayofmovementsKn_BL,"whiteP")
                    breakerKn(ArrayofmovementsKn_BR,"whiteP")
                    breakerKn(ArrayofmovementsKn_TL,"whiteP")
                    breakerKn(ArrayofmovementsKn_TR,"whiteP")
                    breakerKn(ArrayofmovementsKn_bottom,"whiteP")
                    breakerKn(ArrayofmovementsKn_top,"whiteP")
        
                }
    
    
        })
    
    })
    }



//----------------------------------------------------------------------------------------------------------------------------------
export const  El = () => {
    document.querySelectorAll('.El').forEach((value,index)=> {
        let El_X = Number(value.getAttribute("X"))
        let El_Y = Number(value.getAttribute("Y"))
    
        let ArrayofmovementsEl_top = [];
        let T = El_Y;
        
        for(let i = 0 ; i <= 8 ; i++)
        {
            T = T+1 ;
            
            if(T>8){break}else{ArrayofmovementsEl_top.push({x : El_X , y : T })}
        }
    
        let ArrayofmovementsEl_bottom = [];
        let B = El_Y;
        
        for(let i = 0 ; i <= 8 ; i++)
        {
            B = B-1 ;
            
            if(B<1){break}else{ArrayofmovementsEl_bottom.push({x : El_X , y : B })}
        }
    
    
        let ArrayofmovementsEl_left = [];
        let L = El_X;
        
        for(let i = 0 ; i <= 8 ; i++)
        {
            L = L-1 ;
            
            if(L<1){break}else{ArrayofmovementsEl_left.push({x : L , y : El_Y })}
        }
    
    
        let ArrayofmovementsEl_right = [];
        let R = El_X;
        
        for(let i = 0 ; i <= 8 ; i++)
        {
            R = R+1 ;
            
            if(R>8){break}else{ArrayofmovementsEl_right.push({x : R , y : El_Y })}
        }
    
    
    
        value.addEventListener('click',()=> {
            if( !value.classList.contains("Active"))
                {
                   // console.log("yep this contains the Active class");
                  // cleanUp();

                    return 
                }

                cleanUp();

    
            let breakerEl = (Arrayji,colorI) => {
                if(Arrayji.length !== 0){
                    let indexo = [0] ; 
                    for(let i = 0 ; i <= Arrayji.length -1 ; i++)
                    {
                        if(Search(Arrayji[i].x,Arrayji[i].y).classList.contains("Active"))
                        {
                            if(Search(Arrayji[i].x,Arrayji[i].y).classList.contains(colorI))
                            {
                                Search(Arrayji[i].x,Arrayji[i].y).classList.add("enemyMove")
                            }
    
                            break 
                        }else{
                            Search(Arrayji[i].x,Arrayji[i].y).classList.add("movable")
                        }
                    }
                }
            }
    
            if(value.classList.contains("whiteP"))
            {
               // breakerEl(ArrayofmovementsEl_BL,"blackP")
               // breakerEl(ArrayofmovementsEl_BR,"blackP")
               // breakerEl(ArrayofmovementsEl_TL,"blackP")
               // breakerEl(ArrayofmovementsEl_TR,"blackP")
                breakerEl(ArrayofmovementsEl_bottom,"blackP")
                breakerEl(ArrayofmovementsEl_top,"blackP")
                breakerEl(ArrayofmovementsEl_left,"blackP");
                breakerEl(ArrayofmovementsEl_right,"blackP")


    
            }
    
            if(value.classList.contains("blackP"))
                {
                  //  breakerEl(ArrayofmovementsEl_BL,"whiteP")
                  //  breakerEl(ArrayofmovementsEl_BR,"whiteP")
                  //  breakerEl(ArrayofmovementsEl_TL,"whiteP")
                  //  breakerEl(ArrayofmovementsEl_TR,"whiteP")
                breakerEl(ArrayofmovementsEl_bottom,"whiteP")
                breakerEl(ArrayofmovementsEl_top,"whiteP")
                breakerEl(ArrayofmovementsEl_left,"whiteP");
                breakerEl(ArrayofmovementsEl_right,"whiteP")
        
                }
    
    
        })
    
    })
    }


//----------------------------------------------------------------------------------------------------------------------------------
export const Hr = () => {
    document.querySelectorAll(".Hr").forEach((value,index) => {
        let Hr_X = Number(value.getAttribute("X"));
        let Hr_Y = Number(value.getAttribute("Y"));

        let ArrayofmovementsHr_top = [];
        let T = Hr_Y;
        let Tl = Hr_X;
        let Tr = Hr_X;
        for(let i = 0 ; i<=0; i++)
        {
            T = T + 2;
            Tl = Tl - 1;
            Tr = Tr + 1 ;
         //   if(T > 8 || Tl < 1 || Tr > 8){break}else{ArrayofmovementsHr_top.push({x : Tl , y : T}, {x : Tr , y : T})}
         ArrayofmovementsHr_top.push({x : Tl , y : T}, {x : Tr , y : T})
        }

        let ArrayofmovementsHr_left = [];
        let L = Hr_X;
        let Lt = Hr_Y;
        let Lb = Hr_Y;
        for(let i = 0 ; i<=0; i++)
        {
            L = L - 2;
            Lt = Lt + 1;
            Lb = Lb - 1 ;
          //  if(L < 1 || Lb < 1 || Lt > 8){break}else{ArrayofmovementsHr_left.push({x : L, y : Lb}, {x : L , y : Lt})}
          ArrayofmovementsHr_left.push({x : L, y : Lb}, {x : L , y : Lt})
        }

        let ArrayofmovementsHr_right = [];
        let R = Hr_X;
        let Rt = Hr_Y;
        let Rb = Hr_Y;
        for(let i = 0 ; i<=0; i++)
        {
            R = R + 2;
            Rt = Rt + 1;
            Rb = Rb - 1 ;
          //  if(R > 8 || Rb < 1 || Rt > 8){break}else{ArrayofmovementsHr_right.push({x : R, y : Rb}, {x : R , y : Rt})}
          ArrayofmovementsHr_right.push({x : R, y : Rb}, {x : R , y : Rt})
        }

        let ArrayofmovementsHr_bottom = [];
        let B = Hr_Y;
        let Bl = Hr_X;
        let Br = Hr_X;
        for(let i = 0 ; i<=0; i++)
        {
            B = B - 2;
            Bl = Bl - 1;
            Br = Br + 1 ;
           // if(B < 1 || Bl < 1 || Br > 8){break}else{ArrayofmovementsHr_bottom.push({x : Bl , y : B}, {x : Br , y : B})}
           ArrayofmovementsHr_bottom.push({x : Bl , y : B}, {x : Br , y : B})
        }

        let ArrayofmovementsHr = ArrayofmovementsHr_top.concat(ArrayofmovementsHr_bottom,ArrayofmovementsHr_left,ArrayofmovementsHr_right);
        let ArrayofmovementsHrFiltered = ArrayofmovementsHr.filter((value,index) => {
            if(value.x <=  8 && value.x >=  1 && value.y >=  1 && value.y <= 8)
            {return true}else{return false}
        })

        //currentX , currentY ,classofPeice ,classcolorofPeice,typeofPeice , colorofEnemy , cleaningArray
        
        value.addEventListener('click',()=> {
            if( !value.classList.contains("Active"))
                {
                   // console.log("yep this contains the Active class");
                  // cleanUp();

                    return 
                }
                cleanUp();

           if(value.classList.contains("whiteP"))
           {
            ArrayofmovementsHrFiltered.forEach((value,index) => {
                if(Search(value.x,value.y).classList.contains("Active"))
                {
                    if(Search(value.x,value.y).classList.contains("blackP"))
                    {
                        Search(value.x,value.y).classList.add("enemyMove")
                    }
                }else{
                    Search(value.x,value.y).classList.add("movable")
                }

                //MovePeice(Hr_X,Hr_Y,"Hr","whiteP","white_horse","blackP",[ArrayofmovementsHr,ArrayofmovementsHr_bottom,ArrayofmovementsHr_left,ArrayofmovementsHr_right,ArrayofmovementsHr_top,ArrayofmovementsHrFiltered])
               // console.log(ArrayofmovementsHrFiltered);
               // console.log("wait")
            })
           }

           if(value.classList.contains("blackP"))
           {
            ArrayofmovementsHrFiltered.forEach((value,index) => {
                if(Search(value.x,value.y).classList.contains("Active"))
                {
                    if(Search(value.x,value.y).classList.contains("whiteP"))
                    {
                        Search(value.x,value.y).classList.add("enemyMove")
                    }
                }else{
                    Search(value.x,value.y).classList.add("movable")
                }

                MovePeice(Hr_X,Hr_Y,"Hr","blackP","black_horse","whiteP",[ArrayofmovementsHr,ArrayofmovementsHr_bottom,ArrayofmovementsHr_left,ArrayofmovementsHr_right,ArrayofmovementsHr_top,ArrayofmovementsHrFiltered])

            })
           }
        })

    })
}
//----------------------------------------------------------------------------------------------------------------------------------

export const Pw = () => {
    document.querySelectorAll(".Pw").forEach((value,index)=> {
        let Pw_X = Number(value.getAttribute("X"));
        let Pw_Y = Number(value.getAttribute("Y"))

            //white code
        let ArrayofmovementsPw_bottom_white = [];
        if(value.classList.contains("whiteP")){
            let B = Pw_Y;
            let Bl = Pw_X;
            let Br = Pw_X;
            for(let i = 0 ; i<=0; i++)
            {
                B = B - 1;
                Bl = Bl - 1;
                Br = Br + 1 ;
               // if(B < 1 || Bl < 1 || Br > 8){break}else{ArrayofmovementsHr_bottom.push({x : Bl , y : B}, {x : Br , y : B})}
               ArrayofmovementsPw_bottom_white.push({x : Bl , y : B,id:"pass"}, {x : Br , y : B , id : "pass"},{x : Pw_X, y : B, id : "pass"})
            }

            if(Pw_Y === 7){
                ArrayofmovementsPw_bottom_white.push({x : Pw_X, y : Pw_Y - 2, id : "notpass"})
            }
        }


            //black code
        let ArrayofmovementsPw_top_black = [];
        if(value.classList.contains("blackP")){
            let T = Pw_Y;
            let Tl = Pw_X;
            let Tr = Pw_X;
            for(let i = 0 ; i<=0; i++)
            {
                T = T + 1;
                Tl = Tl - 1;
                Tr = Tr + 1 ;
             //   if(T > 8 || Tl < 1 || Tr > 8){break}else{ArrayofmovementsHr_top.push({x : Tl , y : T}, {x : Tr , y : T})}
             ArrayofmovementsPw_top_black.push({x : Tl , y : T,id : "pass"}, {x : Tr , y : T,id : "pass"},{x : Pw_X , y : T,id : "pass"})
            }
            if(Pw_Y === 2){
                ArrayofmovementsPw_top_black.push({x : Pw_X, y : Pw_Y + 2,id : "notpass"})
            }
        }

        let ArrayofmovementsPw_bottom_whiteFiltered = ArrayofmovementsPw_bottom_white.filter((value,index) => {
            if(value.x <= 8 && value.x >= 1 && value.y >= 1 && value.y <= 8){
                return true
            }else{return false}

        })

        
        let ArrayofmovementsPw_top_blackFiltered = ArrayofmovementsPw_top_black.filter((value,index) => {
            if(value.x <=  8 && value.x >= 1 && value.y >=  1 && value.y <= 8){
                return true
            }else{return false}

        })


        value.addEventListener('click',()=> {
            //console.log("pawn is trigger")

            if( !value.classList.contains("Active"))
                {
                   // console.log("yep this contains the Active class");
                    return 
                }
                cleanUp();

            if(value.classList.contains("whiteP"))
            {
                ArrayofmovementsPw_bottom_whiteFiltered.forEach((value,index) => {
                    if(value.x !== Pw_X)
                    {
                        if(Search(value.x,value.y).classList.contains("blackP")){
                            Search(value.x,value.y).classList.add("enemyMove")
                        }
                    }else{
                        if(value.id === "notpass")
                        {
                            if(!Search(Pw_X,6).classList.contains("Active")){
                                if( !Search(value.x,value.y).classList.contains("Active"))
                                    {
                                        Search(value.x,value.y).classList.add("movable");
                                    };
                            }
                        }else{
                            if(!Search(value.x,value.y).classList.contains("Active")){
                                Search(value.x,value.y).classList.add("movable")
                            } 
                        }
                    }

                })
            }

            if(value.classList.contains("blackP"))
                {
                    ArrayofmovementsPw_top_blackFiltered.forEach((value,index) => {
                        if(value.x !== Pw_X)
                        {
                            if(Search(value.x,value.y).classList.contains("whiteP")){
                                Search(value.x,value.y).classList.add("enemyMove")
                            }
                        }else{
                            if(value.id === "notpass")
                            {
                                if(!Search(Pw_X,3).classList.contains("Active")){
                                  if( !Search(value.x,value.y).classList.contains("Active"))
                                    {
                                        Search(value.x,value.y).classList.add("movable");
                                    };
                                }
                            }else{
                                if(!Search(value.x,value.y).classList.contains("Active")){
                                    Search(value.x,value.y).classList.add("movable")
                                } 
                            }
                        }
    
                    })
                }
        })
    })
}




//.       this is the space which i am leaving for the extra work which i will do 
//.       this is the space which i am leaving for the extra work which i will do 
//.       this is the space which i am leaving for the extra work which i will do 
//.       this is the space which i am leaving for the extra work which i will do 
//.       this is the space which i am leaving for the extra work which i will do 
//.       this is the space which i am leaving for the extra work which i will do 
//.       this is the space which i am leaving for the extra work which i will do 
//.       this is the space which i am leaving for the extra work which i will do 
//.       this is the space which i am leaving for the extra work which i will do 
//.       this is the space which i am leaving for the extra work which i will do 
//.       this is the space which i am leaving for the extra work which i will do 
//.       this is the space which i am leaving for the extra work which i will do 
//.       this is the space which i am leaving for the extra work which i will do 


// so till now i have selected the values based on the classes of the elements and if they have class --> Active 




export const cleanUp = () => {
    document.querySelectorAll(".movable").forEach((value,index) => {
        value.classList.remove("movable")
    });


    if(document.querySelectorAll(".enemyMove").length !== 0){
    document.querySelectorAll(".enemyMove").forEach((value,index) => {
        value.classList.remove("enemyMove")
    });}
}

// let's make a function which can move an Peice from one place to other 

export const Update = () => {
    //console.log(document.querySelectorAll(".movable"))
    // in this function i will try to update the position of the function ;
    document.querySelectorAll(".Active").forEach((value,index) => {
        value.addEventListener('click',() => {
           let currentX =  Number(value.getAttribute("X"));
           let currentY =  Number(value.getAttribute("Y"));
           let NewX ;
           let NewY ;
           let typeofPeice ; 
           let colorofPeice ;
           let indexDecider ;
           let classcolorofPeice;
           let colorofenemy ;
           let classcolorofenemy;
           if(value.classList.contains("whiteP")){colorofPeice = "white"}
           if(value.classList.contains("blackP")){colorofPeice = "black"}
           if(value.classList.contains("whiteP")){classcolorofPeice = "whiteP"};
           if(value.classList.contains("blackP")){classcolorofPeice = "blackP"};

           if(value.classList.contains("whiteP")){colorofenemy = "black"}
           if(value.classList.contains("blackP")){colorofenemy = "white"}
           if(value.classList.contains("whiteP")){classcolorofenemy = "blackP"};
           if(value.classList.contains("blackP")){classcolorofenemy = "whiteP"}


           //first i will have to check the type of the Active clicked ;
           let Classes = ["El" , "Hr" , "Cm" , "Pw" , "Kn" , "Qn"];
            for(let i = 0 ; i<= 5 ; i++)
            {
                if(value.classList.contains(Classes[i]))
                {
                    typeofPeice = Classes[i];
                    indexDecider = i; // 0 , 1, 2 , 3 , 4 , 5 
                }
            }

            // remove these things from the item : .Active , .TypeofPeice , .colorofPeice , svg of it
            // add these things to new Position : ".Active" , .typeofP ,color , svg of it 
            // call the cleanup function on click of these items 
           document.querySelectorAll(".movable").forEach((value,index) => {
            value.addEventListener('click',() => {
                cleanUp();
                 NewX =  Number(value.getAttribute("X"));
                 NewY =  Number(value.getAttribute("Y"));;
                 cleanUp();
                 Search(currentX,currentY).classList.remove("Active");
                 Search(currentX,currentY).classList.remove(typeofPeice);
                 Search(currentX,currentY).classList.remove(classcolorofPeice);
                 Search(NewX,NewY).classList.add("Active");
                 Search(NewX,NewY).classList.add(typeofPeice);
                 Search(NewX,NewY).classList.add(classcolorofPeice);
                 if(indexDecider === 3){
                    Search(currentX,currentY).firstElementChild.setAttribute('src',"");
                    Search(NewX,NewY).firstElementChild.setAttribute('src',`./svgs/${colorofPeice}_pawn.svg`);

                 }

                 if(indexDecider === 0){
                    Search(currentX,currentY).firstElementChild.setAttribute('src',"");
                    Search(NewX,NewY).firstElementChild.setAttribute('src',`./svgs/${colorofPeice}_elephant.svg`);

                 }

                 if(indexDecider === 1){
                    Search(currentX,currentY).firstElementChild.setAttribute('src',"");
                    Search(NewX,NewY).firstElementChild.setAttribute('src',`./svgs/${colorofPeice}_horse.svg`);
                    console.log("added the image");

                 }

                 if(indexDecider === 2){
                    Search(currentX,currentY).firstElementChild.setAttribute('src',"");
                    Search(NewX,NewY).firstElementChild.setAttribute('src',`./svgs/${colorofPeice}_camel.svg`)

                 }

                 if(indexDecider === 4){
                    Search(currentX,currentY).firstElementChild.setAttribute('src',"");
                    Search(NewX,NewY).firstElementChild.setAttribute('src',`./svgs/${colorofPeice}_king.svg`)

                 }

                 if(indexDecider === 5){
                    Search(currentX,currentY).firstElementChild.setAttribute('src',"");
                    Search(NewX,NewY).firstElementChild.setAttribute('src',`./svgs/${colorofPeice}_queen.svg`)

                 }

                 Testing();
                 
            })
           })

           // in this i will have to remove the existing Peice on the ground ; // enemy 
           // put new peice of that place //
           // remove peice from existing place /// Attacker 
            document.querySelectorAll(".enemyMove").forEach((value,index) => {
            value.addEventListener('click',() => {

                let typeofenemy ;
                let Classes = ["El" , "Hr" , "Cm" , "Pw" , "Kn" , "Qn"];
                for(let i = 0 ; i<= 5 ; i++)
                {
                    if(value.classList.contains(Classes[i]))
                    {
                        typeofenemy = Classes[i];
                    }
                }

                
                 NewX =  Number(value.getAttribute("X"));
                 NewY =  Number(value.getAttribute("Y"));;
                 Search(currentX,currentY).classList.remove("Active");
                 Search(currentX,currentY).classList.remove(typeofPeice);
                 Search(currentX,currentY).classList.remove(classcolorofPeice);

                 Search(NewX,NewY).classList.remove(typeofenemy);
                 Search(NewX,NewY).classList.remove(classcolorofenemy);

                 Search(NewX,NewY).classList.add(typeofPeice);
                 Search(NewX,NewY).classList.add(classcolorofPeice);

                 Search(NewX,NewY).firstElementChild.setAttribute('src',"");

                 if(indexDecider === 3){
                    Search(currentX,currentY).firstElementChild.setAttribute('src',"");
                    Search(NewX,NewY).firstElementChild.setAttribute('src',`./svgs/${colorofPeice}_pawn.svg`)
                 }

                 if(indexDecider === 0){
                    Search(currentX,currentY).firstElementChild.setAttribute('src',"");
                    Search(NewX,NewY).firstElementChild.setAttribute('src',`./svgs/${colorofPeice}_elephant.svg`)
                 }

                 if(indexDecider === 1){
                    Search(currentX,currentY).firstElementChild.setAttribute('src',"");
                    Search(NewX,NewY).firstElementChild.setAttribute('src',`./svgs/${colorofPeice}_horse.svg`)
                 }

                 if(indexDecider === 2){
                    Search(currentX,currentY).firstElementChild.setAttribute('src',"");
                    Search(NewX,NewY).firstElementChild.setAttribute('src',`./svgs/${colorofPeice}_camel.svg`)
                 }

                 if(indexDecider === 4){
                    Search(currentX,currentY).firstElementChild.setAttribute('src',"");
                    Search(NewX,NewY).firstElementChild.setAttribute('src',`./svgs/${colorofPeice}_king.svg`)
                 }

                 if(indexDecider === 5){
                    Search(currentX,currentY).firstElementChild.setAttribute('src',"");
                    Search(NewX,NewY).firstElementChild.setAttribute('src',`./svgs/${colorofPeice}_queen.svg`)
                 }

                 Testing();

            })
           }) 
        })
    })
}


export const Testing = () => {
Pw() ; Cm(); Kn(); Qn() ; El(); Hr(); Update();cleanUp();}


