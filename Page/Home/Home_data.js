// 🧠 PRODUCT DATA
const Homes = [
    {
        id: 1,
        name: "Home Mouse",
        price: 25,
        image: "https://i.pinimg.com/1200x/fe/f7/b3/fef7b3cbaeb59afc974ab04dd20741e6.jpg"
    },
    {
        id: 2,
        name: "Mechanical Keyboard",
        price: 80,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 3,
        name: "Gaming PC",
        price: 1200,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 4,
        name: "Headset",
        price: 45,
        image: "https://via.placeholder.com/200"
    }
];


// 🎯 GET CONTAINER
const Homelist = document.getElementById("home-list");

      

// 🔁 LOOP
Homes.forEach(item => {
    const card = `
        <div class="bg-blue-300 p-4 rounded-xl shadow hover:shadow-lg cart">
            <img src="${item.image}" class="w-full mb-3 h-80 object-cover rounded-md">
            <h3 class="font-bold">${item.name}</h3>
            <p class="text-gray-500">$ ${item.price}</p>


            <div class="btn">
                <button class="mt-3 w-full bg-blue-500 text-white py-1 uppercase hover:bg-yellow-600 cursor-pointer">
                    Buy Now
                </button>

                <button onclick='addToCart(${JSON.stringify(item)})'
                class="mt-3 w-full bg-green-500 text-white py-1 uppercase hover:bg-green-700 cursor-pointer">
                    Cart
                </button>

                <button onclick="viewProduct(${item.id})"
                class="mt-3 w-full bg-orange-500 text-white py-1 uppercase hover:bg-orange-700 cursor-pointer">
                    View
                </button>
            </div>
        </div>
    `;
    Homelist.innerHTML += card;
});


// 🛒 CART
let cart = [];

// ADD TO CART
function addToCart(product){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("✅ Added to cart");
}

// DISPLAY CART
function renderCart(){
    const cartContainer = document.getElementById("cart-items");
    const totalItems = document.getElementById("total-items");
    const totalPrice = document.getElementById("total-price");

    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index)=>{
        total += item.price;

        cartContainer.innerHTML += `
            <div class="cart-item">
                <div class="flex items-center gap-4">
                    <img src="${item.image}" class="cart-img">
                    <div>
                        <h4 class="font-bold">${item.name}</h4>
                        <p class="text-gray-400">$${item.price}</p>
                    </div>
                </div>

                <button onclick="removeItem(${index})" class="remove-btn">
                    Remove
                </button>
            </div>
        `;
    });

    totalItems.innerText = cart.length;
    totalPrice.innerText = "$" + total;
}

// REMOVE ITEM
function removeItem(index){
    cart.splice(index,1);
    renderCart();
}

// 👁 VIEW PRODUCT
function viewProduct(id){
    const product = Homes.find(p => p.id === id); // ✅ FIXED

    localStorage.setItem("viewProduct", JSON.stringify(product));

    window.location.href = "../ViewsPage/Views.html";
}
// Clear old products
function displayProducts(list){
    const Homelist = document.getElementById("home-list");

    Homelist.innerHTML = "";

    list.forEach(item => {
        const card = `
        <div class="bg-blue-300 p-4 rounded-xl shadow hover:shadow-lg cart">
            <img src="${item.image}" class="w-full mb-3 h-80 object-cover rounded-md">
            <h3 class="font-bold">${item.name}</h3>
            <p class="text-gray-500">$ ${item.price}</p>

            <div class="btn">
                <button class="mt-3 w-full bg-blue-500 text-white py-1 uppercase hover:bg-yellow-600 cursor-pointer">
                    Buy Now
                </button>

                <button onclick='addToCart(${JSON.stringify(item)})'
                class="mt-3 w-full bg-green-500 text-white py-1 uppercase hover:bg-green-700 cursor-pointer">
                    Cart
                </button>

                <button onclick="viewProduct(${item.id})"
                class="mt-3 w-full bg-orange-500 text-white py-1 uppercase hover:bg-orange-700 cursor-pointer">
                    View
                </button>
            </div>
        </div>
        `;
        Homelist.innerHTML += card;
    });
}

// Serch 
function searchProduct(){
    const keyword = document.getElementById("search").value.toLowerCase();

    const result = Homes.filter(item =>
        item.name.toLowerCase().includes(keyword)
    );

    const Homelist = document.getElementById("home-list");

    // ❗ IF NOT FOUND
    if(result.length === 0){
    Homelist.innerHTML = `
        <div class="not-found">
            <div class="not-box">
                <h2 class="not-title">❌ No product found</h2>
                <p class="not-text">Try searching something else...</p>
            </div>
        </div>
    `;
}else{
    displayProducts(result);
}
}