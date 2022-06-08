// 3. Сделайте функцию, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать **`true`** или **`false` -** 10 баллов

function func(elem, array) {
  let result = array.includes(elem);
  return result;
}

let arr = ["Fifa", "China", "City"];

console.log(func("China", arr));
console.log(func("Kazak", arr));
