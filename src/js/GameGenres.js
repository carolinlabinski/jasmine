const GameGenres = (genres) => {
	let genresList = [];
	genres.forEach((genre) => {
		genresList.push(genre.name);
		console.log(genresList);
	});
	return `
    <div> ${genresList} </div>
    `;
};
export { GameGenres };
