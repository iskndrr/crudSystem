var productName = document.getElementById("pName");
var productDesc = document.getElementById("pDesc");
var productCat = document.getElementById("pCat");
var productPrice = document.getElementById("pPrice");

var productList = [];

console.log(productList);
function getProducts() {
  var product = {
    pName: productName.value,
    pDesc: productDesc.value,
    pCat: productCat.value,
    pPrice: productPrice.value,
  };
  productList.push(product);
  console.log(productList);
  displayProduct(productList);
  clearList();
}

function displayProduct(product) {
  var Table = ``;
  for (var i = 0; i < product.length; i++) {
    Table += `
    <tr>
                <th scope="row">${i + 1}</th>
                <td>${product[i].pName}</td>
                <td>${product[i].pDesc}</td>
                <td>${product[i].pCat}</td>
                <td>${product[i].pPrice}</td>
                
                <td>
                  <button class="btn p-0">
                    <i class="fa fa-edit text-warning fs-4"></i>
                  </button>
                </td>
                <td>
                  <button onclick="deleteProduct(${i})" class="btn p-0">
                    <i class="fa fa-trash text-danger fs-4"></i>
                  </button>
                </td>
              </tr>
    `;
  }

  document.getElementById("tBody").innerHTML = Table;
}

function clearList() {
  productName.value = "";
  productDesc.value = "";
  productCat.value = "";
  productPrice.value = "";
}

function deleteProduct(index) {
  productList.splice(index, 1);
  displayProduct(productList)
}
