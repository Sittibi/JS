const money = 12000;
const yeahrProcent = 0.07;
const moneyPerMonth = (money * yeahrProcent) / 12;
const fullPayment = money + moneyPerMonth * 24;
const houseCost = 13500;

if (fullPayment > houseCost) {
    console.log(`Мы накопили: ${fullPayment}$. Ура, я куплю дом. Остаток ${fullPayment - houseCost}$.`);
} else {
  console.log(`Столько копил, а денег не хватило на дом. Ушла в минус на ${fullPayment - houseCost}$ =(`);
}

