const productBackButton = document.getElementById("back");
const astronautViewButton = document.getElementById("astronaut-inspect");
const astronautAddToCart = document.getElementById("astronaut-add-to-cart");
const robotViewButton = document.getElementById("robot-inspect");
const robotAddToCart = document.getElementById("robot-add-to-cart");
const batteryHolderViewButton = document.getElementById(
  "battery-holder-inspect"
);
const batteryHolderAddToCart = document.getElementById(
  "battery-holder-add-to-cart"
);
const hexCoasterViewButton = document.getElementById("hex-coaster-inspect");
const hexCoasterAddToCart = document.getElementById("hex-coaster-add-to-cart");
const viewCartBtn = document.getElementById("view-cart");
const cartBackButton = document.getElementById("back-to-products");
const submitOrderBtn = document.getElementById("submit-order");
let productColor = localStorage.getItem("productColor");
let productName = localStorage.getItem("productName");
let productMaterial = localStorage.getItem("productMaterial");
let productWeight = localStorage.getItem("productWeight");
let totPrice = localStorage.getItem("total price");
let uppcaseColor;
let uppcaseMaterial;
let cartOptions = [
  localStorage.getItem("cart1"),
  localStorage.getItem("cart2"),
  localStorage.getItem("cart3"),
  localStorage.getItem("cart4"),
  localStorage.getItem("cart5"),
];

console.log(document.getElementById("back-to-products"));
const product = {
  color: productColor,
  name: productName,
  material: productMaterial,
  weight: productWeight,
  price: totPrice,
};

let productBackButtonCheck = document.getElementById("back");
if (productBackButtonCheck) {
  productBackButton.addEventListener("click", () => {
    window.location.href = "products.html";
  });
}
let backToProductCheck = document.getElementById("back-to-products");
if (backToProductCheck) {
  cartBackButton.addEventListener("click", () => {
    window.location.href = "products.html";
  });
}

let orderPriceCheck = document.getElementById("order-price-form");
if (orderPriceCheck) {
  orderPriceCheck.textContent = `Price: $${totPrice}`;
}

let astronautViewButtonCheck = document.getElementById("astronaut-inspect");
if (astronautViewButtonCheck) {
  astronautViewButton.addEventListener("click", () => {
    window.location.href = "astronaut-details-page.html";
    productName = "Astronaut";
    productColor = "Blue";
    productMaterial = "PLA";
    productWeight = 180;
    localStorage.setItem("productName", productName);
    localStorage.setItem("productColor", productColor);
    localStorage.setItem("productMaterial", productMaterial);
    localStorage.setItem("productWeight", productWeight);
    localStorage.setItem("total price", totPrice);
  });
}

let robotViewButtonCheck = document.getElementById("robot-inspect");
if (robotViewButtonCheck) {
  robotViewButton.addEventListener("click", () => {
    window.location.href = "robot-details-page.html";
    productName = "Robot";
    productColor = "Blue";
    productMaterial = "PLA";
    productWeight = 500;
    localStorage.setItem("productName", productName);
    localStorage.setItem("productColor", productColor);
    localStorage.setItem("productMaterial", productMaterial);
    localStorage.setItem("productWeight", productWeight);
    localStorage.setItem("total price", totPrice);
  });
}

let batteryHolderViewButtonCheck = document.getElementById(
  "battery-holder-inspect"
);
if (batteryHolderViewButtonCheck) {
  batteryHolderViewButton.addEventListener("click", () => {
    window.location.href = "battery-holder-details-page.html";
    productName = "Battery Holder";
    productColor = "Blue";
    productMaterial = "PLA";
    productWeight = 100;
    localStorage.setItem("productName", productName);
    localStorage.setItem("productColor", productColor);
    localStorage.setItem("productMaterial", productMaterial);
    localStorage.setItem("productWeight", productWeight);
    localStorage.setItem("total price", totPrice);
  });
}

