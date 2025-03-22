export const Find = (N) => 
{
    let neededBlock ;
    document.querySelectorAll(".blocks").forEach((value,index) => {if(Number(value.getAttribute("positionN")) === N){neededBlock = value;}})
    return neededBlock
}



 export let PickOne = (inputArray) => {
    let totalIndents = inputArray.length - 1;
    let RandomNumber = Math.random();
    // now i will have to divide this Math.random in like 
}

      