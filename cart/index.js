function addCart(imageUrl, name, price) {
  const container = document.querySelector(".container");
  const cart = document.createElement("div");
  const img = document.createElement("img");

  let itemName;
  let priceTag;
  let button;
  let priceValue;

  img.src = imageUrl;

  img.setAttribute("id", "image");
  container.appendChild(img);
  container.appendChild(cart);

  function item() {
    itemName = document.createElement("h2");
    itemName.textContent = name;
    cart.appendChild(itemName);

    itemName.style.background = "#FAD15F";
  }
  item();

  function priceComponent() {
    priceTag = document.createElement("p");
    priceValue = document.createElement("span");
    priceTag.textContent = "Price: $";
    priceValue.textContent = price;

    priceTag.appendChild(priceValue);
    cart.appendChild(priceTag);
  }
  priceComponent();

  function btn() {
    button = document.createElement("button");
    button.setAttribute("id", "cartButton");
    button.innerHTML = "Add to Cart";
    container.appendChild(button);
  }
  btn();
}
addCart(
  "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
  "CHECK PRINT SHIRT",
  110
);
