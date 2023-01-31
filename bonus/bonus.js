//control
// console.log('work!')

// richiedere nome e cognome
let nameUser = prompt('Come ti chiami');
console.log(typeof nameUser, nameUser);


//1. chiedere numero di chilometri e applico prima trasformazione numero in 2 decimali
let routeDistance = parseFloat(prompt('Inserisci la distanza desiderata (in km).')).toFixed(2);
routeDistance = parseFloat(routeDistance); //trasformo var in number (workaround toFixed method)
console.log(typeof routeDistance, routeDistance);

//2. chiedere anno passeggero e calcolare età
//2.1 richiedere anno di nascita
let dobUser = parseInt(prompt('Inserisci l\'anno di nascita.'));
console.log(typeof dobUser, dobUser);

//2.2 settare giorno corrente
let today = new Date();
today = today.getFullYear();
console.log(typeof today, today);

//2.3 calcolare età su base dob
let ageUser = today - dobUser;
console.log(typeof ageUser, ageUser);

//3. calcolare il prezzo totale del viaggio, secondo queste regole:
// 3.1 moltiplicare numero km * 0.21 € e converto numero in due decimali
const priceAtKilometer = 0.21;
let ticketPrice = parseFloat(routeDistance * priceAtKilometer).toFixed(2);
ticketPrice = parseFloat(ticketPrice); //trasformo var in number (workaround toFixed method)
console.log(typeof ticketPrice, ticketPrice);

// inserire informazioni a schermo
//recupero info da document
let currentName = document.getElementById('current-name');
let currentAge = document.getElementById('current-age');
let currentRouteDistance = document.getElementById('current-route');
let currentTicketPrice = document.getElementById('current-price');
let currentDiscountType = document.getElementById('current-discount-type');
let currentDiscountValue = document.getElementById('current-discount-value');
let currentTotalTicketPrice = document.getElementById('current-total-price');
console.log(currentName.innerHTML, currentAge.innerHTML, currentRouteDistance.innerHTML, currentTicketPrice.innerHTML, currentDiscountType.innerHTML, currentDiscountValue.innerHTML, currentTotalTicketPrice.innerHTML);

//cambio info a schermo
currentName.innerHTML = nameUser;
currentAge.innerHTML = ageUser + ' anni';
currentRouteDistance.innerHTML = routeDistance + ' km';
currentTicketPrice.innerHTML = ticketPrice + ' €';

// 3.2 valutare età passeggero e mostrare prezzo finale
let totalTicketPrice;

if (ageUser < 18) {
    totalTicketPrice = parseFloat(ticketPrice * .80).toFixed(2);
    totalTicketPrice = parseFloat(totalTicketPrice); // SE minorenne (età < 18), applicare 20% sconto

    totalDiscount = parseFloat(ticketPrice * .20).toFixed(2);
    totalDiscount = parseFloat(totalDiscount);

    currentDiscountType.innerHTML = 'Young Promo';
    currentDiscountValue.innerHTML = '- ' + totalDiscount + ' € (-20%)';
    currentTotalTicketPrice.innerHTML = totalTicketPrice;

} else if (ageUser > 65) {
    totalTicketPrice = parseFloat(ticketPrice * .60).toFixed(2);
    totalTicketPrice = parseFloat(totalTicketPrice);  // SE anziano (età > 65), applicare 40% sconto
    
    totalDiscount = parseFloat(ticketPrice * .40).toFixed(2);
    totalDiscount = parseFloat(totalDiscount);

    currentDiscountType.innerHTML = 'Senior Promo';
    currentDiscountValue.innerHTML = '- ' + totalDiscount + ' € (-40%)';
    currentTotalTicketPrice.innerHTML = totalTicketPrice;

} else {
    totalTicketPrice = ticketPrice; // ALTRI CASI no sconto
    currentTotalTicketPrice.innerHTML = totalTicketPrice + '€';
}; 

console.log(typeof totalTicketPrice, totalTicketPrice);

// 4. mostrare prezzo finale biglietto (2 decimali)


