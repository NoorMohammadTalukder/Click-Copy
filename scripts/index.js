const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

function copyText(e) {
  e.preventDefault();

  coupon.select();
  coupon.setSelectionRange(0, 999999);
  document.execCommand("copy");

  btn.textContent = "Coupon Copied!!!";
}

btn.addEventListener("click", copyText);
