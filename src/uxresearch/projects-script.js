document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");

    // Add a click event listener to open the PDF when the card is clicked
    card.addEventListener("click", function () {
        const link = document.querySelector(".card-link");
        link.click();
    });
});