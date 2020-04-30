const GameDetailsRequest = (tags) => {
	let tagsList = [];
	tags.forEach((tag) => {
		tagsList.push(tag.name);
		console.log(tagsList);
	});
	return `
    <div> ${tagsList} </div>
    `;
};
export { GameDetailsRequest };
