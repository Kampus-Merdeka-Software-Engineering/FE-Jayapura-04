var btn = document.getElementById ("submit")
var namaLengkap = document.getElementById("namaLengkap")
var emailup = document.getElementById("emailup")
var password = document.getElementById("password1")
var password2 = document.getElementById("password2")

btn.addEventListener("submit", signup);

function signup() {
    fetch("http://localhost:3000/submitSignup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                namaLengkap: namaLengkap.value,
                email: email.value,
                password: password.value,
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
var btn = document.getElementById("buttonLogin")
var email = document.getElementById("email")
var password = document.getElementById("password")

btn.addEventListener("click", login);

function login() {
    fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
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

  