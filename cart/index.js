function addCart() {
  const cart = document.createElement("div");
  const img = document.createElement("img");

  let itemName;
  let priceTag;
  let button;
  let priceValue;

  img.src =
    "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0";

  document.body.appendChild(cart);
  cart.appendChild(img);

  cart.style.width = "300px";
  cart.style.height = "500px";
  cart.style.background = "#E0E7E8";

  img.style.width = "100%";
  img.style.height = "300px";

  function item() {
    itemName = document.createElement("h2");
    itemName.textContent = "Check Print Shirt";
    cart.appendChild(itemName);

    itemName.style.background = "#FAD15F";
  }
  item();

  function price() {
    priceTag = document.createElement("p");
    priceValue = document.createElement("span");
    priceTag.textContent = "Price: $";
    priceValue.textContent = "35";

    // priceTag.style.background = "orange";
    priceTag.appendChild(priceValue);
    cart.appendChild(priceTag);
  }
  price();

  function btn() {
    button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    cart.appendChild(button);
    // button.setAttribute("id", cartButton);

    button.style.background = "#F96344";
    button.style.border = "none";
    button.style.padding = "10px";
    button.style.width = "100%";
    button.style.color = "white";
    // button.style.fontWeight = "bold";
  }
  btn();

  //   cart.setAttribute("class", cart);
  //   img.setAttribute("id", image);
}
addCart();
