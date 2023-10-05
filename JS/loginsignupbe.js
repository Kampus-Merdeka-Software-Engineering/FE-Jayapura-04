document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const messageElement = document.getElementById("message"); // Tambahkan elemen untuk menampilkan pesan
  
    signupForm.addEventListener("submit", async function (e) {
      e.preventDefault();
  
      const namaLengkap = document.getElementById("namalengkap").value;
      const email = document.getElementById("emailup").value;
      const password = document.getElementById("passwordup").value;
      const password2 = document.getElementById("password2").value;
  
      try {
        const response = await fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ namaLengkap, email, password, password2 }),
        });
  
        if (response.ok) {
          const data = await response.json();
          messageElement.innerHTML = data.message; // Tampilkan pesan pada halaman
        } else {
          console.log("Ada masalah dengan permintaan.");
        }
      } catch (error) {
        console.log(error);
      }
    });
  });

  // Untuk form login
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: loginEmail, password: loginPassword }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.message === "Login berhasil") {
        // Login berhasil, lakukan aksi sesuai kebutuhan (misalnya, tampilkan pesan, alihkan halaman, atau perbarui UI)
        alert("Login berhasil");
        // Lakukan aksi lain, seperti mengubah UI atau mengalihkan pengguna ke halaman lain
      } else {
        // Login gagal, tampilkan pesan error
        alert("Login gagal");
      }
    } else {
      console.log("Ada masalah dengan permintaan.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

  