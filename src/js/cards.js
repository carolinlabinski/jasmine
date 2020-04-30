import moment from "moment";
const GameCard = (
	name,
	image_url,
	platforms,
	id,
	released,
	rating,
	ratings_count,
	tags
) => {
	let platformsList = [];
	let tagsList = [];
	platforms.forEach((platform) => {
		platformsList.push(platform.platform.name);
	});

	tags.forEach((tag) => {
		tagsList.push(tag.name);
	});
	const m = moment(released);
	// console.log(platformsList);
	// console.log(tagsList);
	console.log(m.format("MMM DD, YYYY"));
	return `
 
      <div class="card col-lg-3 mx-1 my-2 mb-5 px-0 box container">
        <img class="card-img-top h-75" src="${image_url}" alt=''width="300" height="220">
        <div class="card-body">
          <h4><a href = "#pagedetail/${id}" class="border-0  ml-0 whitetext">${name}</a></h4>
          <div class="platforms d-flex justify-content-around hover">
            ${platformsList}
            <div class="overlay">
            <div class="textsize">${m.format("MMM DD, YYYY")} </div><br>
            <div class="textsize"> ${rating}/5 - ${ratings_count} votes</div><br>
            <div id="smalltext"> ${tagsList.slice(0, 6)} </div>
  </div>

            </div>
          </div>
        </div>
      </div>
    `;
};
export { GameCard };
