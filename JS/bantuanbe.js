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
    var fullname = form.querySelector('[name="fullname"]').value;
    var email = form.querySelector('[name="email"]').value;
    var question = form.querySelector('[name="question"]').value;

    // Buat objek data
    const data = {
        fullName: fullname,
        email: email,
        question: question,
    };
    fetch('http://localhost:3000/bantuan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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
