import "../sass/styles.scss";
import "bootstrap";
// import "@fortawesome/fontawesome-free/js/all.js";
import { routes } from "./routes";

let pageArgument;

const setRoute = () => {
	let path = window.location.hash.substring(1).split("/");
	pageArgument = path[1] || "";
	console.log(path);
	console.log(pageArgument);
	console.log("TEST", process.env.DB_HOST);

	var pageContent = document.getElementById("pageContent");
	routes[path[0]](pageArgument);
	console.log(routes);
	return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());
// export { setRoute };
