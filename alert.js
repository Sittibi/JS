const role = "manager";

// if( role === 'manager') {
//   console.log ('Менеджер')
// }
// else if (roloe === 'admin') {
//   console.log('Админ')
// }
// else if(role === 'seo') {
//   console.log ('СЕО')
// }

switch (role) {
  case "manager": // role === 'manager
    console.log("Менеджер");
    break; // останавливает функцию при нахождение значения
  case "admin": // role === 'manager
    console.log("Админ");
    break;
  case "seo":
    console.log("CEO");
    break;
  default:
    console.log("мы тебя не знаем");
}
switch (role) {
  case "manager":
  case "admin":
    console.log("Не руководитель");
    break;
  case "seo":
    console.log("Руководитель");
    break;
  default:
    console.log("мы тебя не знаем");
}

const num = 1;

switch(true) {

  case num > 0:     // true === num > 0
  console.log('Положительный');
  break;
  case num < 0:
  console.log('Отрицательный');
  break;
  case num = 0:
  console.log('Ноль');
  break;
}
