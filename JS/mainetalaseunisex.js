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



// Pemanggilan pakaian/unisex di backend
document.addEventListener("DOMContentLoaded", function () {
  // Memanggil data dari backend
  fetch('https://be-jayapura-04-production.up.railway.app/pakaian/unisex', {
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
            <a href="deskripsiprodukunisex.html?product-type=${produknya.type}&product_id=${produknya.id}"><button class="buy">More</button></a>
          </div>`;
        
        // Menambahkan card ke dalam .etalase
        etalaseProduk.appendChild(card);
      });
    })
    .catch((error) => {
      console.error('Ada kesalahan saat mengambil data produk:', error);
    });
});
