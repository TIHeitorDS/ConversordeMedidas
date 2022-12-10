import calculateLenght from "./calculateLength";
import calculateArea from "./calculateArea";

const convertButton = document.querySelector("[data-js=converterButton]");

const menu = document.querySelector("[data-js=menu]");
const lengthMenu = document.querySelector("[data-js=lengthMenu]");
const areaMenu = document.querySelector("[data-js=areaMenu]");
const lengthConvertion = document.querySelector("[data-js=lengthConvertion]");
const areaConvertion = document.querySelector("[data-js=areaConvertion]");

menu.addEventListener("change", () => {
  if (menu.value == "comprimento") {
    lengthMenu.classList.remove("is-hidden");
    lengthConvertion.classList.remove("is-hidden");
    areaMenu.classList.add("is-hidden");
    areaConvertion.classList.add("is-hidden");

    convertButton.removeEventListener("click", calculateArea);
    convertButton.addEventListener("click", () => {
      const userValue = document.querySelector("[data-js=userValue]").value;
      const convertLengthTo = document.querySelector(
        "[data-js=convertLengthTo]"
      ).value;
      calculateLenght(convertLengthTo, userValue);
    });
  } else {
    lengthMenu.classList.add("is-hidden");
    lengthConvertion.classList.add("is-hidden");
    areaMenu.classList.remove("is-hidden");
    areaConvertion.classList.remove("is-hidden");

    convertButton.removeEventListener("click", calculateLenght);
    convertButton.addEventListener("click", () => {
      const convertAreaTo = document.querySelector(
        "[data-js=convertAreaTo]"
      ).value;
      const userValue = document.querySelector("[data-js=userValue]").value;
      calculateArea(convertAreaTo, userValue);
    });
  }
});

convertButton.addEventListener("click", () => {
  const userValue = document.querySelector("[data-js=userValue]").value;
  const convertLengthTo = document.querySelector(
    "[data-js=convertLengthTo]"
  ).value;
  calculateLenght(convertLengthTo, userValue);
});
