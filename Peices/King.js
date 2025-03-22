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





 export let King = (element) => {

        let Kn_X = Number(element.getAttribute("X"))
        let Kn_Y = Number(element.getAttribute("Y"))
    
    
    
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
    
    
    

            if(value.classList.contains("Kn"))
                {
                
               // cleanUp();

    
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
    
            if(element.classList.contains("whiteP"))
            {
                breakerKn(ArrayofmovementsKn_BL,"blackP")
                breakerKn(ArrayofmovementsKn_BR,"blackP")
                breakerKn(ArrayofmovementsKn_TL,"blackP")
                breakerKn(ArrayofmovementsKn_TR,"blackP")
                breakerKn(ArrayofmovementsKn_bottom,"blackP")
                breakerKn(ArrayofmovementsKn_top,"blackP")
    
            }
    
            if(element.classList.contains("blackP"))
                {
                    breakerKn(ArrayofmovementsKn_BL,"whiteP")
                    breakerKn(ArrayofmovementsKn_BR,"whiteP")
                    breakerKn(ArrayofmovementsKn_TL,"whiteP")
                    breakerKn(ArrayofmovementsKn_TR,"whiteP")
                    breakerKn(ArrayofmovementsKn_bottom,"whiteP")
                    breakerKn(ArrayofmovementsKn_top,"whiteP")
        
                }
            }else{console.log("king function returned") ; return}
        
    
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





let King = (element) => {}

        let Kn_X = Number(element.getAttribute("X"))
        let Kn_Y = Number(element.getAttribute("Y"))
    
    
    
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
    
    
    

            if( !value.classList.contains("ActiveA") || !value.classList.contains("Kn"))
                {
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
        
    
    
    


 */