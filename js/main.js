const item_1 = document.getElementById("item-1");
const item_2 = document.getElementById("item-2");
const item_3 = document.getElementById("item-3");

const big = document.getElementById("big");

item_1.onclick = active;
item_2.onclick = active;
item_3.onclick = active;

item_1.addEventListener("click", news_toggle);
item_2.addEventListener("click", news_toggle);
item_3.addEventListener("click", news_toggle);

function active() {
  item_1.classList.remove("active");
  item_2.classList.remove("active");
  item_3.classList.remove("active");

  this.classList.toggle("active");
}

function news_toggle() {
  let src = this.firstElementChild.firstElementChild.src;
  let txt = this.lastElementChild.innerHTML;

  big.style.backgroundImage = `url(${src})`;
  big.firstElementChild.innerHTML = txt;
}
