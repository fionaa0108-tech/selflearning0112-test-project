const numA = document.getElementById("numA");
const numB = document.getElementById("numB");
const operation = document.getElementById("operation");
const calcBtn = document.getElementById("calcBtn");
const resultValue = document.getElementById("resultValue");

const formatResult = (value) => {
  if (!Number.isFinite(value)) {
    return "无法计算";
  }
  return Number.isInteger(value) ? value.toString() : value.toFixed(6).replace(/\.0+$|(?<=\.[0-9]*?)0+$/, "");
};

const calculate = () => {
  const a = Number(numA.value);
  const b = Number(numB.value);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    resultValue.textContent = "请输入有效数字";
    return;
  }

  let result;

  switch (operation.value) {
    case "add":
      result = a + b;
      break;
    case "sub":
      result = a - b;
      break;
    case "mul":
      result = a * b;
      break;
    case "div":
      result = b === 0 ? NaN : a / b;
      break;
    default:
      result = NaN;
  }

  resultValue.textContent = formatResult(result);
};

calcBtn.addEventListener("click", calculate);

[numA, numB, operation].forEach((element) => {
  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      calculate();
    }
  });
});
