// 2. Напишите функцию, которая проверяет число четное или не четное: если четное возвращает **`true`** иначе **`false`** - 10 баллов

function evenNubmer(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(evenNubmer(5));
console.log(evenNubmer(6));
