// ================= BUSINESS DETAILS =================

const BUSINESS = {

    whatsapp: "917992771457",

    instagram: "https://instagram.com/yourusername",

    phone: "+9198658411600",

    email: "support@spnutrition.com"

};



// ================= FOOTER LINKS =================

document.getElementById("whatsapp-link").href =

`https://wa.me/${BUSINESS.whatsapp}`;



document.getElementById("instagram-link").href =

BUSINESS.instagram;



document.getElementById("phone-link").href =

`tel:${BUSINESS.phone}`;



document.getElementById("email-link").href =

`mailto:${BUSINESS.email}`;





// ================= API URLS =================

const PRODUCTS_API =
"https://script.google.com/macros/s/AKfycbwm4rnwTRuWVgbpTr7gCSlRaC61VaI25MW_NL4RDY-A-ZefNCjlGa0iKK-_rNVbVkeNJQ/exec?sheet=products";

const HOMEPAGE_API =
"https://script.google.com/macros/s/AKfycbwm4rnwTRuWVgbpTr7gCSlRaC61VaI25MW_NL4RDY-A-ZefNCjlGa0iKK-_rNVbVkeNJQ/exec?sheet=homepage";



// ================= CONTAINERS =================

const slidesContainer =
document.getElementById("slides-container");

const categoryContainer =
document.getElementById("category-container");

const brandContainer =
document.getElementById("brand-container");





// ================= LOAD HOMEPAGE =================

fetch(HOMEPAGE_API)

.then(response => response.json())

.then(data => {

    displaySlides(data);

})

.catch(error => {

    console.log("Homepage API Error:", error);

});





// ================= LOAD PRODUCTS =================

fetch(PRODUCTS_API)

.then(response => response.json())

.then(products => {

    displayCategories(products);

    displayBrands(products);

})

.catch(error => {

    console.log("Products API Error:", error);

});





// ================= DISPLAY SLIDES =================

function displaySlides(slidesData){

    slidesContainer.innerHTML = "";



    slidesData.forEach((slide, index) => {



        const activeClass =

            index === 0

            ? "active"

            : "";



        // TESTIMONIAL SLIDE

        if(slide.type === "testimonial"){

            slidesContainer.innerHTML += `

                <div class="slide ${activeClass}">

                    <div class="slide-wrapper testimonial-slide">

                        <div class="slide-image">

                            <img 
                                src="${slide.image}" 
                                alt="${slide.title}"
                            >

                        </div>



                        <div class="slide-content">

                            <h1>

                                ${slide.title}

                            </h1>

                            <p>

                                "${slide.description}"

                            </p>

                            <button class="hero-btn">

                                ⭐⭐⭐⭐⭐

                            </button>

                        </div>

                    </div>

                </div>

            `;

        }



        // OFFER SLIDE

        else{

            slidesContainer.innerHTML += `

                <div class="slide ${activeClass}">

                    <div class="slide-wrapper offer-slide">

                        <div class="slide-content">

                            <h1>

                                ${slide.title}

                            </h1>

                            <p>

                                ${slide.description}

                            </p>

                            <a href="${slide.buttonLink}">

                                <button class="hero-btn">

                                    ${slide.buttonText}

                                </button>

                            </a>

                        </div>



                        <div class="slide-image">

                            <img 
                                src="${slide.image}" 
                                alt="${slide.title}"
                            >

                        </div>

                    </div>

                </div>

            `;

        }

    });



    startSlider();

}





// ================= START SLIDER =================

function startSlider(){

    const slides =
    document.querySelectorAll(".slide");



    if(slides.length === 0){

        return;

    }



    let currentSlide = 0;



    function showSlide(index){

        slides.forEach(slide => {

            slide.classList.remove("active");

        });



        slides[index].classList.add("active");

    }



    function nextSlide(){

        currentSlide++;



        if(currentSlide >= slides.length){

            currentSlide = 0;

        }



        showSlide(currentSlide);

    }



    setInterval(nextSlide, 4500);

}





// ================= DISPLAY CATEGORIES =================

function displayCategories(products){

    const categories = [

        ...new Set(

            products.map(product => product.category)

        )

    ];



    categoryContainer.innerHTML = "";



    categories.forEach(category => {

        categoryContainer.innerHTML += `

            <a href="products.html?category=${encodeURIComponent(category)}">

                <div class="category-card">

                    <h3>

                        ${category}

                    </h3>

                </div>

            </a>

        `;

    });

}





// ================= DISPLAY BRANDS =================

function displayBrands(products){

    const brands = [

        ...new Set(

            products.map(product => product.brand)

        )

    ];



    brandContainer.innerHTML = "";



    brands.forEach(brand => {

        brandContainer.innerHTML += `

            <a href="products.html?brand=${encodeURIComponent(brand)}">

                <div class="category-card">

                    <h3>

                        ${brand}

                    </h3>

                </div>

            </a>

        `;

    });

}
