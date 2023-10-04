// Ambil elemen-elemen yang diperlukan
const cartPopup = document.getElementById("cartPopup");
const shoppingCartIcon = document.getElementById("shopping-cart");

// Saat ikon shopping-cart diklik, buka atau tutup popup cart
shoppingCartIcon.addEventListener("click", function (e) {
  e.preventDefault();
  if (cartPopup.style.display === "block") {
    // Jika popup cart sedang terbuka, tutup popup tersebut
    cartPopup.style.display = "none";
  } else {
    // Jika popup cart sedang tertutup, buka popup tersebut
    cartPopup.style.display = "block";
  }
});

// Menutup pop-up cart saat pengguna mengklik di luar pop-up
window.addEventListener("click", (event) => {
  if (event.target === cartPopup) {
    cartPopup.style.display = "none";
  }
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

//tampilan deskripsi
function createProductElement(product) {
  const deskripsi = document.createElement("div");
  deskripsi.innerHTML = `
    <div class="detail-produk" id="detail-produk">
        <div class="produk-img">
          <img src="${product.img}" alt="Baju" id="besarImg" />
        </div>
        <div class="content">
          <h3 id="nama-produk" >${product.name}</h3>
          <h4 id="harga-produk">${product.price}</h4>
          <h3>Warna</h3>
          <div class="warna-img">
          ${createColorOptions(product.colors)}
          </div>
          <div>
            <select id="ukuranbaju" >
              ${createSizeOptions(product.sizes)}
            </select>
            <input
              type="number"
              value="1"
              id="jumlah-produk"
              min="1"
              max="10"
              onkeydown="return false;"
            />
          </div>
          <h3>Deskripsi</h3>
          <p>
          ${product.description}
            <span id="selengkapnya" onclick="tambahUlasan()">selengkapnya...</span>
          </p>
          <div class="belanja">
            <a href="#" class="cta">Belanja Sekarang</a>
            <a href="#" class="cta" id="tambah-keranjang" onclick="tambahKeranjang()">Tambah Keranjang</a>
          </div>
        </div>
      </div>`;
  return deskripsi;
}

function createSizeOptions(sizes) {
  let options = "";
  sizes.forEach((size) => {
    options += `<option value="${size}">${size}</option>`;
  });
  return options;
}
function createColorOptions(colors) {
  let imgcolor = "";
  colors.forEach((color) => {
    imgcolor += `<img
    src="${color}"
    alt="Baju"
    class="kecilImg"
    onclick="tampilGambar()"/>`;
  });
  return imgcolor;
}
const product = {
  id: 1,
  name: "Floral Blouses",
  price: "100.000,-",
  img: "img/BajuWanita/bajuwanita11.jpg",
  colors: [
    "img/BajuWanita/bajuwanita11.jpg",
    "img/BajuWanita/bajuwanita14.jpg",
    "img/BajuWanita/bajuwanita13.jpg",
  ],
  sizes: ["Pilih Ukuran", "S", "M", "L"],
  description: "ini adalah deskripsi baju",
};
document.addEventListener("DOMContentLoaded", function () {
  const productElement = createProductElement(product);
  const productContainer = document.getElementById("deskripsi-produk");
  productContainer.appendChild(productElement);
});

let bantuan = document.querySelector(".bantuan");

document.querySelector("#bantuan").onclick = () => {
  bantuan.classList.toggle("active");
};

let cancel = document.querySelector(".bantuan");

document.querySelector("#cancel").onclick = () => {
  cancel.classList.remove("active");
};
function tampilGambar() {
  var gambarBesar = document.getElementById("besarImg");
  var daftarGambarKecil = document.getElementsByClassName("kecilImg");

  var indeksGambar = 0;

  for (var i = 0; i < daftarGambarKecil.length; i++) {
    daftarGambarKecil[i].addEventListener("click", function () {
      gambarBesar.src = this.src;
      gambarBesar.alt = this.alt;
    });
  }
}

const tambahKeKeranjangButton = document.getElementById("tambah-keranjang");
const gambarProduk = product.img;
const namaProduk = product.name;
const ukuranProduk = product.sizes;
const jumlahProduk = 2;
const hargaProdukText = product.price;
function tambahKeranjang() {
  const keranjangBelanja = [];
  console.log("tambahKeranjang");

  const hargaProduk = parseInt(
    hargaProdukText.replace("Rp ", "").replace(".", "")
  );

  const totalHargaProduk = hargaProduk * jumlahProduk;

  const produkSama = keranjangBelanja.find(
    (produk) => produk.nama === namaProduk
  );

  if (produkSama) {
    produkSama.jumlah += jumlahProduk;
    produkSama.totalHarga += totalHargaProduk;
  } else {
    keranjangBelanja.push({
      gambar: gambarProduk,
      nama: namaProduk,
      ukuran: ukuranProduk,
      jumlah: jumlahProduk,
      harga: hargaProdukText,
      totalHarga: totalHargaProduk,
    });
  }

  updateKeranjangBelanja();

  const cartCountElement = document.getElementById("cart-count");
  const cartCount = parseInt(cartCountElement.textContent);
  cartCountElement.textContent = (cartCount + jumlahProduk).toString();
}

// Fungsi untuk mengupdate keranjang belanja
function updateKeranjangBelanja() {
  console.log("updateKeranjangBelanja()");
  const keranjangBelanja = [];
  const tbodyKeranjang = document.querySelector("#keranjangbelanja tbody");

  tbodyKeranjang.innerHTML = "";

  let totalHarga = 0;

  keranjangBelanja.forEach((item) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
            <td><img src="${item.gambar}" alt="${item.nama}" class="keranjang-gambar-kecil"></td>
            <td>${item.nama}</td>
            <td>${item.ukuran}</td>
            <td>${item.jumlah}</td>
            <td>${item.harga}</td>
        `;

    tbodyKeranjang.appendChild(newRow);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "hapus-item";
    deleteButton.addEventListener("click", function () {
      hapusItem(this, item.nama);
    });
    newRow.appendChild(deleteButton);

    totalHarga += item.totalHarga;
  });

  // Menampilkan total harga dalam format "Rp. 100.000"
  const formattedTotalHarga = `Rp. ${totalHarga.toLocaleString()}`;
  const totalElement = document.getElementById("total");
  totalElement.textContent = formattedTotalHarga;

  const cartPopup = document.getElementById("cartPopup");
  const cartCount = document.getElementById("cart-count").textContent;

  if (parseInt(cartCount) === 0) {
    cartPopup.style.display = "none";
  } else {
    cartPopup.style.display = "block";
  }
}

// var gambarBesar = document.getElementById("besarImg");
// var daftarGambarKecil = document.getElementsByClassName("kecilImg");

// var indeksGambar = 0;

// for (var i = 0; i < daftarGambarKecil.length; i++) {
//   daftarGambarKecil[i].addEventListener("click", function () {
//     gambarBesar.src = this.src;
//     gambarBesar.alt = this.alt;
//   });
// }
//fungsi tambah ulasan

function tambahUlasan() {
  let selengkapnya = document.querySelector(".form-ulasan");

  document.querySelector("#selengkapnya").onclick = () => {
    selengkapnya.classList.toggle("active");
  };
  let cancelulasan = document.querySelector(".form-ulasan");

  document.querySelector("#cancelulasan").onclick = () => {
    cancelulasan.classList.remove("active");
  };
}

const allStar = document.querySelectorAll(".rating .star");
const ratingValue = document.querySelector(".rating input");

allStar.forEach((item, idx) => {
  item.addEventListener("click", function () {
    let click = 0;
    ratingValue.value = idx + 1;

    allStar.forEach((i) => {
      i.classList.replace("bxs-star", "bx-star");
      i.classList.remove("active");
    });
    for (let i = 0; i < allStar.length; i++) {
      if (i <= idx) {
        allStar[i].classList.replace("bx-star", "bxs-star");
        allStar[i].classList.add("active");
      } else {
        allStar[i].style.setProperty("--i", click);
        click++;
      }
    }
  });
});

/*
// Mengambil elemen form ulasan
const formUlasan = document.getElementById("form-ulasan");

// Mengambil elemen ulasan produk
const ulasanProduk = document.getElementById("ulasan-produk");

// Mengikat event submit pada form ulasan
formUlasan.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman formulir secara default

  // Mengambil nilai username, rating, dan ulasan yang diisi oleh pengguna
  const usernameInput = document.getElementById("username");
  const ulasanInput = document.getElementById("opinion");

  // Mengekstrak nilai dari elemen-elemen input
  const username = usernameInput.value;
  const ulasan = ulasanInput.value;
  const ratingNilai = ratingValue.value;

  console.log("Username:", username);
  console.log("Rating:", ratingNilai);
  console.log("Ulasan:", ulasan);

  const ulasanItem = document.createElement("div");
  ulasanItem.classList.add("ulasan-produk");
  const ratingElement = document.createElement("div");
  let ratingStars = "";
  for (let i = 1; i <= ratingNilai.length; i++) {
    ratingStars +=
      '<img src="img/bintang.png" alt="Filled Star" class="bintang">';
    console.log("ratingStars");
  }

  ratingElement.innerHTML = ratingStars;
  ulasanItem.appendChild(ratingElement);
});
// function createUlasanElement() {
//   const ulasan = document.createElement("div");
//   ulasan.innerHTML = `<section class="ulasan">
//   <div class="ulasan-produk">
//     <img src="../img/org1.jpg" alt="avatar" class="avatar" />
//     <div class="akun">
//       <h5>Michelle</h5>
//       <div class="star">
//         <i class="bx bxs-star"></i>
//         <i class="bx bxs-star"></i>
//       </div>
//     </div>
//   </div>
//   <p>
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit minima
//     fuga aut dicta. Ex quae earum delectus voluptatibus vitae eos blanditiis
//     asperiores exercitationem sed, quaerat obcaecati magnam sunt a fugiat
//     eaque impedit laboriosam iste repudiandae facilis accusamus quis,
//     dignissimos, temporibus repellat. Fugiat molestiae magnam totam officia
//     qui, maiores maxime dolorum
//   </p>
//   <div id="horizontal"></div>
// </section>`;
//   return ulasan;
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const productElement = createProductElement(product);
//   const ulasanContainer = document.getElementById("deskripsi-produk");
//   ulasanContainer.appendChild(productElement);
// });

// // Ambil elemen gambar besar dan daftar gambar kecil
// var gambarBesar = document.getElementById("besarImg");
// var daftarGambarKecil = document.getElementsByClassName("kecilImg");

// var indeksGambar = 0;

// for (var i = 0; i < daftarGambarKecil.length; i++) {
//   daftarGambarKecil[i].addEventListener("click", function() {
//     gambarBesar.src = this.src;
//     gambarBesar.alt = this.alt;
//   });
// }

// // Inisialisasi keranjang belanja
// const keranjangBelanja = [];

// const tambahKeKeranjangButton = document.getElementById("tambah-keranjang");
// tambahKeKeranjangButton.addEventListener("click", function (e) {
//     e.preventDefault();

//     const gambarProduk = document.getElementById("besarImg").getAttribute("src");
//     const namaProduk = document.getElementById("nama-produk").textContent;
//     const ukuranProduk = document.getElementById("ukuranbaju").value;
//     const jumlahProduk = parseInt(document.getElementById("jumlah-produk").value);
//     const hargaProdukText = document.getElementById("harga-produk").textContent;

//     const hargaProduk = parseInt(hargaProdukText.replace("Rp ", "").replace(".", ""));

//     const totalHargaProduk = hargaProduk * jumlahProduk;

//     const produkSama = keranjangBelanja.find((produk) => produk.nama === namaProduk);

//     if (produkSama) {
//         produkSama.jumlah += jumlahProduk;
//         produkSama.totalHarga += totalHargaProduk;
//     } else {
//         keranjangBelanja.push({
//             gambar: gambarProduk,
//             nama: namaProduk,
//             ukuran: ukuranProduk,
//             jumlah: jumlahProduk,
//             harga: hargaProdukText,
//             totalHarga: totalHargaProduk,
//         });
//     }

//     updateKeranjangBelanja();

//     const cartCountElement = document.getElementById("cart-count");
//     const cartCount = parseInt(cartCountElement.textContent);
//     cartCountElement.textContent = (cartCount + jumlahProduk).toString();
// });

// // Menangani klik tombol "X" pada item di keranjang belanja
// function hapusItem(button, namaProduk) {
//   const index = keranjangBelanja.findIndex((item) => item.nama === namaProduk);
//   if (index !== -1) {
//       keranjangBelanja.splice(index, 1);

//       const cartCountElement = document.getElementById("cart-count");
//       const cartCount = parseInt(cartCountElement.textContent);
//       const jumlahProdukDiKeranjang = keranjangBelanja.reduce(
//           (total, item) => total + item.jumlah,
//           0
//       );
//       cartCountElement.textContent = jumlahProdukDiKeranjang.toString();

//       updateKeranjangBelanja();
//   }
// }

// // Fungsi untuk mengupdate keranjang belanja
// function updateKeranjangBelanja() {
//     const tbodyKeranjang = document.querySelector("#keranjangbelanja tbody");

//     tbodyKeranjang.innerHTML = "";

//     let totalHarga = 0;

//     keranjangBelanja.forEach((item) => {
//         const newRow = document.createElement("tr");
//         newRow.innerHTML = `
//             <td><img src="${item.gambar}" alt="${item.nama}" class="keranjang-gambar-kecil"></td>
//             <td>${item.nama}</td>
//             <td>${item.ukuran}</td>
//             <td>${item.jumlah}</td>
//             <td>${item.harga}</td>
//         `;

//         tbodyKeranjang.appendChild(newRow);

//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "X";
//         deleteButton.className = "hapus-item";
//         deleteButton.addEventListener("click", function () {
//             hapusItem(this, item.nama);
//         });
//         newRow.appendChild(deleteButton);

//         totalHarga += item.totalHarga;
//     });

//     // Menampilkan total harga dalam format "Rp. 100.000"
//     const formattedTotalHarga = `Rp. ${totalHarga.toLocaleString()}`;
//     const totalElement = document.getElementById("total");
//     totalElement.textContent = formattedTotalHarga;

//     const cartPopup = document.getElementById("cartPopup");
//     const cartCount = document.getElementById("cart-count").textContent;

//     if (parseInt(cartCount) === 0) {
//         cartPopup.style.display = "none";
//     } else {
//         cartPopup.style.display = "block";
//     }
// }

// // Menangani klik tombol "Submit" pada formulir ulasan
// const submitUlasanButton = document.getElementById('submit-ulasan');
// submitUlasanButton.addEventListener('click', function(e) {
//     e.preventDefault();

//     const usernameInput = document.getElementById('username');
//     const ulasanInput = document.getElementById('opinion');
//     const ratingInput = document.querySelector('input[name="rating"]:checked');

//     const username = usernameInput.value;
//     const ulasan = ulasanInput.value;
//     const rating = ratingInput ? ratingInput.value : 'Tidak Ada Rating';

//     // Memasukkan nilai username, ulasan, dan rating ke dalam elemen HTML yang sesuai
//     const ulasanUsername = document.getElementById('ulasan-username');
//     const ulasanTekstual = document.getElementById('ulasan-tekstual');
//     const ulasanRating = document.getElementById('ulasan-rating');
//     ulasanUsername.textContent = `${username}`;
//     ulasanRating.textContent = `${rating}`;
//     ulasanTekstual.textContent = `${ulasan}`;

//     const ulasanTerkirim = document.querySelector('.ulasan');
//     ulasanTerkirim.style.display = 'block';

//     usernameInput.value = '';
//     ulasanInput.value = '';
// });*/
