document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        const pdfPath = card.getAttribute("data-pdf");
        card.addEventListener("click", function () {
            window.open(pdfPath, "_blank");
        });
    });
});