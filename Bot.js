// so now let's try to make the logic from the Start 

let initPS = [{id : "whiteElephant1",positionN : 1},{id : "whiteElephant2",positionN : 8},{id : "whiteHorse1",positionN : 2},{id : "whiteHorse2",positionN : 7},{id : "whiteCamel1",positionN : 3},{id : "whiteCamel2",positionN : 6},{id : "whiteKing",positionN :4},{id : "whiteQueen",positionN : 5},{id : "whitePawn1",positionN : 9},{id : "whitePawn2",positionN : 10},{id : "whitePawn3",positionN : 11},{id : "whitePawn4",positionN : 12},{id : "whitePawn5",positionN : 13},{id : "whitePawn6",positionN : 14},{id : "whitePawn7",positionN : 15},{id : "whitePawn8",positionN : 16},{id : "blackElephant1",positionN : 49},{id : "blackElephant2",positionN : 56},{id : "blackHorse1",positionN : 50},{id : "blackHorse2",positionN : 55},{id : "blackCamel1",positionN : 51},{id : "blackCamel2",positionN : 54},{id : "blackKing",positionN :52},{id : "blackQueen",positionN : 53},{id : "blackPawn1",positionN : 57},{id : "blackPawn2",positionN : 58},{id : "blackPawn3",positionN : 59},{id : "blackPawn4",positionN : 60},{id : "blackPawn5",positionN : 61},{id : "blackPawn6",positionN : 62},{id : "blackPawn7",positionN : 63},{id : "blackPawn8",positionN : 64}]

let initAWPs = []; let initABPs = [];

initPS.forEach((value,index) => {if(index>15){initABPs.push(value)}else{initAWPs.push(value)}});

let DefaultWps = initAWPs; let DefaultBps = initABPs;












































































































