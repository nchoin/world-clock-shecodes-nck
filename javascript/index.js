function updateTheTime() {
  // information for Local time
  let localElement = document.querySelector("#local");
  let localDateElement = localElement.querySelector(".date");
  let localTimeElement = localElement.querySelector(".time");
  let localTimeZone = moment();

  localDateElement.innerHTML = localTimeZone.format("MMMM D, YYYY");
  localTimeElement.innerHTML = localTimeZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  // information for Chicago
  let chicagoElement = document.querySelector("#chicago");
  let chicagoDateElement = chicagoElement.querySelector(".date");
  let chicagoTimeElement = chicagoElement.querySelector(".time");
  let chicagoTimeZone = moment().tz("America/Chicago");

  chicagoDateElement.innerHTML = chicagoTimeZone.format("MMMM D, YYYY");
  chicagoTimeElement.innerHTML = chicagoTimeZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // information for London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTimeZone = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTimeZone.format("MMMM D, YYYY");
  londonTimeElement.innerHTML = londonTimeZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCityTimeInfo(event) {
   let newCityElement = document.querySelector("#cities-replace");
   let eraseNewCityElement = document.querySelector("#cities-replace");
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  console.log(cityTime.format("MMMM D, YYYY"));
  console.log(cityTime.format("h:mm:ss A "));
  
  // eraseNewCityElement.innerHTML = "";
//  repalce the name of the  cityTimeZone with the acutal name of the city
  if (cityTimeZone === "America/New_York") {
    cityName = "Boston 🇺🇸";
  }
  if (cityTimeZone === "Europe/Rome") {
    cityName = " Rome 🇮🇹";
  }
  if (cityTimeZone === "Pacific/Honolulu") {
    cityName = " Kapalua 🌺";
  }
  if (cityTimeZone === "Europe/Athens") {
    cityName = " Thessaloniki🇬🇷";
  }
  console.log(cityName)


newCityElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
    </div>
    <div class="time">
      ${cityTime.format("h:mm:ss")}
      <small>${cityTime.format("A")}</small>
    </div>
  </div>`


}
updateTheTime();
setInterval(updateTheTime, 1000);

let citiesSelectElement = document.querySelector("#city-selected");

citiesSelectElement.addEventListener("change", updateCityTimeInfo);
