const convertButton = document.querySelector("[data-js=converterButton]");
const menu = document.querySelector("[data-js=menu]");
const lenghtMenu = document.querySelector("[data-js=lenghtMenu");
const convertionLenght = document.querySelector("[data-js=convertionLenght]");
const areaMenu = document.querySelector("[data-js=areaMenu]");
const convertionArea = document.querySelector("[data-js=convertionArea]");

menu.addEventListener("change", () => {
  if (menu.value == "comprimento") {
    lenghtMenu.classList.remove("is-hidden");
    convertionLenght.classList.remove("is-hidden");
    areaMenu.classList.add("is-hidden");
    convertionArea.classList.add("is-hidden");

    convertButton.addEventListener("click", calculateLenght);
    convertButton.removeEventListener("click", calculateArea);
  } else {
    lenghtMenu.classList.add("is-hidden");
    convertionLenght.classList.add("is-hidden");
    areaMenu.classList.remove("is-hidden");
    convertionArea.classList.remove("is-hidden");

    convertButton.removeEventListener("click", calculateLenght);
    convertButton.addEventListener("click", calculateArea);
  }
});

function calculateLenght() {
  const lenghtOption = document.querySelector("[data-js=lenghtOption]").value;
  const number = document.querySelector("[data-js=number]").value;
  const convertLenght = document.querySelector(
    "[data-js=convertLenghtTo]"
  ).value;
  const convertion = document.querySelector("[data-js=result]");
  if (isNaN(parseFloat(number))) return;
  
  let result;
  switch (lenghtOption) {
    case "quilometro":
      if (convertLenght == "quilometro") {
        result = `${number * 1} km`;
      } else if (convertLenght == "hectometro") {
        result = `${number * 10} hm`;
      } else if (convertLenght == "decametro") {
        result = `${number * 100} dam`;
      } else if (convertLenght == "metro") {
        result = `${number * 1000} m`;
      } else if (convertLenght == "decimetro") {
        result = `${number * 10000} dm`;
      } else if (convertLenght == "centimetro") {
        result = `${number * 100000} cm`;
      } else if (convertLenght == "milimetro") {
        result = `${number * 1000000} mm`;
      }
      break;
    case "hectometro":
      if (convertLenght == "hectometro") {
        result = `${number * 1} hm`;
      } else if (convertLenght == "quilometro") {
        result = `${number / 10} km`;
      } else if (convertLenght == "decametro") {
        result = `${number * 10} dam`;
      } else if (convertLenght == "metro") {
        result = `${number * 100} m`;
      } else if (convertLenght == "decimetro") {
        result = `${number * 1000} dm`;
      } else if (convertLenght == "centimetro") {
        result = `${number * 10000} cm`;
      } else if (convertLenght == "milimetro") {
        result = `${number * 100000} mm`;
      }
      break;
    case "decametro":
      if (convertLenght == "decametro") {
        result = `${number * 1} dam`;
      } else if (convertLenght == "quilometro") {
        result = `${number / 100} km`;
      } else if (convertLenght == "hectometro") {
        result = `${number / 10} hm`;
      } else if (convertLenght == "metro") {
        result = `${number * 10} m`;
      } else if (convertLenght == "decimetro") {
        result = `${number * 100} dm`;
      } else if (convertLenght == "centimetro") {
        result = `${number * 1000} cm`;
      } else if (convertLenght == "milimetro") {
        result = `${number * 10000} mm`;
      }
      break;
    case "metro":
      if (convertLenght == "metro") {
        result = `${number * 1} m`;
      } else if (convertLenght == "quilometro") {
        result = `${number / 1000} km`;
      } else if (convertLenght == "hectometro") {
        result = `${number / 100} hm`;
      } else if (convertLenght == "decametro") {
        result = `${number / 10} dam`;
      } else if (convertLenght == "decimetro") {
        result = `${number * 10} dm`;
      } else if (convertLenght == "centimetro") {
        result = `${number * 100} cm`;
      } else if (convertLenght == "milimetro") {
        result = `${number * 1000} mm`;
      }
      break;
    case "decimetro":
      if (convertLenght == "decimetro") {
        result = `${number * 1} dm`;
      } else if (convertLenght == "quilometro") {
        result = `${number / 10000} km`;
      } else if (convertLenght == "hectometro") {
        result = `${number / 1000} hm`;
      } else if (convertLenght == "decametro") {
        result = `${number / 100} dam`;
      } else if (convertLenght == "metro") {
        result = `${number / 10} m`;
      } else if (convertLenght == "centimetro") {
        result = `${number * 10} cm`;
      } else if (convertLenght == "milimetro") {
        result = `${number * 100} mm`;
      }
      break;
    case "centimetro":
      if (convertLenght == "centimetro") {
        result = `${number * 1} cm`;
      } else if (convertLenght == "quilometro") {
        result = `${number / 100000} km`;
      } else if (convertLenght == "hectometro") {
        result = `${number / 10000} hm`;
      } else if (convertLenght == "decametro") {
        result = `${number / 1000} dam`;
      } else if (convertLenght == "metro") {
        result = `${number / 100} m`;
      } else if (convertLenght == "decimetro") {
        result = `${number / 10} dm`;
      } else if (convertLenght == "milimetro") {
        result = `${number * 10} mm`;
      }
      break;
    case "milimetro":
      if (convertLenght == "milimetro") {
        result = `${number * 1} hm`;
      } else if (convertLenght == "quilometro") {
        result = `${number / 1000000} km`;
      } else if (convertLenght == "hectometro") {
        result = `${number / 100000} hm`;
      } else if (convertLenght == "decametro") {
        result = `${number / 10000} dam`;
      } else if (convertLenght == "metro") {
        result = `${number / 1000} m`;
      } else if (convertLenght == "decimetro") {
        result = `${number / 100} dm`;
      } else if (convertLenght == "centimetro") {
        result = `${number / 10} cm`;
      }
      break;
    default:
      break;
  }

  convertion.value = result;
}

