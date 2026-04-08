const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 22000;

let message;
if (budget > bmwX3Price) {
  message = "BMW";
} else if (budget > fordFocusPrice) {
  message = "FORD";
} else {
  message = "Купи велосипед";
}

console.log(`Я хочу купить ${message}`);

10 > 4 ? console.log("Больше нуля") : console.log("Не больше нуля");

if (10 > 11) {
  console.log("Больше нуля");
} else {
  console.log("Не больше нуля");
}

let str = 10 > 4 ? "Больше нуля" : "Не больше нуля";
console.log(str);

console.log(`${budget > bmwX3Price ? "Куплю BMW" : "Куплю велосипед"}`);

let canBuy =
  budget > bmwX3Price
    ? "Куплю BMW"
    : budget > fordFocusPrice
      ? "Куплю Ford"
      : "Куплю велосипед";
console.log(canBuy);
