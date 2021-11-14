function showVerticalMessage(str) {
  if (!str) return;

  if (str[0] === "м") {
    str = str[0].toUpperCase() + str.slice(1);
  }

  str = str.slice(0, 10);

  let res = ""; // Нужна что бы не выводить посимвольно в консоль лог
  for (let i = 0; i < str.length; i++) {
    res += str[i] + "\n";
  }
  console.log(res);
}
showVerticalMessage("марафон");
showVerticalMessage("немарафон");
showVerticalMessage("Не марафон, а марафонище");
