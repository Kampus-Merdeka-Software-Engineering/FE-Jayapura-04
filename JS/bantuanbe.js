// Post data dari contact form
function postBantuanUser(event) {
    event.preventDefault();

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
    fetch('https://api-express-railway-production.up.railway.app/contact', {
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
    .catch(error => console.error('Error sending contact data:', error));
}

// Event listener untuk form submission
document.querySelector('.contact-form form').addEventListener('submit', postBantuanUser);

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', fetchHeaderData);
