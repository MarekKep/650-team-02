document.querySelectorAll('.menu-main-collection_item').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '')

        document.querySelectorAll('.menu-main-collection_item').forEach(
            (child) => child.classList.remove('menu-main-collection_item--active')
        );
        document.querySelectorAll('.main-collection-content_item').forEach(
            (child) => child.classList.remove('main-collection-content_item--active')
        );

        item.classList.add('menu-main-collection_item--active');
        document.getElementById(id).classList.add('main-collection-content_item--active');
    })
);
document.querySelector('.menu-main-collection_item').click()