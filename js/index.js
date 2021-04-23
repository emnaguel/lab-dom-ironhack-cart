const footerButton = document.querySelector(".create-product")
const body = document.querySelector("tbody")
// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const subTotal = product.querySelector('.subtotal span')
  let calculateSubTotal = price * quantity
  subTotal.innerHTML = calculateSubTotal

}

function calculateAll() {
  const manyProduct = document.querySelectorAll('.product');
  const subTotal = document.querySelectorAll('.subtotal span');
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test
  // ITERATION 2
  //... your code goes here
  manyProduct.forEach(product => updateSubtotal(product));
  let totalProduct = 0
  // ITERATION 3
  //... your code goes here
  const total = document.querySelector("#total-value span")
  subTotal.forEach((product) => totalProduct += Number(product.innerHTML))
  total.innerHTML = totalProduct
}

// ITERATION 4

function removeProduct(event) {
  //... your code goes here
  const target = event.currentTarget;
  target.parentElement.parentElement.remove()
  calculateAll()
}

// ITERATION 5


function createProduct() {
  // let tr = document.createElement("tr");
  // tr.classList.add("product")
  // let nameTd = document.createElement("td")
  // let priceTd = document.createElement("td")
  // let quantityTd = document.createElement("td")
  // let inputNumber = document.createElement("input")
  // inputNumber.setAttribute("type", "number")
  // inputNumber.value = 0
  // nameTd.classList.add('name')
  // priceTd.classList.add('price')
  // quantityTd.classList.add('quantity')
  // nameTd.innerHTML = footerButton.children[0].querySelector("input").value
  // priceTd.innerHTML = footerButton.children[1].querySelector("input").value
  // quantityTd.appendChild(inputNumber)
  // tr.appendChild(nameTd)
  // tr.appendChild(priceTd)
  // tr.appendChild(quantityTd)
  // console.log(tr)
  // body.appendChild(tr)
  const clone =  body.children[1].cloneNode(true)
  const name = clone.querySelector('.name span')
  const newName = footerButton.children[0].querySelector("input").value
  const price = clone.querySelector('.price span')
  const newPrice = footerButton.children[1].querySelector("input").value
  name.innerHTML = newName
  price.innerHTML = newPrice
  body.appendChild(clone)
}

window.addEventListener('load', () => {
  //... your code goes here
  const calculatePricesBtn = document.getElementById('calculate');
  const buttonCreate= document.getElementById("create")
  const removeButton = document.querySelectorAll(".btn-remove")
  calculatePricesBtn.addEventListener('click', calculateAll);
  buttonCreate.addEventListener('click', createProduct)
  removeButton.forEach((button) => {
    button.addEventListener('click', (event) => {
      removeProduct(event)
    })
  })

});
