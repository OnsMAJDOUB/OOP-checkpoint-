// document.addEventListener("DOMContentLoaded", function () {
//   // Adjust quantity of items
//   document.querySelectorAll(".fa-circle-plus").forEach((plusBtn) => {
//     plusBtn.addEventListener("click", function () {
//       let quantityElement = this.nextElementSibling;
//       let quantity = parseInt(quantityElement.textContent);
//       if (quantity < 5) {
//         quantity++;
//         quantityElement.textContent = quantity;
//         updateTotal();
//       } else {
//         alert("Maximum quantity is 5");
//       }
//     });
//   });

//   document.querySelectorAll(".fa-circle-minus").forEach((minusBtn) => {
//     minusBtn.addEventListener("click", function () {
//       let quantityElement = this.previousElementSibling;
//       let quantity = parseInt(quantityElement.textContent);
//       if (quantity > 0) {
//         quantity--;
//         quantityElement.textContent = quantity;
//         updateTotal();
//       } else {
//         alert("Minimum quantity is 0");
//       }
//     });
//   });

//   // Delete items from the cart
//   document.querySelectorAll(".fa-trash").forEach((trashBtn) => {
//     trashBtn.addEventListener("click", function () {
//       let card = this.closest(".card");
//       card.remove();
//       updateTotal();
//     });
//   });

//   // Like items through a clickable heart-shaped button
//   document.querySelectorAll(".fa-heart").forEach((heartBtn) => {
//     heartBtn.addEventListener("click", function () {
//       this.classList.toggle("liked");
//     });
//   });

//   // total price
//   function updateTotal() {
//     let total = 0;
//     document.querySelectorAll(".card").forEach((card) => {
//       let price = parseFloat(
//         card.querySelector("h6 span").textContent.replace(",", "")
//       );
//       let quantity = parseInt(card.querySelector("#qte p").textContent);
//       total += price * quantity;
//     });
//     document.getElementById("total-price").textContent = total.toFixed(2);
//   }
// });




// create a product class 
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}



// Create a ShoppingCartItem class
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }



  
  //total price 
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}




