const GameDevelopers = (developers) => {
	let developersList = [];
	developers.forEach((developer) => {
		developersList.push(developer.name);
		console.log(developersList);
	});
	return `
    <div> ${developersList} </div>
    `;
};
export { GameDevelopers };
