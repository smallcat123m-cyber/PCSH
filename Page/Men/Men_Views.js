const product = JSON.parse(localStorage.getItem("viewProduct"));
const box = document.getElementById("Men_box");

let quantity = 1;
let selectedSize = null;

function getSize(type) {
    if (type === "shirt" || type === "trousers") {
        return ["XS", "S", "M", "L", "XL"];
    } else if (type === "shoes") {
        return ["20", "25", "33", "40"];
    } else if (type === "sidebag") {
        return ["Black", "White", "Gray", "Red"];
    }
    return [];
}

if (product) {

    const sizes = getSize(product.type);

    const sizeHTML = sizes.map(size => `
        <button onclick="selectSize(this)"
            class="size-btn px-6 py-3 border rounded-xl text-xl hover:bg-pink-500 transition">
            ${size}
        </button>
    `).join("");

    box.innerHTML = `
    <div class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-10">

        <!-- TOP -->
        <div class="flex justify-between mb-10">
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
                <img src="${product.image}" class="w-full h-[500px] object-cover rounded-2xl">
            </div>

            <!-- INFO -->
            <div>

                <h1 class="text-4xl font-bold">${product.name}</h1>

                <p class="text-gray-300 mt-4">${product.des}</p>

                <h2 class="text-3xl text-cyan-400 mt-4">
                    $${product.price}
                </h2>

                <!-- SIZE -->
                <div class="mt-6">
                    <p class="text-gray-400 mb-2">Model</p>
                    <div class="flex gap-3 flex-wrap">
                        ${sizeHTML}
                    </div>
                </div>

                <!-- QTY -->
                <div class="mt-6 flex items-center gap-4">

                    <button onclick="changeQty(-1)" class="px-4 py-2 bg-white/10 rounded">-</button>

                    <span id="qty" class="text-xl">${quantity}</span>

                    <button onclick="changeQty(1)" class="px-4 py-2 bg-white/10 rounded">+</button>
                </div>

                <!-- TOTAL -->
                <div class="mt-6 text-2xl text-pink-400">
                    Total: $<span id="totalPrice">${product.price}</span>
                </div>

                <!-- BUTTON -->
                <button onclick="addToCartFromView()"
                    class="mt-8 w-full bg-gradient-to-r from-cyan-400 to-blue-500 py-3 rounded-xl font-bold">
                    Add to Cart
                </button>

            </div>
        </div>
    </div>
    `;
} else {
    box.innerHTML = "<p>No product found</p>";
}

/* ---------------- FUNCTIONS ---------------- */

function goBack() {
    window.location.href = "Men.html";
}

function goCart() {
    window.location.href = "/Page/Carts/Addcart.html";
}

function changeQty(value) {
    quantity += value;
    if (quantity < 1) quantity = 1;

    document.getElementById("qty").innerText = quantity;
    document.getElementById("totalPrice").innerText = product.price * quantity;
}

function selectSize(btn) {
    document.querySelectorAll(".size-btn").forEach(b => {
        b.classList.remove("bg-pink-500");
    });

    btn.classList.add("bg-pink-500");
    selectedSize = btn.innerText.trim();
}

function addToCartFromView() {
    if (!selectedSize) {
        alert("Please select a model!");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        ...product,
        size: selectedSize,
        qty: quantity
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart!");
}