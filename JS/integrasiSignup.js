document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
  
    signupForm.addEventListener("submit", async function (e) {
      e.preventDefault();
  
      const namaLengkap = document.getElementById("namalengkap").value;
      const email = document.getElementById("emailup").value;
      const password = document.getElementById("passwordup").value;
      const password2 = document.getElementById("password2").value;
  
      try {
        const response = await fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ namaLengkap, email, password, password2 }),
        });
  
        if (response.status === 201) {
          // Pendaftaran berhasil, Anda dapat mengarahkan pengguna atau menampilkan pesan sukses di sini
        } else {
          // Pendaftaran gagal, Anda dapat menampilkan pesan error di sini
        }
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    });
  });
  