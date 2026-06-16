// 🧠 PRODUCT DATA (SAFE MERGE)
const Homes = [
    ...Mens,
    ...Whoments,
    ...Couples
];

// 🎯 GET CONTAINER
const Homelist = document.getElementById("home-list");

// 🛒 CART LOAD
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ❤️ LIKE STORAGE (FIXED)
let likes = JSON.parse(localStorage.getItem("likes")) || {};

// =========================
// RENDER PRODUCTS
// =========================
function renderProducts(list) {
    if (!Homelist) return;

    Homelist.innerHTML = "";

    let html = "";

    list.forEach(item => {

        const likeCount = likes[item.id] || 0;

        html += `
<div class="group bg-black text-white dark:bg-white/5 dark:text-white 
    backdrop-blur-md border border-gray-200 dark:border-white/10 
    rounded-2xl overflow-hidden
    hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] hover:border-cyan-400 
    transition duration-300">

    <!-- IMAGE -->
    <div class="overflow-hidden">
        <img src="${item.image}"
            class="w-full h-[320px] object-cover transition duration-500 group-hover:scale-105">
    </div>

    <!-- CONTENT -->
    <div class="p-4">

        <!-- NAME -->
        <h3 class="font-semibold text-lg truncate group-hover:text-cyan-400 transition">
            ${item.name}
        </h3>

        <!-- PRICE + LIKE -->
        <div class="flex justify-between items-center mt-2">

            <p class="text-cyan-500 dark:text-cyan-400 font-bold text-lg">
                $${item.price}
            </p>

            <p class="flex items-center gap-1 text-gray-600 dark:text-gray-300 text-sm">
                <i class="fa-solid fa-heart text-red-400"></i>
                <span id="like-${item.id}" class="text-black dark:text-white">
                    ${likeCount}
                </span>
            </p>

        </div>

        <!-- BUTTONS -->
        <div class="flex gap-2 mt-4">

            <!-- LIKE -->
            <button onclick="addLike(${item.id})"
                class="flex-1 py-2 rounded-xl bg-red-500/10 border border-red-500/30
                text-red-500 dark:text-red-400 hover:bg-red-500/20 hover:scale-105 transition">
                <i class="fa-solid fa-heart"></i>
            </button>

            <!-- VIEW -->
            <button onclick="viewProduct(${item.id})"
                class="flex-1 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500
                text-white font-semibold hover:scale-105 transition shadow-md">
                View
            </button>

        </div>

    </div>
</div>
`;
    });

    Homelist.innerHTML = html;
}

// 🚀 INIT LOAD
renderProducts(Homes);

// 🛒 ADD TO CART
function addToCart(id) {
    const product = Homes.find(p => p.id === id);
    if (!product) return;

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("✅ Added to cart");
}

// 👁 VIEW PRODUCT
function viewProduct(id) {
    const product = Homes.find(p => p.id === id);
    if (!product) return;

    localStorage.setItem("viewProduct", JSON.stringify(product));
    window.location.href = "Views.html";
}

// ❤️ LIKE FUNCTION (FIXED SAFE)
function addLike(id) {
    if (!likes[id]) {
        likes[id] = 0;
    }

    likes[id] += 1;

    localStorage.setItem("likes", JSON.stringify(likes));

    const el = document.getElementById(`like-${id}`);
    if (el) el.innerText = likes[id];
}

// 🔍 SEARCH
function searchProduct() {
    const input = document.getElementById("search");
    if (!input) return;

    const keyword = input.value.toLowerCase();

    const result = Homes.filter(item =>
        item.name.toLowerCase().includes(keyword)
    );

   if (result.length === 0) {
    Homelist.innerHTML = `
        <div class="flex flex-col items-center justify-center p-16 text-center animate-fadeIn">
            
            <!-- Icon -->
            <div class="text-6xl mb-4 animate-bounce">
                🔍
            </div>

            <!-- Title -->
            <h2 class="text-2xl font-bold text-red-400 mb-2">
                No Products Found
            </h2>

            <!-- Description -->
            <p class="text-gray-400 mb-6">
                Try searching something else or explore our latest items.
            </p>

            <!-- Button -->
            <button onclick="location.reload()" 
                class="px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-lg hover:scale-105 transition duration-300">
                🔄 Refresh
            </button>
        </div>
    `;
} else {
    renderProducts(result);
}
}