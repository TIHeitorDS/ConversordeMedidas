function calculateLenght(convertLengthTo, userValue) {
  const lengthOption = document.querySelector("[data-js=lengthOption]").value;
  const result = document.querySelector("[data-js=result]");

  let _length;
  if (isNaN(parseFloat(userValue))) return;
  switch (lengthOption) {
    case "quilometro":
      if (convertLengthTo == "quilometro") {
        _length = `${userValue * 1} km`;
      } else if (convertLengthTo == "hectometro") {
        _length = `${userValue * 10} hm`;
      } else if (convertLengthTo == "decametro") {
        _length = `${userValue * 100} dam`;
      } else if (convertLengthTo == "metro") {
        _length = `${userValue * 1000} m`;
      } else if (convertLengthTo == "decimetro") {
        _length = `${userValue * 10000} dm`;
      } else if (convertLengthTo == "centimetro") {
        _length = `${userValue * 100000} cm`;
      } else if (convertLengthTo == "milimetro") {
        _length = `${userValue * 1000000} mm`;
      }
      break;
    case "hectometro":
      if (convertLengthTo == "hectometro") {
        _length = `${userValue * 1} hm`;
      } else if (convertLengthTo == "quilometro") {
        _length = `${userValue / 10} km`;
      } else if (convertLengthTo == "decametro") {
        _length = `${userValue * 10} dam`;
      } else if (convertLengthTo == "metro") {
        _length = `${userValue * 100} m`;
      } else if (convertLengthTo == "decimetro") {
        _length = `${userValue * 1000} dm`;
      } else if (convertLengthTo == "centimetro") {
        _length = `${userValue * 10000} cm`;
      } else if (convertLengthTo == "milimetro") {
        _length = `${userValue * 100000} mm`;
      }
      break;
    case "decametro":
      if (convertLengthTo == "decametro") {
        _length = `${userValue * 1} dam`;
      } else if (convertLengthTo == "quilometro") {
        _length = `${userValue / 100} km`;
      } else if (convertLengthTo == "hectometro") {
        _length = `${userValue / 10} hm`;
      } else if (convertLengthTo == "metro") {
        _length = `${userValue * 10} m`;
      } else if (convertLengthTo == "decimetro") {
        _length = `${userValue * 100} dm`;
      } else if (convertLengthTo == "centimetro") {
        _length = `${userValue * 1000} cm`;
      } else if (convertLengthTo == "milimetro") {
        _length = `${userValue * 10000} mm`;
      }
      break;
    case "metro":
      if (convertLengthTo == "metro") {
        _length = `${userValue * 1} m`;
      } else if (convertLengthTo == "quilometro") {
        _length = `${userValue / 1000} km`;
      } else if (convertLengthTo == "hectometro") {
        _length = `${userValue / 100} hm`;
      } else if (convertLengthTo == "decametro") {
        _length = `${userValue / 10} dam`;
      } else if (convertLengthTo == "decimetro") {
        _length = `${userValue * 10} dm`;
      } else if (convertLengthTo == "centimetro") {
        _length = `${userValue * 100} cm`;
      } else if (convertLengthTo == "milimetro") {
        _length = `${userValue * 1000} mm`;
      }
      break;
    case "decimetro":
      if (convertLengthTo == "decimetro") {
        _length = `${userValue * 1} dm`;
      } else if (convertLengthTo == "quilometro") {
        _length = `${userValue / 10000} km`;
      } else if (convertLengthTo == "hectometro") {
        _length = `${userValue / 1000} hm`;
      } else if (convertLengthTo == "decametro") {
        _length = `${userValue / 100} dam`;
      } else if (convertLengthTo == "metro") {
        _length = `${userValue / 10} m`;
      } else if (convertLengthTo == "centimetro") {
        _length = `${userValue * 10} cm`;
      } else if (convertLengthTo == "milimetro") {
        _length = `${userValue * 100} mm`;
      }
      break;
    case "centimetro":
      if (convertLengthTo == "centimetro") {
        _length = `${userValue * 1} cm`;
      } else if (convertLengthTo == "quilometro") {
        _length = `${userValue / 100000} km`;
      } else if (convertLengthTo == "hectometro") {
        _length = `${userValue / 10000} hm`;
      } else if (convertLengthTo == "decametro") {
        _length = `${userValue / 1000} dam`;
      } else if (convertLengthTo == "metro") {
        _length = `${userValue / 100} m`;
      } else if (convertLengthTo == "decimetro") {
        _length = `${userValue / 10} dm`;
      } else if (convertLengthTo == "milimetro") {
        _length = `${userValue * 10} mm`;
      }
      break;
    case "milimetro":
      if (convertLengthTo == "milimetro") {
        _length = `${userValue * 1} hm`;
      } else if (convertLengthTo == "quilometro") {
        _length = `${userValue / 1000000} km`;
      } else if (convertLengthTo == "hectometro") {
        _length = `${userValue / 100000} hm`;
      } else if (convertLengthTo == "decametro") {
        _length = `${userValue / 10000} dam`;
      } else if (convertLengthTo == "metro") {
        _length = `${userValue / 1000} m`;
      } else if (convertLengthTo == "decimetro") {
        _length = `${userValue / 100} dm`;
      } else if (convertLengthTo == "centimetro") {
        _length = `${userValue / 10} cm`;
      }
      break;
    default:
      break;
  }

  result.value = _length;
}

export default calculateLenght;
