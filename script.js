const burgerBtn = document.querySelector('.nav__burger');
const navMobile = document.querySelector('.nav__mobile');
const links = document.querySelectorAll('.nav__link--mobile');

const handleToggleMenu = () => {
	if (navMobile.classList.contains('display')) {
		navMobile.classList.remove('display');
		burgerBtn.style.position = 'absolute';
	} else {
		navMobile.classList.add('display');
		burgerBtn.style.position = 'fixed';
	}
};

burgerBtn.addEventListener('click', handleToggleMenu);
links.forEach(link => {
	link.addEventListener('click', handleToggleMenu);
});
