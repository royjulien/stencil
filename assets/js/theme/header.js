import $ from 'jquery';

const windowWidth = $(window).width();

$('[data-mobile-menu-toggle]').on('click', () => {
    $('#main-menu').toggleClass('active');
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.main-menu-cat > a, .main-menu-cat-vertical-left > .main-menu-sub-cat > a').click((e) => {
        e.preventDefault();
    });
}

if (windowWidth >= 768) {
    $('.main-menu-cat').on('mouseenter', () => {
        $(this).children('.main-menu-cat-vertical').show();
        $(this).children('.main-menu-cat-vertical-left').show();
        $(this).children('.main-menu-cat-horizontal').show();
    }).on('mouseleave', () => {
        $(this).children('.main-menu-cat-vertical').hide();
        $(this).children('.main-menu-cat-vertical-left').hide();
        $(this).children('.main-menu-cat-horizontal').hide();
    });

    $('.main-menu-cat-vertical-left > .main-menu-sub-cat').hover(() => {
        $(this).children('.main-menu-sub-cat-container').toggle();
    });

    $('.main-menu-sub-cat').hover(() => {
        const listHeight = $(this).parent().height();
        $(this).children('.main-menu-sub-cat-container').height(listHeight - 1);
    });
} else {
    $('.main-menu-cat').prepend('<div class="main-menu-cat-bracket">+</div>');
    $('.main-menu-sub-cat-container').parent().prepend('<div class="main-menu-cat-bracket">+</div>');
    $('.main-menu-cat > ul, .main-menu-sub-cat-container').prepend('<div class="main-menu-cat-back">Back</div>');

    $('.main-menu-cat-bracket').on('click', () => {
        $(this).parent().children('ul').addClass('active');
        $(this).parent().children('.main-menu-sub-cat-container').addClass('active');
    });

    $('.main-menu-cat-back').on('click', () => {
        $(this).parent().removeClass('active');
    });
}
