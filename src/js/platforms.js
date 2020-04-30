const GamePlatforms = (platforms) => {
	let platformsList = [];
	platforms.forEach((platform) => {
		platformsList.push(platform.platform.name);
		console.log(platformsList);
	});
	return `
    <div> ${platformsList} </div>
    `;
};
export { GamePlatforms };
