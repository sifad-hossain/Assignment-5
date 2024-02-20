// eita hoilo first rule:

// function buyTicket() {
//     //Step-1: Hide the Home Screen. To hide the screen  add the class hiden to the home section
//     const busSection = document.getElementById('bus-container');
//     // console.log(busSection.classList);
//     busSection.classList.add('hidden');
//     //Step-2:Show the Bus Paribhon
//     const busTicketSale = document.getElementById('ticket-sale');
//     // console.log(busTicketSale.classList);
//     busTicketSale.classList.remove('hidden');
// }



// eita hoilo second rule:

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function buyTicket() {
    hideElementById('bus-container');
    showElementById('ticket-sale');
}