// I create a function to return the query parameters
function getQueryParams() {
    // I extract the parameters of this URL and I assign them to variable 'params'
    const params = new URLSearchParams(window.location.search);
    // From the params variable, I get the movie ID and I assign it to variable id
    const id = params.get("imdbID");
    return id;
}

// I assign the ID that my function getQueryParams() returns, to a variable 'imdbID'
const imdbID = getQueryParams();

// Iterating through json file using fetch, which acts as a promise
fetch("movies_list.JSON")
    // Using .then after promise is completed and res to get a response.
    // It converts the response to JSON format using the .json() method., which gives me another promise
    .then(res=>res.json())
    // And here I use another .then to get the actual json data
    .then(data=>{
        // Declare a variable with an arrow function to find the movie by its ID
        const movie = data.find(post=>post.imdbID==imdbID);
        // If the movie is found, I create an HTML structure inside a div tag containing details
        // about the movie such as title, image, plot, trailer and a a tag with a href link to be
        // able to go back to the home page
        if (movie) {
            const details = `
            <div class="style-details">
            <h2 class="title-details">${movie.Title}</h2>
            <img class="img-details" src="${movie.Image}">
            <p class="descrip_details">${movie.Plot}</p>
            <iframe class="vid-details" src="${movie.Trailer}"></iframe>
            <a class="book-cinema" href="/cinema_booking.html">Book Cinema</a>
            <a class="home-page" href="/index.html">Home Page</a>
            </div>
            `;
        // Using document.getElementById to select elements by 'movie-details'
        // identifier and using .innerHTML to replace the content of the selected
        // element with the specified HTML content stored in the details variable.
        document.getElementById("movie-details").innerHTML=details;
        // If the movie is not found, prints out an helpful message on the console. 
        } else {
            console.log("Movie ID " + imdbID + " not found.");
        }
    })


