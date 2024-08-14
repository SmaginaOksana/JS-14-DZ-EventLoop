// Задание 1
// Вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
// Сообщение номер 1
// Сообщение номер 2
// Сообщение номер 3
// Сообщение номер 4
// Сообщение номер 5

let numberOfMessages = 5;
const message = (num) => {
  let a = num;
  const messageCount = () => {
    console.log(`Сообщение номер ${a}`);
    a++;
  };
  return messageCount;
};
const messageInterval = setInterval(message(1), 2000);
setTimeout(() => {
  clearInterval(messageInterval);
}, 2000 * numberOfMessages);

// Задание 2
// Сделать виджет - цифровые часы, оформить по желанию.
// Вам нужно будет каждую секунду запускать функцию, которая будет создавать новый объект Date и забирать из него необходимую информацию.

const widget = document.querySelector(".widget");
const date = document.querySelector(".date");
const time = document.querySelector(".time");

const setWidget = () => {
  const optionsDay = { weekday: "long", day: "numeric", month: "long" };
  const dayCurrent = new Date().toLocaleString("ru-RU", optionsDay);
  const optionsTime = { hour: "numeric", minute: "numeric", second: "numeric" };
  const timeCurrent = new Date().toLocaleString("ru-RU", optionsTime);
  date.innerHTML = dayCurrent;
  time.innerHTML = timeCurrent;
};

setInterval(setWidget, 1000);
