// get the total
let serial = 0;
document.getElementById("first-card").addEventListener("click", function (e) {
  const inputField1 =
    e.target.parentNode.parentNode.children[2].children[0].value;
  inputField1Number1 = parseFloat(inputField1);
  const inputField2 =
    e.target.parentNode.parentNode.children[2].children[2].value;
  inputField1Number2 = parseFloat(inputField2);
  const areaField1 = e.target.parentNode.parentNode.children[1].children[0];
  const areaField2 = e.target.parentNode.parentNode.children[1].children[1];
  const areaFieldText = e.target.parentNode.parentNode.children[0].innerText;
  areaField1.innerText = inputField1Number1;
  areaField2.innerText = inputField1Number2;

  const totalArea = 0.5 * inputField1Number1 * inputField1Number2;
  setTotal(areaFieldText, totalArea);
});

// set the total
function setTotal(shapeName, shapeTotal) {
  serial++;
  const newButton = document.createElement("button");
  const btnDesign = newButton.classList.add("btn");
  btnDesign.innerText = "Convert";
  const tr = document.getElementById("table-container");
  tr.innerHTML = `
  <tb>${serial}</tb>
  <tb>${shapeName}</tb>
  <tb>${shapeTotal}</tb>
  <tb>${btnDesign}</tb>
  `;
}
