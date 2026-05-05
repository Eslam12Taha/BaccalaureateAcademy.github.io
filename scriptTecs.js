const seaInp =document.querySelector(".search-in");
const cards =document.querySelectorAll('.tec');

seaInp.addEventListener('keyup',function() {

    const searT = seaInp.value.toLowerCase().trim();

    cards.forEach(function(card) {
        const searchData = card.dataset.search.toLowerCase();
        const words = searT.split(" ");

        const all = words.every(function(word) {
            return searchData.includes(word);
        });

        if(all) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});