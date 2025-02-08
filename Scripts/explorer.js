function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
}
function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}


function generateGenreCards() {
    const genresContainer = document.getElementById("genres-container");
    const allGenres = new Set();

    series.forEach(show => {
        show.genres.forEach(genre => allGenres.add(genre));
    });

    allGenres.forEach(genre => {
        const genreCard = document.createElement("div");
        genreCard.className = "genre-card";
        genreCard.textContent = genre;

        genreCard.onclick = () => filterShows(genre);
        genresContainer.appendChild(genreCard);
    });
}

function filterShows(genre) {
    const showsContainer = document.getElementById("shows-container");
    showsContainer.innerHTML = ""; 
    
    const filteredShows = series.filter(show => show.genres.includes(genre));

    if (filteredShows.length === 0) {
        showsContainer.innerHTML = `<p>No shows found for the genre: ${genre}</p>`;
        return;
    }

    filteredShows.forEach(show => {
        const showCard = document.createElement("div");
        showCard.className = "show";

        const imgElement = document.createElement("img");
        imgElement.src = show.image;
        imgElement.alt = show.name;
        showCard.appendChild(imgElement);

        const nameElement = document.createElement("h3");
        nameElement.textContent = show.name;
        showCard.appendChild(nameElement);

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = show.description;
        showCard.appendChild(descriptionElement);

        const genresElement = document.createElement("p");
        genresElement.className = "genres";
        genresElement.textContent = `Genres: ${show.genres.join(", ")}`;
        showCard.appendChild(genresElement);

        const ratingElement = document.createElement("p");
        ratingElement.textContent = `Rating: ${show.rating}`;
        showCard.appendChild(ratingElement);

        showsContainer.appendChild(showCard);
    });
}