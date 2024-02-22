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

// function hideElementById(elementId) {
//     const element = document.getElementById(elementId);
//     element.classList.add('hidden');
// }

// function showElementById(elementId) {
//     const element = document.getElementById(elementId);
//     element.classList.remove('hidden');
// }



// function buyTicket() {
//     hideElementById('bus-container');
//     showElementById('ticket-sale');
// }



















// function ticketSale(name) {
//     console.log(name);
//     // const firstTicket = document.getElementById('A1');

// //    firstTicket.innerText = '';
// //    setBackgrounColorById('A1');
// //    setBackgrounColorById('A2');
// //    setBackgrounColorById('A3');
// //    setBackgrounColorById('A4');
// }


// function setBackgrounColorById(elementId) {
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-[#1dd100]')
// }


































// const allBtn = document.getElementsByClassName('add-btn');
// // console.log(allBtn);

// let count = 40;
// for (const btn of allBtn) {
//     btn.addEventListener('click', function () {
//         count = count - 1;
//         document.getElementById('ticket-btn').innerText = count;
//     })
// }

const allBtn = document.getElementsByClassName('add-btn')
let count = 8;
let seat = 0;


for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        if(seat == 4){
            return alert('end function')
        }
        seat = seat + 1;
        count = count - 1;
        this.disabled = true;
        e.target.style.backgroundColor = ['#1dd100'];

        const selectedContainer = document.getElementById('selected-place-container');

        const price = 550;
        const name = 'Economoy';
        const btnName = document.getElementsByClassName('btn-name');
       

        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = this.innerText;
        const p2 = document.createElement('p2');
        p2.innerText = name;

        const p3 = document.createElement('p3');
        p3.innerText = price;



        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        selectedContainer.appendChild(li);

        const totalCost = document.getElementById('total-cost').innerText;

        const convertedTotalCost = parseInt(totalCost);
        const sum = convertedTotalCost + parseInt(price);
        // console.log(convertedTotalCost);
        // document.getElementById('total-cost').innerText = sum;
        const grandTotal = document.getElementById('grand-total').innerText;
        const convertedGrandTotal = parseInt(grandTotal);

        const sum2 = convertedGrandTotal + parseInt(price);


        setInnerText('total-cost', sum);
        setInnerText('grand-total', sum2);        
       setInnerText('ticket-btn', count);
    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}