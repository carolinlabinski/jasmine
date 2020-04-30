const Trailer = (clip) => {
	return `
      <div class="my-3">
        <div class="redtext ml-5">
          TRAILER
        </div>
        <div class="w-75 mx-auto my-3">
          <video controls width="100%">
            <source src="${clip.clip}">
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    `;
};
export { Trailer };
