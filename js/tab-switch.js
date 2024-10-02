

document.getElementById("donation-tab").addEventListener('click', function () {
    document.getElementById("donation-tab").classList.remove("bg-primary");
    document.getElementById("history-tab").classList.remove("bg-primary");
    document.getElementById("event-section").classList.add("hidden");
    document.getElementById("history-container").classList.add("hidden");


    document.getElementById("donation-tab").classList.add("bg-primary");
    document.getElementById("event-section").classList.remove("hidden");

}
)

document.getElementById("history-tab").addEventListener('click', function () {
    document.getElementById("donation-tab").classList.remove("bg-primary");
    document.getElementById("history-tab").classList.remove("bg-primary");
    document.getElementById("event-section").classList.add("hidden");
    document.getElementById("history-container").classList.add("hidden");

    document.getElementById("history-tab").classList.add("bg-primary");
    document.getElementById("history-container").classList.remove("hidden");
}
)