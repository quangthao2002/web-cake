const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Tài khoản không được để trống");
    return false;
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email không được để trống");
    return false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email không tồn tại");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Mật khẩu không được để trống");
    return false;
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Yêu cầu nhập lại mật khẩu");
    return false;
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Mật khẩu không khớp");
    return false;
  } else {
    setSuccessFor(password2);
  }
  return true;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});

// Registration
let dataUser = [];
const persistUser = function () {
  localStorage.setItem("user", JSON.stringify(dataUser));
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("click");

  // if(!btn)return;
  if (checkInputs()) {
    const dataArr = [...new FormData(this)];
    console.log(dataArr);
    const data = Object.fromEntries(dataArr);
    modal.classList.add("open");
    console.log(data);
    dataUser.push(data);
    persistUser();
  }
  console.log(dataUser);
});

const renderUser = function () {
  const userAccount = localStorage.getItem("user");
  if (userAccount) dataUser = JSON.parse(userAccount);
  console.log(dataUser);
};
renderUser();

// Close and open modal
const showAndHideModal = function () {
  modal.classList.toggle("open");
};
modalClose.addEventListener("click", showAndHideModal);
modalContainer.addEventListener("click", showAndHideModal);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
