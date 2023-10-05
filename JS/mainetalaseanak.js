const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

// // etalase wanita
// const produk = [
//   {
//     productId: 1,
//     name: "Bloom on Top",
//     img: "img etalase anak-anak/Kids-bloomontop.jpg",
//     price: "Rp113.000",
//   },
//   {
//     productId: 2,
//     name: "Buzz Pants",
//     img: "img etalase anak-anak/Kids-buzzpants.jpg",
//     price: "Rp140.000",
//   },
//   {
//     productId: 3,
//     name: "Coco Pants",
//     img: "img etalase anak-anak/Kids-cocopants.jpg",
//     price: "Rp136.000",
//   },
//   {
//     productId: 4,
//     name: "Happyu Jacket",
//     img: "img etalase anak-anak/Kids-colorfulljacket.jpg",
//     price: "Rp217.000",
//   },
//   {
//     productId: 5,
//     name: "Grinyu Set",
//     img: "img etalase anak-anak/Kids-greenyset.jpg",
//     price: "Rp287.000",
//   },
//   {
//     productId: 6,
//     name: "Momow Set",
//     img: "img etalase anak-anak/Kids-momoset.jpg",
//     price: "Rp287.000",
//   },
//   {
//     productId: 7,
//     name: "Peppy Hoodie",
//     img: "img etalase anak-anak/Kids-peppyhoodie.jpg",
//     price: "Rp190.000",
//   },
//   {
//     productId: 8,
//     name: "Jedi T-Shirt",
//     img: "img etalase anak-anak/Kids-staygoodtshirt.jpg",
//     price: "Rp110.000",
//   },
// ];

// function bikinCardEtalase(produknya) {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   card.innerHTML = `
//           <div class="card">
//             <img class="product-img" src="${produknya.img}">
//             <h3>${produknya.name}</h3>
//             <h6>${produknya.price}</h6>
//             <ul>
//               <li><i class="fa fa-star checked"></i></li>
//               <li><i class="fa fa-star checked"></i></li>
//               <li><i class="fa fa-star checked"></i></li>
//               <li><i class="fa fa-star checked"></i></li>
//               <li><i class="fa fa-star checked"></i></li>
//             </ul>
//             <a href="deskripsiproduk.html"><button class="buy">More</button></a>
//           </div>`;
//   return card;
// }

function tambahEtalase() {
  const etalaseProduk = document.querySelector(".etalase");
  produk.forEach((produknya) => {
    const cardEtalase = bikinCardEtalase(produknya);
    etalaseProduk.appendChild(cardEtalase);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("halaman telah dimuat");
  tambahEtalase();
});

// Toggle class active
const search = document.querySelector(".search-box");

// Ketika search dilklik
document.querySelector("#search").onclick = () => {
  search.classList.toggle("active");
};

// klik di luar sidebar menghilangkan nav
const searchs = document.querySelector("#search");
document.addEventListener("click", function (e) {
  if (!searchs.contains(e.target) && !search.contains(e.target)) {
    search.classList.remove("active");
  }
});

// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu dilklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.querySelector("#shopping-cart").onclick = () => {
  navbarNav.classList.toggle("active");
};

const carts = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (!carts.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// buat bagian login sign up pop up

const wrapper = document.querySelector(".wrapper");
document.querySelector("#user").onclick = () => {
  wrapper.classList.toggle("active");
};

// klik di luar sidebar menghilangkan pop up
const users = document.querySelector("#user");

document.addEventListener("click", function (e) {
  if (!users.contains(e.target) && !wrapper.contains(e.target)) {
    wrapper.classList.remove("active");
  }
});

const bantuan = document.querySelector(".bantuan");

document.querySelector("#bantuan").onclick = () => {
  bantuan.classList.toggle("active");
};

const cancel = document.querySelector(".bantuan");

document.querySelector("#cancel").onclick = () => {
  cancel.classList.remove("active");
};

// klik di luar sidebar menghilangkan nav
const help = document.querySelector("#bantuan");

document.addEventListener("click", function (e) {
  if (!help.contains(e.target) && !bantuan.contains(e.target)) {
    bantuan.classList.remove("active");
  }
});


// Pemanggilan pakaian/anak di backend
document.addEventListener("DOMContentLoaded", function () {
  console.log("halaman telah dimuat");
  // Memanggil data dari backend
  fetch('http://localhost:3000/pakaian/anak', {
    method: 'GET',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Mengambil produk dari respons JSON
      const produk = data.data;

      // Menghapus semua elemen anak di dalam .etalase
      const etalaseProduk = document.querySelector(".etalase");
      etalaseProduk.innerHTML = "";

      // Loop melalui produk dan membuat kartu (card) hanya dengan name, price, dan img
      produk.forEach((produknya) => {
        // Membuat elemen card
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <div class="card">
            <img class="product-img" src="${produknya.img}">
            <h3>${produknya.name}</h3>
            <h6>Rp ${produknya.price}</h6>
            <ul>
              <li><i class="fa fa-star checked"></i></li>
              <li><i class="fa fa-star checked"></i></li>
              <li><i class="fa fa-star checked"></i></li>
              <li><i class="fa fa-star checked"></i></li>
              <li><i class="fa fa-star checked"></i></li>
            </ul>
            <a href="deskripsiproduk.html"><button class="buy">More</button></a>
          </div>`;
        
        // Menambahkan card ke dalam .etalase
        etalaseProduk.appendChild(card);
      });
    })
    .catch((error) => {
      console.error('Ada kesalahan saat mengambil data produk:', error);
    });
});

