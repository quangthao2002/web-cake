//REGEX

//Load product
const listProduct = [
  {
    img: "/assets/img/banh1.jpg",
    title: "Bánh kem socola tình yêu",
    price: "180.000đ",
  },
  {
    img: "/assets/img/banh2.jpg",
    title: "Bánh mousse dâu tây",
    price: "145.000đ",
  },
  {
    img: "/assets/img/banh3.jpg",
    title: "Tiramisu truyền thống Ý",
    price: "165.000đ",
  },
  {
    img: "/assets/img/banh4.jpg",
    title: "Bánh red velvet kem phô mai",
    price: "195.000đ",
  },
  {
    img: "/assets/img/banh5.jpg",
    title: "Bánh matcha đậu đỏ Nhật Bản",
    price: "170.000đ",
  },
  {
    img: "/assets/img/banh6.jpg",
    title: "Bánh su kem mini hộp 10 cái",
    price: "80.000đ",
  },
  {
    img: "/assets/img/banh7.jpg",
    title: "Bánh quy bơ hạnh nhân giòn thơm",
    price: "60.000đ",
  },
  {
    img: "/assets/img/banh8.jpg",
    title: "Bánh chanh dây mát lạnh",
    price: "120.000đ",
  },
  {
    img: "/assets/img/banh9.jpg",
    title: "Bánh cupcake mix vị 6 cái",
    price: "100.000đ",
  },
  {
    img: "/assets/img/banh10.jpg",
    title: "Bánh flan trứng caramel mịn béo",
    price: "40.000đ",
  },
  {
    img: "/assets/img/banh11.jpg",
    title: "Bánh crepe sầu riêng lớp mỏng",
    price: "140.000đ",
  },
  {
    img: "/assets/img/banh12.jpg",
    title: "Bánh bông lan trứng muối hộp nhỏ",
    price: "95.000đ",
  },
  {
    img: "/assets/img/banh13.jpg",
    title: "Bánh cheese tart Nhật Bản",
    price: "110.000đ",
  },
  {
    img: "/assets/img/banh14.jpg",
    title: "Bánh opera nhiều lớp đậm vị cafe",
    price: "155.000đ",
  },
  {
    img: "/assets/img/banh15.jpg",
    title: "Bánh ngàn lớp kem custard",
    price: "135.000đ",
  },
  {
    img: "/assets/img/banh16.jpg",
    title: "Bánh bắp thơm mềm phủ kem tươi",
    price: "125.000đ",
  },
];

const pageProduct = document.querySelector("#product");
const header = document.querySelector("#header");
// const registration=document.querySelector('.registration-form');
const containerlistProduct = document.querySelector(".listProduct");

const renderListProduct = function (product) {
  return `<div class="grid__column-4">
     <a href="" class="home-product">
       <div
         class="img-item"
         style="
           background-image: url(${product.img});
         "
       ></div>

       <div class="home-product-info">
         <span
           >${product.title}</span
         >
         <h5>${product.price}</h5>
         <div class="star">
           <i class="ti-star"></i>
           <i class="ti-star"></i>
           <i class="ti-star"></i>
           <i class="ti-star"></i>
           <i class="ti-star"></i>
         </div>
       </div>
     </a>
   </div>`;
};

const loadProduct = function () {
  listProduct.forEach((product) => {
    containerlistProduct.insertAdjacentHTML(
      "beforeend",
      renderListProduct(product)
    );
  });
};

loadProduct();
const products = document.querySelectorAll(".home-product");
const features = document.querySelector("#features");
products.forEach((product, index) => {
  const productItem = listProduct[index];

  product.addEventListener("click", function (e) {
    e.preventDefault();

    console.log("click");

    features.textContent = "";
    features.insertAdjacentHTML("afterbegin", renderProduct(productItem));
    features.scrollIntoView(false);
    console.log("sdsds");
  });
});

const renderProduct = function (product) {
  return `
   <div class="container-product">
      <a href="/listProduct.html" class="back-button">
  <i class="ti-angle-left"></i> Quay lại
</a>
       <br>
       <div class="grid__row">
           <div class="grid__column-35">
              <img src="${product.img}" class="product-img-detail" width="100%"  alt="">
           </div>
           <div class="grid__column-65">
               <h1>${product.title}</h1>
               <h2>${product.price}</h2>
               <div class="product-select">
                   <label for="size">Số lượng</label>
               <input type="number" value="1" >
               </div>
               <a class="payment" href="./payment.html">Mua hàng</a>
               <div class="product-endow">
                   <i class="ti-check-box"> Kiểm tra hàng trước khi thanh toán</i>  <br>
                   <i class="ti-check-box"> 1 đổi 1 trong 14 ngày lỗi nhà sản xuất</i> <br>
                   <i class="ti-check-box"> Ưu đãi hấp dẫn</i> <br>
                   <i class="ti-check-box"> Miễn phí giao hàng toàn quốc cho đơn từ 499K</i> <br>
               </div>
           </div>
   
       </div>
   </div>
   `;
};
