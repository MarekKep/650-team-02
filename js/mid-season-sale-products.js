(function () {

    const products = [
        {
            id: "1",
            image: "img/mid-season-get-your-discount/adidas-cloudfoam-trainers.jpg",
            tittle: "Adidas Cloudfoam Trainers",
            price: 60.00,
            button: "Add to Cart"
        },
        {
            id: "2",
            image: "img/mid-season-get-your-discount/reebok-workout-shorts.jpg",
            tittle: "Reebok Workout Shorts",
            price: 25.00,
            button: "Add to Cart"
        },
        {
            id: "3",
            image: "img/mid-season-get-your-discount/puma-fitness-shoes-grey.jpg",
            tittle: "Puma Fitness Shoes in Grey",
            price: 60.00,
            button: "Add to Cart"
        },
        {
            id: "4",
            image: "img/mid-season-get-your-discount/puma-essentia-tank-top.jpg",
            tittle: "Puma Essential Tank Top",
            price: 43.00,
            button: "Add to Cart"
        },
        {
            id: "5",
            image: "img/mid-season-get-your-discount/nike-classic-polo-shirt.jpg",
            tittle: "Nike Classic Polo T-Shirt",
            price: 23.00,
            button: "Add to Cart"
        }
    ]

    const ascButton = document.querySelector('.asc-price');
    ascButton.addEventListener("click", sortAsc);
    function sortAsc() {
        renderProducts(products, "ascending");
    }
    const descButton = document.querySelector('.desc-price');
    descButton.addEventListener("click", sortDesc);
    function sortDesc() {
        renderProducts(products, "descending");
    }

    function renderProducts(products, sortProduct) {
        const sortedProducts = [...products].sort( (a, b) =>
            (sortProduct === "ascending") ? a.price - b.price : b.price - a.price
        );
        let html = "";
        const productContainer = document.querySelector(".mid-season-sale-products-section");
        for (let product of sortedProducts) {
            html += `    
                <div class="mid-season-sale-product">
                    <img class="mid-season-sale-img" src="${product.image}" alt="${product.tittle}">
                    <div class="mid-season-sale-product-info">
                        <a href="#" class="mid-season-sale-product-tittle">${product.tittle}</a>
                        <span class="mid-season-sale-product-price">${product.price}</span>
                    <a href="#" class="btn-add-to-cart">${product.button}</a>
                    </div>
                </div>`;
        }
        productContainer.innerHTML = html;
    }

    renderProducts(products, "ascending");

})()