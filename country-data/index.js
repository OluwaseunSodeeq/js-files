"use strict";

const container = document.querySelector(".container");
const country = document.querySelector(".countries");
const form = container.querySelector("form");
const inputedValue = document.querySelector("form input");

const renderData = function (inputedCountryData) {
  const html = `
  <article class="country">
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
  country.style.opacity = 1;
};
const promiseFunction = function (inputedCountry) {
  //first Country
  country.innerHTML = "";
  fetch(`https://restcountries.com/v3.1/name/${inputedCountry}`)
    .then((response) => response.json())
    .then((data) => {
      renderData(data[0]);
      const neigbour = data[0].borders[0];
      if (!neigbour) return;
      //   console.log(neigbour);

      //   Second country /////
      fetch(`https://restcountries.com/v3.1/alpha/${neigbour}`)
        .then((res) => res.json())
        .then((data) => {
          renderData(data[0]);
        });
    });
};
// promiseFunction("mexico");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (inputedValue.value === "") return;
  promiseFunction(inputedValue.value);
  inputedValue.value = "";
});
