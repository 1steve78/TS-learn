let subs : string |  number = '1M';

let apiRequestStatus : 'pending' | 'success' | 'error' = 'pending';

let airlineSeats : ' aisle' | 'window' | 'middle' = ' aisle'

airlineSeats=' aisle'

let orders = [ "12","24","28","42"];

let currentOrder : string|undefined;

for(let order of orders){
    if(order == "28"){
        currentOrder = order;
    }
    currentOrder="11";
}
console.log(currentOrder);