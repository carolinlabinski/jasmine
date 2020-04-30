import { GameCard } from "./cards";
import "jquery";
import $ from "jquery";
window.addEventListener("DOMContentLoaded", () => {
	document.querySelector("input").addEventListener("keydown", (event) => {
		if (event.keyCode == 13) {
			event.preventDefault();
		}
		const keywordInputValue = document.querySelector("input[type='text']")
			.value;
		// createUrl(keywordInputValue);
		// selector.innerHTML = "";
		console.log(keywordInputValue);
		Home(keywordInputValue);
		// requestSearch(url);
	});
});

const showMore = () => {
	console.log("hello");
	$("#boxs .box:hidden").slice(0, 9).slideDown();
	if ($("#boxs .box:hidden").length == 0) {
		$("#showmore").fadeOut("slow");
		preparePage();
	}
};

const Home = (keywordInputValue = "") => {
	const preparePage = () => {
		let cleanedArgument = keywordInputValue.replace(/\s+/g, "-");
		let articles = "";
		let games = "";
		let platformes = "";

		const fetchList = (url, keywordInputValue) => {
			let finalURL =
				"https://api.rawg.io/api/games?dates=2020-01-01,2021-10-10&ordering=-added";
			if (keywordInputValue) {
				finalURL = url + "?search=" + keywordInputValue;
			}
			fetch(`${finalURL}`)
				.then((response) => response.json())
				.then((response) => {
					response.results.forEach((game) => {
						games += GameCard(
							game.name,
							game.background_image,
							game.platforms,
							game.id,
							game.released,
							game.rating,
							game.ratings_count,
							game.tags
						);
					});
					document.querySelector(".page-list .games").innerHTML = games;
				});

			// fetch(`${finalURL}`)
			// 	.then((response) => response.json())
			// 	.then((response) => {
			// 		let showNine = response.results.slice(0, 9);
			// 		showNine.forEach((article) => {
			// 			console.log(response.results.length);
			// 			console.log(typeof response.results);
			// 			console.log(response.results);
			// 			articles += `

			// 		<div class="cardGame">
			// 		<img src='${article.background_image}' alt=''width="300" height="220" />
			// 		  <h2>${article.name}</h2>
			// 		  <h6>${article.released}</h6>
			// 		  <h6>Platforms:${article.platforms[0]}</h6>
			// 		  <a href = "#pagedetail/${article.id}">${article.id}</a>
			// 		</div>
			// 	  `;
			// 		});
			// 	document.querySelector(".page-list .articles").innerHTML = articles;
			// });
		};

		fetchList("https://api.rawg.io/api/games", cleanedArgument);
	};

	const render = () => {
		pageContent.innerHTML = `

		<section id="boxs" class="page-list whitetext">
		<h1 class="whitetext typo-nunito mt-5 ml-5">Welcome,</h1>
		<p class="whitetext ml-5">
			The Hyper Programe is the world's premier event for computer and video
			games and related products. At The Hyper Progame, the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies, groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure
		</p>
		<div class="dropdown ml-5">
		<button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		  Platform: any
		</button>
		<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
		  <a class="dropdown-item" href="#">PlayStation 4</a>
		  <a class="dropdown-item" href="#">Xbox One</a>
		  <a class="dropdown-item" href="#">PC</a>
		  <a class="dropdown-item" href="#">Linux</a>
		  <a class="dropdown-item" href="#">maxOS</a>
		  <a class="dropdown-item" href="#">Android</a>
		  <a class="dropdown-item" href="#">iOS</a>
		  <a class="dropdown-item" href="#">Nintendo Switch</a>
		</div> 
	  </div> <br>
		  <div class="games d-flex flex-wrap justify-content-around whitetext ml-5 mr-5">...loading</div>
		  <div class="col-md-12 text-center">
		  <button type="button" class="btn btn-danger" id="showmore">Show more</button> <br>
		  </div>
		</section>
	  `;
		document.getElementById("showmore").onclick = showMore;

		preparePage();
	};

	render();
};

export { Home };
