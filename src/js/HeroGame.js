const HeroGame = (url) => {
	return `
    <div class="jumbotron jumbotron-fluid hero-container" style="background-image: url(${url}); background-size: cover; background-position: middle; background-repeat: no-repeat; position:relative"">
     <div class="website_button px-3 py-1 d-flex justify-content-between align-items-center">
       <div class="">
       <button type="button" class="btn btn-danger" id="checkwebsite">Check website</button> <br>
       </div>
       <i class="fas fa-caret-right ml-3"></i>
     </div>
   </div>
    `;
};
export { HeroGame };
