const GameStores = (stores) => {
	let storesList = [];
	stores.forEach((store) => {
		storesList.push(store.url);
		console.log(storesList);
	});
	return `
    <a> href="${storesList}" </a>
    `;
};
export { GameStores };
