let res = prompt("Сколько будет 7 + или - 15");

switch (true) {
  case res === "я не роборт":
  case Number(res) === 22:
  case Number(res) === -8:
    console.log("Успех");
    break;22
  default:
    console.log("Вы робот");
}
