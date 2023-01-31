const loadPage = () => {
  // FETCH FOR USER IP ADDRESS AND GEOLOCATION
  let url = `https://get.geojs.io/v1/ip/geo.json`;
  fetch(url)
    .then((data) => {
      //console.log(data);
      return data.json();
    })
    .then((completedata) => {
      let txt = "";
      console.log(completedata.city);
      cityName = completedata.city;

      txt = ``;
      document.getElementById("googlemap").innerHTML = txt;
      let localEventUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=1coN1aL4iKW9A3ex76AtrnJa4sBOaFua&locale=*&classificationName=music&size=39&city=${cityName}`;

      fetch(localEventUrl)
        .then((data) => {
          //console.log(data);
          return data.json();
        })
        .then((completedata) => {
          console.log(completedata);
          let txt = "";
          //let br = document.createElement("br")
          let dataEvents = completedata._embedded.events;
          dataEvents.forEach((data) => {
            if (data.hasOwnProperty("priceRanges")) {
              txt += ` <div class="concert-card">
  let url = `https://get.geojs.io/v1/ip/geo.json`
  fetch(url).then((data) => {
    //console.log(data);
    return data.json();
  }).then((completedata) => {
    let txt = "";
    console.log(completedata.city);
    cityName = completedata.city;

    txt = ``
document.getElementById("googlemap").innerHTML = txt;
let localEventUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=1coN1aL4iKW9A3ex76AtrnJa4sBOaFua&locale=*&classificationName=music&size=39&city=${cityName}`

  fetch(localEventUrl).then((data) => {
    //console.log(data);
    return data.json();
  }).then((completedata) => {
    console.log(completedata);
    let txt = "";
    //let br = document.createElement("br")
    let dataEvents = completedata._embedded.events
    dataEvents.forEach((data) => {
     if (data.hasOwnProperty("priceRanges")){
      txt += ` <div class="concert-card">
        <h5 class="title">${data.name}</h5>
        <img src=${data.images[1].url} alt="img" class="trendingImages">
        <div class="concert-info">
@@ -36,31 +33,33 @@ const loadPage = () => {
        <p class="price">${"Price Ranges: " + "$" + data.priceRanges[0].min + " - " + "$" + data.priceRanges[0].max}</p>
        </div>
        </div>`;
            }
            //txt += data.name + " " + data.dates.start.dateTime + " " + data._embedded.venues[0].address.line1 + data.images[0].url + " " ;
            let concertCard = document.querySelectorAll(".concert-card");

            // concertCard.forEach((card) =>{
            //   if(card.querySelector(".price").innerHTML.trim().length === 0){
            //     card.style.display = "none";
            //   } else {
     }
      //txt += data.name + " " + data.dates.start.dateTime + " " + data._embedded.venues[0].address.line1 + data.images[0].url + " " ; 
      let concertCard = document.querySelectorAll(".concert-card");

            //   }
      // concertCard.forEach((card) =>{
      //   if(card.querySelector(".price").innerHTML.trim().length === 0){
      //     card.style.display = "none";
      //   } else {

      //   }

            // })
      // })


            document.getElementById("results").innerHTML = txt;
          });
        })
        .catch((err) => {
          console.log(err);
        });
      document.getElementById("results").innerHTML = txt;
    });
  }).catch((err) => {
    console.log(err);
  });


  });

  // FETCH FOR TRENDING CONCERTS IN AREA

  // let localEventUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=1coN1aL4iKW9A3ex76AtrnJa4sBOaFua&locale=*&classificationName=music&size=2&city=${cityName}`

  
  // fetch(localEventUrl).then((data) => {
  //   //console.log(data);
  //   return data.json();
@@ -77,56 +76,60 @@ const loadPage = () => {
  //       <p class="category">${data._embedded.venues[0].address.line1}</p>
  //       <p class="price"></p>
  //       </div>`;
  //     //txt += data.name + " " + data.dates.start.dateTime + " " + data._embedded.venues[0].address.line1 + data.images[0].url + " " ;
  //     //txt += data.name + " " + data.dates.start.dateTime + " " + data._embedded.venues[0].address.line1 + data.images[0].url + " " ; 
  //     document.getElementById("results").innerHTML = txt;
  //   });
  // }).catch((err) => {
  //   console.log(err);
  // });


  // FETCH FOR USER SEARCH
  document.querySelector("#trending").style.display = "none";
  let button = document.getElementById("submitBtn");
  let radioButtons = document.getElementsByName("input");
document.querySelector("#trending").style.display = "none";
  let button = document.getElementById('submitBtn');
  let radioButtons = document.getElementsByName('input');
  button.addEventListener("click", () => {

    let userMessage = "";
    let city = document.querySelector("#city");
    if (city.value == "") {
      userMessage = ` Please Enter Your City!`;
      document.getElementById("userSelection").append(userMessage);
      userMessage = ` Please Enter Your City!`
      document.getElementById("userSelection").append(userMessage)
    } else {
      let selectedGenre = document.querySelector('input[name="genre"]:checked').value;
      let ticketMasterUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=1coN1aL4iKW9A3ex76AtrnJa4sBOaFua&locale=*&classificationName=${selectedGenre}&preferredCountry=us&genreName=${selectedGenre}k&preferredCountry=us&city=${city.value}&size=60`;
      fetch(ticketMasterUrl)
        .then((data) => {
          //console.log(data);
          return data.json();
        })
        .then((completedata) => {
          console.log(completedata);
          let txt = "";
          //let br = document.createElement("br")
          let dataEvents = completedata._embedded.events;
          dataEvents.forEach((data) => {
            if (data.hasOwnProperty("priceRanges")) {
              txt += ` <div class="concert-card">
          <h1 class="title">${data.name}</h1>
      let ticketMasterUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=1coN1aL4iKW9A3ex76AtrnJa4sBOaFua&locale=*&classificationName=${selectedGenre}&preferredCountry=us&genreName=${selectedGenre}k&preferredCountry=us&city=${city.value}&size=60`
      fetch(ticketMasterUrl).then((data) => {
        //console.log(data);
        return data.json();
      }).then((completedata) => {
        console.log(completedata);
        let txt = "";
        //let br = document.createElement("br")
        let dataEvents = completedata._embedded.events
        dataEvents.forEach((data) => {
          if (data.hasOwnProperty("priceRanges")){
          txt += ` <div class="concert-card">
          <h5 class="title">${data.name}</h5>
          <img src=${data.images[1].url} alt="img" class="trendingImages">
          <div class="concert-info">
          <p class="concert-date">${data.dates.start.localDate}</p>
          <p class="concert-address">${data._embedded.venues[0].address.line1}</p>
          <p class="price">${"Price Ranges: " + "$" + data.priceRanges[0].min + " - " + "$" + data.priceRanges[0].max}</p>
          </div>
          </div>`;
            }
            //txt += data.name + " " + data.dates.start.dateTime + " " + data._embedded.venues[0].address.line1 + data.images[0].url + " " ;
            document.getElementById("results").innerHTML = txt;
          });
        })
        .catch((err) => {
          console.log(err);
          }
          //txt += data.name + " " + data.dates.start.dateTime + " " + data._embedded.venues[0].address.line1 + data.images[0].url + " " ; 
          document.getElementById("results").innerHTML = txt;

        });
      }).catch((err) => {
        console.log(err);
      });

    }
  });
};
window.addEventListener("load", loadPage);

}
window.addEventListener("load", loadPage)

