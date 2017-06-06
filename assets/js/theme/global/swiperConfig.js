/* Swiper Javascript Configuration */
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 50,
        centeredSlides: true,
        autoplay: 3000,
		speed: 1000,
        autoplayDisableOnInteraction: false,
	keyboardControl: true,
	setWrapperSize: true,
	breakpoints:{
	320:{
	slidesPerView: 1,
	spaceBetween: 5
	},
		480:{
			slidersPerView: 2,
			spaceBetween: 5
		},
		640:{
			slidersPerView: 3,
			spaceBetween: 5,
		}
}
    });