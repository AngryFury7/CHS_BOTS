export const Find = (N) => 
{
    let neededBlock ;
    document.querySelectorAll(".blocks").forEach((value,index) => {if(Number(value.getAttribute("positionN")) === N){neededBlock = value;}})
    return neededBlock
}



 export let PickOne = (inputArray) => {
    let totalIndents = inputArray.length;
    let RandomNumber = Math.random();
    let finalI ;
    // now i will have to divide this Math.random in like 
    // so there should be like totalindents number of Parts of the range 0 to 1 and they will be like this 0/n , 1/n , 2/n ...... n/n 
    let ArrayTP = [] // so there should contain at least two elemes in this array so i can divide it 
    for(let i = 0 ; i <= totalIndents ; i++)
    {
        ArrayTP.push(i/totalIndents)
    }

    let Ranges = [];
    for(let i = 0 ; i <= ArrayTP.length - 2; i++)
    {
        let rangeStart = ArrayTP[i];
        let rangeEnd = ArrayTP[i+1];

        let RangeArray = [rangeStart,rangeEnd]
        Ranges.push(RangeArray);
    }

    //console.log(Ranges);
    for(let i = 0 ; i<= Ranges.length - 1 ; i++)
    {
        let firstN = Ranges[i][0];
        let lastN = Ranges[i][1];

        let booleanone ;
        let booleantwo ;
        if(RandomNumber >= firstN){booleanone = true}
        if(RandomNumber <= lastN) {booleantwo = true}

        if(booleanone === true && booleantwo === true)
        {
             finalI = i
        }
    }

    return finalI;

 
}

      