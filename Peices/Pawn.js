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



 export let Pawn = (element) => {



        let Pw_X = Number(element.getAttribute("X"));
        let Pw_Y = Number(element.getAttribute("Y"))

            //white code
        let ArrayofmovementsPw_bottom_white = [];
        if(element.classList.contains("whiteP")){
            let B = Pw_Y;
            let Bl = Pw_X;
            let Br = Pw_X;
            for(let i = 0 ; i<=0; i++)
            {
                B = B - 1;
                Bl = Bl - 1;
                Br = Br + 1 ;
               ArrayofmovementsPw_bottom_white.push({x : Bl , y : B,id:"pass"}, {x : Br , y : B , id : "pass"},{x : Pw_X, y : B, id : "pass"})
            }

            if(Pw_Y === 7){
                ArrayofmovementsPw_bottom_white.push({x : Pw_X, y : Pw_Y - 2, id : "notpass"})
            }
        }


            //black code
        let ArrayofmovementsPw_top_black = [];
        if(element.classList.contains("blackP")){
            let T = Pw_Y;
            let Tl = Pw_X;
            let Tr = Pw_X;
            for(let i = 0 ; i<=0; i++)
            {
                T = T + 1;
                Tl = Tl - 1;
                Tr = Tr + 1 ;
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


            if(value.classList.contains("Pw"))
                {
                
                //cleanUp();

            if(element.classList.contains("whiteP"))
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

            if(element.classList.contains("blackP"))
                {
                    ArrayofmovementsPw_top_blackFiltered.forEach((value,index) => {
                        if(value.x !== Pw_X)
                        {
                            if(Search(value.x,value.y).classList.contains("whiteP")){
                                Search(value.x,value.y).classList.add("enemyMove");
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
            }else{console.log("pawn function is returned"); return}
 

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



let Pawn = (element) => {}



        let Pw_X = Number(element.getAttribute("X"));
        let Pw_Y = Number(element.getAttribute("Y"))

            //white code
        let ArrayofmovementsPw_bottom_white = [];
        if(element.classList.contains("whiteP")){
            let B = Pw_Y;
            let Bl = Pw_X;
            let Br = Pw_X;
            for(let i = 0 ; i<=0; i++)
            {
                B = B - 1;
                Bl = Bl - 1;
                Br = Br + 1 ;
               ArrayofmovementsPw_bottom_white.push({x : Bl , y : B,id:"pass"}, {x : Br , y : B , id : "pass"},{x : Pw_X, y : B, id : "pass"})
            }

            if(Pw_Y === 7){
                ArrayofmovementsPw_bottom_white.push({x : Pw_X, y : Pw_Y - 2, id : "notpass"})
            }
        }


            //black code
        let ArrayofmovementsPw_top_black = [];
        if(element.classList.contains("blackP")){
            let T = Pw_Y;
            let Tl = Pw_X;
            let Tr = Pw_X;
            for(let i = 0 ; i<=0; i++)
            {
                T = T + 1;
                Tl = Tl - 1;
                Tr = Tr + 1 ;
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


            if( !value.classList.contains("ActiveA") || !value.classList.contains("Pw"))
                {
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
                                Search(value.x,value.y).classList.add("enemyMove");
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
 

        
    
 */