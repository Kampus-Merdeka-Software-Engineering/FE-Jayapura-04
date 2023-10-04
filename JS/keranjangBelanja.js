// Ambil elemen gambar besar dan daftar gambar kecil

// Inisialisasi keranjang belanja
const keranjangBelanja = [];

const tambahKeKeranjangButton = document.getElementById("tambah-keranjang");
tambahKeKeranjangButton.addEventListener("click", function (e) {
  e.preventDefault();

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
  }

  updateKeranjangBelanja();

  const cartCountElement = document.getElementById("cart-count");
  const cartCount = parseInt(cartCountElement.textContent);
  cartCountElement.textContent = (cartCount + jumlahProduk).toString();
});

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

// Mengambil elemen ulasan produk
const ulasanProduk = document.getElementById("ulasan-produk");

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

  // Buat elemen untuk menampilkan ulasan
  const ulasanItem = document.createElement("div");
  ulasanItem.classList.add("ulasan-item");

  // Buat elemen-elemen untuk menampilkan username, rating, dan ulasan
  const usernameElement = document.createElement("p");
  const ratingElement = document.createElement("div");
  const ulasanTekstualElement = document.createElement("p");

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
  usernameElement.innerHTML = `<strong>${username}</strong>`;
  ratingElement.innerHTML = ratingStars;
  ulasanTekstualElement.innerHTML = `<strong>Ulasan:</strong> ${ulasan}`;

  // Menambahkan elemen-elemen ke ulasanItem
  ulasanItem.appendChild(usernameElement);
  ulasanItem.appendChild(ratingElement);
  ulasanItem.appendChild(ulasanTekstualElement);

  // Menambahkan ulasanItem ke ulasanProduk
  ulasanProduk.appendChild(ulasanItem);

  // Mengosongkan input setelah pengguna mengirim ulasan
  usernameInput.value = "";
  ulasanInput.value = "";

  // Mengatur semua bintang menjadi abu setelah mengirim ulasan
  stars.forEach((star) => {
    star.style.color = "gray";
  });
});
