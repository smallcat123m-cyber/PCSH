// 🧠 PRODUCT DATA
const Couples = [
  { id: 53, type: "shirt", name: "Couple Black Matching Tee", price: 22, image: "https://i.pinimg.com/1200x/b0/22/6c/b0226cd84f3262ecf0ca2e34ca9c3ac9.jpg", des: "Matching black t-shirts for couples with minimalist style" },

  { id: 54, type: "shirt", name: "Couple White Oversized Shirt", price: 28, image: "https://i.pinimg.com/1200x/29/37/02/2937023a0f21d5dd578e06e7e1c1ef1e.jpg", des: "Clean oversized white shirts perfect for couple outfits" },

  { id: 55, type: "trousers", name: "Couple Denim Jeans", price: 35, image: "https://i.pinimg.com/736x/12/17/99/12179978669f861eba5077fc8ddcb6d7.jpg", des: "Classic denim jeans matching for couples" },

  { id: 56, type: "trousers", name: "Couple Beige Chino Pants", price: 30, image: "https://i.pinimg.com/736x/e6/71/fe/e671fe1d47c28510658e6901e264e01e.jpg", des: "Soft beige chinos for aesthetic couple style" },

  { id: 57, type: "shoes", name: "Couple White Sneakers", price: 40, image: "https://i.pinimg.com/736x/60/7e/bd/607ebd13c893b409b51239ba9abf9667.jpg", des: "Matching white sneakers for everyday couple wear" },

  { id: 58, type: "shoes", name: "Couple Classic Leather Shoes", price: 55, image: "https://i.pinimg.com/736x/0c/33/ab/0c33ab00fb7f91dac88f5b44a0f7ad3f.jpg", des: "Elegant leather shoes for formal couple outfits" },

  { id: 59, type: "sidebag", name: "Couple Mini Sling Bag", price: 18, image: "https://i.pinimg.com/736x/59/5f/fb/595ffb3f1b626b18c899325691a953ac.jpg", des: "Compact sling bag for couples on the go" },

  { id: 60, type: "sidebag", name: "Couple Canvas Crossbody Bag", price: 20, image: "https://i.pinimg.com/736x/db/59/87/db598775e6f6b1da404fc0ab35fe3ed3.jpg", des: "Durable canvas bags for matching couple looks" },

  { id: 61, type: "shirt", name: "Couple Summer Printed Shirt", price: 24, image: "https://i.pinimg.com/736x/60/c5/66/60c56602700aef9b680b8bd48cf5761f.jpg", des: "Light printed shirts perfect for summer couple vibes" },

  { id: 62, type: "shirt", name: "Couple Street Oversized Shirt", price: 26, image: "https://i.pinimg.com/736x/4e/89/9d/4e899d9c8a0e43658af2ff8af4077284.jpg", des: "Trendy oversized streetwear shirts for couples" },

  { id: 63, type: "sidebag", name: "Couple Crossbody Travel Bag", price: 22, image: "https://i.pinimg.com/736x/7e/92/4b/7e924b8d88a2c8a61f5a6bbcf84f2d2f.jpg", des: "Stylish crossbody bags for couple travel outfits" },

  { id: 64, type: "trousers", name: "Couple Cargo Pants", price: 38, image: "https://i.pinimg.com/736x/55/82/58/5582586d77721c1e82aece307a69c01b.jpg", des: "Street-style cargo pants for couples" },

  { id: 65, type: "trousers", name: "Couple Formal Office Pants", price: 32, image: "https://i.pinimg.com/736x/6c/c7/bc/6cc7bc8c67104ee65764a4994848b69c.jpg", des: "Clean formal trousers for professional couple looks" },

  { id: 66, type: "shoes", name: "Couple Sport Running Shoes", price: 45, image: "https://i.pinimg.com/736x/02/86/92/028692f0ff4044fe49da05027d33396e.jpg", des: "Comfortable sports shoes for active couples" },

  { id: 67, type: "shoes", name: "Couple High Top Sneakers", price: 50, image: "https://i.pinimg.com/736x/33/44/55/3344556677889900aabbccddeeff1122.jpg", des: "High-top sneakers for stylish couple streetwear" },

  { id: 68, type: "sidebag", name: "Couple Leather Side Bag", price: 35, image: "https://i.pinimg.com/736x/44/55/66/44556677889900aabbccddeeff112233.jpg", des: "Premium leather bags for couples" },

  { id: 69, type: "shirt", name: "Couple Linen Casual Shirt", price: 27, image: "https://i.pinimg.com/736x/11/aa/22/11aa22bb33cc44dd55ee66ff77889900.jpg", des: "Breathable linen shirts for hot weather couples" },

  { id: 70, type: "shirt", name: "Couple Checkered Shirt", price: 25, image: "https://i.pinimg.com/736x/22/bb/33/22bb33cc44dd55ee66ff77889900aa11.jpg", des: "Classic checkered shirts for casual couple style" },

  { id: 71, type: "trousers", name: "Couple Jogger Pants", price: 29, image: "https://i.pinimg.com/736x/33/cc/44/33cc44dd55ee66ff77889900aa11bb22.jpg", des: "Comfortable joggers for everyday couple wear" },

  { id: 72, type: "trousers", name: "Couple Slim Fit Jeans", price: 36, image: "https://i.pinimg.com/736x/44/dd/55/44dd55ee66ff77889900aa11bb22cc33.jpg", des: "Modern slim fit jeans for couples" }
];
// export default Couples;

