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



export let Camel = (element) => {


        let Cm_X = Number(element.getAttribute("X"));
        let Cm_Y = Number(element.getAttribute("Y"));

        let ArrayofmovementsCm_TR= []; //done 
        let TRX = Cm_X ; 
        let TRY = Cm_Y ;
        for(let i = 1 ; i <= 7 ; i++)
        {
            TRX = TRX + 1 ;     TRY = TRY + 1 ;
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

        let ArrayofmovementsCm_BL= [];   
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



            if(element.classList.contains("Cm"))
            {
            
            //cleanUp();

            if(element.classList.contains("whiteP")){
                breakerCm(ArrayofmovementsCm_TR,"blackP");
                breakerCm(ArrayofmovementsCm_BR,"blackP")
                breakerCm(ArrayofmovementsCm_TL,"blackP")
                breakerCm(ArrayofmovementsCm_BL,"blackP");
            }

            if(element.classList.contains("blackP")){
                breakerCm(ArrayofmovementsCm_TR,"whiteP");
                breakerCm(ArrayofmovementsCm_BR,"whiteP")
                breakerCm(ArrayofmovementsCm_TL,"whiteP")
                breakerCm(ArrayofmovementsCm_BL,"whiteP");
            }
        }else{console.log("camel function is returned") ; return}

    }


































            /*
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



export let Camel = (element) => {}


        let Cm_X = Number(element.getAttribute("X"));
        let Cm_Y = Number(element.getAttribute("Y"));

        let ArrayofmovementsCm_TR= []; //done 
        let TRX = Cm_X ; 
        let TRY = Cm_Y ;
        for(let i = 1 ; i <= 7 ; i++)
        {
            TRX = TRX + 1 ;     TRY = TRY + 1 ;
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

        let ArrayofmovementsCm_BL= [];   
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



            if( !value.classList.contains("ActiveA") || !value.classList.contains("Cm"))
            {
                return 
            }
            cleanUp();

            if(value.classList.contains("whiteP")){
                breakerCm(ArrayofmovementsCm_TR,"blackP");
                breakerCm(ArrayofmovementsCm_BR,"blackP")
                breakerCm(ArrayofmovementsCm_TL,"blackP")
                breakerCm(ArrayofmovementsCm_BL,"blackP");
            }

            if(value.classList.contains("blackP")){
                breakerCm(ArrayofmovementsCm_TR,"whiteP");
                breakerCm(ArrayofmovementsCm_BR,"whiteP")
                breakerCm(ArrayofmovementsCm_TL,"whiteP")
                breakerCm(ArrayofmovementsCm_BL,"whiteP");
            }









 */




