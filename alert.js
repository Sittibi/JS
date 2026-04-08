const secretNumber = '7';

 // == это нестрогое равенство, проверяет только значение
if(secretNumber == 7) { 
  console.log('угадал не строго')
}
// строгая равенство, проверяет и тип
if(secretNumber === 7) {  
  console.log('угадал строго')
}


const q = Number(prompt('Введите число'));
if (q === 7) {
  console.log('Угадал строго')
}



