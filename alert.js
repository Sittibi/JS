const age = '18';
// со знаком + не преобразут строку в число. Number селектор преобразования.
console.log(Number(age) + 5);
// c другими значниями - * / автоматически переводит строку в число
console.log(age - 3);
// String селектор преобразования в строку.
console.log(String(4) + 3);

// Boolean имеет числовое значение false = 0 true = 1
console.log(Boolean('') + 3);
console.log(true + 3);




