// Mendapatkan product_type dan product_id dari URL
const urlParams = new URLSearchParams(window.location.search);
const productType = urlParams.get('product_type');
const productId = urlParams.get('product_id');

// URL endpoint API Anda untuk mengambil data produk berdasarkan product_id
const idProduk = `http://localhost:3000/pakaian/anak/${productId}`;

// Mengambil data produk dari database menggunakan fetch
fetch(idProduk)
  .then(response => {
    if (!response.ok) {
      throw new Error('Gagal mengambil data produk');
    }
    return response.json();
  })
  .then(product => {
    // Menampilkan data produk di konsol
    console.log('Data Produk:', product);
    createProductElement(product);
  })
  .catch((error) => {
    console.error('Ada kesalahan saat mengambil data produk:', error);
  });

  // Membuat innerHTML dari data produk
  function createProductElement(product) {
    const deskripsi = document.createElement("div");
    deskripsi.innerHTML = `
      <div class="detail-produk" id="detail-produk">
        <div class="produk-img">
          <img src="${product.img}" alt="Baju" id="besarImg" />
        </div>
        <div class="content">
          <h3 id="nama-produk">${product.name}</h3>
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
        //   <h3>Deskripsi</h3>
        //   <p>
        //     <span id="selengkapnya" onclick="tambahUlasan()">selengkapnya...</span>
        //   </p>
        //   <div class="belanja">
        //     <a href="#" class="cta">Belanja Sekarang</a>
        //     <a href="#" class="cta" id="tambah-keranjang" onclick="tambahKeranjang()">Tambah Keranjang</a>
        //   </div>
        // </div>
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

  document.addEventListener("DOMContentLoaded", function () {
    const productElement = createProductElement(product);
    const productContainer = document.getElementById("deskripsi-produk");
    productContainer.appendChild(productElement);
  });


//   ulasan backend
// Fungsi untuk memeriksa status login pengguna
// function isUserLoggedIn() {
//     // Contoh: Anda menyimpan token login dalam localStorage
//     const token = localStorage.getItem('user');
//     return !!token; // Mengembalikan true jika token ada, sebaliknya false
// }

// // Post data dari bantuan form
// function postBantuanUser(event) {
//     event.preventDefault();

//     // Periksa status login pengguna sebelum mengizinkan pengiriman
//     if (!isUserLoggedIn()) {
//         alert('Anda harus login atau signup terlebih dahulu.');
//         return;
//     }

//     // Ambil data dari form
//     const form = event.target;
//     const username = form.querySelector('[name="username"]').value;
//     const rating = form.querySelector('[name="rating"]').value;
//     const ulasan = form.querySelector('[name="ulasan"]').value;

//     // Buat objek data
//     const data = {
//         username: username,
//         rating: rating,
//         ulasan: ulasan,
//     };

//     // Kirim data sebagai JSON
//     fetch('http://localhost:3000/ulasan', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             // Sertakan token atau informasi otentikasi lainnya di header jika diperlukan
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             alert('Terima kasih! Rating Anda telah terkirim.');
//             form.reset();
//         } else {
//             alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
//         }
//     })
//     .catch(error => console.error('Error sending rating data:', error));
// }

// // Event listener untuk form submission
// document.querySelector('.ulasan form').addEventListener('submit', postBantuanUser);
