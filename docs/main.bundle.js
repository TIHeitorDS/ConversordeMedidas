(() => {
  "use strict";
  const e = function (e, m) {
      const o = document.querySelector("[data-js=lengthOption]").value,
        a = document.querySelector("[data-js=result]");
      let t;
      if (!isNaN(parseFloat(m))) {
        switch (o) {
          case "quilometro":
            "quilometro" == e
              ? (t = 1 * m + " km")
              : "hectometro" == e
              ? (t = 10 * m + " hm")
              : "decametro" == e
              ? (t = 100 * m + " dam")
              : "metro" == e
              ? (t = 1e3 * m + " m")
              : "decimetro" == e
              ? (t = 1e4 * m + " dm")
              : "centimetro" == e
              ? (t = 1e5 * m + " cm")
              : "milimetro" == e && (t = 1e6 * m + " mm");
            break;
          case "hectometro":
            "hectometro" == e
              ? (t = 1 * m + " hm")
              : "quilometro" == e
              ? (t = m / 10 + " km")
              : "decametro" == e
              ? (t = 10 * m + " dam")
              : "metro" == e
              ? (t = 100 * m + " m")
              : "decimetro" == e
              ? (t = 1e3 * m + " dm")
              : "centimetro" == e
              ? (t = 1e4 * m + " cm")
              : "milimetro" == e && (t = 1e5 * m + " mm");
            break;
          case "decametro":
            "decametro" == e
              ? (t = 1 * m + " dam")
              : "quilometro" == e
              ? (t = m / 100 + " km")
              : "hectometro" == e
              ? (t = m / 10 + " hm")
              : "metro" == e
              ? (t = 10 * m + " m")
              : "decimetro" == e
              ? (t = 100 * m + " dm")
              : "centimetro" == e
              ? (t = 1e3 * m + " cm")
              : "milimetro" == e && (t = 1e4 * m + " mm");
            break;
          case "metro":
            "metro" == e
              ? (t = 1 * m + " m")
              : "quilometro" == e
              ? (t = m / 1e3 + " km")
              : "hectometro" == e
              ? (t = m / 100 + " hm")
              : "decametro" == e
              ? (t = m / 10 + " dam")
              : "decimetro" == e
              ? (t = 10 * m + " dm")
              : "centimetro" == e
              ? (t = 100 * m + " cm")
              : "milimetro" == e && (t = 1e3 * m + " mm");
            break;
          case "decimetro":
            "decimetro" == e
              ? (t = 1 * m + " dm")
              : "quilometro" == e
              ? (t = m / 1e4 + " km")
              : "hectometro" == e
              ? (t = m / 1e3 + " hm")
              : "decametro" == e
              ? (t = m / 100 + " dam")
              : "metro" == e
              ? (t = m / 10 + " m")
              : "centimetro" == e
              ? (t = 10 * m + " cm")
              : "milimetro" == e && (t = 100 * m + " mm");
            break;
          case "centimetro":
            "centimetro" == e
              ? (t = 1 * m + " cm")
              : "quilometro" == e
              ? (t = m / 1e5 + " km")
              : "hectometro" == e
              ? (t = m / 1e4 + " hm")
              : "decametro" == e
              ? (t = m / 1e3 + " dam")
              : "metro" == e
              ? (t = m / 100 + " m")
              : "decimetro" == e
              ? (t = m / 10 + " dm")
              : "milimetro" == e && (t = 10 * m + " mm");
            break;
          case "milimetro":
            "milimetro" == e
              ? (t = 1 * m + " hm")
              : "quilometro" == e
              ? (t = m / 1e6 + " km")
              : "hectometro" == e
              ? (t = m / 1e5 + " hm")
              : "decametro" == e
              ? (t = m / 1e4 + " dam")
              : "metro" == e
              ? (t = m / 1e3 + " m")
              : "decimetro" == e
              ? (t = m / 100 + " dm")
              : "centimetro" == e && (t = m / 10 + " cm");
        }
        a.value = t;
      }
    },
    m = function (e, m) {
      const o = document.querySelector("[data-js=areaOption]").value,
        a = document.querySelector("[data-js=result]");
      let t;
      if (!isNaN(parseFloat(m))) {
        switch (o) {
          case "quilometro_quadrado":
            "quilometro_quadrado" == e
              ? (t = 1 * m + " km²")
              : "hectometro_quadrado" == e
              ? (t = 100 * m + " hm²")
              : "decametro_quadrado" == e
              ? (t = 1e4 * m + " dam²")
              : "metro_quadrado" == e
              ? (t = 1e6 * m + " m²")
              : "decimetro_quadrado" == e
              ? (t = 1e8 * m + " dm²")
              : "centimetro_quadrado" == e
              ? (t = 1e10 * m + " cm²")
              : "milimetro_quadrado" == e && (t = 1e12 * m + " mm²");
            break;
          case "hectometro_quadrado":
            "hectometro_quadrado" == e
              ? (t = 1 * m + " hm²")
              : "quilometro_quadrado" == e
              ? (t = m / 100 + " km²")
              : "decametro_quadrado" == e
              ? (t = 100 * m + " dam²")
              : "metro_quadrado" == e
              ? (t = 1e4 * m + " m²")
              : "decimetro_quadrado" == e
              ? (t = 1e6 * m + " dm²")
              : "centimetro_quadrado" == e
              ? (t = 1e8 * m + " cm²")
              : "milimetro_quadrado" == e && (t = 1e10 * m + " mm²");
            break;
          case "decametro_quadrado":
            "decametro_quadrado" == e
              ? (t = 1 * m + " dam²")
              : "quilometro_quadrado" == e
              ? (t = m / 1e4 + " km²")
              : "hectometro_quadrado" == e
              ? (t = m / 100 + " hm²")
              : "metro_quadrado" == e
              ? (t = 100 * m + " m²")
              : "decimetro_quadrado" == e
              ? (t = 1e4 * m + " dm²")
              : "centimetro_quadrado" == e
              ? (t = 1e6 * m + " cm²")
              : "milimetro_quadrado" == e && (t = 1e8 * m + " mm²");
            break;
          case "metro_quadrado":
            "metro_quadrado" == e
              ? (t = 1 * m + " m²")
              : "quilometro_quadrado" == e
              ? (t = m / 1e6 + " km²")
              : "hectometro_quadrado" == e
              ? (t = m / 1e4 + " dam²")
              : "decametro_quadrado" == e
              ? (t = m / 100 + " dam²")
              : "decimetro_quadrado" == e
              ? (t = 100 * m + " dm²")
              : "centimetro_quadrado" == e
              ? (t = 1e4 * m + " cm²")
              : "milimetro_quadrado" == e && (t = 1e6 * m + " mm²");
            break;
          case "decimetro_quadrado":
            "decimetro_quadrado" == e
              ? (t = 1 * m + " dm²")
              : "quilometro_quadrado" == e
              ? (t = m / 1e8 + " km²")
              : "hectometro_quadrado" == e
              ? (t = m / 1e6 + " dam²")
              : "decametro_quadrado" == e
              ? (t = m / 1e4 + " dam²")
              : "metro_quadrado" == e
              ? (t = m / 100 + " m²")
              : "centimetro_quadrado" == e
              ? (t = 100 * m + " cm²")
              : "milimetro_quadrado" == e && (t = 1e4 * m + " mm²");
            break;
          case "centimetro_quadrado":
            "centimetro_quadrado" == e
              ? (t = 1 * m + " cm²")
              : "quilometro_quadrado" == e
              ? (t = m / 1e10 + " km²")
              : "hectometro_quadrado" == e
              ? (t = m / 1e8 + " dam²")
              : "decametro_quadrado" == e
              ? (t = m / 1e6 + " dam²")
              : "metro_quadrado" == e
              ? (t = m / 1e4 + " m²")
              : "decimetro_quadrado" == e
              ? (t = m / 100 + " dm²")
              : "milimetro_quadrado" == e && (t = 100 * m + " mm²");
            break;
          case "milimetro_quadrado":
            "milimetro_quadrado" == e
              ? (t = 1 * m + " mm²")
              : "quilometro_quadrado" == e
              ? (t = m / 1e12 + " km²")
              : "hectometro_quadrado" == e
              ? (t = m / 1e10 + " dam²")
              : "decametro_quadrado" == e
              ? (t = m / 1e8 + " dam²")
              : "metro_quadrado" == e
              ? (t = m / 1e6 + " m²")
              : "decimetro_quadrado" == e
              ? (t = m / 1e4 + " dm²")
              : "centimetro_quadrado" == e && (t = m / 100 + " cm²");
        }
        a.value = t;
      }
    },
    o = document.querySelector("[data-js=converterButton]"),
    a = document.querySelector("[data-js=menu]"),
    t = document.querySelector("[data-js=lengthMenu]"),
    r = document.querySelector("[data-js=areaMenu]"),
    d = document.querySelector("[data-js=lengthConvertion]"),
    c = document.querySelector("[data-js=areaConvertion]");
  a.addEventListener("change", () => {
    "comprimento" == a.value
      ? (t.classList.remove("is-hidden"),
        d.classList.remove("is-hidden"),
        r.classList.add("is-hidden"),
        c.classList.add("is-hidden"),
        o.removeEventListener("click", m),
        o.addEventListener("click", () => {
          const m = document.querySelector("[data-js=userValue]").value,
            o = document.querySelector("[data-js=convertLengthTo]").value;
          e(o, m);
        }))
      : (t.classList.add("is-hidden"),
        d.classList.add("is-hidden"),
        r.classList.remove("is-hidden"),
        c.classList.remove("is-hidden"),
        o.removeEventListener("click", e),
        o.addEventListener("click", () => {
          const e = document.querySelector("[data-js=convertAreaTo]").value,
            o = document.querySelector("[data-js=userValue]").value;
          m(e, o);
        }));
  }),
    o.addEventListener("click", () => {
      const m = document.querySelector("[data-js=userValue]").value,
        o = document.querySelector("[data-js=convertLengthTo]").value;
      e(o, m);
    });
})();
