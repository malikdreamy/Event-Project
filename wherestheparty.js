/**
 *
 * @param {*} data
 * @returns
 * @description
 * @algorithm
 *
 */ // takes data and creates html  card with image, price, and date. and returns string.
const makeCardHtml = (data) => {
 
  return `
  <div class="card sticky-action left-align grey darekn-2">
  <div class="card-image">
    <img src=${data.images[1].url}>
  </div>
  <div class="card-stacked">
    <div class="card-content">
      <p style="color:black">${data._embedded.venues[0].address.line1}.</p>
      <div class=" row" style="padding-top: 25px">
      <a href="#" class="col m6 no-padding" style="color:black">$${data.priceRanges[0].min}-$${data.priceRanges[0].max}</a>
      <a href="#" class="col m6 no-padding" style="color:white">${data.dates.start.localDate}</a>
      </div>
    </div>
  </div>
</div>`;
};

/**
 *
 * @param {*} event
 * @returns {boolean}
 * @description
 */ // if event has price ranges it will return true. otherwise if event has no price range boolean returns false.
const hasPriceRangesField = (event) => {
  return Boolean(event?.priceRanges?.length);
};

/**
 *
 * @param {*} selectedGenre
 * @param {*} city
 * @returns void
 * @description
 * @algorithm
 * start
 * get inputs genre,city
 * fetch events using inputes
 * then get event lists
 * then remove events without price
 * then covert each event to card html
 * then join all card html to one string
 * add the string to the result element on the page
 * end
 */ // if there is no genre or city selected, return nothing.
const fetchEventsAndDisplay = (selectedGenre = document.querySelector('input[name="genre"]:checked').value, city = document.querySelector("#city")) => {
  // early return
  if (!selectedGenre || !city?.value) {
    return;
  }

  let ticketMasterUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=1coN1aL4iKW9A3ex76AtrnJa4sBOaFua&locale=*&classificationName=${selectedGenre}&preferredCountry=us&genreName=${selectedGenre}k&preferredCountry=us&city=${city.value}&size=60`;

  //fetch events using inputes
  fetch(ticketMasterUrl)
    .then((data) => data.json())
    .then((completedata) => {
      console.log(completedata);

      // then get event lists
      const /** @type {Array} */ dataEventsArray = completedata._embedded.events; //creates an Array out of data.

      // then join all card html to one string
      //f(x)->y === makeCardHtml(eventInformation)-> eventCardHtmlString
      // [e1,e2,e3] => makeCardHtml() ==> [e1html,e2html,e3html] => e1html contents + ... + eNhtml contents
      const cardsHtml = dataEventsArray
        .filter(hasPriceRangesField) //remove items without price rances
        .map((data) => makeCardHtml(data)) //convert events to htmlcard
        .join(""); //join events to one big string

      //add all the cards to the page
      document.getElementById("results").innerHTML = cardsHtml;
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("results").innerHTML = "Error: failed to fetch events";
    });
};

const getCurrentCity = (url = `https://get.geojs.io/v1/ip/geo.json`) => {
  return fetch(url).then((data) => {
    return data.json();
  });
};

/**
 *
 */
const loadPage = () => {
  // FETCH FOR USER IP ADDRESS AND GEOLOCATION
  getCurrentCity().then((responsJson) => {
    document.getElementById("city").value = responsJson.city; // tells you what city you are in.
    fetchEventsAndDisplay("music", { value: responsJson.city }); 
  });

  // FETCH FOR USER SEARCH

  document.querySelector("#trending").style.display = "none";

  let userSelectionForm = document.getElementById("userSelection");
  userSelectionForm.addEventListener("submit", (event) => {
    event.preventDefault(); //prevents page from reloading
    fetchEventsAndDisplay(); // loads cards to results page 
  });
};

window.addEventListener("load", loadPage);
