
const product = JSON.parse(localStorage.getItem("viewProduct"));
const box = document.getElementById("view-box");

let quantity = 1;
let selectedColor = null;

// =========================
// RENDER
// =========================
if (product) {

    box.innerHTML = `
    <div class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-10">

        <!-- TOP -->
        <div class="flex justify-between mb-8">
            <button onclick="goBack()" class="text-gray-300 hover:text-cyan-400">
                ← Back
            </button>

            <button onclick="goCart()" class="bg-cyan-500 px-5 py-2 rounded-full">
                Cart 🛒
            </button>
        </div>

        <div class="grid lg:grid-cols-2 gap-10">

            <!-- IMAGE -->
            <div>
                <img src="${product.image}"
                    class="w-full h-[520px] object-cover rounded-2xl shadow-lg">
            </div>

            <!-- INFO -->
            <div class="flex flex-col justify-between">

                <div>

                    <h1 class="text-4xl font-bold">${product.name}</h1>

                    <p class="text-gray-300 mt-3">
                        ${product.des || "Premium quality modern product"}
                    </p>

                    <h2 class="text-3xl text-cyan-400 mt-4">
                        $${product.price}
                    </h2>

                    <!-- COLOR -->
                    <div class="mt-6">
                        <p class="text-gray-400 mb-3">Select Color</p>

                        <div class="flex flex-wrap gap-3">

                            <button onclick="selectColor(this)" class="color-btn px-4 py-2 border rounded-xl">Black</button>
                            <button onclick="selectColor(this)" class="color-btn px-4 py-2 border rounded-xl">White</button>
                            <button onclick="selectColor(this)" class="color-btn px-4 py-2 border rounded-xl">Blue</button>
                            <button onclick="selectColor(this)" class="color-btn px-4 py-2 border rounded-xl">Red</button>

                        </div>
                    </div>

                    <!-- QTY -->
                    <div class="mt-6 flex items-center gap-4">

                        <button onclick="changeQty(-1)"
                            class="px-4 py-2 bg-white/10 rounded hover:bg-red-500">-</button>

                        <span id="qty" class="text-xl font-bold">1</span>

                        <button onclick="changeQty(1)"
                            class="px-4 py-2 bg-white/10 rounded hover:bg-green-500">+</button>

                    </div>

                </div>

                <!-- ACTION -->
                <div class="mt-8 border-t border-white/20 pt-6">

                    <div class="flex justify-between mb-4">
                        <span>Total</span>
                        <span id="totalPrice">$${product.price}</span>
                    </div>

                    <button id="addBtn"
                        onclick="addToCartFromView()"
                        class="w-full bg-gradient-to-r from-cyan-400 to-blue-500 py-3 rounded-xl font-bold hover:scale-105 transition">
                        Add to Cart
                    </button>

                </div>

            </div>
        </div>
    </div>
    `;

} else {
    box.innerHTML = "<p class='text-red-400'>No product found</p>";
}

// =========================
// NAVIGATION
// =========================
function goBack() {
    window.location.href = "Home.html";
}

function goCart() {
    window.location.href = "/Page/Carts/Addcart.html";
}

// =========================
// QTY
// =========================
function changeQty(value) {
    quantity += value;
    if (quantity < 1) quantity = 1;

    document.getElementById("qty").innerText = quantity;
    document.getElementById("totalPrice").innerText = "$" + (product.price * quantity);
}

// =========================
// COLOR SELECT
// =========================
function selectColor(btn) {

    document.querySelectorAll(".color-btn").forEach(b => {
        b.classList.remove("bg-pink-500", "text-white");
    });

    btn.classList.add("bg-pink-500", "text-white");

    selectedColor = btn.innerText.trim();
}

// =========================
// ADD TO CART
// =========================
function addToCartFromView() {

    if (!selectedColor) {
        alert("⚠️ Please select a color");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const newItem = {
        ...product,
        qty: quantity,
        color: selectedColor
    };

    const existing = cart.find(
        item => item.id === newItem.id && item.color === newItem.color
    );

    if (existing) {
        existing.qty += quantity;
    } else {
        cart.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("✅ Added to cart");
}