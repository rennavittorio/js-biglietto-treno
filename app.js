//control
console.log('work!')

//ESERCIZIO

//1. chiedere numero di chilometri e applico prima trasformazione numero in 2 decimali
let routeDistance = parseFloat(prompt('Quanta strada devi percorrere (in km)?')).toFixed(2);
routeDistance = parseFloat(routeDistance); //trasformo var in number (workaround toFixed method)
console.log(typeof routeDistance, routeDistance);

//2. chiedere età del passeggero
let ageUser = parseInt(prompt('Quanti anni hai?'));
console.log(typeof ageUser, ageUser);

//3. calcolare il prezzo totale del viaggio, secondo queste regole:
// 3.1 moltiplicare numero km * 0.21 € e converto numero in due decimali
const priceAtKilometer = 0.21;
let ticketPrice = parseFloat(routeDistance * priceAtKilometer).toFixed(2);
ticketPrice = parseFloat(ticketPrice); //trasformo var in number (workaround toFixed method)
console.log(typeof ticketPrice, ticketPrice)

// 3.2 valutare età passeggero e mostrare prezzo finale
if (ageUser < 18) {
    let totalTicketPrice = parseFloat(ticketPrice * .80).toFixed(2)
    totalTicketPrice = parseFloat(totalTicketPrice); // SE minorenne (età < 18), applicare 20% sconto
    console.log(typeof totalTicketPrice, totalTicketPrice);

} else if (ageUser > 65) {
    let totalTicketPrice = parseFloat(ticketPrice * .60).toFixed(2)
    totalTicketPrice = parseFloat(totalTicketPrice);  // SE anziano (età > 65), applicare 40% sconto
    console.log(typeof totalTicketPrice, totalTicketPrice);

} else {
    let totalTicketPrice = ticketPrice; // ALTRI CASI no sconto
    console.log(typeof totalTicketPrice, totalTicketPrice);
}; 
 

// 4. mostrare prezzo finale biglietto (2 decimali)


