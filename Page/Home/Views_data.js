const product = JSON.parse(localStorage.getItem("viewProduct"));

const box = document.getElementById("view-box");

if(product){
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
                    Premium high-performance product designed for modern users. 
                    Clean design, strong build, and excellent usability.
                </p>

                <h2 class="text-4xl font-bold text-pink-400 mb-8">
                    $${product.price}
                </h2>

                <!-- SIZE -->
                <div class="mb-8">
                    <p class="text-blue-500 mb-3 text-lg">Select Colors</p>
                    <div class="flex gap-4">
                        <button onclick="selectSize(this)" data-color="bg-black text-white" class="size-btn flex items-center gap-2 px-6 py-3 border rounded-xl">
  <input type="checkbox" class="box pointer-events-none">
  Black
</button>

<button onclick="selectSize(this)" data-color="bg-white text-black" class="size-btn flex items-center gap-2 px-6 py-3 border rounded-xl">
  <input type="checkbox" class="box pointer-events-none">
  White
</button>

<button onclick="selectSize(this)" data-color="bg-blue-500 text-white" class="size-btn flex items-center gap-2 px-6 py-3 border rounded-xl">
  <input type="checkbox" class="box pointer-events-none">
  Blue
</button>

<button onclick="selectSize(this)" data-color="bg-red-700 text-white" class="size-btn flex items-center gap-2 px-6 py-3 border rounded-xl">
  <input type="checkbox" class="box pointer-events-none">
  Red
</button>
                    </div>
                </div>

                <!-- QUANTITY -->
                <div class="mb-8">
                    <p class="text-gray-400 mb-3 text-lg">Quantity</p>
                    <div class="flex items-center gap-6">
                        <button onclick="changeQty(-1)" 
                        class="px-5 py-3 bg-white/10 hover:bg-red-500 rounded-xl text-xl">−</button>

                        <span id="qty" class="text-2xl font-bold">1</span>

                        <button onclick="changeQty(1)" 
                        class="px-5 py-3 bg-white/10 hover:bg-green-500 rounded-xl text-xl">+</button>
                    </div>
                </div>

                <!-- FEATURES -->
                <div class="grid grid-cols-2 gap-4 text-gray-300 text-lg mb-10">
                    <p>✔ Free Shipping</p>
                    <p>✔ Secure Payment</p>
                    <p>✔ 7 Days Return</p>
                    <p>✔ 24/7 Support</p>
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
                    class="w-1/2 border border-gray-400 py-4 rounded-xl text-lg hover:bg-gray-700 transition">
                        Cancel
                    </button>
                    <button id="addBtn" onclick="addToCartFromView()"
                    class="w-1/2 bg-gradient-to-r from-pink-500 to-purple-600 py-4 rounded-xl text-lg font-bold shadow-lg hover:scale-105 transition cursor-pointer">
                        Add to Cart 🛒
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
    window.location.href = "../Page/Home.html";
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

function addToCartFromView(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let selectedColor = document.querySelector(".size-btn.active");
    if(!selectedColor){
        alert("⚠️ Please select a color");
        return;
    }
    let color = selectedColor.innerText;
    // let color = selectedColor.childNodes[0].nodeValue.trim();
    // let color = selectedColor.childNodes[0].nodeValue.trim();
    let newItem = {
        name: product.name,
        price: product.price,
        image: product.image,
        qty: quantity,
        color: color
    };
    let existing = cart.find(item => 
        item.name === newItem.name && item.color === newItem.color
    );
    if(existing){
        existing.qty += quantity;
    }else{
        cart.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("✅ Added to cart");
}

document.getElementById("addBtn").disabled = false;
// document.getElementById("addBtn").disabled = true;
function selectSize(btn){
    document.querySelectorAll(".size-btn").forEach(b => {
        b.classList.remove("active");
        let boxcheck = b.querySelector("input");
        if(boxcheck) boxcheck.checked=false;
    });
    btn.classList.add("active");
    let checkbox = btn.querySelector("input");
    if(checkbox){
        checkbox.checked = true;
    }
    
    // ENABLE BUTTON ✅
    document.getElementById("addBtn").disabled = false;
}