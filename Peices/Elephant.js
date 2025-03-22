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


 export let Elephant = (element) =>{



        let El_X = Number(element.getAttribute("X"))
        let El_Y = Number(element.getAttribute("Y"))
    
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
    
    
    
            if(element.classList.contains("El"))
                {
                

                //cleanUp(); as this might does not exist

    
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
    
            if(element.classList.contains("whiteP"))
            {
                breakerEl(ArrayofmovementsEl_bottom,"blackP")
                breakerEl(ArrayofmovementsEl_top,"blackP")
                breakerEl(ArrayofmovementsEl_left,"blackP");
                breakerEl(ArrayofmovementsEl_right,"blackP")
            }
    
            if(element.classList.contains("blackP"))
                {
                breakerEl(ArrayofmovementsEl_bottom,"whiteP")
                breakerEl(ArrayofmovementsEl_top,"whiteP")
                breakerEl(ArrayofmovementsEl_left,"whiteP");
                breakerEl(ArrayofmovementsEl_right,"whiteP")
        
                }
            }else{console.log("elephant function broke") ; return}
        
    
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


let Elephant = (element) =>{}



        let El_X = Number(element.getAttribute("X"))
        let El_Y = Number(element.getAttribute("Y"))
    
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
    
    
    
            if( !value.classList.contains("ActiveA") || !value.classList.contains("El"))
                {
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
                breakerEl(ArrayofmovementsEl_bottom,"blackP")
                breakerEl(ArrayofmovementsEl_top,"blackP")
                breakerEl(ArrayofmovementsEl_left,"blackP");
                breakerEl(ArrayofmovementsEl_right,"blackP")
            }
    
            if(value.classList.contains("blackP"))
                {
                breakerEl(ArrayofmovementsEl_bottom,"whiteP")
                breakerEl(ArrayofmovementsEl_top,"whiteP")
                breakerEl(ArrayofmovementsEl_left,"whiteP");
                breakerEl(ArrayofmovementsEl_right,"whiteP")
        
                }
        
    
    

 */