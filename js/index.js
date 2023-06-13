var productName = document.getElementById("pName");
var productDesc = document.getElementById("pDesc");
var productCat = document.getElementById("pCat");
var productPrice = document.getElementById("pPrice");

var productList = [];

console.log(productList)
function getProducts(){
    var product = {
        pName : productName.value,
        pDesc : productDesc.value,
        pCat : productCat.value,
        pPrice : productPrice.value,
    };
    productList.push(product)
    console.log(productList)
}