let hexCoasterViewButtonCheck = document.getElementById("hex-coaster-inspect");
if (hexCoasterViewButtonCheck) {
  hexCoasterViewButton.addEventListener("click", () => {
    window.location.href = "hex-coaster-details-page.html";
    productName = "Hexagon Coaster";
    productColor = "Blue";
    productMaterial = "PLA";
    productWeight = 50;
    localStorage.setItem("productName", productName);
    localStorage.setItem("productColor", productColor);
    localStorage.setItem("productMaterial", productMaterial);
    localStorage.setItem("productWeight", productWeight);
    localStorage.setItem("total price", totPrice);
  });
}

/**
 * Sets the color of the product to blue when the blue color button is clicked
 * @function setBlue
 */
const setBlue = function setBlue() {
  let buttons;
  buttons = document.querySelectorAll(".blue");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        console.log("Blue");
        product.color = "blue";
        productColor = "blue";
        localStorage.setItem("productColor", product.color);
        update();
      }),
    ];
};

/**
 * Sets the color of the product to red when the red color button is clicked
 * @function setRed
 */
const setRed = function setRed() {
  let buttons;
  buttons = document.querySelectorAll(".red");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        console.log("Red");
        product.color = "red";
        productColor = "red";
        localStorage.setItem("productColor", product.color);
        update();
      }),
    ];
};
/**
 * Sets the color of the product to yellow when the yellow color button is clicked
 * @function setYellow
 */
const setYellow = function setYellow() {
  let buttons;
  buttons = document.querySelectorAll(".yellow");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      console.log("Yellow");
      product.color = "yellow";
      productColor = "yellow";
      localStorage.setItem("productColor", product.Color);
      update();
    });
  }
};

/**
 * Sets the color of the product to green when the green color button is clicked.
 * Updates the product color in local storage and calls the update function.
 */
const setGreen = function setGreen() {
  let buttons;
  buttons = document.querySelectorAll(".green");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        console.log("Green");
        product.color = "green";
        productColor = "green";
        localStorage.setItem("productColor", product.color);
        update();
      }),
    ];
};
/**
 * Sets the color of the product to orange when the orange color button is clicked.
 * Updates the product color in local storage and calls the update function.
 */
const setOrange = function setOrange() {
  let buttons;
  buttons = document.querySelectorAll(".orange");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        console.log("Orange");
        product.color = "orange";
        productColor = "orange";
        localStorage.setItem("productColor", product.color);
        update();
      }),
    ];
};
/**
 * Sets the color of the product to purple when the purple color button is clicked.
 * Updates the product color in local storage and calls the update function.
 */
const setPurple = function setPurple() {
  let buttons;
  buttons = document.querySelectorAll(".purple");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        console.log("Purple");
        product.color = "purple";
        productColor = "purple";
        localStorage.setItem("productColor", product.color);
        update();
      }),
    ];
};
const setGrey = function setGrey() {
  let buttons;
  buttons = document.querySelectorAll(".grey");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        console.log("Grey");
        product.color = "grey";
        productColor = "grey";
        localStorage.setItem("productColor", product.color);
        update();
      }),
    ];
};
const setWhite = function setWhite() {
  let buttons;
  buttons = document.querySelectorAll(".white");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        console.log("White");
        product.color = "white";
        productColor = "white";
        localStorage.setItem("productColor", product.color);
        update();
      }),
    ];
};
const setBlack = function setBlack() {
  let buttons;
  buttons = document.querySelectorAll(".black");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        console.log("Black");
        product.color = "black";
        productColor = "black";
        localStorage.setItem("productColor", product.color);
        update();
      }),
    ];
};
const setPink = function setPink() {
  let buttons;
  buttons = document.querySelectorAll(".pink");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        console.log("Pink");
        product.color = "pink";
        productColor = "pink";
        localStorage.setItem("productColor", product.color);
        update();
      }),
    ];
};
const setRainbow = function setRainbow() {
  let buttons;
  buttons = document.querySelectorAll(".rainbow");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        console.log("Rainbow");
        product.color = "rainbow";
        productColor = "rainbow";
        localStorage.setItem("productColor", product.color);
        update();
      }),
    ];
};
const setGold = function setGold() {
  let buttons;
  buttons = document.querySelectorAll(".gold");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        console.log("Gold");
        product.color = "gold";
        productColor = "gold";
        localStorage.setItem("productColor", product.color);
        update();
      }),
    ];
};

