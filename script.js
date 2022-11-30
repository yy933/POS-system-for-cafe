// ======= default data =======
const menu = document.querySelector("#menu");
const cart = document.querySelector("#cart");
let totalAmount = document.querySelector("#total-amount");
const button = document.querySelector("#submit-button");

// 菜單資料
const productData = [
  {
    id: "product-1",
    imgUrl:
      "https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "馬卡龍",
    price: 90
  },
  {
    id: "product-2",
    imgUrl:
      "https://images.unsplash.com/photo-1560691023-ca1f295a5173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "草莓",
    price: 60
  },
  {
    id: "product-3",
    imgUrl:
      "https://images.unsplash.com/photo-1568271675068-f76a83a1e2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "奶茶",
    price: 100
  },
  {
    id: "product-4",
    imgUrl:
      "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "冰咖啡",
    price: 150
  },
  {
    id: "product-5",
    imgUrl:
      "https://images.unsplash.com/photo-1559054663-e8d23213f55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "三明治",
    price: 130
  },
  {
    id: "product-6",
    imgUrl:
      "https://images.unsplash.com/photo-1585504455924-3d3b0eb2b8ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "巧克力蛋糕",
    price: 120
  },
  {
    id: "product-7",
    imgUrl:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "沙拉",
    price: 170
  },
  {
    id: "product-8",
    imgUrl:
      "https://images.unsplash.com/photo-1510431198580-7727c9fa1e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "南瓜濃湯",
    price: 80
  }
];
// ======= 請從這裡開始 =======
//Step1. add menu items
addMenuItems(productData);
//function
function addMenuItems(items) {
  items.forEach(
    (item) =>
    (menu.innerHTML += `
        <div class="col-3">
       <div class="card mt-3">
          <img src="${item.imgUrl}" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <h4 class="card-title">${item.name}</h5>
            <p class="card-text">${item.price}</p>
            <a href="#" class="btn btn-secondary">加入購物車</a>
          </div>
        </div>
        </div>
  `)
  );
}

//Step 2. Click and add items to cart
addCartItems(event);
function addCartItems(event) {
  menu.addEventListener("click", (event) => {
    let target = event.target;
    if (target.matches(".btn")) {
      let item = document.createElement("tr");
      let itemContent = `
      <th scope="row">${target.parentElement.children[0].innerText}</th>
      <td>1</td>
      <td class="price">${target.parentElement.children[1].innerText}</td>
      <td><i class="delete fa-regular fa-trash-can"></i></td>
      `;
      item.innerHTML = itemContent;
      document.querySelector(".table tbody").appendChild(item);

      //2-1.Calculate total amount

      let item_price = document.querySelectorAll("tbody .price");
      let item_sum = 0;
      item_price.forEach(function (element) {
        item_sum += Number(element.innerText);
      });
      totalAmount.innerText = item_sum;
    }
  });
  //2-2. delete items in the cart
  const table = document.querySelector(".table");
  table.addEventListener("click", (event) => {
    if (event.target.matches(".delete")) {
      event.target.closest("tr").remove();
      totalAmount.innerText -= Number(
        event.target.closest("tr").children[2].innerText
      );
    }
  });
}
//Step 3. submit the order
submit(event);
function submit(event) {
  button.addEventListener("click", function submitOrder() {
    //pop-up receipt
    alert(`感謝您的購買!\n總金額：${totalAmount.innerText}`);
    //clear items in cart
    document.querySelector("tbody").innerHTML = "";
    totalAmount.innerText = 0;
  });
}
//Step 4. Reset
function reset() { }
