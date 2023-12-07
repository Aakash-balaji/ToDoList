


const urlParams = new URLSearchParams(window.location.search);
const imdbID = urlParams.get('imdbID');
console.log('IMDb ID:', imdbID);


// Function to fetch detailed information based on IMDb ID
async function fetchMovieDetails() {
    const urlDetail = `//www.omdbapi.com/?i=${imdbID}&apikey=8f32beb5`;

    try {
        const responseDetail = await fetch(urlDetail);
        const resultDetail = await responseDetail.json();

        // Now, resultDetail contains detailed information about the movie
        console.log('Detailed information:', resultDetail);
        // console.log('Detailed information:', resultDetail.Poster);


        let move = document.querySelector('.move')
        let div = document.createElement('div')
        div.classList.add('movieCard')

        div.innerHTML = `
        <img src="${resultDetail.Poster}" alt="${resultDetail.Title} Poster">
        <div>
        <h3> ${resultDetail.Title}</h3>
        <p> ${resultDetail.Plot}</p>
        <p><span>Genre:</span> ${resultDetail.Genre}</p>
        <p><span>Actors:</span> ${resultDetail.Actors}</p>
        <p><span>Director:</span> ${resultDetail.Director}</p>
        <p><span>Writer:</span> ${resultDetail.Writer}</p>
        <p><span>Released:</span> ${resultDetail.Released}</p>
        <p><span>Type:</span> ${resultDetail.Type}</p>
        <p><span>Runtime:</span> ${resultDetail.Runtime}</p>
        <p><span>Box Office Collection:</span> ${resultDetail.BoxOffice}</p>
        </div>
        `;
        move.appendChild(div)

       

    } catch (error) {
        console.error('Error fetching detailed information:', error);
    }
}

fetchMovieDetails();

