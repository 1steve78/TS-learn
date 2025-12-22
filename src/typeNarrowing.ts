function getChai(kind : string | number){
    if(typeof kind === 'string'){
        return `making ${kind}`;
    }
    return `chai order : ${kind}`;
}

function serveChai(msg ? : string){
    if(msg){
        return `Serving ${msg}`
    }
    return `serving default masala chai`;
}

function orderChai(size: "medium"| "small" | "large" | number){
    if(size ==="small"){
        return `small cutting chai...`;
    }
    if(size==="large" || size==="medium"){
        return `make extra chai`
    }
    return `chai order #${size}`;
}

class kulladChai{
    serve(){
        return `serve kullad chai`
    }
}

class cuttingChai{
    serve(){
        return `serve cutting chai`
    }
}

function serve(chai: kulladChai | cuttingChai){
    if(chai instanceof kulladChai){
        return chai.serve();
    }
}

type ChaiOrder = {
    type: string
    sugar : number
}

function isChaiOrder(obj : any) : obj is ChaiOrder {
    return(
        typeof obj ==="object" &&
        obj != null &&
        typeof obj.type ==="string" &&
        typeof obj.sugar === "number"
    )


}

function serveOrder(item : ChaiOrder | string){
    if(isChaiOrder(item)){
        return `serving ${item.type} chai with ${item.sugar}`;

    }
    return `serving custom chai : ${item}`
}

type MasalaChai  = {type:"Masala";spicelevel : number};
type GingerChai  = {type:"Ginger";spicelevel : number};
type ElaichiChai  = {type:"Elaichi";spicelevel : number};

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order:Chai){
    switch(order.type){
        case 'Elaichi':
            return `Elaichi chai`
        case 'Masala':
            return `Masala chai`
        case 'Ginger':
            return `Ginger chai`
    }
}

function brew(order : MasalaChai | GingerChai){
    if("spicelevel" in order){
        //
    }
}

function isStringArray(arr: unknown):arr is string[]{
    
}   