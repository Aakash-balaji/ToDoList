

// let input = document.getElementById('userSearch')
// let btn = document.querySelector('.userD')

// btn.addEventListener("click", function() {
// 	let container = document.querySelector('#card-container');

// 	async function fetchData() {
// 		const search = input.value;
// 		const url = `//www.omdbapi.com/?s=${search}&apikey=8f32beb5`;


// 		try {
// 			const response = await fetch(url);
// 			const result = await response.json();
// 			console.log(result);

// 			const movies = result.Search;

// 			if (movies) {
// 				console.log('Movies found:', movies);

// 				movies.forEach(e => {
// 					const card = document.createElement('div');
// 					card.classList.add('card');

// 					card.innerHTML = `
// 						<img src="${e.Poster}" alt="${e.Title} Poster">
// 						<h3>${e.Title}</h3>
// 						<p>${e.Year}</p>
// 						<p>${e.Type}</p>
// 					`;

// 					container.appendChild(card);
				
// 				});

// 			} else {
// 				console.log('No movies found.');
// 				const card = document.createElement('div');
// 				card.innerHTML = 'No movies found'
// 				container.appendChild(card);


// 			}
// 		} catch (error) {
// 			console.error(error);
// 		}

// 	}

// 	// let input = '';

// 	fetchData();
// });


/////////////////////////////////////////////////////////////////////////////////////////////////
let input = document.getElementById('userSearch');
let btn = document.querySelector('.userD');
let container = document.querySelector('#card-container');


btn.addEventListener("click", function () {
    
    let container = document.querySelector('#card-container');

    async function fetchData() {
        const search = input.value;
        const url = `//www.omdbapi.com/?s=${search}&apikey=8f32beb5`;
        

        try {
            const response = await fetch(url);
            const result = await response.json();

            container.innerHTML = '';

            const movies = result.Search;

            if (movies) {
                console.log('Movies found:', movies);

                movies.forEach(async (e) => {
                    const card = document.createElement('div');
                    card.classList.add('card');

                    card.innerHTML = `
                        <img src="${e.Poster}" alt="${e.Title} Poster">
                        <h3>${e.Title}</h3>
                        <p>${e.Year}</p>
                        <p>${e.Type}</p>
                        
                    `;

                    container.appendChild(card);

                    card.addEventListener('click', function () {
                        // Check if the IMDb ID is valid before redirecting
                        if (e.imdbID !== 'N/A') {
                            // Redirect to card.html with the movie's IMDb ID as a query parameter
                            window.location.href = `./card.html?imdbID=${e.imdbID}`;
                        } else {
                            console.error('Invalid IMDb ID: N/A');
                        }
                    });
                });
            } else {
                console.log('No movies found.');
                const card = document.createElement('div');
                card.innerHTML = 'No movies found';
                container.appendChild(card);
            }
        } catch (error) {
            console.error(error);
        }
    }

    fetchData();
    input.value = '';
    
});
