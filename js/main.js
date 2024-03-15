const navBurgerBtn = document.querySelector(".nav__burger");
const burgerNav = document.querySelector(".nav__items");
const allNavItems = document.querySelectorAll(".nav__item");

const showBurgerNav = () => {
	burgerNav.classList.toggle("nav__items--active");
	navBurgerBtn.classList.toggle("nav__burger--black");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			burgerNav.classList.remove("nav__items--active");
			navBurgerBtn.classList.remove("nav__burger--black");
		});
	});
};

navBurgerBtn.addEventListener("click", showBurgerNav);
