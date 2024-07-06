const displey = document.getElementById("displey");
const cancelBtn = document.getElementById("cancel");
const otmenaBtn = document.getElementById("otmena");
const delenieBtn = document.getElementById("delenie");
const umnojenieBtn = document.getElementById("umnojenie");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const ravnoBtn = document.getElementById("ravno");
const tochkaBtn = document.getElementById("tochka");
const semBtn = document.getElementById("sem");
const vosemBtn = document.getElementById("vosem");
const devyatBtn = document.getElementById("devyat");
const chetireBtn = document.getElementById("chetire");
const pyatBtn = document.getElementById("pyat");
const shestBtn = document.getElementById("shest");
const odinBtn = document.getElementById("odin");
const dvaBtn = document.getElementById("dva");
const triBtn = document.getElementById("tri");
const nulBtn = document.getElementById("nul");

let currentOperand = "";
let previousOperand = "";
let operation = undefined;

function updateDispley() {
  displey.value = currentOperand;
}

function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) return;
  currentOperand += number.toString();
  updateDispley();
}

nulBtn.addEventListener("click", () => {
  appendNumber("0");
});
odinBtn.addEventListener("click", () => {
  appendNumber("1");
});
dvaBtn.addEventListener("click", () => {
  appendNumber("2");
});
triBtn.addEventListener("click", () => {
  appendNumber("3");
});
chetireBtn.addEventListener("click", () => {
  appendNumber("4");
});
pyatBtn.addEventListener("click", () => {
  appendNumber("5");
});
shestBtn.addEventListener("click", () => {
  appendNumber("6");
});
semBtn.addEventListener("click", () => {
  appendNumber("7");
});
vosemBtn.addEventListener("click", () => {
  appendNumber("8");
});
devyatBtn.addEventListener("click", () => {
  appendNumber("9");
});

tochkaBtn.addEventListener("click", () => {
  appendNumber(".");
});

cancelBtn.addEventListener("click", () => {
  currentOperand = "";
  previousOperand = "";
  operation = undefined;
  updateDispley();
});

otmenaBtn.addEventListener("click", () => {
  currentOperand = currentOperand.toString().slice(0, -1);
  updateDispley();
});

function operate() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation;
  operation = undefined;
  previousOperand = "";
}

plusBtn.addEventListener("click", () => {
  if (currentOperand === "") return;
  operate();
  operation = "+";
  previousOperand = currentOperand;
  currentOperand = "";
});

minusBtn.addEventListener("click", () => {
  if (currentOperand === "") return;
  operate();
  operation = "-";
  previousOperand = currentOperand;
  currentOperand = "";
});

umnojenieBtn.addEventListener("click", () => {
  if (currentOperand === "") return;
  operate();
  operation = "*";
  previousOperand = currentOperand;
  currentOperand = "";
});

delenieBtn.addEventListener("click", () => {
  if (currentOperand === "") return;
  operate();
  operation = "/";
  previousOperand = currentOperand;
  currentOperand = "";
});

ravnoBtn.addEventListener("click", () => {
  operate();
  updateDispley();
});

updateDispley();
