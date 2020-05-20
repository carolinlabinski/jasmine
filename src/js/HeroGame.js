const HeroGame = (url, website) => {
	return `
    <div class="jumbotron jumbotron-fluid hero-container" style="background-image: url(${url}); background-size: cover; background-position: middle; background-repeat: no-repeat; position:relative"">
     <div class="website_button px-3 py-1 d-flex justify-content-between align-items-center">
       <div class="">
       <a  class="btn btn-danger" id="checkwebsite" whitetext href="${website}">Check website</a> <br>
       </div>
       <i class="fas fa-caret-right ml-3"></i>
     </div>
   </div>
    `;
};
export { HeroGame };
