const Whomens = [
  {
    id: 1,
    type: "shirt",
    name: "Casual Cotton Shirt",
    price: 22,
    image: "https://i.pinimg.com/1200x/5c/93/f0/5c93f0edbcc255e6ed5bcbdf48a82d59.jpg",
    des: "Comfortable cotton shirt for everyday wear",
    likes: 0
  },
  {
    id: 2,
    type: "shirt",
    name: "Slim Fit Formal Shirt",
    price: 28,
    image: "https://i.pinimg.com/736x/66/71/a8/6671a814c24cf959744bda2095c780d6.jpg",
    des: "Perfect slim fit shirt for office and events",
    likes: 0
  }
];

// 🎯 CONTAINER
const Whomenlist = document.getElementById("whomen-list");


// ================= RENDER =================
function displayProducts(list) {
  Whomenlist.innerHTML = "";

  list.forEach(item => {
    Whomenlist.innerHTML += `
      <div class="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden
        hover:scale-105 transition duration-300">

        <img src="${item.image}"
          class="w-full h-[280px] object-cover group-hover:scale-110 transition">

        <div class="p-4">

          <h3 class="text-lg font-semibold group-hover:text-pink-400">
            ${item.name}
          </h3>

          <div class="flex justify-between mt-2">

            <p class="text-pink-400 font-bold">
              $${item.price}
            </p>

            <p class="flex items-center gap-2">
              <i class="fa-solid fa-heart text-red-400"></i>
              <span id="like-${item.id}">${item.likes}</span>
            </p>

          </div>

          <div class="flex gap-2 mt-4">

            <button onclick="addLike(${item.id})"
              class="flex-1 py-2 bg-red-500/20 text-red-400 rounded-lg hover:scale-105">
              ❤️
            </button>

            <button onclick="addToCart(${item.id})"
              class="flex-1 py-2 bg-green-500/20 text-green-400 rounded-lg hover:scale-105">
              Cart
            </button>

            <button onclick="viewProduct(${item.id})"
              class="flex-1 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:scale-105">
              View
            </button>

          </div>

        </div>
      </div>
    `;
  });
}


// ================= LIKE =================
function addLike(id) {
  const item = Whomens.find(p => p.id === id);
  if (!item) return;

  item.likes++;

  const el = document.getElementById(`like-${id}`);
  if (el) el.innerText = item.likes;
}


// ================= CART =================
function addToCart(id) {
  const product = Whomens.find(p => p.id === id);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("✅ Added to cart");
}


// ================= VIEW =================
function viewProduct(id) {
  const product = Whomens.find(p => p.id === id);
  if (!product) return;

  localStorage.setItem("viewProduct", JSON.stringify(product));

  window.location.href = "Women_Views.html";
}


// ================= SEARCH =================
function searchProduct() {
  const keyword = document.getElementById("search").value.toLowerCase();

  const result = Whomens.filter(item =>
    item.name.toLowerCase().includes(keyword)
  );

  if (result.length === 0) {
    Whomenlist.innerHTML = `
      <div class="col-span-full text-center py-10 text-gray-400">
        No Product Found
      </div>
    `;
  } else {
    displayProducts(result);
  }
}


// 🚀 INIT
displayProducts(Whomens);