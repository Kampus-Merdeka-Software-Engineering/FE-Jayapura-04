var btn = document.getElementById ("signupForm")


btn.addEventListener("submit", signup);

function signup(event) {

    event.preventDefault();

    // Ambil data dari form
    const form = event.target;
    var namaLengkap = form.querySelector('[name="namaLengkap"]').value;
    var emailup = form.querySelector('[name="emailup"]').value;
    var password = form.querySelector('[name="password"]').value;
    fetch("https://be-jayapura-04-production.up.railway.app/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                namaLengkap: namaLengkap,
                email: emailup,
                password: password,
            })
        })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        }).then(function (data) {
            alert(data.message);
            localStorage.setItem("user", JSON.stringify(data.data))
        }).catch(function (error) {
            console.log(error);
        });
}

// buat login
var btn = document.getElementById("loginForm")

btn.addEventListener("submit", login);

function login(event) {

    event.preventDefault();

    // Ambil data dari form
    const form = event.target;
    var email = form.querySelector('[name="email"]').value;
    var password = form.querySelector('[name="password"]').value;
    fetch("https://be-jayapura-04-production.up.railway.app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
          }).then(function (data) {
            alert(data.message);
            localStorage.setItem("user", JSON.stringify(data.data))
        }).catch(function (error) {
            console.log(error);
        });
}

  