// 🎯 GET CONTAINER
const Coupleslist = document.getElementById("Couple-lists");

// 🧱 DISPLAY PRODUCTS
function displayProducts(list) {
    Coupleslist.innerHTML = "";
    let likes = JSON.parse(localStorage.getItem("likes")) || {};

    if (list.length === 0) {
       Coupleslist.innerHTML = `
<div class="col-span-full flex items-center justify-center py-12">

    <div class="text-center bg-white/5 backdrop-blur-md border border-white/10
        rounded-2xl px-8 py-10 shadow-lg
        animate-fadeInUp hover:scale-105 transition duration-300 max-w-md w-full">

        <!-- ICON -->
        <div class="text-5xl mb-4 text-cyan-400 animate-bounce">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <!-- TITLE -->
        <h2 class="text-2xl font-bold text-white mb-2">
            No Product Found
        </h2>

        <!-- TEXT -->
        <p class="text-gray-400 text-sm mb-6">
            Try searching <span class="text-cyan-400 font-semibold">shirt, shoes, bag</span>
        </p>

        <!-- BUTTON -->
        <button onclick="displayProducts(Couples)"
            class="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500
            text-sm font-semibold hover:scale-105 transition shadow-md">
            Show All Products
        </button>

    </div>
</div>
`;
        return;
    }

    list.forEach(item => {
        const likeCount = likes[item.id] || 0;

        Coupleslist.innerHTML += `
<div class="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden
hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] hover:border-cyan-400 transition duration-300">

    <!-- IMAGE -->
    <div class="overflow-hidden">
        <img src="${item.image}" 
        class="w-full h-40 sm:h-48 md:h-52 lg:h-56 xl:h-60 object-cover 
        transition duration-500 group-hover:scale-105">
    </div>

    <!-- CONTENT -->
    <div class="p-3 sm:p-4">

        <!-- NAME -->
        <h3 class="text-white font-semibold 
        text-sm sm:text-base md:text-lg truncate 
        group-hover:text-cyan-400 transition">
            ${item.name}
        </h3>

        <!-- PRICE + LIKE -->
        <div class="flex justify-between items-center mt-2">

            <p class="text-cyan-400 font-bold 
            text-sm sm:text-base md:text-lg">
                $${item.price}
            </p>

            <p class="flex items-center gap-1 text-gray-300 
            text-xs sm:text-sm">
                <i class="fa-solid fa-heart text-red-400"></i>
                <span id="like-${item.id}" class="text-white">${likeCount}</span>
            </p>

        </div>

        <!-- BUTTONS -->
        <div class="flex gap-2 mt-3 sm:mt-4">

            <!-- LIKE -->
            <button onclick="addLike(${item.id})"
                class="flex-1 py-1.5 sm:py-2 rounded-xl 
                bg-red-500/10 border border-red-500/30
                text-red-400 text-sm sm:text-base
                hover:bg-red-500/20 active:scale-95 transition">
                <i class="fa-solid fa-heart"></i>
            </button>

            <!-- VIEW -->
            <button onclick="viewProduct(${item.id})"
                class="flex-1 py-1.5 sm:py-2 rounded-xl 
                bg-gradient-to-r from-cyan-400 to-blue-500
                text-white text-sm sm:text-base font-semibold
                hover:scale-105 active:scale-95 transition shadow-md">
                View
            </button>
        </div>

    </div>
</div>
`;
    
});
}

// ❤️ LIKE FUNCTION
function addLike(id) {
    let likes = JSON.parse(localStorage.getItem("likes")) || {};
    likes[id] = (likes[id] || 0) + 1;
    localStorage.setItem("likes", JSON.stringify(likes));

    const el = document.getElementById(`like-${id}`);
    if (el) el.innerText = likes[id];
}

// 👁 VIEW PRODUCT
function viewProduct(id) {
    const product = Couples.find(p => p.id === id);
    localStorage.setItem("viewProduct", JSON.stringify(product));
    window.location.href = "Couple_Views.html";
}

// 🔍 SEARCH
function searchProduct() {
    const keyword = document.getElementById("search").value.toLowerCase();

    const result = Couples.filter(item =>
        item.name.toLowerCase().includes(keyword)
    );

    displayProducts(result); // ✅ FIX (NO redirect)
}

// 🚀 INITIAL LOAD
displayProducts(Couples);