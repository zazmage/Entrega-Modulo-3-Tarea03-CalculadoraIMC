class imcEntry {
  constructor(gender, age, weight, height, imc, idealWeight) {
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.imc = imc;
    this.idealWeight = idealWeight;
  }
}

const roundNumber = (num, decimals) => {
  let fpoint = parseInt("1" + "0".repeat(decimals));
  return Math.round((num + Number.EPSILON) * fpoint) / fpoint;
};

const resetForm = () => {
  const $gender = document.querySelectorAll(".radio-button");
  const $textData = document.querySelectorAll(".text-box");
  $gender.forEach((i) => {
    i.checked = false;
  });
  $textData.forEach((i) => {
    i.value = "";
  });
};

const statusBarControl = (imc) => {
  const $statusBarIndicator = document.querySelector(".status-bar-indicator");
  const range = [
    [14, 18.5],
    [18.5, 25],
    [25, 30],
    [30, 34.9],
  ];
  const percentajeColor = [
    [0, 21.53],
    [21.53, 52.15],
    [52.15, 75.59],
    [75.59, 100],
  ];
  for (let i = 0; i < range.length; i++) {
    if (imc < 14) {
      $statusBarIndicator.style.left = 0;
      break;
    } else if (imc >= 34.9) {
      $statusBarIndicator.style.left = "auto";
      $statusBarIndicator.style.right = 0;
      break;
    } else if (range[i][0] <= imc && imc < range[i][1]) {
      let innerPercentaje =
        ((imc - range[i][0]) * 100) / (range[i][1] - range[i][0]);
      let percentaje =
        (innerPercentaje * (percentajeColor[i][1] - percentajeColor[i][0])) /
        100;
      let position = percentajeColor[i][0] + percentaje;
      $statusBarIndicator.style.left = `${position}%`;
      break;
    }
  }
};

const calcImc = () => {
  const resultColors = [
    [14, 18.5, "#1c7ed3"],
    [18.5, 25, "#40bc66"],
    [25, 30, "#faba01"],
    [30, 34.9, "#f3432f"],
  ];
  const $resultContainer = document.querySelector(".result-container");
  const $gender = document.querySelectorAll(".radio-button");
  const $textData = document.querySelectorAll(".text-box");
  const $resultNumber = document.querySelector(".result-number");
  const $idealWeightMessage = document.querySelector(".ideal-weight-message");
  let imc = roundNumber(
    $textData[1].value / Math.pow($textData[2].value, 2),
    2
  );
  let idealWeight = [
    roundNumber(Math.pow($textData[2].value, 2) * 18.5, 2),
    roundNumber(Math.pow($textData[2].value, 2) * 24.9, 2),
  ];
  let $genderSelected;
  $gender.forEach((i) => {
    if (i.checked) {
      $genderSelected = i;
    }
  });
  $resultContainer.style.display = "block";
  if (imc && imc !== Infinity) {
    statusBarControl(imc);
    for (let i = 0; i < resultColors.length; i++) {
      if (imc < 14) {
        $resultNumber.style.color = resultColors[0][2];
      } else if (imc > 34.9) {
        $resultNumber.style.color = resultColors[3][2];
      } else if (resultColors[i][0] <= imc && imc < resultColors[i][1]) {
        $resultNumber.style.color = resultColors[i][2];
      }
    }
    $resultNumber.innerHTML = imc;
    $idealWeightMessage.innerHTML = `Peso ideal: ${idealWeight[0]} - ${idealWeight[1]} (KG)`;
    if ($genderSelected) {
      // gender
      if ($textData[0].value) {
        // age
        const imcObject = new imcEntry(
          $genderSelected.id,
          $textData[0].value,
          $textData[1].value,
          $textData[2].value,
          imc,
          idealWeight
        );
        const savedData = JSON.parse(localStorage.getItem("dataframe"));
        if (savedData) {
          savedData.push(imcObject);
          localStorage.setItem("dataframe", JSON.stringify(savedData));
        } else {
          localStorage.setItem("dataframe", JSON.stringify([imcObject]));
        }
      }
    }
  } else {
    let errorMessage = "Porfavor ingrese su estatura y su peso";
    $resultNumber.style.color = resultColors[3][2];
    $resultNumber.innerHTML = errorMessage;
  }
};

const $sendButton = document.querySelector(".send-button");
$sendButton.addEventListener("click", calcImc);
