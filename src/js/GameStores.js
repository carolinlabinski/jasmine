const GameStores = (stores) => {
	let storesList = [];
	stores.forEach((store) => {
		storesList.push(store.url);
		console.log(storesList);
	});
	return `
    <div> ${storesList} </div>
    `;
};
export { GameStores };
