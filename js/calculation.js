// get the data (using event.target (parent & child))
let serial = 0;

// Card No:1
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

  // create button dynamically (important)
  const convertBtn = document.createElement("button");
  convertBtn.classList.add("btn", "btn-accent");
  convertBtn.id = "convert-btn-1";
  convertBtn.innerText = "Convert";
  const convertBtn1 = convertBtn;
  // console.log(convertBtn1);

  setTotal(areaFieldText, totalAreaString, convertBtn1);
});

// Card No:2
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
  // Reset the input field
  e.target.parentNode.parentNode.children[2].children[0].value = 0;
  e.target.parentNode.parentNode.children[2].children[2].value = 0;

  const areaField1 = e.target.parentNode.parentNode.children[1].children[0];
  const areaField2 = e.target.parentNode.parentNode.children[1].children[1];
  const areaFieldText = e.target.parentNode.parentNode.children[0].innerText;
  areaField1.innerText = inputField1Number1;
  areaField2.innerText = inputField1Number2;

  const totalArea = inputField1Number1 * inputField1Number2;
  const totalAreaString = totalArea.toString() + "cm";

  // create button dynamically (important)
  const convertBtn = document.createElement("button");
  convertBtn.classList.add("btn", "btn-accent");
  convertBtn.id = "convert-btn-1";
  convertBtn.innerText = "Convert";
  const convertBtn1 = convertBtn;
  // console.log(convertBtn1);

  setTotal(areaFieldText, totalAreaString, convertBtn1);
});

// set the total
function setTotal(shapeName, shapeTotal, convertBtn) {
  serial++;
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${serial}</td>
  <td>${shapeName}</td>
  <td>${shapeTotal}<sup>2</sup></td>
  `;
  tr.appendChild(convertBtn);
  container.appendChild(tr);

  // convert button for converting cm to m
  convertBtn.addEventListener("click", function (e) {
    const convertToMeter = parseInt(shapeTotal) * 100;
    const areaTarget = e.target.parentNode.children[2];
    areaTarget.innerHTML = convertToMeter + "m" + "<sup>2</sup>";
  });
}
