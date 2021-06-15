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
        // Begin my janky carousel code :D
        if($('.mySlides').length > 0) {
            let slideIndex = 1;
            let timer;
            let slideshowContainer = $('.slideshow-inner');

            function nextSlide(n) {
                clearInterval(timer);
                showSlides(slideIndex += 1);

                if (n === -1){
                    timer = setInterval(function(){nextSlide(n + 2)}, 4000);
                } else {
                    timer = setInterval(function(){nextSlide(n + 1)}, 4000);
                }
            }

            function prevSlide(n) {
                clearInterval(timer);
                showSlides(slideIndex -= 1);

                if (n === -1){
                    timer = setInterval(function(){nextSlide(n + 2)}, 4000);
                } else {
                    timer = setInterval(function(){nextSlide(n + 1)}, 4000);
                }
            }

            function currentSlide(n) {
                clearInterval(timer);
                timer = setInterval(function(){nextSlide(n + 1)}, 4000);
                showSlides(slideIndex = n);
            }

            function showSlides(n) {
                let slides = $('.mySlides');
                let dots = $('.slide-dot');
                if (n > slides.length) { slideIndex = 1}
                if (n < 1) { slideIndex = slides.length }
                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                for (let j = 0; j < dots.length; j++) {
                    dots[j].className = dots[j].className.replace(" active-dot", "");
                }
                slides[slideIndex - 1].style.display = "block";
                dots[slideIndex - 1].className += " active-dot";
            }

            $(function(){
               //showSlides(slideIndex);
               currentSlide(slideIndex);
               //timer = setInterval(function(){nextSlide(n + 1)}, 4000);
            });

            $(".prev-slide").on("click", function() {
                clearInterval(timer);
                prevSlide(slideIndex);
            });

            $(".next-slide").on("click", function() {
                clearInterval(timer);
                nextSlide(slideIndex);
            });

            $(".slide-dot").on("click", function() {
                let num = $(this).attr('data-dot-number');
                clearInterval(timer);
                currentSlide(num);
            });

            slideshowContainer.on("mouseenter", function(){
                clearInterval(timer);
            }).on("mouseleave", function() {
                currentSlide(slideIndex);
            })
        }
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