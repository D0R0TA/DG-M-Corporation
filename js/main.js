const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')
const AllNavLinkMobile = document.querySelectorAll('.nav__link-mobile')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
}

navBtn.addEventListener('click', handleNav)


AllNavLinkMobile.forEach(item => {
	item.addEventListener('click', handleNav)
})


const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
