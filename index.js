let prevNum;
let znak;
let isEqul = "off";
let currNum;
let inputVar = document.getElementsByTagName("input");

function delStr() {
  inputVar[0].value = "0";
  prevNum = 0;
  znak = "del";
}

function myFunc(num) {
  if (inputVar[0].value === "0" || isEqul === "on") {
    inputVar[0].value = num;
  } else inputVar[0].value += num;
  isEqul = "off";
}
function calculator(newZnak) {
  prevNum = inputVar[0].value;
  inputVar[0].value = "0";
  znak = newZnak;
}

function equl() {
  switch (znak) {
    case "plus":
      currNum = inputVar[0].value;
      inputVar[0].value = parseFloat(prevNum) + parseFloat(currNum);
      znak = "plusAgain";
      break;
    case "plusAgain":
      inputVar[0].value = parseFloat(currNum) + parseFloat(inputVar[0].value);
      break;
    case "minus":
      currNum = inputVar[0].value;
      inputVar[0].value = parseFloat(prevNum) - parseFloat(currNum);
      znak = "minusAgain";
      break;
    case "minusAgain":
      inputVar[0].value -= parseFloat(currNum);
      break;
    case "mul":
      currNum = inputVar[0].value;
      inputVar[0].value = parseFloat(prevNum) * parseFloat(currNum);
      znak = "mulAgain";
      break;
    case "mulAgain":
      inputVar[0].value *= parseFloat(currNum);
      break;
    case "div":
      currNum = inputVar[0].value;
      inputVar[0].value = parseFloat(prevNum) / parseFloat(currNum);
      znak = "divAgain";
      break;
    case "divAgain":
      inputVar[0].value /= parseFloat(currNum);
      break;
  }
  isEqul = "on";
}
