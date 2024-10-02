

function donationHistory(donatedAmount, nameOfEvent, date){
    const historyContainer = document.getElementById('history-container');


    const div = document.createElement('div');
    div.classList.add('border')
    div.classList.add('rounded-xl')
    div.classList.add('p-5')
    div.classList.add('mb-5')

    div.innerHTML = `
        <h3 class="font-bold text-xl mb-3">${donatedAmount} Taka is Donated for ${nameOfEvent}</h3>
        <p>Date: ${date}</p>
    `

    historyContainer.appendChild(div);
}