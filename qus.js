const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const row = card.querySelector('.con');

    row.addEventListener('click', () => {
        const is = card.classList.contains('open');

        cards.forEach(c => {
            c.classList.remove('open');
            c.querySelector('.pr').classList.remove('visible');
            c.querySelector('.btn').textContent = '+';
        });
        if (!is) {
            card.classList.add('open');
            card.querySelector('.pr').classList.add('visible');
            card.querySelector('.btn').textContent = '−';
        }
    });
});