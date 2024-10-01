document.getElementById("noakhali-donate-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const availableBalance = document.getElementById("available-balance").innerText;
    const availableBalanceInt = parseInt(availableBalance);

    const donatedAmount = document.getElementById("noakhali-donated-amount").innerText;
    const donatedAmountInt = parseInt(donatedAmount);

    const donateAmount = document.getElementById("noakhali-donate-amount").value;
    const donateAmountInt = parseInt(donateAmount);

    if (isNaN(donateAmountInt) || donateAmount < 0) {
        alert("Warning");
        document.getElementById("noakhali-donate-amount").value = '';
        return;
    } else {

        if (availableBalanceInt >= donateAmountInt) {
            const newAvailableBalance = availableBalanceInt - donateAmountInt;
            document.getElementById("available-balance").innerText = newAvailableBalance;

            const totalDonatedAmount = donatedAmountInt + donateAmountInt;
            document.getElementById("noakhali-donated-amount").innerText = totalDonatedAmount;
            document.getElementById("noakhali-donate-amount").value = '';

            success_modal.showModal();
        } else {
            alert("Warning");
            document.getElementById("noakhali-donate-amount").value = '';
            return;
        }
    }


    document.getElementById("noakhali-donate-amount").value = '';
})

