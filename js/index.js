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
  const tr = document.createElement('tr')
  tr.classList.add('product')
  tr.innerHTML = `<td class="name"><span></span></td>
  <td class="price"><span></span></td>
  <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" />
  </td> <td class="subtotal">$<span></span></td><td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>`
  const name = tr.querySelector('.name span')
  const newName = footerButton.children[0].querySelector("input").value
  name.innerHTML = newName
  const price = tr.querySelector('.price span')
  const newPrice = footerButton.children[1].querySelector("input").value
  price.innerHTML = `$${newPrice}`
  const subTotal = tr.querySelector('.subtotal span')
  subTotal.innerHTML = updateSubtotal(tr)

  body.appendChild(tr)
  
  removeAllButtons()
  calculateAll()

}

function removeAllButtons() {
  const removeButton = document.querySelectorAll(".btn-remove")
  removeButton.forEach((button) => {
    button.addEventListener('click', (event) => {
      console.log('hello')
      removeProduct(event)
    })
  })

}

window.addEventListener('load', () => {
  //... your code goes here
  const calculatePricesBtn = document.getElementById('calculate');
  const buttonCreate= document.getElementById("create")
  calculatePricesBtn.addEventListener('click', calculateAll);
  buttonCreate.addEventListener('click', createProduct)
  removeAllButtons()

});
