"use strict";
const now = Date.now() + 259200000;
const options = {
  month: "long",
  year: "numeric",
  weekday: "long",
  hours: "numeric",
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
};
console.log(now);
const locale = navigator.language;
const latest = new Intl.DateTimeFormat(locale, options).format(now);

console.log(latest, locale);
const giveawayDeadline = document.querySelector(".giveaway");
giveawayDeadline.textContent = ` giveaway ends on ${latest}`;

let futureDate = new Date(now);

const timer = function () {
  futureDate--;
};
setInterval(timer, 1000);
if (futureDate > Date.now()) {
  document.querySelector(".days").textContent = `${futureDate.getDay}`;
  document.querySelector(".hours").textContent = `${futureDate.getHours}`;
  document.querySelector(".minutes").textContent = `${futureDate.getMinutes}`;
  document.querySelector(".seconds").textContent = `${futureDate.getSeconds}`;
  console.log(futureDate.getDay, futureDate.getHours, futureDate.getMinutes);
}
