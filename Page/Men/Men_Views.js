const product = JSON.parse(localStorage.getItem("viewProduct"));

const box = document.getElementById("Men_box");

function getSize(type){

    if(type === "shirt" || type === "trousers"){
        return ["XS", "S", "M", "L", "XL"];
    }else if(type === "shoes"){
        return ["20", "25", "33", "40"];
    }else if(type === "sidebag"){
        return ["Balck","white","Gray","Red"];
    }
    return [];
}
if(product){
    const sizes = getSize(product.type);
    const sizeHTML =sizes.map(size =>`
        <button onclick="selectSize(this)" 
    class="size-btn px-6 py-3 border rounded-xl flex gap-2 text-xl hover:bg-pink-500 transition cursor-pointer">
        ${size}
    </button>
        `).join("");
 box.innerHTML = `
<div class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 md:px-16 py-10">

    <!-- TOP BAR -->
    <div class="flex justify-between items-center mb-10">

        <button onclick="goBack()"
            class="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition text-lg">
            <i class="fa-solid fa-arrow-left"></i> Back
        </button>

        <button onclick="goCart()"
            class="px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 transition font-semibold shadow-lg">
            Cart <i class="fa-solid fa-cart-shopping"></i>
        </button>

    </div>

    <!-- MAIN GRID -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <!-- IMAGE SECTION -->
        <div class="space-y-4">

            <div class="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md
                shadow-[0_0_40px_rgba(0,255,255,0.08)]">

                <img src="${product.image}"
                    class="w-full h-[520px] object-cover rounded-2xl hover:scale-105 transition duration-500">
            </div>

        </div>

        <!-- DETAILS -->
        <div class="flex flex-col justify-between">

            <div>

                <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
                    ${product.name}
                </h1>

                <p class="mt-5 text-gray-300 text-lg leading-relaxed max-w-xl">
                    ${product.des}
                </p>

                <h2 class="mt-6 text-4xl font-bold text-cyan-400">
                    $${product.price}
                </h2>

                <!-- MODELS / SIZE -->
                <div class="mt-8">
                    <p class="text-gray-400 mb-3">Models</p>

                    <div class="flex flex-wrap gap-3">
                        ${sizeHTML}
                    </div>
                </div>

                <!-- QUANTITY -->
                <div class="mt-8">
                    <p class="text-gray-400 mb-3">Quantity</p>

                    <div class="flex items-center gap-4">

                        <button onclick="changeQty(-1)"
                            class="w-12 h-12 rounded-xl bg-white/10 hover:bg-red-500 transition text-xl">
                            <i class="fa-solid fa-minus"></i>
                        </button>

                        <span id="qty"
                            class="text-2xl font-bold px-4 py-2 bg-white/5 rounded-xl">
                            1
                        </span>

                        <button onclick="changeQty(1)"
                            class="w-12 h-12 rounded-xl bg-white/10 hover:bg-green-500 transition text-xl">
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

            <!-- ACTION BAR -->
            <div class="mt-10 border-t border-white/10 pt-8">

                <div class="flex justify-between items-center mb-6">
                    <span class="text-gray-400 text-lg">Total</span>
                    <span id="totalPrice" class="text-3xl font-bold text-cyan-400">
                        $${product.price}
                    </span>
                </div>

                <div class="flex gap-4">

                    <button onclick="goBack()"
                        class="w-1/2 py-4 rounded-xl border border-white/20 hover:border-red-500
                        hover:bg-red-500/10 transition font-semibold">
  box.innerHTML = `
<div class="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white px-16 py-10 cart w-full h-screen">

    <!-- BACK -->
    <div class=" flex justify-end gap-5 ">
    <button onclick="goBack()" 
    class="mb-8 text-gray-300 hover:text-white text-lg btnback cursor-pointer ">
        <i class="fa-solid fa-backward"></i> Back to Products
    </button>
     <button onclick="goCart()" 
    class="mb-8 text-gray-300 hover:text-white text-lg btnback cursor-pointer ">
        <i class="fa-solid fa-forward"></i> Go To Cart!
    </button>
    </div>

    <!-- FULL WIDTH GRID -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">

        <!-- LEFT (BIG IMAGE) -->
        <div class="w-full">

            <!-- MAIN IMAGE -->
            <div class="w-full h-[600px] bg-white/10 rounded-2xl p-6 backdrop-blur-xl">
                <img src="${product.image}" 
                class="w-full h-full object-cover rounded-xl hover:scale-105 transition duration-500">
            </div>

            <!-- THUMBNAILS -->
            
        </div>

        <!-- RIGHT (DETAILS FULL WIDTH) -->
        <div class="flex flex-col justify-between h-full">

            <div>
                <h1 class="text-6xl font-extrabold mb-6 leading-tight">
                    ${product.name}
                </h1>

               <p class="text-gray-300 text-xl mb-6 max-w-xl">
                   ${product.des}
                </p>

                <h2 class="text-4xl font-bold text-pink-400 mb-8">
                    $${product.price}
                </h2>

                <!-- SIZE -->
                <div class="mb-8">
                    <p class="text-gray-400 mb-3 text-lg">Models :</p>
                    <div class="flex gap-4 flex-wrap">
                        ${sizeHTML}
                    </div>
                </div>
                <!-- QUANTITY -->
                <div class="mb-8">
                    <p class="text-gray-400 mb-3 text-lg">Quantity</p>
                    <div class="flex items-center gap-6">
                        <button onclick="changeQty(-1)" 
                        class="px-5 py-3 bg-white/10 hover:bg-red-500 rounded-xl text-xl btndwn"><i class="fa-solid fa-minus"></i></</button>
                        <button onclick="changeQty(1)" 
                        class="px-5 py-3 bg-white/10 hover:bg-green-500 rounded-xl text-xl btnups"><i class="fa-solid fa-plus"></i></button>
                        <p id="qty" class="text-2xl text-center font-bold px-2 py-2 qtys">1</p>
                    </div>
                </div>
                <!-- FEATURES -->
                <div class="grid grid-cols-2 gap-4 text-gray-300 text-lg mb-10">
                    <p><i class="fa-solid fa-square-check"></i> Free Shipping</p>
                    <p><i class="fa-solid fa-square-check"></i> Secure Payment</p>
                    <p><i class="fa-solid fa-square-check"></i> Days Return</p>
                    <p><i class="fa-solid fa-square-check"></i> 24/7 Support</p>
                </div>
            </div>
            <!-- ACTION -->
            <div class="border-t border-white/20 pt-8">

                <div class="flex justify-between items-center mb-6">
                    <span class="text-gray-400 text-xl">Total:</span>
                    <span id="totalPrice" class="text-4xl font-bold text-pink-400">$${product.price}</span>
                </div>

                <div class="flex gap-6">
                    <button onclick="goBack()" 
                    class="w-1/2 border border-gray-400 py-4 rounded-xl text-lg hover:bg-red-700 transition cursor-pointer hover:scale-105 bg-cyan-600">
                        Cancel
                    </button>

                    <button onclick="addToCartFromView()"
                        class="w-1/2 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500
                        hover:scale-105 transition font-bold shadow-lg">
                        Add to Cart <i class="fa-solid fa-bag-shopping"></i>
                    </button>

                </div>

            </div>

                    class="w-1/2 bg-gray-500 py-4 rounded-xl text-lg font-bold shadow-lg hover:scale-105 transition cursor-pointer hover:bg-blue-500">
                        Add to Cart <i class="fa-solid fa-gift"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
`;
}else{
    box.innerHTML = "<p>No product found</p>";
    setTimeout(() => {
    document.getElementById("addBtn").disabled = true;
}, 0);
}

function goBack(){
    window.location.href = "Men.html";
}
function goCart(){
    window.location.href = "/Page/Carts/Addcart.html";
    window.location.href = "../Page/Men.html";
}
function goCart(){
    window.location.href = "../Page/Addcart.html";
}

let quantity = 1;

function changeQty(value){
    quantity += value;

    if(quantity < 1) quantity = 1;

    document.getElementById("qty").innerText = quantity;

    const total = product.price * quantity;
    document.getElementById("totalPrice").innerText = "$" + total;
}

function addToCartFromView() {
    if (!selectedSize) {
        alert("Please select Model!");
        return;
    }



    

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        ...product,
        size: selectedSize,
        qty: parseInt(document.getElementById("qty").innerText)
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart!");
}

let selectedSize = null;
function selectSize(btn){
    document.querySelectorAll(".size-btn").forEach(b => {
        b.classList.remove("bg-pink-500");
    });
    btn.classList.add("bg-pink-500");
    selectedSize = btn.innerText.trim(); // IMPORTANT
}
