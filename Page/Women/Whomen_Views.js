const product = JSON.parse(localStorage.getItem("viewProduct"));
const box = document.getElementById("Women_box");

let selectedSize = null;
let quantity = 1;

function getSize(type){
    if(type === "shirt" || type === "trousers"){
        return ["XS", "S", "M", "L", "XL"];
    } else if(type === "shoes"){
        return ["36", "37", "38", "39", "40"];
    } else if(type === "sidebag"){
        return ["Black", "White", "Gray", "Red"];
    }
    return [];
}

if(product){

    const sizes = getSize(product.type);

    const sizeHTML = sizes.map(size => `
        <button onclick="selectSize(this)"
            class="size-btn px-5 py-2 rounded-xl border border-white/20
            hover:bg-pink-500/30 hover:scale-105 transition text-sm md:text-base">
            ${size}
        </button>
    `).join("");

    box.innerHTML = `
    <div class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 md:px-16 py-10">

        <!-- TOP BAR -->
        <div class="flex justify-between items-center mb-10">

            <button onclick="goBack()"
                class="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition text-lg">
                <i class="fa-solid fa-arrow-left"></i> Back
            </button>

            <button onclick="goCart()"
                class="px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-600 transition font-semibold shadow-lg">
                Cart <i class="fa-solid fa-cart-shopping"></i>
            </button>

        </div>

        <!-- MAIN GRID -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <!-- IMAGE -->
            <div class="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md
                shadow-[0_0_40px_rgba(255,0,150,0.08)]">

                <img src="${product.image}"
                    class="w-full h-[500px] object-cover rounded-2xl hover:scale-105 transition duration-500">
            </div>

            <!-- DETAILS -->
            <div class="flex flex-col justify-between">

                <div>

                    <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
                        ${product.name}
                    </h1>

                    <p class="mt-5 text-gray-300 text-lg">
                        ${product.des}
                    </p>

                    <h2 class="mt-6 text-4xl font-bold text-pink-400">
                        $${product.price}
                    </h2>

                    <!-- SIZE -->
                    <div class="mt-8">
                        <p class="text-gray-400 mb-3">Select Size / Model</p>

                        <div class="flex flex-wrap gap-3">
                            ${sizeHTML}
                        </div>
                    </div>

                    <!-- QUANTITY -->
                    <div class="mt-8">
                        <p class="text-gray-400 mb-3">Quantity</p>

                        <div class="flex items-center gap-4">

                            <button onclick="changeQty(-1)"
                                class="w-12 h-12 rounded-xl bg-white/10 hover:bg-red-500 transition">
                                <i class="fa-solid fa-minus"></i>
                            </button>

                            <span id="qty"
                                class="text-2xl font-bold px-5 py-2 bg-white/5 rounded-xl">
                                1
                            </span>

                            <button onclick="changeQty(1)"
                                class="w-12 h-12 rounded-xl bg-white/10 hover:bg-green-500 transition">
                                <i class="fa-solid fa-plus"></i>
                            </button>

                        </div>
                    </div>

                    <!-- FEATURES -->
                    <div class="grid grid-cols-2 gap-4 mt-10 text-gray-300">
                        <p>✔ Free Shipping</p>
                        <p>✔ Secure Payment</p>
                        <p>✔ Easy Returns</p>
                        <p>✔ 24/7 Support</p>
                    </div>

                </div>

                <!-- ACTION -->
                <div class="mt-10 border-t border-white/10 pt-8">

                    <div class="flex justify-between items-center mb-6">
                        <span class="text-gray-400 text-lg">Total</span>
                        <span id="totalPrice" class="text-3xl font-bold text-pink-400">
                            $${product.price}
                        </span>
                    </div>

                    <div class="flex gap-4">

                        <button onclick="goBack()"
                            class="w-1/2 py-4 rounded-xl border border-white/20
                            hover:bg-red-500/10 transition font-semibold">
                            Cancel
                        </button>

                        <button onclick="addToCartFromView()"
                            class="w-1/2 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500
                            hover:scale-105 transition font-bold shadow-lg">
                            Add to Cart
                        </button>

                    </div>

                </div>

            </div>
        </div>
    </div>
    `;
}else{
    box.innerHTML = `
    <div class="text-center text-gray-400 py-20 text-xl">
        ❌ No product found
    </div>
    `;
}

// ================= FUNCTIONS =================

function goBack(){
    window.location.href = "whomen.html";
}

function goCart(){
    window.location.href = "/Page/Carts/Addcart.html";
}

function changeQty(value){
    quantity += value;
    if(quantity < 1) quantity = 1;

    document.getElementById("qty").innerText = quantity;

    document.getElementById("totalPrice").innerText =
        "$" + (product.price * quantity);
}

function addToCartFromView(){

    if(!selectedSize){
        alert("Please select a size/model!");
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

function selectSize(btn){

    document.querySelectorAll(".size-btn").forEach(b => {
        b.classList.remove("bg-pink-500", "text-white");
    });

    btn.classList.add("bg-pink-500", "text-white");

    selectedSize = btn.innerText.trim();
}