const setPLA = function setPLA() {
  let buttons;
  buttons = document.querySelectorAll(".PLA");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        console.log("PLA");
        product.material = "PLA";
        productMaterial = "PLA";
        localStorage.setItem("productMaterial", productMaterial);
        updateMaterial();
        priceUpdate("PLAprice");
      }),
    ];
};

const setPETG = function setPETG() {
  let buttons;
  buttons = document.querySelectorAll(".PETG");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        console.log("PETG");
        product.material = "PETG";
        productMaterial = "PETG";
        localStorage.setItem("productMaterial", productMaterial);
        updateMaterial();
        priceUpdate("PETGprice");
      }),
    ];
};

const setWoodPLA = function setWoodPLA() {
  let buttons;
  buttons = document.querySelectorAll(".Wood-PLA");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        console.log("Wood PLA");
        product.material = "Wood-PLA";
        productMaterial = "Wood-PLA";
        localStorage.setItem("productMaterial", productMaterial);
        updateMaterial();
        priceUpdate("woodPLAprice");
      }),
    ];
};

const setTPU = function setTPU() {
  let buttons;
  buttons = document.querySelectorAll(".TPU");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        console.log("TPU");
        product.material = "TPU";
        productMaterial = "TPU";
        localStorage.setItem("productMaterial", productMaterial);
        updateMaterial();
        priceUpdate("TPUprice");
      }),
    ];
};

const setCarbonFiber = function setCarbonFiber() {
  let buttons;
  buttons = document.querySelectorAll(".Carbon-Fiber");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        console.log("Carbon Fiber");
        product.material = "Carbon-Fiber";
        productMaterial = "Carbon-Fiber";
        localStorage.setItem("productMaterial", productMaterial);
        updateMaterial();
        priceUpdate("carbonFiberprice");
      }),
    ];
};

const setMetal = function setMetal() {
  let buttons;
  buttons = document.querySelectorAll(".Metal");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        console.log("Metal");
        product.material = "Metal";
        productMaterial = "Metal";
        localStorage.setItem("productMaterial", productMaterial);
        updateMaterial();
        priceUpdate("metalprice");
      }),
    ];
};

const order = function order() {
  let buttons;
  buttons = document.querySelectorAll(".add-to-cart-button");
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++)
    [
      buttons[i].addEventListener("click", () => {
        window.location.href = "order.html";
      }),
    ];
};

setBlue();
setRed();
setYellow();
setGreen();
setOrange();
setPurple();
setGrey();
setWhite();
setBlack();
setPink();
setRainbow();
setGold();
setPLA();
setPETG();
setWoodPLA();
setTPU();
setCarbonFiber();
setMetal();
order();

function updateMaterial() {
  capColor(product.color);
  capMaterial(product.material);
  document.getElementById(
    "product-values"
  ).textContent = `Color: ${uppcaseColor}||Material: ${uppcaseMaterial}||Weight: ${product.weight}g`;
}

function update() {
  capColor(product.color);
  capMaterial(product.material);
  document.getElementById(
    "product-values"
  ).textContent = `Color: ${uppcaseColor}||Material: ${uppcaseMaterial}||Weight: ${product.weight}g`;
}

function capColor(str) {
  uppcaseColor = str.charAt(0).toUpperCase() + str.slice(1);
}

function capMaterial(str) {
  uppcaseMaterial = str.charAt(0).toUpperCase() + str.slice(1);
}

function priceUpdate(type) {
  console.log("Hey");
  let productMult = type;
  switch (productMult) {
    case "PLAprice":
      productMult = 2.0;
      break;
    case "PETGprice":
      productMult = 2.5;
      console.log("Yo");
      break;
    case "woodPLAprice":
      productMult = 3.0;
      break;
    case "TPUprice":
      productMult = 3.0;
      break;
    case "carbonFiberprice":
      productMult = 3.5;
      break;
    case "metalprice":
      productMult = 4.5;
      break;
  }
  console.log(productMult);
  console.log(productWeight);
  totPrice = (
    (productWeight / 100) * productMult +
    productWeight / 100
  ).toFixed(2);
  console.log(totPrice);
  localStorage.setItem("total price", totPrice);
  document.getElementById(
    "price-actual"
  ).textContent = `$${localStorage.getItem("total price")}`;
}
