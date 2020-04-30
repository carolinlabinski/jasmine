const PageList = (argument = "") => {
	const preparePage = () => {
		let cleanedArgument = argument.replace(/\s+/g, "-");
		let articles = "";

		const fetchList = (url, argument) => {
			let finalURL =
				"https://api.rawg.io/api/games?dates=2020-01-01,2021-10-10&ordering=-added";
			if (argument) {
				finalURL = url + "?search=" + argument;
			}

			fetch(`${finalURL}`)
				.then((response) => response.json())
				.then((response) => {
					response.results.forEach((article) => {
						articles += `
					<div class="cardGame">
					  <h1>${article.name}</h1>
					  <h2>${article.released}</h2>
					  <img src='${article.background_image}' alt=''width="130" height="150" />
					  <a href = "#pagedetail/${article.id}">${article.id}</a>
					</div>
				  `;
					});
					document.querySelector(".page-list .articles").innerHTML = articles;
					console.log(article.backround_image);
				});
		};

		fetchList("https://api.rawg.io/api/games", cleanedArgument);
	};

	const render = () => {
		pageContent.innerHTML = `
		<section class="page-list whitetext">
		  <div class="articles whitetext">...loading</div>
		</section>
	  `;

		preparePage();
	};

	render();
};

export { PageList };
