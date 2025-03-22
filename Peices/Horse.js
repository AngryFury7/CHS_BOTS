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











export let Horse = (element) => {


let Hr_X = Number(element.getAttribute("X"));
let Hr_Y = Number(element.getAttribute("Y"));

let ArrayofmovementsHr_top = [];
let T = Hr_Y;
let Tl = Hr_X;
let Tr = Hr_X;
for(let i = 0 ; i<=0; i++)
{
    T = T + 2;
    Tl = Tl - 1;
    Tr = Tr + 1 ;
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
   ArrayofmovementsHr_bottom.push({x : Bl , y : B}, {x : Br , y : B})
}

let ArrayofmovementsHr = ArrayofmovementsHr_top.concat(ArrayofmovementsHr_bottom,ArrayofmovementsHr_left,ArrayofmovementsHr_right);
let ArrayofmovementsHrFiltered = ArrayofmovementsHr.filter((value,index) => {
    if(value.x <=  8 && value.x >=  1 && value.y >=  1 && value.y <= 8)
    {return true}else{return false}
})


    if(element.classList.contains("Hr"))
        {
        
        //cleanUp(); as cleanUp may not Exist

   if(element.classList.contains("whiteP"))
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

    })
   }

   if(element.classList.contains("blackP"))
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
    })
   }

        }else{console.log("horse function is returned") ; return}
    }

















































    // ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------


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











export let Horse = (element) => {


let Hr_X = Number(element.getAttribute("X"));
let Hr_Y = Number(element.getAttribute("Y"));

let ArrayofmovementsHr_top = [];
let T = Hr_Y;
let Tl = Hr_X;
let Tr = Hr_X;
for(let i = 0 ; i<=0; i++)
{
    T = T + 2;
    Tl = Tl - 1;
    Tr = Tr + 1 ;
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
   ArrayofmovementsHr_bottom.push({x : Bl , y : B}, {x : Br , y : B})
}

let ArrayofmovementsHr = ArrayofmovementsHr_top.concat(ArrayofmovementsHr_bottom,ArrayofmovementsHr_left,ArrayofmovementsHr_right);
let ArrayofmovementsHrFiltered = ArrayofmovementsHr.filter((value,index) => {
    if(value.x <=  8 && value.x >=  1 && value.y >=  1 && value.y <= 8)
    {return true}else{return false}
})


    if(element.classList.contains("ActiveA") && element.classList.contains("Hr"))
        {
        
        //cleanUp(); as cleanUp may not Exist

   if(element.classList.contains("whiteP"))
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

    })
   }

   if(element.classList.contains("blackP"))
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


    })
   }

        }else{console.log("horse function is returned") ; return}
    } 
        
    */



