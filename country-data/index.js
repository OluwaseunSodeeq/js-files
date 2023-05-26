"use strict";

const container = document.querySelector(".container");
const country = document.querySelector(".countries");
const form = container.querySelector("form");
const inputedValue = document.querySelector("form input");

const renderData = function (inputedCountryData, className = "") {
  const html = `
  <article class="country ${className}">
        <img class="country__img" src="${inputedCountryData.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${inputedCountryData.name.common}</h3>
            <h4 class="country__region">${inputedCountryData.region}</h4>
            <p class="country__row"><span>👫</span>${(
              inputedCountryData.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(inputedCountryData.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(inputedCountryData.currencies)[0].name
            }</p>
           
            <p class="country__row"><span>Capital : </span>${
              inputedCountryData.capital
            }</p>

        </div>
 </article>

    `;
  country.insertAdjacentHTML("beforeend", html);
};
const renderError = function (msg) {
  country.innerHTML = "";

  country.insertAdjacentText("beforeend", msg);
};
const promiseFunction = function (inputedCountry) {
  //first Country
  country.innerHTML = "";
  fetch(`https://restcountries.com/v3.1/name/${inputedCountry}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then((data) => {
      renderData(data[0]);
      const neigbour = data[0].borders[0];
      //   const neigbour = "sdfghh";
      if (!neigbour) return renderError(`This country has no border!`);

      //   Second country  Or neigbour name below/////
      return fetch(`https://restcountries.com/v3.1/alpha/${neigbour}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then((data) => {
      renderData(data[0], "neighbour");
    })
    .catch((err) => {
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      country.style.opacity = 1;
    });
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (inputedValue.value === "") return;
  promiseFunction(inputedValue.value);
  inputedValue.value = "";
});
