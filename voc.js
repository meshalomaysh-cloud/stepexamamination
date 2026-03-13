function filterWords() {
    let input = document.getElementById('vocabSearch').value.toLowerCase();
    let cards = document.getElementsByClassName('vocab-card');

    for (let i = 0; i < cards.length; i++) {
        let wordContent = cards[i].innerText.toLowerCase();
        
        if (wordContent.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
            cards[i].classList.remove('is-flipped');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const allCards = document.querySelectorAll('.vocab-card');

    allCards.forEach(card => {
        card.addEventListener('click', function() {
            const openCard = document.querySelector('.vocab-card.is-flipped');

            if (openCard && openCard !== this) {
                openCard.classList.remove('is-flipped');
            }

            this.classList.toggle('is-flipped');
        });
    });
});
