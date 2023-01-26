

// let url = 'https://app.ticketmaster.com/discovery/v2/events?apikey=1coN1aL4iKW9A3ex76AtrnJa4sBOaFua&locale=*&classificationName=rap&preferredCountry=us&genreName=rapk&preferredCountry=us&city=new%20york'

// fetch(url).then((data) =>{
// //console.log(data);
// return data.json();
// }).then((completedata) =>{
// let data1 = "";
//     console.log(completedata);
//     let txt = "";
//     //let br = document.createElement("br")
// let dataEvents = completedata._embedded.events
// dataEvents.forEach((data) => {
    //     txt += data.name + " " + data.dates.start.dateTime + " " + data._embedded.venues[0].address.line1 + " " ; 
    //     document.getElementById("trending").innerHTML = txt;
    
    // });
    // }).catch((err) =>{
        // console.log(err);
// 

const loadPage = () => {
let button = document.getElementById('submitBtn');     
let radioButtons = document.getElementsByName('input');
button.addEventListener("click", () => {
    
 
    
    let userMessage = "";
    let city = document.querySelector("#city");
    
    if (city.value == ""){
        userMessage =` Please Enter Your City!`
        document.getElementById("userSelection").append(userMessage)
    } else{ 
        let selectedGenre = document.querySelector('input[name="genre"]:checked').value;
         
                let url = `https://app.ticketmaster.com/discovery/v2/events?apikey=1coN1aL4iKW9A3ex76AtrnJa4sBOaFua&locale=*&classificationName=${selectedGenre}&preferredCountry=us&genreName=${selectedGenre}k&preferredCountry=us&city=${city.value}`
                fetch(url).then((data) =>{
                    //console.log(data);
                    return data.json();
                }).then((completedata) =>{
                    console.log(completedata);
                    let txt = "";
                    //let br = document.createElement("br")
                    let dataEvents = completedata._embedded.events
                    dataEvents.forEach((data) => {
                        txt+=` <div class="card">
                        //         <h1 class="title">${data.name}</h1>
                        //         <img src=${data.images[0].url} alt="img" class="images">
                        //         <p>${data.dates.start.dateTime}</p>
                        //         <p class="category">${data._embedded.venues[0].address.line1}</p>
                        //         <p class="price"></p>
                        //         </div>`;



                        //txt += data.name + " " + data.dates.start.dateTime + " " + data._embedded.venues[0].address.line1 + data.images[0].url + " " ; 
                        document.getElementById("trending").innerHTML = txt;
                        
                    });
                }).catch((err) =>{
                    console.log(err);
                });
                
            } 
        });
        
    }
    window.addEventListener("load", loadPage)
        //let data1 = "";
        //     completedata.map((values)=> {
            //         data1+=` <div class="card">
//         <h1 class="title">${values.title}</h1>
//         <img src=${values.image} alt="img" class="images">
//         <p>${values.description}</p>
//         <p class="category">${values. category}</p>
//         <p class="price">${values.price}</p>
//         </div>`;

//     });
// document.getElementById("trending").innerHTML = data1;


