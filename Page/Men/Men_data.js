// 🧠 PRODUCT DATA
const Mens = [
  {
    id: 1,
    type:"shirt",
    name: "Casual Cotton Shirt",
    price: 22,
    image: "https://i.pinimg.com/1200x/5c/93/f0/5c93f0edbcc255e6ed5bcbdf48a82d59.jpg",
    des: "Comfortable cotton shirt for everyday wear",
  },
  {
    id: 2,
    type:"shirt",
    name: "Slim Fit Formal Shirt",
    price: 28,
    image: "https://i.pinimg.com/736x/66/71/a8/6671a814c24cf959744bda2095c780d6.jpg",
    des: "Perfect slim fit shirt for office and events"
  },
  {
    id: 3,
    type:"trousers",
    name: "Denim Jeans Trousers",
    price: 35,
    image: "https://i.pinimg.com/736x/43/12/a0/4312a0ec688db9f00b41396bbb3519f2.jpg",
    des: "Classic blue denim trousers with modern fit"
  },
  {
    id: 4,
    type:"trousers",
    name: "Black Chino Trousers",
    price: 30,
    image: "https://i.pinimg.com/736x/e6/71/fe/e671fe1d47c28510658e6901e264e01e.jpg",
    des: "Stylish chinos suitable for casual and formal"
  },
  {
    id: 5,
    type:"shoes",
    name: "Running Sneakers",
    price: 40,
    image: "https://i.pinimg.com/1200x/60/7e/bd/607ebd13c893b409b51239ba9abf9667.jpg",
    des: "Lightweight sneakers for daily running"
  },
  {
    id: 6,
    type:"shoes",
    name: "Classic Leather Shoes",
    price: 55,
    image: "https://i.pinimg.com/1200x/0c/33/ab/0c33ab00fb7f91dac88f5b44a0f7ad3f.jpg",
    des: "Premium leather shoes for formal occasions"
  },
  {
    id: 7,
    type:"sidebag",
    name: "Side Sling Bag",
    price: 18,
    image: "https://i.pinimg.com/1200x/59/5f/fb/595ffb3f1b626b18c899325691a953ac.jpg",
    des: "Compact side bag for daily essentials"
  },
  {
    id: 8,
    type:"sidebag",
    name: "Canvas Side Bag",
    price: 20,
    image: "https://i.pinimg.com/736x/db/59/87/db598775e6f6b1da404fc0ab35fe3ed3.jpg",
    des: "Durable canvas bag with adjustable strap"
  },

  {
    id: 9,
    type:"shirt",
    name: "Printed Summer Shirt",
    price: 24,
    image: "https://i.pinimg.com/1200x/60/c5/66/60c56602700aef9b680b8bd48cf5761f.jpg",
    des: "Cool printed shirt for summer vibes"
  },
  {
    id: 10,
    type:"shirt",
    name: "Oversized Street Shirt",
    price: 26,
    image: "https://i.pinimg.com/1200x/4e/89/9d/4e899d9c8a0e43658af2ff8af4077284.jpg",
    des: "Trendy oversized shirt for street style"
  },
  {
    id: 11,
    type:"trousers",
    name: "Cargo Trousers",
    price: 38,
    image: "https://i.pinimg.com/736x/55/82/58/5582586d77721c1e82aece307a69c01b.jpg",
    des: "Multi-pocket cargo trousers for casual wear"
  },
  {
    id: 12,
    type:"trousers",
    name: "Formal Office Trousers",
    price: 32,
    image: "https://i.pinimg.com/1200x/6c/c7/bc/6cc7bc8c67104ee65764a4994848b69c.jpg",
    des: "Elegant trousers for professional look"
  },
  {
    id: 13,
    type:"shoes",
    name: "Sport Running Shoes",
    price: 45,
    image: "https://i.pinimg.com/736x/02/86/92/028692f0ff4044fe49da05027d33396e.jpg",
    des: "Breathable sports shoes for active lifestyle"
  },
  {
    id: 14,
    type:"shoes",
    name: "High Top Sneakers",
    price: 50,
    image: "https://i.pinimg.com/736x/33/44/55/3344556677889900aabbccddeeff1122.jpg",
    des: "Stylish high-top sneakers for streetwear"
  },
  {
    id: 15,
    type:"sidebag",
    name: "Leather Side Bag",
    price: 35,
    image: "https://i.pinimg.com/736x/44/55/66/44556677889900aabbccddeeff112233.jpg",
    des: "Premium leather side bag for men"
  },
  {
    id: 16,
    type:"sidebag",
    name: "Mini Crossbody Bag",
    price: 22,
    image: "https://i.pinimg.com/736x/66/77/88/6677889900aabbccddeeff1122334455.jpg",
    des: "Compact crossbody bag for travel"
  },

  {
    id: 17,
    type:"shirt",
    name: "Linen Casual Shirt",
    price: 27,
    image: "https://i.pinimg.com/736x/11/aa/22/11aa22bb33cc44dd55ee66ff77889900.jpg",
    des: "Lightweight linen shirt for hot weather"
  },
  {
    id: 18,
    type:"shirt",
    name: "Checkered Shirt",
    price: 25,
    image: "https://i.pinimg.com/736x/22/bb/33/22bb33cc44dd55ee66ff77889900aa11.jpg",
    des: "Classic checkered shirt for casual style"
  },
  {
    id: 19,
    type:"trousers",
    name: "Jogger Trousers",
    price: 29,
    image: "https://i.pinimg.com/736x/33/cc/44/33cc44dd55ee66ff77889900aa11bb22.jpg",
    des: "Comfortable joggers for daily wear"
  },
  {
    id: 20,
    name: "Slim Fit Jeans",
    price: 36,
    image: "https://i.pinimg.com/736x/44/dd/55/44dd55ee66ff77889900aa11bb22cc33.jpg",
    des: "Modern slim fit jeans for men"
  },
  {
    id: 21,
    type:"shoes",
    name: "Casual Sneakers",
    price: 42,
    image: "https://i.pinimg.com/736x/55/ee/66/55ee66ff77889900aa11bb22cc33dd44.jpg",
    des: "Everyday casual sneakers"
  },
  {
    id: 22,
    type:"shoes",
    name: "Formal Oxford Shoes",
    price: 60,
    image: "https://i.pinimg.com/736x/66/ff/77/66ff77889900aa11bb22cc33dd44ee55.jpg",
    des: "Elegant oxford shoes for business wear"
  },
  {
    id: 23,
    type:"sidebag",
    name: "Sport Side Bag",
    price: 19,
    image: "https://i.pinimg.com/736x/77/00/88/7700889900aa11bb22cc33dd44ee5566.jpg",
    des: "Lightweight sport side bag"
  },
  {
    id: 24,
    type:"sidebag",
    name: "Travel Side Bag",
    price: 28,
    image: "https://i.pinimg.com/736x/88/11/99/88119900aa11bb22cc33dd44ee556677.jpg",
    des: "Spacious bag for travel use"
  },

  {
    id: 25,
    type:"shirt",
    name: "Denim Shirt",
    price: 30,
    image: "https://i.pinimg.com/736x/99/22/aa/9922aa11bb22cc33dd44ee5566778899.jpg",
    des: "Stylish denim shirt for casual outfit"
  },
  {
    id: 26,
    type:"shirt",
    name: "Basic White Shirt",
    price: 20,
    image: "https://i.pinimg.com/736x/aa/33/bb/aa33bb22cc33dd44ee55667788990011.jpg",
    des: "Simple white shirt essential"
  },
  {
    id: 27,
    type:"trousers",
    name: "Loose Fit Trousers",
    price: 31,
    image: "https://i.pinimg.com/736x/bb/44/cc/bb44cc33dd44ee55667788990011aa22.jpg",
    des: "Relaxed fit trousers for comfort"
  },
  {
    id: 28,
    type:"trousers",
    name: "Khaki Pants",
    price: 33,
    image: "https://i.pinimg.com/736x/cc/55/dd/cc55dd44ee55667788990011aa22bb33.jpg",
    des: "Classic khaki pants for smart look"
  },
  {
    id: 29,
    type:"shoes",
    name: "Slip-on Shoes",
    price: 37,
    image: "https://i.pinimg.com/736x/dd/66/ee/dd66ee55667788990011aa22bb33cc44.jpg",
    des: "Easy slip-on shoes for daily use"
  },
  {
    id: 30,
    type:"shoes",
    name: "Running Trainers",
    price: 48,
    image: "https://i.pinimg.com/736x/ee/77/ff/ee77ff667788990011aa22bb33cc4455.jpg",
    des: "High performance running trainers"
  },
  {
    id: 31,
    type:"sidebag",
    name: "Compact Sling Bag",
    price: 17,
    image: "https://i.pinimg.com/736x/ff/88/00/ff880011aa22bb33cc44dd55ee667788.jpg",
    des: "Small and practical sling bag"
  },
  {
    id: 32,
    type:"sidebag",
    name: "Urban Side Bag",
    price: 23,
    image: "https://i.pinimg.com/736x/00/99/11/00991122bb33cc44dd55ee6677889900.jpg",
    des: "Modern urban side bag design"
  }
];
// 🎯 GET CONTAINER
const Menlist = document.getElementById("Men-list");

