// Noakhali Donate function

document.getElementById("noakhali-donate-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const availableBalance = getInnerTextById("available-balance");

    const donatedAmount = getInnerTextById("noakhali-donated-amount");

    const donateAmount = getInputValueById("noakhali-donate-amount");

    const title = document.getElementById("noakhali-flood-title").innerText;

    if (isNaN(donateAmount) || donateAmount < 0) {
        alert("Warning! Please Enter Valid Amount");
        document.getElementById("noakhali-donate-amount").value = '';
        return;
    } else {

        if (availableBalance >= donateAmount) {
            const newAvailableBalance = availableBalance - donateAmount;
            document.getElementById("available-balance").innerText = newAvailableBalance;

            const totalDonatedAmount = donatedAmount + donateAmount;
            document.getElementById("noakhali-donated-amount").innerText = totalDonatedAmount;
            document.getElementById("noakhali-donate-amount").value = '';

            let d = new Date();
            let options = {
                weekday: "long", year: "numeric", month: "short",
                day: "numeric", hour: "2-digit", minute: "2-digit"
            };

            const date = d.toDateString("en-us", options);
            const time = d.toTimeString("en-us", options);
            const dateTime = date + " " + time;


            donationHistory(donateAmount, title, dateTime);

            success_modal.showModal();
        } else {
            alert("Warning! Please Enter Valid Amount");
            document.getElementById("noakhali-donate-amount").value = '';
            return;
        }
    }


    document.getElementById("noakhali-donate-amount").value = '';
})






// Feni Donate function

document.getElementById("feni-doante-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const availableBalance = getInnerTextById("available-balance");

    const donatedAmount = getInnerTextById("feni-donated-amount");

    const donateAmount = getInputValueById("feni-donate-amount");

    const title = document.getElementById("feni-flood-title").innerText;

    if (isNaN(donateAmount) || donateAmount < 0) {
        alert("Warning! Please Enter Valid Amount");
        document.getElementById("feni-donate-amount").value = '';
        return;
    } else {

        if (availableBalance >= donateAmount) {
            const newAvailableBalance = availableBalance - donateAmount;
            document.getElementById("available-balance").innerText = newAvailableBalance;

            const totalDonatedAmount = donatedAmount + donateAmount;
            document.getElementById("feni-donated-amount").innerText = totalDonatedAmount;
            document.getElementById("feni-donate-amount").value = '';

            let d = new Date();
            let options = {
                weekday: "long", year: "numeric", month: "short",
                day: "numeric", hour: "2-digit", minute: "2-digit"
            };

            const date = d.toDateString("en-us", options);
            const time = d.toTimeString("en-us", options);
            const dateTime = date + " " + time;


            donationHistory(donateAmount, title, dateTime);

            success_modal.showModal();
        } else {
            alert("Warning! Please Enter Valid Amount");
            document.getElementById("feni-donate-amount").value = '';
            return;
        }
    }


    document.getElementById("noakhali-donate-amount").value = '';
})





// Quota donate function

document.getElementById("quota-donate-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const availableBalance = getInnerTextById("available-balance");

    const donatedAmount = getInnerTextById("quota-donated-amount");

    const donateAmount = getInputValueById("quota-donate-amount");

    const title = document.getElementById("quota-title").innerText;

    if (isNaN(donateAmount) || donateAmount < 0) {
        alert("Warning! Please Enter Valid Amount");
        document.getElementById("quota-donate-amount").value = '';
        return;
    } else {

        if (availableBalance >= donateAmount) {
            const newAvailableBalance = availableBalance - donateAmount;
            document.getElementById("available-balance").innerText = newAvailableBalance;

            const totalDonatedAmount = donatedAmount + donateAmount;
            document.getElementById("quota-donated-amount").innerText = totalDonatedAmount;
            document.getElementById("quota-donate-amount").value = '';

            let d = new Date();
            let options = {
                weekday: "long", year: "numeric", month: "short",
                day: "numeric", hour: "2-digit", minute: "2-digit"
            };

            const date = d.toDateString("en-us", options);
            const time = d.toTimeString("en-us", options);
            const dateTime = date + " " + time;


            donationHistory(donateAmount, title, dateTime);

            success_modal.showModal();
        } else {
            alert("Warning! Please Enter Valid Amount");
            document.getElementById("quota-donate-amount").value = '';
            return;
        }
    }


    document.getElementById("noakhali-donate-amount").value = '';
})



// Page Switch
document.getElementById("blog").addEventListener("click", function(){
    window.location.href = "/blog.html"
})
