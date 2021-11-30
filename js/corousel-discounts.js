(function() {
	const slides = [
		 
		 `<div class="columns-discount-carousel">
         <img class="carousel-discounts-img" src="img/carousel/carousel-one.jpg" alt="one">
         <div class="carousel-back">
         <p class="discount-of-product">20% of all T-Shirt</p>
         <a class="shop-colection-carousel" href="#">Shop Collection</a>
         </div>
		 </div>`,


		 `<div class="columns-discount-carousel">
         <img class="carousel-discounts-img" src="img/carousel/carousel-two.jpg" alt="two">
         <p class="discount-of-product">25% OFF All Trainers </p>
         <a class="shop-colection-carousel" href="#">Shop Collection</a>
		 </div>`,


		 `<div class="columns-discount-carousel">
         <img class="carousel-discounts-img" src="img/carousel/carousel-three.jpg" alt="three">
         <p class="discount-of-product">30% OFF ALL Jacket</p>
         <a class="shop-colection-carousel" href="#">Shop Collection</a>
		 </div>`,

         `<div class="columns-discount-carousel">
         <img class="carousel-discounts-img" src="img/carousel/carousel-four.jpg" alt="four">
         <p class="discount-of-product">25% OFF All Trainers </p>
         <a class="shop-colection-carousel" href="#">Shop Collection</a>
		 </div>`
	];

	let currentSlideIdx = 0;

	function renderSlides() {
		 const slidesContainer = document.querySelector('.carousel-discounts');
		 slidesContainer.innerHTML = slides[currentSlideIdx];
		 if (window.innerWidth > 600) {
			  const slide2Idx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
			  slidesContainer.innerHTML += slides[slide2Idx];
			  if (window.innerWidth > 975) {
					const slide3Idx = slide2Idx + 1 >= slides.length ? 0 : slide2Idx + 1;
					slidesContainer.innerHTML += slides[slide3Idx];    
			  }
		 }
	}

	function nextSlide() {
		 currentSlideIdx++;
		 if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
		 renderSlides();
	}

	function prevSlide() {
		 currentSlideIdx--;
		 if (currentSlideIdx < 0) currentSlideIdx = slides.length - 1;
		 renderSlides();
	}

	setInterval(nextSlide, 3000);
	document.querySelector('.prev').addEventListener('click', prevSlide);
	document.querySelector('.next').addEventListener('click', nextSlide);

	renderSlides();

	window.addEventListener('resize', renderSlides);
})();