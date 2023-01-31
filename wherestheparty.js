
const currentState = () => {
  if(localStorage.getItem("currentState")){
let state = localStorage.getItem("currentState");
let parser = new DOMParser();
let doc = parser.parseFromString(state, 'text/html'); 
let bodyOri = document.getElementsByTagName('html')[0];
bodyOri.replaceWith(doc.firstChild);
  const fetchData = () => {
    // FETCH FOR USER SEARCH
  document.querySelector("#trending").style.display = "none";
    let button = document.getElementById('submitBtn');
    let radioButtons = document.getElementsByName('input');
      let userMessage = "";
      let city = document.querySelector("#city");
      if (city.value == "") {
        userMessage = ` Please Enter Your City!`
        document.getElementById("userSelection").append(userMessage)
      } else {
        let selectedGenre = document.querySelector('input[name="genre"]:checked').value;
        let ticketMasterUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=1coN1aL4iKW9A3ex76AtrnJa4sBOaFua&locale=*&classificationName=${selectedGenre}&preferredCountry=us&genreName=${selectedGenre}k&preferredCountry=us&city=${city.value}&size=60`
        fetch(ticketMasterUrl).then((data) => {
          return data.json();
        }).then((completedata) => {
          console.log(completedata);
          let txt = "";
          let dataEvents = completedata._embedded.events
          dataEvents.forEach((data) => {
            if (data.hasOwnProperty("priceRanges")){
            txt += ` <div class="concert-card">
            <h1 class="title">${data.name}</h1>
            <img src=${data.images[1].url} alt="img" class="trendingImages">
            <div class="concert-info">
            <p class="concert-date">${data.dates.start.localDate}</p>
            <p class="concert-address">${data._embedded.venues[0].address.line1}</p>
            <p class="price">${"Price Ranges: " + "$" + data.priceRanges[0].min + " - " + "$" + data.priceRanges[0].max}</p>
            </div>
            </div>`;
            }
            document.getElementById("results").innerHTML = txt;
            let string = document.getElementsByTagName("html")[0].outerHTML;
            localStorage.setItem("currentState", string);
          });
        })
    }
  }
  let submitButton = document.getElementById("submitBtn");
  submitButton.addEventListener("click", fetchData);
  }};
const loadPage = () => {
  if(!localStorage.getItem("currentState")){
  // FETCH FOR USER IP ADDRESS AND GEOLOCATION
  let url = `https://get.geojs.io/v1/ip/geo.json`
  fetch(url).then((data) => {
    return data.json();
  }).then((completedata) => {
    let txt = "";
    console.log(completedata.city);
    cityName = completedata.city;
    txt = ``
document.getElementById("googlemap").innerHTML = txt;
let localEventUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=1coN1aL4iKW9A3ex76AtrnJa4sBOaFua&locale=*&classificationName=music&size=39&city=${cityName}`
  fetch(localEventUrl).then((data) => {
    return data.json();
  }).then((completedata) => {
    console.log(completedata);
    let txt = "";
    let dataEvents = completedata._embedded.events
    dataEvents.forEach((data) => {
     if (data.hasOwnProperty("priceRanges")){
      txt += ` <div class="concert-card">
        <h1 class="title">${data.name}</h1>
        <img src=${data.images[1].url} alt="img" class="trendingImages">
        <div class="concert-info">
        <p class="concert-date">${"Date: " + data.dates.start.localDate}</p>
        <p class="concert-address">${"Address :" + data._embedded.venues[0].address.line1}</p>
        <p class="price">${"Price Ranges: " + "$" + data.priceRanges[0].min + " - " + "$" + data.priceRanges[0].max}</p>
        </div>
        </div>`;
     }
      let concertCard = document.querySelectorAll(".concert-card");
      document.getElementById("results").innerHTML = txt;
    });
  })
  });
  }
}

 const fetchData = () => {
  // FETCH FOR USER SEARCH
document.querySelector("#trending").style.display = "none";
  let button = document.getElementById('submitBtn');
  let radioButtons = document.getElementsByName('input');
    let userMessage = "";
    let city = document.querySelector("#city");
    if (city.value == "") {
      userMessage = `<div id="user-message">
      <p>Please Enter A City Name!</p>
      <button id="close-button">X</button>
    </div>`
      document.getElementById("errorMessage").innerHTML = userMessage;
      const closeButton = document.getElementById("close-button");
      closeButton.addEventListener("click", () => {
        const userMessage = document.getElementById("user-message");
        userMessage.style.display = "none";
      });

    } else {
      let selectedGenre = document.querySelector('input[name="genre"]:checked').value;
      let ticketMasterUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=1coN1aL4iKW9A3ex76AtrnJa4sBOaFua&locale=*&classificationName=${selectedGenre}&preferredCountry=us&genreName=${selectedGenre}k&preferredCountry=us&city=${city.value}&size=60`
      fetch(ticketMasterUrl).then((data) => {
        return data.json();
      }).then((completedata) => {
        console.log(completedata);
        let txt = "";
        let dataEvents = completedata._embedded.events
        dataEvents.forEach((data) => {
          if (data.hasOwnProperty("priceRanges")){
          txt += ` <div class="concert-card">
          <h1 class="title">${data.name}</h1>
          <img src=${data.images[1].url} alt="img" class="trendingImages">
          <div class="concert-info">
          <p class="concert-date">${data.dates.start.localDate}</p>
          <p class="concert-address">${data._embedded.venues[0].address.line1}</p>
          <p class="price">${"Price Ranges: " + "$" + data.priceRanges[0].min + " - " + "$" + data.priceRanges[0].max}</p>
          </div>
          </div>`;
          }
          document.getElementById("results").innerHTML = txt;
          let string = document.getElementsByTagName("html")[0].outerHTML;
          localStorage.setItem("currentState", string);
        });
      })
  }
}
let submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", fetchData);
window.addEventListener("load", currentState);
window.addEventListener("load", loadPage);

