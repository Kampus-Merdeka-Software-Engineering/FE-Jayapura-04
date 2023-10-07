// Fungsi untuk memeriksa status login pengguna
function isUserLoggedIn() {
    // Contoh: Anda menyimpan token login dalam localStorage
    const token = localStorage.getItem('user');
    return !!token; // Mengembalikan true jika token ada, sebaliknya false
}

// Post data dari bantuan form
function postBantuanUser(event) {
    event.preventDefault();

    // Periksa status login pengguna sebelum mengizinkan pengiriman
    if (!isUserLoggedIn()) {
        alert('Anda harus login atau signup terlebih dahulu.');
        return;
    }

    // Ambil data dari form
    const form = event.target;
    const fullName = form.querySelector('[name="fullName"]').value;
    const email = form.querySelector('[name="email"]').value;
    const question = form.querySelector('[name="question"]').value;

    // Buat objek data
    const data = {
        fullName: fullName,
        email: email,
        question: question,
    };

    // Kirim data sebagai JSON
    fetch('http://localhost:3000/bantuan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Sertakan token atau informasi otentikasi lainnya di header jika diperlukan
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Terima kasih! Pesan Anda telah terkirim.');
            form.reset();
        } else {
            alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
        }
    })
    .catch(error => console.error('Error sending bantuan data:', error));
}

// Event listener untuk form submission
document.querySelector('.bantuan form').addEventListener('submit', postBantuanUser);
