const GamePublisher = (publishers) => {
	let publishersList = [];
	publishers.forEach((publisher) => {
		publishersList.push(publisher.name);
		console.log(publishersList);
	});
	return `
    <div> ${publishersList} </div>
    `;
};
export { GamePublisher };
