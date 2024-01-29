// information for Chicago
function updateTheTime () {
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
updateTheTime();
 setInterval(updateTheTime,1000);