let Search = (a,b) => {
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








 export let Queen = (element) => {






    let Qn_X = Number(element.getAttribute("X"))
    let Qn_Y = Number(element.getAttribute("Y"))



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




        if(element.classList.contains("Qn"))
            {
            

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
       // cleanUp();


        if(element.classList.contains("whiteP"))
        {
            breakerQn(ArrayofmovementsQn_BL,"blackP")
            breakerQn(ArrayofmovementsQn_BR,"blackP")
            breakerQn(ArrayofmovementsQn_TL,"blackP")
            breakerQn(ArrayofmovementsQn_TR,"blackP")
            breakerQn(ArrayofmovementsQn_bottom,"blackP")
            breakerQn(ArrayofmovementsQn_top,"blackP")
            breakerQn(ArrayofmovementsQn_right,"blackP")
            breakerQn(ArrayofmovementsQn_left,"blackP")


        }

        if(element.classList.contains("blackP"))
            {
                breakerQn(ArrayofmovementsQn_BL,"whiteP")
                breakerQn(ArrayofmovementsQn_BR,"whiteP")
                breakerQn(ArrayofmovementsQn_TL,"whiteP")
                breakerQn(ArrayofmovementsQn_TR,"whiteP")
                breakerQn(ArrayofmovementsQn_bottom,"whiteP")
                breakerQn(ArrayofmovementsQn_top,"whiteP")
                breakerQn(ArrayofmovementsQn_right,"whiteP")
                breakerQn(ArrayofmovementsQn_left,"whiteP")
            }
        }else{console.log("Queen function is returned") ; return}
    
    }






















            /*
            let Search = (a,b) => {
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








let Queen = (element) => {}






    let Qn_X = Number(element.getAttribute("X"))
    let Qn_Y = Number(element.getAttribute("Y"))



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




        if( !value.classList.contains("ActiveA") || !value.classList.contains("Qn"))
            {
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


        if(value.classList.contains("whiteP"))
        {
            breakerQn(ArrayofmovementsQn_BL,"blackP")
            breakerQn(ArrayofmovementsQn_BR,"blackP")
            breakerQn(ArrayofmovementsQn_TL,"blackP")
            breakerQn(ArrayofmovementsQn_TR,"blackP")
            breakerQn(ArrayofmovementsQn_bottom,"blackP")
            breakerQn(ArrayofmovementsQn_top,"blackP")
            breakerQn(ArrayofmovementsQn_right,"blackP")
            breakerQn(ArrayofmovementsQn_left,"blackP")


        }

        if(value.classList.contains("blackP"))
            {
                breakerQn(ArrayofmovementsQn_BL,"whiteP")
                breakerQn(ArrayofmovementsQn_BR,"whiteP")
                breakerQn(ArrayofmovementsQn_TL,"whiteP")
                breakerQn(ArrayofmovementsQn_TR,"whiteP")
                breakerQn(ArrayofmovementsQn_bottom,"whiteP")
                breakerQn(ArrayofmovementsQn_top,"whiteP")
                breakerQn(ArrayofmovementsQn_right,"whiteP")
                breakerQn(ArrayofmovementsQn_left,"whiteP")
            }
    


 */