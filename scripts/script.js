// IMC = Peso (kg) / altura (m)2
const calcImc = () => {
  const $sex = document.querySelectorAll(".radio-button");
  const $textData = document.querySelectorAll(".text-box");
  const $resultNumber = document.querySelector(".result-number");
  let imc = $textData[1].value / Math.pow($textData[2].value, 2);
  let idealWeight = [
    Math.pow($textData[2].value, 2) * 18.5,
    Math.pow($textData[2].value, 2) * 24.9,
  ];
  console.log(idealWeight);
  $resultNumber.innerHTML = imc;
};

const $sendButton = document.querySelector(".send-button");
$sendButton.addEventListener("click", calcImc);
