function filterWords() {
    let input = document.getElementById('vocabSearch').value.toLowerCase();
    let cards = document.getElementsByClassName('vocab-card');

    for (let i = 0; i < cards.length; i++) {
        let word = cards[i].querySelector('h2').innerText.toLowerCase();
        
        if (word.includes(input)) {
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
            this.classList.toggle('is-flipped');
        });
    });
});