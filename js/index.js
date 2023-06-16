var productName = document.getElementById("pName");
var productDesc = document.getElementById("pDesc");
var productCat = document.getElementById("pCat");
var productPrice = document.getElementById("pPrice");
var productList;
if (localStorage.getItem("productList") == null) {
  productList = [];
} else {
  productList = JSON.parse(localStorage.getItem("productList"));
  displayProduct(productList);
}

console.log(productList);
function getProducts() {
  validation();
}

function displayProduct(product) {
  var Table = ``;
  for (var i = 0; i < product.length; i++) {
    Table += `
    <tr>
                <th scope="row">${i + 1}</th>
                <td>${
                  product[i].newName ? product[i].newName : product[i].pName
                }</td>
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
  localStorage.setItem("productList", JSON.stringify(productList));
  displayProduct(productList);
}

function searchByName(term) {
  var foundedItems = [];
  for (var i = 0; i < productList.length; i++) {
    if (
      productList[i].pName.toLowerCase().includes(term.toLowerCase()) == true
    ) {
      productList[i].newName = productList[i].pName
        .toLowerCase()
        .replace(
          term.toLowerCase(),
          `<span class="text-danger fw-bold">${term}</span>`
        );
      foundedItems.push(productList[i]);
      // alert("true")
    }
  }
  displayProduct(foundedItems);
}

function validatName() {
  var regex = /^[A-Z][a-z]{3,8}[1-9]{0,1}[0-9]{0,2}$/;
  if (regex.test(productName.value) == true) {
    document.getElementById("nameValidate").classList.add("d-none");
    return true;
  } else {
    document.getElementById("nameValidate").classList.remove("d-none");
    return false;
  }
}
function validatDesc() {
  var regex = /^[A-Z][a-z]{3,8}[1-9]{0,1}[0-9]{0,2}$/;
  if (regex.test(productDesc.value) == true) {
    document.getElementById("descValidate").classList.add("d-none");
    return true;
  } else {
    document.getElementById("descValidate").classList.remove("d-none");
    return false;
  }
}
function validatCat() {
  var regex = /^(Mobile|Tv|Laptop)$/;
  if (regex.test(productCat.value) == true) {
    document.getElementById("catValidate").classList.add("d-none");
    return true;
  } else {
    document.getElementById("catValidate").classList.remove("d-none");
    return false;
  }
}
function validatPrice() {
  var regex = /^[1-9][0-9]{1,3}$/;
  if (regex.test(productPrice.value) == true) {
    document.getElementById("priceValidate").classList.add("d-none");
    return true;
  } else {
    document.getElementById("priceValidate").classList.remove("d-none");
    return false;
  }
}

function validation() {
  if (
    validatName() == true &&
    validatDesc() == true &&
    validatCat() == true &&
    validatPrice() == true
  ) {
    var product = {
      pName: productName.value,
      pDesc: productDesc.value,
      pCat: productCat.value,
      pPrice: productPrice.value,
    };

    productList.push(product);
    localStorage.setItem("productList", JSON.stringify(productList));
    console.log(productList);
    // alert("valid")
    displayProduct(productList);
    clearList();
  }
}
