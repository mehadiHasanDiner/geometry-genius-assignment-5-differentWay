// get the data (using event.target (parent & child))
let serial = 0;

// Card No:1-Triangle Card
document.getElementById("first-card").addEventListener("click", function (e) {
  const inputField1 =
    e.target.parentNode.parentNode.children[2].children[0].value;
  const inputField2 =
    e.target.parentNode.parentNode.children[2].children[2].value;

  if (
    inputField1 == "" ||
    inputField2 == "" ||
    inputField1 <= 0 ||
    inputField2 <= 0
  ) {
    return alert("Input Field must not be empty or negative number.");
  }

  inputField1Number1 = parseFloat(inputField1);
  inputField1Number2 = parseFloat(inputField2);

  if (isNaN(inputField1Number1 || inputField1Number2)) {
    return alert(
      "Please enter a valid number. Don't enter alphanumeric characters"
    );
  }
  // Reset the input field
  e.target.parentNode.parentNode.children[2].children[0].value = 0;
  e.target.parentNode.parentNode.children[2].children[2].value = 0;

  const areaField1 = e.target.parentNode.parentNode.children[1].children[0];
  const areaField2 = e.target.parentNode.parentNode.children[1].children[1];
  const areaFieldText = e.target.parentNode.parentNode.children[0].innerText;
  areaField1.innerText = inputField1Number1;
  areaField2.innerText = inputField1Number2;

  const totalArea = 0.5 * inputField1Number1 * inputField1Number2;
  const totalAreaString = totalArea.toString() + "cm";

  const areaConvertBtn = createAButtonElement();
  setTotal(areaFieldText, totalAreaString, areaConvertBtn);
});

// Card No:2-Rectangle
document.getElementById("second-card").addEventListener("click", function (e) {
  const inputField1 =
    e.target.parentNode.parentNode.children[2].children[0].value;
  const inputField2 =
    e.target.parentNode.parentNode.children[2].children[2].value;

  if (
    inputField1 == "" ||
    inputField2 == "" ||
    inputField1 <= 0 ||
    inputField2 <= 0
  ) {
    return alert("Input Field must not be empty or negative number.");
  }

  inputField1Number1 = parseFloat(inputField1);
  inputField1Number2 = parseFloat(inputField2);

  if (isNaN(inputField1Number1 || inputField1Number2)) {
    return alert(
      "Please enter a valid number. Don't enter alphanumeric characters"
    );
  }
  e.target.parentNode.parentNode.children[2].children[0].value = 0;
  e.target.parentNode.parentNode.children[2].children[2].value = 0;

  const areaField1 = e.target.parentNode.parentNode.children[1].children[0];
  const areaField2 = e.target.parentNode.parentNode.children[1].children[1];
  const areaFieldText = e.target.parentNode.parentNode.children[0].innerText;
  areaField1.innerText = inputField1Number1;
  areaField2.innerText = inputField1Number2;

  const totalArea = inputField1Number1 * inputField1Number2;
  const totalAreaString = totalArea.toString() + "cm";
  const areaConvertBtn = createAButtonElement();
  setTotal(areaFieldText, totalAreaString, areaConvertBtn);
});

// Card:3-Parallelogram area calculation
const parallelogramCard = document.getElementById("btn-parallelogram");
parallelogramCard.addEventListener("click", function () {
  const baseAmount = getValueAndSetCalculatedArea(
    "base-input-pg",
    "base-amount-pg"
  );
  const heightAmount = getValueAndSetCalculatedArea(
    "height-input-pg",
    "height-amount-pg"
  );
  const parallelogramArea = document.getElementById("parallelogram").innerText;
  const totalArea = baseAmount * heightAmount;
  const totalAreaString = totalArea.toFixed(2).toString() + "cm";
  const areaConvertBtn = createAButtonElement();
  setTotal(parallelogramArea, totalAreaString, areaConvertBtn);
  parallelogramCard.setAttribute("disabled", true);
});

// Card:4-Rhombus area calculation
const rhombusCard = document.getElementById("btn-rhombus");
rhombusCard.addEventListener("click", function () {
  const baseAmount = getValueAndSetCalculatedArea(
    "diagonal-1",
    "diagonal-1-amount"
  );
  const heightAmount = getValueAndSetCalculatedArea(
    "diagonal-2",
    "diagonal-2-amount"
  );
  const rhombusArea = document.getElementById("rhombus").innerText;
  const totalArea = 0.5 * baseAmount * heightAmount;
  const totalAreaString = totalArea.toFixed(2).toString() + "cm";
  const areaConvertBtn = createAButtonElement();
  setTotal(rhombusArea, totalAreaString, areaConvertBtn);
  rhombusCard.setAttribute("disabled", true);
});

// Card:5-Pentagon area calculation
const pentagonCard = document.getElementById("btn-pentagon");
pentagonCard.addEventListener("click", function () {
  const baseAmount = getValueAndSetCalculatedArea("area-1", "area-1-amount");
  const heightAmount = getValueAndSetCalculatedArea("area-1", "area-2-amount");
  const pentagonArea = document.getElementById("pentagon").innerText;
  const totalArea = 0.5 * baseAmount * heightAmount;
  const totalAreaString = totalArea.toFixed(2).toString() + "cm";
  const areaConvertBtn = createAButtonElement();
  setTotal(pentagonArea, totalAreaString, areaConvertBtn);
  pentagonCard.setAttribute("disabled", true);
});

// Card:6-Ellipse area calculation
const ellipseCard = document.getElementById("btn-ellipse");
ellipseCard.addEventListener("click", function () {
  const baseAmount = getValueAndSetCalculatedArea("axis-1", "axis-1-amount");
  const heightAmount = getValueAndSetCalculatedArea("axis-1", "axis-2-amount");
  const ellipseArea = document.getElementById("ellipse").innerText;
  const totalArea = 3.1416 * baseAmount * heightAmount;
  const totalAreaString = totalArea.toFixed(2).toString() + "cm";
  const areaConvertBtn = createAButtonElement();
  setTotal(ellipseArea, totalAreaString, areaConvertBtn);
  ellipseCard.setAttribute("disabled", true);
});
