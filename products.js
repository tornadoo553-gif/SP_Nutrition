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





// ================= API =================

const PRODUCTS_API =
"https://script.google.com/macros/s/AKfycbwm4rnwTRuWVgbpTr7gCSlRaC61VaI25MW_NL4RDY-A-ZefNCjlGa0iKK-_rNVbVkeNJQ/exec?sheet=products";



// ================= CONTAINERS =================

const productContainer =
document.getElementById("product-container");

const pageTitle =
document.getElementById("product-page-title");

const searchInput =
document.getElementById("search-input");

const categoryFilter =
document.getElementById("category-filter");

const brandFilter =
document.getElementById("brand-filter");

const noProductsMessage =
document.getElementById("no-products-message");



// ================= URL PARAMETERS =================

const urlParams =
new URLSearchParams(window.location.search);

const categoryParam =
urlParams.get("category");

const brandParam =
urlParams.get("brand");



// ================= PRODUCTS ARRAY =================

let allProducts = [];





// ================= FETCH PRODUCTS =================

fetch(PRODUCTS_API)

.then(response => response.json())

.then(products => {

    allProducts = products;



    displayCategoryOptions(products);

    displayBrandOptions(products);



    if(categoryParam){

        categoryFilter.value = categoryParam;

        pageTitle.innerText =
        `${categoryParam} Products`;

    }



    if(brandParam){

        brandFilter.value = brandParam;

        pageTitle.innerText =
        `${brandParam} Products`;

    }



    filterProducts();

})

.catch(error => {

    console.log("Products API Error:", error);

});





// ================= DISPLAY PRODUCTS =================

function displayProducts(products){

    productContainer.innerHTML = "";



    if(products.length === 0){

        noProductsMessage.style.display =
        "block";

        return;

    }



    noProductsMessage.style.display =
    "none";



    products.forEach(product => {

        productContainer.innerHTML += `

            <div class="product-card">

                <img 
                    src="${product.image}" 
                    alt="${product.name}"
                >

                <h3>

                    ${product.name}

                </h3>

                <p>

                    ${product.description}

                </p>

                <span>

                    ${product.price}

                </span>

                <small class="product-brand">

                    ${product.brand}

                </small>

                <a 
                    href="https://wa.me/${BUSINESS.whatsapp}?text=Hi,%20I%20want%20to%20order%20${encodeURIComponent(product.name)}" 
                    target="_blank"
                >

                    <button>

                        Order On WhatsApp

                    </button>

                </a>

            </div>

        `;

    });

}





// ================= CATEGORY OPTIONS =================

function displayCategoryOptions(products){

    const categories = [

        ...new Set(

            products.map(product => product.category)

        )

    ];



    categories.forEach(category => {

        categoryFilter.innerHTML += `

            <option value="${category}">

                ${category}

            </option>

        `;

    });

}





// ================= BRAND OPTIONS =================

function displayBrandOptions(products){

    const brands = [

        ...new Set(

            products.map(product => product.brand)

        )

    ];



    brands.forEach(brand => {

        brandFilter.innerHTML += `

            <option value="${brand}">

                ${brand}

            </option>

        `;

    });

}





// ================= FILTER PRODUCTS =================

function filterProducts(){

    const searchText =
    searchInput.value.toLowerCase();

    const selectedCategory =
    categoryFilter.value;

    const selectedBrand =
    brandFilter.value;



    const filteredProducts =
    allProducts.filter(product => {



        const matchesSearch =

            product.name
                .toLowerCase()
                .includes(searchText)

            ||

            product.brand
                .toLowerCase()
                .includes(searchText)

            ||

            product.category
                .toLowerCase()
                .includes(searchText);




        const matchesCategory =

            selectedCategory === ""

            ||

            product.category === selectedCategory;




        const matchesBrand =

            selectedBrand === ""

            ||

            product.brand === selectedBrand;




        return (

            matchesSearch

            &&

            matchesCategory

            &&

            matchesBrand

        );

    });



    displayProducts(filteredProducts);

}





// ================= EVENTS =================

searchInput.addEventListener(
    "input",
    filterProducts
);

categoryFilter.addEventListener(
    "change",
    filterProducts
);

brandFilter.addEventListener(
    "change",
    filterProducts
);
