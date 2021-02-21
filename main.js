const checkBox = document.querySelector(".switch input");
const duration = document.querySelector(".month");
const price = document.querySelector(".price .pricefix");
const switcher = document.querySelector(".switch");
const range = document.querySelector(".range");
const pageViews = document.querySelector(".page-views");

// Create price on switch

switcher.onclick = function () {
  if (checkBox.checked == true) {
    const priceInt = parseInt(price.textContent);
    price.textContent = `${(priceInt - priceInt * 0.25) * 12}`;

    duration.textContent = "/year";
  } else {
    updatePrice();

    duration.textContent = "/month";
  }
};

// Range input
range.addEventListener("input", updatePrice);

// Update price
function updatePrice() {
  if (range.value == 1) {
    if (checkBox.checked == true) {
      price.textContent = `${(8 - 8 * 0.25) * 12}`;
    } else {
      price.textContent = 8;
    }

    pageViews.textContent = "10K";
  }

  if (range.value == 2) {
    if (checkBox.checked == true) {
      price.textContent = 108;
    } else {
      price.textContent = 12;
    }

    pageViews.textContent = "50K";
  }

  if (range.value == 3) {
    if (checkBox.checked == true) {
      price.textContent = 144;
    } else {
      price.textContent = 16;
    }

    pageViews.textContent = "100K";
  }

  if (range.value == 4) {
    if (checkBox.checked == true) {
      price.textContent = 216;
    } else {
      price.textContent = 24;
    }

    pageViews.textContent = "500K";
  }

  if (range.value == 5) {
    if (checkBox.checked == true) {
      price.textContent = 324;
    } else {
      price.textContent = 36;
    }

    pageViews.textContent = "1M";
  }
}
