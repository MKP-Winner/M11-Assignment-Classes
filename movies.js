class Movie {
  constructor(title, cast, description, rating) {
    this.title = title;       
    this.cast = cast;         
    this.description = description; 
    this.rating = rating;    
  }

  updateRating(newRating) {
    this.rating = newRating;
  }

  displayInfo() {
    const movieInfoDiv = document.getElementById("movie-info");
    movieInfoDiv.innerHTML += `
      <div class="movie-card">
        <p><strong>Title:</strong> ${this.title}</p>
        <p><strong>Cast:</strong> ${this.cast.join(", ")}</p>
        <p><strong>Description:</strong> ${this.description}</p>
        <p><strong>Rating:</strong> ${this.rating}</p>
      </div>
    `;
  }
}

const thunderbolts = new Movie(
  "Thunderbolts*",
  ["Florence Pugh", "Sebastian Stan", "David Harbour", "Wyatt Russell", "Hannah John-Kamen"],
  "A ragtag group of Marvel antiheroes are thrown together on a mission that forces them to confront their darkest pasts.",
  8.1
);

thunderbolts.displayInfo();
const movies = [thunderbolts];

function updateMovieRating(title, newRating) {
  const movie = movies.find(m => m.title === title);
  if (movie) {
    movie.updateRating(newRating);
  }
}

updateMovieRating("Thunderbolts*", 8.5);
document.getElementById("movie-info").innerHTML += "<h3>Updated rating:</h3>";
thunderbolts.displayInfo();