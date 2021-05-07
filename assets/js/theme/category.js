import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import $ from 'jquery';
import FacetedSearch from './common/faceted-search';

export default class Category extends CatalogPage {
    before(next) {
        if ($('.category-description-text').length > 0) {
            const detached = $('.category-description-text').detach();
            detached.insertBefore('.footer');
        }

        next();
    }

    loaded(next) {
        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }

        // // AHHHH lame js here
        // var slideIndex = 1;
        // var myTimer;
        // var slideshowContainer;

        // let plusSlides = (n) => {
        //     clearInterval(myTimer);
        //     n < 0 ? showSlides(slideIndex -= 1) : showSlides(slideIndex += 1);
        //     n === -1 ? myTimer = setInterval(plusSlides(n + 2), 4000) : myTimer = setInterval(plusSlides(n + 1), 4000);
        // }

        // let currentSlide = (n) => {
        //     clearInterval(myTimer);
        //     myTimer = setInterval(plusSlides(n + 1), 4000);
        //     showSlides(slideIndex = n);
        // }

        // let showSlides = (n) => {
        //     var i;
        //     var slides = document.getElementsByClassName("mySlides");
        //     var dots = document.getElementsByClassName("slide-dot");
        //     if (n > slides.length) {slideIndex = 1}
        //     if (n < 1) {slideIndex = slides.length}
        //     for (i = 0; i < slides.length; i++) {
        //         slides[i].style.display = "none";
        //     }
        //     for (i = 0; i < dots.length; i++) {
        //         dots[i].className = dots[i].className.replace(" active-slide", "");
        //     }
        //     slides[slideIndex-1].style.display = "block";
        //     dots[slideIndex-1].className += " active-slide";
        // }

        // let pause = () => {
        //     clearInterval(myTimer);
        // }

        // let resume = () =>{
        //     clearInterval(myTimer);
        //     myTimer = setInterval(plusSlides(slideIndex), 4000);
        // }

        // var slides = document.getElementsByClassName("mySlides");

        // if (slides.length > 0) {
        //     showSlides(slideIndex);
        //     myTimer = setInterval(plusSlides(1), 4000);
        //     slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
        //     slideshowContainer.addEventListener('mouseenter', pause)
        //     slideshowContainer.addEventListener('mouseleave', resume)
        // }

        next();
    }

    after(next) {
        if ($('.category-description-text').length > 0) {
            $('.category-description-text').addClass('active');
        }

        next();
    }

    initFacetedSearch() {
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const productsPerPage = this.context.categoryProductsPerPage;
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
            },
            showMore: 'category/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            $('html, body').animate({
                scrollTop: 0,
            }, 100);
        });
    }
}