// 🧱 DISPLAY PRODUCTS
function displayProducts(list) {
    Menlist.innerHTML = "";

    let likes = JSON.parse(localStorage.getItem("likes")) || {};

    if (list.length === 0) {
        Menlist.innerHTML = `
            <p class="text-white text-center col-span-4">
                ❌ No products found
            </p>
        `;
        return;
    }
       

    list.forEach(item => {
        const likeCount = likes[item.id] || 0;

        Menlist.innerHTML += `
<div class="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden
    hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] hover:border-cyan-400 transition duration-300">

    <!-- IMAGE -->
    <div class="overflow-hidden">
        <img src="${item.image}"
            class="imgs w-full h-[280px] object-cover transition duration-500 group-hover:scale-110">
    </div>

    <!-- CONTENT -->
    <div class="p-4">

        <!-- NAME -->
        <h3 class="font-semibold text-lg text-white group-hover:text-cyan-400 transition">
            ${item.name}
        </h3>

        <!-- PRICE + LIKE COUNT -->
        <div class="flex justify-between items-center mt-2 text-sm">

            <p class="text-cyan-400 font-bold text-lg">
                $ ${item.price}
            </p>

            <p class="flex items-center gap-2 text-gray-300">
                <i class="fa-solid fa-heart text-red-400"></i>
                <span id="like-${item.id}" class="text-white">${likeCount}</span>
            </p>

        </div>

        <!-- BUTTONS -->
        <div class="flex gap-3 mt-4">

            <!-- LIKE -->
            <button onclick="addLike(${item.id})"
                class="like flex-1 py-2 rounded-xl bg-red-500/10 border border-red-500/20
                text-red-400 hover:bg-red-500/20 hover:scale-105 transition">
                <i class="fa-solid fa-heart"></i>
            </button>

            <!-- VIEW -->
            <button onclick="viewProduct(${item.id})"
                class="view flex-1 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500
                font-semibold hover:scale-105 transition shadow-lg">
                View
            </button>

        </div>

    </div>
</div>
`;
        <div class="shadow hover:shadow-lg cart">
            <img src="${item.image}" class="imgs">
            <h3 class="font-bold">${item.name}</h3>
            <div class="texts">
            <p class="text-gray-500 ">$ ${item.price}</p>
            <p><i class="fa-solid fa-heart"></i> <span id="like-${item.id}">${likeCount}</span></p>
            </div>


            <div class="btn">
                <button onclick="addLike(${item.id})"
                class="like">
                    <i class="fa-solid fa-heart"></i>
                </button>

                <button onclick="viewProduct(${item.id})"
                class="view">
                    View
                </button>
            </div>
        </div>
        `;
    });
}


// ❤️ LIKE FUNCTION
function addLike(id) {
    let likes = JSON.parse(localStorage.getItem("likes")) || {};

    if (!likes[id]) {
        likes[id] = 0;
    }

    likes[id] += 1;

    localStorage.setItem("likes", JSON.stringify(likes));

    // 🔥 update UI instantly
    const likeElement = document.getElementById(`like-${id}`);
    if (likeElement) {
        likeElement.innerText = likes[id];
    }
}


// 🚀 INITIAL LOAD (show all products)
displayProducts(Mens);


// 👁 VIEW PRODUCT
function viewProduct(id) {
    const product = Mens.find(p => p.id === id);

    localStorage.setItem("viewProduct", JSON.stringify(product));

    window.location.href = "Men_Views.html";
}
function searchProduct(){
    const keyword = document.getElementById("search").value.toLowerCase();

    const result = Mens.filter(item =>
        item.name.toLowerCase().includes(keyword)
    );

    const Menlist = document.getElementById("Men-list");

    // ❗ IF NOT FOUND
    if(result.length === 0){
    Menlist.innerHTML = `
    <div class="col-span-full flex items-center justify-center py-10">

        <div class="text-center bg-white/5 border border-white/10 backdrop-blur-md
            rounded-2xl px-6 py-8 shadow-lg hover:scale-105 transition duration-300 max-w-md w-full">

            <!-- ICON -->
            <div class="text-4xl mb-3 text-cyan-400 animate-pulse">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <!-- TITLE -->
            <h2 class="text-2xl font-bold text-white mb-2">
                No Product Found
            </h2>

            <!-- TEXT -->
            <p class="text-gray-400 text-sm mb-5">
                Try searching <span class="text-cyan-400 font-semibold">shirt, jacket, hoodie</span>
            </p>

            <!-- BUTTON -->
            <button onclick="displayProducts(Mens)"
                class="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500
                text-sm font-semibold hover:scale-105 transition shadow-md">
                Show All
            </button>

        </div>

    </div>
    `;
}else{
    displayProducts(result);
}
    window.location.href = "../ViewsPage/Men_Views.html";
}