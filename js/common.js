window.addEventListener("scroll", visibleElement);
function visibleElement() {
  const visibleElements = document.querySelectorAll(".visible");
  for (let i = 0; i < visibleElements.length; i++) {
    const windowHeight = window.innerHeight;
    const visibleElementsTop = visibleElements[i].getBoundingClientRect().top;
    const visiblePoint = 96;

    if (visibleElementsTop < windowHeight - visiblePoint) {
      visibleElements[i].classList.add("active");
    } else {
      visibleElements[i].classList.remove("active");
    }
  }
}

// common functions for fixed type areas
function getValueAndSetCalculatedArea(baseElement, heightElement) {
  const base1Amount = document.getElementById(baseElement);
  const base1AmountString = base1Amount.innerText;
  const base1AmountSum = parseFloat(base1AmountString);
  const baseAmountText = document.getElementById(heightElement);
  baseAmountText.innerText = base1AmountSum;
  return baseAmountText.innerText;
}

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

// create button dynamically (important)
function createAButtonElement() {
  // create button dynamically (important)
  const convertBtn = document.createElement("button");
  convertBtn.classList.add("btn", "btn-accent");
  convertBtn.id = "convert-btn-1";
  convertBtn.innerText = "Convert";
  // const convertBtn1 = convertBtn;
  return convertBtn;
}
