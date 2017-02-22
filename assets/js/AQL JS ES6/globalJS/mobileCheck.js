// Mobile Check
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.main-menu-cat > a, .main-menu-cat-vertical-left > .main-menu-sub-cat > a').click( (e) => {
            e.preventDefault();
        });
    }