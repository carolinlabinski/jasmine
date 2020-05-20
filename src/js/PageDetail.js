import { HeroGame } from "./HeroGame";
import { GameDetailsRequest } from "./GameDetailsRequest";
import { GamePlatforms } from "./platforms";
import { GameGenres } from "./GameGenres";
import { GameDevelopers } from "./GameDevelopers";
import { GameStores } from "./GameStores";
import { GamePublisher } from "./GamePublisher";
import { Trailer } from "./GameClips";
const PageDetail = (argument) => {
	const preparePage = () => {
		let cleanedArgument = argument.replace(/\s+/g, "-");

		let articleContent = "";

		const fetchGame = (url, argument) => {
			let finalURL = url + argument;

			fetch(`${finalURL}`)
				.then((response) => response.json())
				.then((response) => {
					console.log(response);
					let {
						name,
						released,
						description,
						rating,
						ratings_count,
						background_image,
						tags,
						platforms,
						genres,
						developers,
						website,
						stores,
						publishers,
						clip,
						id,
					} = response;

					let articleDOM = document.querySelector(".page-detail .article");

					articleDOM.querySelector("div.hero").innerHTML += HeroGame(
						background_image,
						website
					);
					articleDOM.querySelector("h1.title").innerHTML = name;
					articleDOM.querySelector("p.release-date span").innerHTML = released;
					articleDOM.querySelector("p.description").innerHTML = description;
					articleDOM.querySelector("p.rating span").innerHTML = rating;
					articleDOM.querySelector("#checkwebsite").innerHTML = website;
					articleDOM.querySelector(
						"p.ratings_count span"
					).innerHTML = ratings_count;
					articleDOM.querySelector(
						"p.tags span"
					).innerHTML += GameDetailsRequest(tags);
					articleDOM.querySelector(
						"p.platforms span"
					).innerHTML += GamePlatforms(platforms);
					articleDOM.querySelector("p.genres span").innerHTML += GameGenres(
						genres
					);
					articleDOM.querySelector(
						"p.developers span"
					).innerHTML += GameDevelopers(developers);
					articleDOM.querySelector("p.stores span").innerHTML += GameStores(
						stores
					);
					articleDOM.querySelector(
						"p.publishers span"
					).innerHTML += GamePublisher(publishers);
					articleDOM.querySelector("div.clip").innerHTML += Trailer(clip);
				});
		};

		fetchGame("http://api.rawg.io/api/games/", cleanedArgument);
	};

	const render = () => {
		pageContent.innerHTML = `
		<section class="page-detail whitetext">
		  <div class="article"><br><br>
		  <div class="hero" > </div>
			<h1 class="title whitetext ml-5"></h1>
			<p class="release-date whitetext ml-5">Release date : <span></span></p>
			<p class="description whitetext ml-5"></p>
			<p class="rating redtext ml-5"><span></span>/5</p>
			<p class="ratings_count redtext ml-5"> <span></span> votes</p>
			<p class="tags whitetext ml-5"> <span></span> tags</p>
			<p class="platforms whitetext ml-5"> <span></span></p>
			<p class="genres whitetext ml-5"> Genres:<span></span></p>
			<p class="developers whitetext ml-5"> Developer:<span></span></p>
			<p class="publishers whitetext ml-5"> Publishers: <span></span></p>
			<p class="stores whitetext ml-5"> Stores: <span></span></p>
			<div class="clip"> </div>
			<div class="thumbnail" > </div>		  </div>
		  </div>
		</section>
	  `;

		preparePage();
	};

	render();
};

export { PageDetail };

// document.querySelector(".jumbotron").innerHTML = `
// 					<a id="website" href="${website}" class="button d-flex flex-row justify-content-between">
// 					  <p>Check website</p><i class="fas fa-play"></i>
// 					</a>`;
