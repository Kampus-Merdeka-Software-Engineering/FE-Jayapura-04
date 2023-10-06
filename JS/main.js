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

// Menangani klik tombol "X" pada item di keranjang belanja
function hapusItem(button, namaProduk) {
  const index = keranjangBelanja.findIndex((item) => item.nama === namaProduk);
  if (index !== -1) {
    keranjangBelanja.splice(index, 1);

    const cartCountElement = document.getElementById("cart-count");
    const cartCount = parseInt(cartCountElement.textContent);
    const jumlahProdukDiKeranjang = keranjangBelanja.reduce(
      (total, item) => total + item.jumlah,
      0
    );
    cartCountElement.textContent = jumlahProdukDiKeranjang.toString();

    updateKeranjangBelanja();
  }
}
const keranjangBelanja = []; // Deklarasikan variabel keranjangBelanja di luar fungsi

//console.log(gambarProduk);
function tambahKeranjang() {
  var gambarBesar = document.getElementById("besarImg");
  const tambahKeKeranjangButton = document.getElementById("tambah-keranjang");
  const gambarProduk = gambarBesar.getAttribute("src");
  const namaProduk = document.getElementById("nama-produk").textContent;
  const ukuranProduk = document.getElementById("ukuranbaju").value;
  const jumlahProduk = parseInt(document.getElementById("jumlah-produk").value);
  const hargaProdukText = document.getElementById("harga-produk").textContent;
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
    console.log(keranjangBelanja);
  }

  updateKeranjangBelanja();

  const cartCountElement = document.getElementById("cart-count");
  const cartCount = parseInt(cartCountElement.textContent);
  cartCountElement.textContent = (cartCount + jumlahProduk).toString();
}

// Fungsi untuk mengupdate keranjang belanja
function updateKeranjangBelanja() {
  console.log("updateKeranjangBelanja()");

  const tbodyKeranjang = document.querySelector("#keranjangbelanja tbody");

  tbodyKeranjang.innerHTML = "";

  let totalHarga = 0;
  console.log(keranjangBelanja);
  keranjangBelanja.forEach((item) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
            <td><img src="${item.gambar}" alt="${item.nama}" class="keranjang-gambar-kecil"></td>
            <td>${item.nama}</td>
            <td>${item.ukuran}</td>
            <td>${item.jumlah}</td>
            <td>${item.harga}</td>
        `;
    console.log(newRow);
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

  return updateKeranjangBelanja;
}

//fungsi tambah ulasan

function tambahUlasan() {
  let selengkapnya = document.querySelector(".form-ulasan");
  selengkapnya.classList.toggle("active");

  document.getElementById("edit").onclick = () => {
    editUlasan.classList.toggle("active");
  };
}
function tutupUlasan() {
  let cancelulasan = document.querySelector(".form-ulasan");
  cancelulasan.classList.remove("active");
}

// Mengambil semua elemen bintang
const stars = document.querySelectorAll(".star");

// Menggunakan event listener untuk setiap bintang
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    // Mengatur semua bintang sebelumnya menjadi abu
    stars.forEach((s, i) => {
      if (i <= index) {
        s.style.color = "#ffdd00"; // Warna bintang yang diklik
      } else {
        s.style.color = "gray"; // Warna bintang yang belum diklik
      }
    });

    // Memasukkan nilai rating yang diklik ke input
    const ratingInput = document.querySelector('input[name="rating"]');
    ratingInput.value = index + 1; // Index dimulai dari 0, jadi ditambah 1
  });
});

// Mengambil elemen form ulasan
const formUlasan = document.getElementById("form-ulasan");
const tombolSubmit = document.getElementById("submit-ulasan");

// Mengambil elemen ulasan produk
const ulasanProduk = document.getElementById("ulasan-display");

// Mengikat event submit pada form ulasan
formUlasan.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman formulir secara default

  // Mengambil nilai username, rating, dan ulasan yang diisi oleh pengguna
  const usernameInput = document.getElementById("username");
  const ulasanInput = document.getElementById("opinion");
  const ratingInput = document.querySelector('input[name="rating"]:checked');

  // Mengekstrak nilai dari elemen-elemen input
  const username = usernameInput.value;
  const ulasan = ulasanInput.value;
  const ratingValue = ratingInput ? parseInt(ratingInput.value) : 0;

  console.log("Username:", username);
  console.log("Rating:", ratingValue);
  console.log("Ulasan:", ulasan);
  // Mengosongkan input setelah pengguna mengirim ulasan
  usernameInput.value = "";
  ulasanInput.value = "";
  // Mengosongkan input rating
  const radioButtons = document.querySelectorAll('input[name="rating"]');
  radioButtons.forEach((radio) => {
    radio.checked = false;
  });
  // Mengatur semua bintang menjadi abu setelah mengirim ulasan
  stars.forEach((star) => {
    star.style.color = "gray";
  });
  // Menyembunyikan form setelah pengguna mengirim ulasan
  const formUlasan = document.getElementById("form-ulasan");
  //formUlasan.style.display = "none";
  // Buat elemen untuk menampilkan ulasan
  const ulasanItem = document.getElementById("ulasan-produk");
  //ulasanItem.classList.add("ulasan-produk");

  // Buat elemen-elemen untuk menampilkan username, rating, dan ulasan
  const usernameElement = document.getElementById("nama-user");
  const ratingElement = document.getElementById("bintang-kecil");
  const ulasanTekstualElement = document.getElementById("opini-user");
  const garisHorizontal = document.getElementById("horizontal");

  // Membuat gambar bintang berdasarkan nilai rating
  let ratingStars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= ratingValue) {
      ratingStars +=
        '<img src="img/bintang.png" alt="Filled Star" class="bintang">';
    } else {
      ratingStars +=
        '<img src="img/bintangkosong.png" alt="Empty Star" class="bintangkosong">';
    }
  }

  // Menetapkan nilai ke elemen-elemen yang dibuat
  usernameElement.innerHTML = `<div class="nama-user" id="nama-user"><h5>${username}</h5><a href="#" id="edit" onclick="gantiUlasan()">Edit</a></div> `;
  ratingElement.innerHTML = ratingStars;
  ulasanTekstualElement.innerHTML = `<p>${ulasan}</p>`;
  garisHorizontal.innerHTML = `<div class ="horizontal" id="horizontal"></div>`;

  // Menambahkan elemen-elemen ke ulasanItem
  ulasanItem.appendChild(usernameElement);
  ulasanItem.appendChild(ratingElement);
  ulasanItem.appendChild(ulasanTekstualElement);
  ulasanItem.appendChild(garisHorizontal);

  // Menambahkan ulasanItem ke ulasanProduk
  ulasanProduk.appendChild(ulasanItem);
});
function gantiUlasan() {
  let editulasan = document.querySelector(".form-ulasan");
  editulasan.classList.toggle("active");
}
