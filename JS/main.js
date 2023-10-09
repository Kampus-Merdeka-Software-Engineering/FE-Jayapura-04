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
    (produk) => produk.nama === namaProduk && produk.gambar === gambarProduk
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


