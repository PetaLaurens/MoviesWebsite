// Adding movie posters and IDs to an unordered list
const listMovies = document.querySelector("ul");

// Iterating through json file using fetch, which acts as a promise
fetch("movies_list.json")
  // Using .then after promise is completed and res to get a response, which gives me another promise
  .then(res=>res.json())
  // And here I use another .then to get the actual json data
  .then(data=>{
    // Iterating through the json file to get the movie poster and the movie ID
    data.forEach((post) => {
      let html = `
        <div class="movie-poster">
        <img src="${post.Poster}" data-imdbid="${post.imdbID}">
        </div>
        `;

      // Using insertAdjacentHTML to append every Poster and ID to my unordered list listMovies
      listMovies.insertAdjacentHTML("beforeend", html);

    });

    // Using querySelectorAll to find the list of elements that matches the class .movie-poster
    // and forEach to iterate through these
    document.querySelectorAll(".movie-poster").forEach(item=>{
      // Using addEventListener to create an action to be able to click in each movie poster
      item.addEventListener("click", event=>{
        // When clicking on the movie poster, I assign the ID from the json file to the constant variable imdbID
        const imdbID = event.target.getAttribute("data-imdbid");
        // Also, when clicking, we go to a new website page movie_description.html
        window.location.href=`movie_description.html?imdbID=${imdbID}`;
      })
    })
  });


