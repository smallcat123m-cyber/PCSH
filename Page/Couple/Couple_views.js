const product = JSON.parse(localStorage.getItem("viewProduct"));
const box = document.getElementById("Couple_box");

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
    <div class="flex justify-end items-center mb-10 gap-7">
        

        <button onclick="goBack()" 
            class="bg-cyan-500/20 backdrop-blur px-5 py-2 rounded-br-md rounded-bl-xl border border-cyan-400 hover:bg-cyan-500 hover:text-black transition">
            Back
        </button>

        <button onclick="goCart()" 
            class="bg-cyan-500/20 backdrop-blur px-5 py-2 rounded-full border border-cyan-400 hover:bg-cyan-500 hover:text-black transition">
            Cart 🛒
        </button>
    </div>

    <div class="grid lg:grid-cols-2 gap-12 items-center">

        <!-- IMAGE -->
        <div class="relative group">
            <img src="${product.image}" 
                class="w-160 h-160 object-cover rounded-3xl shadow-2xl transition duration-500 group-hover:scale-105">

            <div class="absolute inset-0 bg-black/20 rounded-3xl"></div>
        </div>

        <!-- INFO -->
        <div class="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-xl">

            <h1 class="text-4xl font-bold mb-2">${product.name}</h1>

            <p class="text-gray-400 mt-3 leading-relaxed">
                ${product.des}
            </p>

            <h2 class="text-4xl text-cyan-400 mt-5 font-bold">
                $${product.price}
            </h2>

            <!-- SIZE -->
            <div class="mt-6">
                <p class="text-gray-400 mb-3">Model</p>
                <div class="flex gap-3 flex-wrap">
                    ${sizeHTML}
                </div>
            </div>

            <!-- QTY -->
            <div class="mt-8 flex items-center justify-between bg-white/5 px-5 py-4 rounded-xl border border-white/10">

                <span class="text-gray-400">Quantity</span>

                <div class="flex items-center gap-4">
                    <button onclick="changeQty(-1)" 
                        class="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-400 hover:text-black transition">
                        -
                    </button>

                    <span id="qty" class="text-xl font-bold w-6 text-center">
                        ${quantity}
                    </span>

                    <button onclick="changeQty(1)" 
                        class="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-400 hover:text-black transition">
                        +
                    </button>
                </div>
            </div>

            <!-- TOTAL -->
            <div class="mt-6 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 p-5 rounded-xl border border-white/10 flex justify-between items-center">
                <span class="text-gray-300">Total</span>
                <span class="text-2xl text-pink-400 font-bold">
                    $<span id="totalPrice">${product.price}</span>
                </span>
            </div>

            <!-- BUTTON -->
            <button onclick="addToCartFromView()"
                class="mt-8 w-full bg-gradient-to-r from-cyan-400 to-blue-500 py-4 rounded-xl font-bold text-black text-lg shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition duration-300">
                Add to Cart 🛒
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
    window.location.href = "Couple.html";
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