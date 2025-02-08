function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
}
function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

const favoritesTableBody = document.getElementById("favorites-body");

let favoriteShows = JSON.parse(localStorage.getItem("liked")) || [];
let showStatuses = JSON.parse(localStorage.getItem("showStatuses")) || {};
let userRatings = JSON.parse(localStorage.getItem("userRatings")) || {};

function refreshFavorites() {
    favoritesTableBody.innerHTML = ""; 
    
    favoriteShows.forEach((show, index) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = show;
        nameCell.classList.add("name-cell");
        nameCell.addEventListener("click", () => {
            showDetails(show);
        });
        row.appendChild(nameCell);

        const ratingCell = document.createElement("td");
        const starsContainer = document.createElement("div");
        starsContainer.classList.add("stars-container");
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement("span");
            star.textContent = "★";
            star.classList.add("star");
            star.style.color = i <= (userRatings[show] || 0) ? "gold" : "white";

            star.addEventListener("click", () => {
                userRatings[show] = i;
                localStorage.setItem("userRatings", JSON.stringify(userRatings));
                refreshFavorites();
            });

            starsContainer.appendChild(star);
        }
        ratingCell.appendChild(starsContainer);
        row.appendChild(ratingCell);

        const statusCell = document.createElement("td");
        const statusSelect = document.createElement("select");
        const statuses = ["Pogledano", "Trenutno gledam", "Želim gledati"];
        statusSelect.innerHTML = statuses
            .map(
                (status) =>
                    `<option value="${status}" ${
                        showStatuses[show] === status ? "selected" : ""
                    }>${status}</option>`
            )
            .join("");

        statusSelect.addEventListener("change", (event) => {
            showStatuses[show] = event.target.value;
            localStorage.setItem("showStatuses", JSON.stringify(showStatuses));
        });

        statusCell.appendChild(statusSelect);
        row.appendChild(statusCell);
        statusSelect.classList.add("status-cell");

        const actionsCell = document.createElement("td");
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => removeShow(index));
        removeButton.style.marginLeft = "10px";
        actionsCell.appendChild(removeButton);
        row.appendChild(actionsCell);
        removeButton.classList.add("delete-cell");

        favoritesTableBody.appendChild(row);
    });

    localStorage.setItem("liked", JSON.stringify(favoriteShows));
}

function removeShow(index) {
    favoriteShows.splice(index, 1);
    refreshFavorites();
}

refreshFavorites()