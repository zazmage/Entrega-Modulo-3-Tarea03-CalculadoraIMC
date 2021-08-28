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

const calcImc = () => {
  const $gender = document.querySelectorAll(".radio-button");
  const $textData = document.querySelectorAll(".text-box");
  const $resultNumber = document.querySelector(".result-number");
  let imc = Math.round($textData[1].value / Math.pow($textData[2].value, 2), 2);
  let idealWeight = [
    Math.round(Math.pow($textData[2].value, 2) * 18.5, 2),
    Math.round(Math.pow($textData[2].value, 2) * 24.9, 2),
  ];
  let $genderSelected;
  $gender.forEach((i) => {
    if (i.checked) {
      $genderSelected = i;
    }
  });
  if (imc && imc !== Infinity) {
    $resultNumber.innerHTML = imc;
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
        resetForm();
      }
    }
  } else {
    let errorMessage = "Porfavor ingrese su estatura y su peso";
    $resultNumber.innerHTML = errorMessage;
  }
};

const $sendButton = document.querySelector(".send-button");
$sendButton.addEventListener("click", calcImc);
