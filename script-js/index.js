const allBtn = document.getElementsByClassName('add-btn')
let count = 40;
let seat = 0;

let updatedBtn = 0;


for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        if (seat == 4) {
            return alert('your seat end')
        }


        updatedBtn = updatedBtn + 1;
        document.getElementById('seat-btn').innerText = updatedBtn



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

