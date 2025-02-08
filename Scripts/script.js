function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
}
function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

document.addEventListener('DOMContentLoaded', () => {
    const seriesCardContainer = document.getElementById('series-cards-container');

    series.forEach(seriesItem => {
        const card = document.createElement('div');
        card.classList.add('series-card');

        card.innerHTML = `
            <th><img class="series-img" src="${seriesItem.image}" alt="${seriesItem.name}"></th>
            <th>
                <h5>${seriesItem.name}</h5>
                <h6>${seriesItem.description}</h6>
            </th>
            <th>
                <ul>
                    ${seriesItem.genres.map(genre => `<li>${genre}</li>`).join('')}
                </ul>
            </th>
            <th>
                <div>Rating: ${seriesItem.rating}</div>
                <div><button class="favorite-btn" onclick="toggleFavorite('${seriesItem.name}')">♡</button></div>
            </th>
        `;
        seriesCardContainer.appendChild(card);
    });
    loadFavorites();
});

function toggleFavorite(seriesName) {
    const favorites = JSON.parse(localStorage.getItem('liked')) || [];
    const index = favorites.indexOf(seriesName);

    if (index === -1) {
        favorites.push(seriesName);
        updateButton(seriesName, true);
    } else {
        favorites.splice(index, 1);
        updateButton(seriesName, false);
    }

    localStorage.setItem('liked', JSON.stringify(favorites));
}

function updateButton(seriesName, isFavorite) {
    const buttons = document.querySelectorAll(".favorite-btn");
    buttons.forEach(button => {
        if (button.getAttribute('onclick').includes(seriesName)) {
            if(isFavorite){
                button.classList.add("favorite");
            } else {
                button.classList.remove("favorite");
            }
        }
    });
}

function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('liked')) || [];
    favorites.forEach(seriesName => updateButton(seriesName, true));
}