function calculateArea() {
  const areaOption = document.querySelector("[data-js=areaOption]").value;
  const number = document.querySelector("[data-js=number]").value;
  const convertArea = document.querySelector("[data-js=convertAreaTo]").value;
  const convertion = document.querySelector("[data-js=result]");

  let result;
  switch (areaOption) {
    case "quilometro_quadrado":
      if (convertArea == "quilometro_quadrado") {
        result = `${number * 1} km²`;
      } else if (convertArea == "hectometro_quadrado") {
        result = `${number * 100} hm²`;
      } else if (convertArea == "decametro_quadrado") {
        result = `${number * 10000} dam²`;
      } else if (convertArea == "metro_quadrado") {
        result = `${number * 1000000} m²`;
      } else if (convertArea == "decimetro_quadrado") {
        result = `${number * 100000000} dm²`;
      } else if (convertArea == "centimetro_quadrado") {
        result = `${number * 10000000000} cm²`;
      } else if (convertArea == "milimetro_quadrado") {
        result = `${number * 1000000000000} mm²`;
      }
      break;
    case "hectometro_quadrado":
      if (convertArea == "hectometro_quadrado") {
        result = `${number * 1} hm²`;
      } else if (convertArea == "quilometro_quadrado") {
        result = `${number / 100} km²`;
      } else if (convertArea == "decametro_quadrado") {
        result = `${number * 100} dam²`;
      } else if (convertArea == "metro_quadrado") {
        result = `${number * 10000} m²`;
      } else if (convertArea == "decimetro_quadrado") {
        result = `${number * 1000000} dm²`;
      } else if (convertArea == "centimetro_quadrado") {
        result = `${number * 100000000} cm²`;
      } else if (convertArea == "milimetro_quadrado") {
        result = `${number * 10000000000} mm²`;
      }
      break;
    case "decametro_quadrado":
      if (convertArea == "decametro_quadrado") {
        result = `${number * 1} dam²`;
      } else if (convertArea == "quilometro_quadrado") {
        result = `${number / 10000} km²`;
      } else if (convertArea == "hectometro_quadrado") {
        result = `${number / 100} hm²`;
      } else if (convertArea == "metro_quadrado") {
        result = `${number * 100} m²`;
      } else if (convertArea == "decimetro_quadrado") {
        result = `${number * 10000} dm²`;
      } else if (convertArea == "centimetro_quadrado") {
        result = `${number * 1000000} cm²`;
      } else if (convertArea == "milimetro_quadrado") {
        result = `${number * 100000000} mm²`;
      }
      break;
    case "metro_quadrado":
      if (convertArea == "metro_quadrado") {
        result = `${number * 1} m²`;
      } else if (convertArea == "quilometro_quadrado") {
        result = `${number / 1000000} km²`;
      } else if (convertArea == "hectometro_quadrado") {
        result = `${number / 10000} dam²`;
      } else if (convertArea == "decametro_quadrado") {
        result = `${number / 100} dam²`;
      } else if (convertArea == "decimetro_quadrado") {
        result = `${number * 100} dm²`;
      } else if (convertArea == "centimetro_quadrado") {
        result = `${number * 10000} cm²`;
      } else if (convertArea == "milimetro_quadrado") {
        result = `${number * 1000000} mm²`;
      }
      break;
    case "decimetro_quadrado":
      if (convertArea == "decimetro_quadrado") {
        result = `${number * 1} dm²`;
      } else if (convertArea == "quilometro_quadrado") {
        result = `${number / 100000000} km²`;
      } else if (convertArea == "hectometro_quadrado") {
        result = `${number / 1000000} dam²`;
      } else if (convertArea == "decametro_quadrado") {
        result = `${number / 10000} dam²`;
      } else if (convertArea == "metro_quadrado") {
        result = `${number / 100} m²`;
      } else if (convertArea == "centimetro_quadrado") {
        result = `${number * 100} cm²`;
      } else if (convertArea == "milimetro_quadrado") {
        result = `${number * 10000} mm²`;
      }
      break;
    case "centimetro_quadrado":
      if (convertArea == "centimetro_quadrado") {
        result = `${number * 1} cm²`;
      } else if (convertArea == "quilometro_quadrado") {
        result = `${number / 10000000000} km²`;
      } else if (convertArea == "hectometro_quadrado") {
        result = `${number / 100000000} dam²`;
      } else if (convertArea == "decametro_quadrado") {
        result = `${number / 1000000} dam²`;
      } else if (convertArea == "metro_quadrado") {
        result = `${number / 10000} m²`;
      } else if (convertArea == "decimetro_quadrado") {
        result = `${number / 100} dm²`;
      } else if (convertArea == "milimetro_quadrado") {
        result = `${number * 100} mm²`;
      }
      break;
    case "milimetro_quadrado":
      if (convertArea == "milimetro_quadrado") {
        result = `${number * 1} mm²`;
      } else if (convertArea == "quilometro_quadrado") {
        result = `${number / 1000000000000} km²`;
      } else if (convertArea == "hectometro_quadrado") {
        result = `${number / 10000000000} dam²`;
      } else if (convertArea == "decametro_quadrado") {
        result = `${number / 100000000} dam²`;
      } else if (convertArea == "metro_quadrado") {
        result = `${number / 1000000} m²`;
      } else if (convertArea == "decimetro_quadrado") {
        result = `${number / 10000} dm²`;
      } else if (convertArea == "centimetro_quadrado") {
        result = `${number / 100} cm²`;
      }
      break;
    default:
      break;
  }

  convertion.value = result;
}

convertButton.addEventListener("click", calculateLenght);
