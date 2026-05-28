const products = [

    {
        name: "Whey Protein",
        price: "₹2499",
        image: "assets/product1.jpg",
        description: "High quality muscle recovery protein."
    },

    {
        name: "Creatine Monohydrate",
        price: "₹899",
        image: "assets/product2.jpg",
        description: "Improve strength and workout performance."
    },

    {
        name: "Mass Gainer",
        price: "₹1899",
        image: "assets/product3.jpg",
        description: "Healthy calorie surplus for muscle gain."
    },

    {
        name: "Pre Workout",
        price: "₹1299",
        image: "assets/product4.jpg",
        description: "Boost workout energy and focus."
    }

];



const productContainer = document.getElementById("product-container");



products.forEach(product => {

    productContainer.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <span>${product.price}</span>

            <a href="https://wa.me/917992771457?text=Hi,%20I%20want%20to%20order%20${product.name}" target="_blank">

                <button>
                    Order On WhatsApp
                </button>

            </a>

        </div>

    `;

});
