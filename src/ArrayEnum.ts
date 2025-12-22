const chaiFlavours : string[] = ["masala","Adrak"]
const chaiPrices : number[]= [10,20]

const rating : Array<number>=[4.5,5.0]

type Chai  = {
    name : string;
    price : number 
}

const menu : Chai[] =[
    {name : "masala",price : 15},
    {name : "adrak" ,price : 25},
]

const  Cities : readonly string[] = ["delhi","jaipur"]
// Cities.push("Pune")

const table : number[][]=[
    [1,2,3],
    [4,5,6]
]

let chaiTuple : [string,number];
chaiTuple=["masala",20]
// chaiTuple=[20,"masala"]

let userInfo :[string , number , boolean?]
userInfo = ["yasin",100]
userInfo = ["yasin",100,true]

const location : readonly [number,number]=[28.66,32.22]

const chaiItems : [name :string ,price:number]=["masala",25]

enum CupSize {
    Small,
    Medium,
    Large
}

const size = CupSize.Large

enum Status{
    pending=101,
    served ,//101
    cancelled //102
}

enum ChaiType { 
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type :ChaiType){
    console.log(`making ${type}`);
}

makeChai(ChaiType.GINGER)
// makeChai("masala")

enum RandomEnum{
    ID =1,
    NAME = "chai"
}

const enum Sugars { 
    LOW =1,
    MEDIUm =2,
    HIGH=3
}

let t: [string , number] =[ "chai",10]
// t.push("extra")