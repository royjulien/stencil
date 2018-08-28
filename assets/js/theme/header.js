import $ from 'jquery';

const windowWidth = $(window).width();

$('[data-mobile-menu-toggle]').on('click', () => {
    $('#main-menu').toggleClass('active');
});

if (windowWidth <= 801) {
    $('.main-menu-cat').prepend('<div class="main-menu-cat-bracket"></div>');
    $('.main-menu-sub-cat-container').parent().prepend('<div class="main-menu-cat-bracket"></div>');
    $('.main-menu-cat > ul, .main-menu-sub-cat-container').prepend('<div class="main-menu-cat-back">back</div>');

    $('.main-menu-cat-bracket').on('click', (e) => {
        $(e.currentTarget).siblings('ul').addClass('active');
        $(e.currentTarget).siblings('.main-menu-sub-cat-container').addClass('active');
    });

    $('.main-menu-cat-back').on('click', (e) => {
        $(e.currentTarget).parent().removeClass('active');
    });
}
