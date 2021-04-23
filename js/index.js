// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity').children[0].value
  const subTotal = product.querySelector('.subtotal span')
  let calculateSubTotal = price * quantity
  subTotal.innerHTML = calculateSubTotal

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const manyProduct = document.querySelectorAll('.product');
  const subTotal = document.querySelectorAll('.subtotal span');
 
  // end of test
  // ITERATION 2
  //... your code goes here
  manyProduct.forEach(product => {
    updateSubtotal(product);
    
  });
  let totalProduct = 0

  // ITERATION 3
  //... your code goes here
  const total = document.querySelector("#total-value span")
  subTotal.forEach((product) => {
    totalProduct += Number(product.innerHTML)
    
  })
  total.innerHTML = totalProduct
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentElement.parentElement.remove()
  calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const footerButton = document.querySelector(".create-product")
  const body = document.querySelector("tbody")
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

  //... your code goes here
});
