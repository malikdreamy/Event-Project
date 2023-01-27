const loadPage = () => {
  // FETCH FOR USER IP ADDRESS AND GEOLOCATION
  let url = `https://get.geojs.io/v1/ip/geo.json`
  fetch(url).then((data) => {
    //console.log(data);
    return data.json();
  }).then((completedata) => {
    let txt = "";
    console.log(completedata.city);
    cityName = completedata.city;
    
    txt = `<iframe id="map"
  width="600"
  height="450"
  style="border:0"
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyA7B-dd4m9MiuBt4KBLWkPrquZ1waqxbTU&origin=${cityName}&destination=Telemark+Norway&avoid=tolls|highways">
</iframe>`
document.getElementById("googlemap").innerHTML = txt;
let localEventUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=1coN1aL4iKW9A3ex76AtrnJa4sBOaFua&locale=*&classificationName=music&size=2&city=${cityName}`
  
  fetch(localEventUrl).then((data) => {
    //console.log(data);
    return data.json();
  }).then((completedata) => {
    console.log(completedata);
    let txt = "";
    //let br = document.createElement("br")
    let dataEvents = completedata._embedded.events
    dataEvents.forEach((data) => {
      txt += ` <div class="card">
        <h1 class="title">${data.name}</h1>
        <img src=${data.images[1].url} alt="img" class="images">
        <p>${data.dates.start.dateTime}</p>
        <p class="category">${data._embedded.venues[0].address.line1}</p>
        <p class="price"></p>
        </div>`;
      //txt += data.name + " " + data.dates.start.dateTime + " " + data._embedded.venues[0].address.line1 + data.images[0].url + " " ; 
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
  // }).then((completedata) => {
  //   console.log(completedata);
  //   let txt = "";
  //   //let br = document.createElement("br")
  //   let dataEvents = completedata._embedded.events
  //   dataEvents.forEach((data) => {
  //     txt += ` <div class="card">
  //       <h1 class="title">${data.name}</h1>
  //       <img src=${data.images[1].url} alt="img" class="images">
  //       <p>${data.dates.start.dateTime}</p>
  //       <p class="category">${data._embedded.venues[0].address.line1}</p>
  //       <p class="price"></p>
  //       </div>`;
  //     //txt += data.name + " " + data.dates.start.dateTime + " " + data._embedded.venues[0].address.line1 + data.images[0].url + " " ; 
  //     document.getElementById("results").innerHTML = txt;
  //   });
  // }).catch((err) => {
  //   console.log(err);
  // });


  // FETCH FOR USER SEARCH

  let button = document.getElementById('submitBtn');
  let radioButtons = document.getElementsByName('input');
  button.addEventListener("click", () => {

    let userMessage = "";
    let city = document.querySelector("#city");
    if (city.value == "") {
      userMessage = ` Please Enter Your City!`
      document.getElementById("userSelection").append(userMessage)
    } else {
      let selectedGenre = document.querySelector('input[name="genre"]:checked').value;
      let ticketMasterUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=1coN1aL4iKW9A3ex76AtrnJa4sBOaFua&locale=*&classificationName=${selectedGenre}&preferredCountry=us&genreName=${selectedGenre}k&preferredCountry=us&city=${city.value}`
      fetch(ticketMasterUrl).then((data) => {
        //console.log(data);
        return data.json();
      }).then((completedata) => {
        console.log(completedata);
        let txt = "";
        //let br = document.createElement("br")
        let dataEvents = completedata._embedded.events
        dataEvents.forEach((data) => {
          txt += ` <div class="card">
         <h1 class="title">${data.name}</h1>
       <img src=${data.images[1].url} alt="img" class="images">
        <p>${data.dates.start.dateTime}</p>
        <p class="category">${data._embedded.venues[0].address.line1}</p>
          <p class="price"></p>
        </div>`;
          //txt += data.name + " " + data.dates.start.dateTime + " " + data._embedded.venues[0].address.line1 + data.images[0].url + " " ; 
          document.getElementById("trending").innerHTML = txt;

        });
      }).catch((err) => {
        console.log(err);
      });

    }
  });

}
window.addEventListener("load", loadPage)





