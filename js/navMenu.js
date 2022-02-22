const navContainer = document.querySelector(".");
const navMenu = document.querySelector(".");

navMenu.addEventListener("click", () =>{
	const visibility = navContainer.getAttribute("data-visible");

	if (visibility === "false") {
		navContainer.setAttribute("data-visible", false)
		navMenu.setAttribute("aria-expanded", true)
	}else if (visibility === "true") {
		navContainer.setAttribute("data-visible", true)
		navMenu.setAttribute("aria-expanded", false)}
})