const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");
const loginBtnDangNhap = document.querySelector(".login-btn");
const modalLabel = document.querySelector(".modal-label");
const modal = document.querySelector(".js-modal");
const btnLogin = document.querySelector("#btn-login-ok");
// import {dataUser,test} from './registration.js';
const modalHeader = document.querySelector(".modal-header");
let dataUser = [];
const renderUser = function () {
  const userAccount = localStorage.getItem("user");
  if (userAccount) dataUser = JSON.parse(userAccount);
  console.log(dataUser);
};
renderUser();

const CheckUserExist = function () {
  const loginTenDangNhap = document.querySelector(".LoginTenDangNhap").value;
  const loginMatKhau = document.querySelector(".LoginMatKhau").value;

  for (let user of dataUser) {
    if (user.TenDangNhap == loginTenDangNhap && user.MatKhau == loginMatKhau) {
      modalHeader.textContent = `Thành công`;
      modal.classList.add("open");
      btnLogin.href = "/index.html";
      modalLabel.textContent = `Chào Mừng Quay Trở Lại ${user.TenDangNhap}`;
      return true;
    }
  }
  console.log("Sai");
  modal.classList.add("open");
  modalHeader.textContent = `Thất bại`;
  btnLogin.href = "registration.html";
  modalLabel.textContent = `Người dùng không tồn tại. Vui lòng đăng kí!`;
  return false;
};

loginBtnDangNhap.addEventListener("click", function (e) {
  e.preventDefault();
  CheckUserExist();
});

// Close and open modal
const showAndHideModal = function () {
  modal.classList.remove("open");
};
modalClose.addEventListener("click", showAndHideModal);
