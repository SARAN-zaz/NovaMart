var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll(".products-box");

search.addEventListener("keyup", function (event) {
  var enteredvalue = event.target.value.toUpperCase();

  for (let count = 0; count < productlist.length; count++) {
    var productname =
      productlist[count].querySelector("p").textContent.toUpperCase();

    if (productname.indexOf(enteredvalue) < 0) {
      productlist[count].style.display = "none";
    } else {
      productlist[count].style.display = "block";
    }
  }
});
