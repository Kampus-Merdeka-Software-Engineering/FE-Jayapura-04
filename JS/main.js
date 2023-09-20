// Toggle class active
const search = document.querySelector(".search-box");

// Ketika search dilklik
document.querySelector("#search").onclick = () => {
  search.classList.toggle("active");
};

// klik di luar sidebar menghilangkan nav
const searchs = document.querySelector("#search");
document.addEventListener("click", function (e) {
  if (!searchs.contains(e.target) && !search.contains(e.target)) {
    search.classList.remove("active");
  }
});

// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu dilklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// buat bagian login sign up pop up

const wrapper = document.querySelector(".wrapper");
document.querySelector("#user").onclick = () => {
  wrapper.classList.toggle("active");
};

// klik di luar sidebar menghilangkan pop up
const users = document.querySelector("#user");

document.addEventListener("click", function (e) {
  if (!users.contains(e.target) && !wrapper.contains(e.target)) {
    wrapper.classList.remove("active");
  }
});

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

let bantuan = document.querySelector(".bantuan");

document.querySelector("#bantuan").onclick = () => {
  bantuan.classList.toggle("active");
};

let cancel = document.querySelector(".bantuan");

document.querySelector("#cancel").onclick = () => {
  cancel.classList.remove("active");
};

let selengkapnya = document.querySelector(".form-ulasan");

document.querySelector("#selengkapnya").onclick = () => {
  selengkapnya.classList.toggle("active");
};

let cancelulasan = document.querySelector(".form-ulasan");

document.querySelector("#cancelulasan").onclick = () => {
  cancelulasan.classList.remove("active");
};
const allStar = document.querySelectorAll(".rating .star");
const ratingValue = document.querySelector(".rating input");

allStar.forEach((item, idx) => {
  item.addEventListener("click", function () {
    let click = 0;
    ratingValue.value = idx + 1;

    allStar.forEach((i) => {
      i.classList.replace("bxs-star", "bx-star");
      i.classList.remove("active");
    });
    for (let i = 0; i < allStar.length; i++) {
      if (i <= idx) {
        allStar[i].classList.replace("bx-star", "bxs-star");
        allStar[i].classList.add("active");
      } else {
        allStar[i].style.setProperty("--i", click);
        click++;
      }
    }
  });
});

// validasi sign up
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");
  const namalengkap = document.getElementById("namalengkap");
  const emailup = document.getElementById("emailup");
  const passwordup = document.getElementById("passwordup");
  const password2 = document.getElementById("password2");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();
    let isValid = true;

    if (namalengkap.value.length < 3) {
      displayError(namalengkap, "Nama Lengkap minimal 3 karakter.");
      isValid = false;
    }

    if (!isValidEmail(emailup.value)) {
      displayError(emailup, "Email tidak valid.");
      isValid = false;
    }

    if (passwordup.value.length < 8 || !isValidPassword(passwordup.value)) {
      displayError(
        passwordup,
        "Password minimal 8 karakter, harus mengandung huruf kecil, huruf besar, dan angka."
      );
      isValid = false;
    }

    if (password2.value !== passwordup.value) {
      displayError(password2, "Password tidak sesuai.");
      isValid = false;
    }

    // if (isValid) {
    //   data = {};
    //   data["namalengkap"] = namalengkap.value;
    //   data["email"] = emailup.value;
    //   data["password"] = passwordup.value;

    //   console.log(data);
    // }
  });

  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  function isValidPassword(password) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordPattern.test(password);
  }

  function displayError(inputField, errorMessage) {
    const errorParagraph = inputField.nextElementSibling;
    errorParagraph.textContent = errorMessage;
  }

  function clearErrors() {
    const errorParagraphs = document.querySelectorAll(".error");
    errorParagraphs.forEach((error) => (error.textContent = ""));
  }
});
