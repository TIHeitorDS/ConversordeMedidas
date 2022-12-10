function calculateArea(convertArea, userValue) {
  const areaOption = document.querySelector("[data-js=areaOption]").value;
  const convertion = document.querySelector("[data-js=result]");

  let _area;
  if (isNaN(parseFloat(userValue))) return;
  switch (areaOption) {
    case "quilometro_quadrado":
      if (convertArea == "quilometro_quadrado") {
        _area = `${userValue * 1} km²`;
      } else if (convertArea == "hectometro_quadrado") {
        _area = `${userValue * 100} hm²`;
      } else if (convertArea == "decametro_quadrado") {
        _area = `${userValue * 10000} dam²`;
      } else if (convertArea == "metro_quadrado") {
        _area = `${userValue * 1000000} m²`;
      } else if (convertArea == "decimetro_quadrado") {
        _area = `${userValue * 100000000} dm²`;
      } else if (convertArea == "centimetro_quadrado") {
        _area = `${userValue * 10000000000} cm²`;
      } else if (convertArea == "milimetro_quadrado") {
        _area = `${userValue * 1000000000000} mm²`;
      }
      break;
    case "hectometro_quadrado":
      if (convertArea == "hectometro_quadrado") {
        _area = `${userValue * 1} hm²`;
      } else if (convertArea == "quilometro_quadrado") {
        _area = `${userValue / 100} km²`;
      } else if (convertArea == "decametro_quadrado") {
        _area = `${userValue * 100} dam²`;
      } else if (convertArea == "metro_quadrado") {
        _area = `${userValue * 10000} m²`;
      } else if (convertArea == "decimetro_quadrado") {
        _area = `${userValue * 1000000} dm²`;
      } else if (convertArea == "centimetro_quadrado") {
        _area = `${userValue * 100000000} cm²`;
      } else if (convertArea == "milimetro_quadrado") {
        _area = `${userValue * 10000000000} mm²`;
      }
      break;
    case "decametro_quadrado":
      if (convertArea == "decametro_quadrado") {
        _area = `${userValue * 1} dam²`;
      } else if (convertArea == "quilometro_quadrado") {
        _area = `${userValue / 10000} km²`;
      } else if (convertArea == "hectometro_quadrado") {
        _area = `${userValue / 100} hm²`;
      } else if (convertArea == "metro_quadrado") {
        _area = `${userValue * 100} m²`;
      } else if (convertArea == "decimetro_quadrado") {
        _area = `${userValue * 10000} dm²`;
      } else if (convertArea == "centimetro_quadrado") {
        _area = `${userValue * 1000000} cm²`;
      } else if (convertArea == "milimetro_quadrado") {
        _area = `${userValue * 100000000} mm²`;
      }
      break;
    case "metro_quadrado":
      if (convertArea == "metro_quadrado") {
        _area = `${userValue * 1} m²`;
      } else if (convertArea == "quilometro_quadrado") {
        _area = `${userValue / 1000000} km²`;
      } else if (convertArea == "hectometro_quadrado") {
        _area = `${userValue / 10000} dam²`;
      } else if (convertArea == "decametro_quadrado") {
        _area = `${userValue / 100} dam²`;
      } else if (convertArea == "decimetro_quadrado") {
        _area = `${userValue * 100} dm²`;
      } else if (convertArea == "centimetro_quadrado") {
        _area = `${userValue * 10000} cm²`;
      } else if (convertArea == "milimetro_quadrado") {
        _area = `${userValue * 1000000} mm²`;
      }
      break;
    case "decimetro_quadrado":
      if (convertArea == "decimetro_quadrado") {
        _area = `${userValue * 1} dm²`;
      } else if (convertArea == "quilometro_quadrado") {
        _area = `${userValue / 100000000} km²`;
      } else if (convertArea == "hectometro_quadrado") {
        _area = `${userValue / 1000000} dam²`;
      } else if (convertArea == "decametro_quadrado") {
        _area = `${userValue / 10000} dam²`;
      } else if (convertArea == "metro_quadrado") {
        _area = `${userValue / 100} m²`;
      } else if (convertArea == "centimetro_quadrado") {
        _area = `${userValue * 100} cm²`;
      } else if (convertArea == "milimetro_quadrado") {
        _area = `${userValue * 10000} mm²`;
      }
      break;
    case "centimetro_quadrado":
      if (convertArea == "centimetro_quadrado") {
        _area = `${userValue * 1} cm²`;
      } else if (convertArea == "quilometro_quadrado") {
        _area = `${userValue / 10000000000} km²`;
      } else if (convertArea == "hectometro_quadrado") {
        _area = `${userValue / 100000000} dam²`;
      } else if (convertArea == "decametro_quadrado") {
        _area = `${userValue / 1000000} dam²`;
      } else if (convertArea == "metro_quadrado") {
        _area = `${userValue / 10000} m²`;
      } else if (convertArea == "decimetro_quadrado") {
        _area = `${userValue / 100} dm²`;
      } else if (convertArea == "milimetro_quadrado") {
        _area = `${userValue * 100} mm²`;
      }
      break;
    case "milimetro_quadrado":
      if (convertArea == "milimetro_quadrado") {
        _area = `${userValue * 1} mm²`;
      } else if (convertArea == "quilometro_quadrado") {
        _area = `${userValue / 1000000000000} km²`;
      } else if (convertArea == "hectometro_quadrado") {
        _area = `${userValue / 10000000000} dam²`;
      } else if (convertArea == "decametro_quadrado") {
        _area = `${userValue / 100000000} dam²`;
      } else if (convertArea == "metro_quadrado") {
        _area = `${userValue / 1000000} m²`;
      } else if (convertArea == "decimetro_quadrado") {
        _area = `${userValue / 10000} dm²`;
      } else if (convertArea == "centimetro_quadrado") {
        _area = `${userValue / 100} cm²`;
      }
      break;
    default:
      break;
  }

  convertion.value = _area;
}

export default calculateArea;
