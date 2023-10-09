// Mendapatkan product_type dan product_id dari URL
const urlParams = new URLSearchParams(window.location.search);
const productType = urlParams.get('product_type');
const productId = urlParams.get('product_id');

// URL endpoint API Anda untuk mengambil data produk berdasarkan product_id
const idProduk = `https://be-jayapura-04-production.up.railway.app/pakaian/anak/${productId}`;

// Mengambil data produk dari database menggunakan fetch
fetch(idProduk)
  .then(response => {
    if (!response.ok) {
      throw new Error('Gagal mengambil data produk');
    }
    return response.json();
  })
  .then(product => {
    const productElement = createProductElement(product);
    const productContainer = document.getElementById("deskripsi-produk");
    productContainer.appendChild(productElement);
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
          <h4 id="harga-produk">Rp ${product.price}</h4>
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
           <p>Produk kami adalah produk yang berkualitas karena dibuat dengan bahan yang nyaman dan aman untuk dipakai.</p>
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