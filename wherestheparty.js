

let url = 'https://api.seatgeek.com/2/events?client_id=MzE1NjA1NDZ8MTY3NDE5MDU3NC4zMjU0MDk'

fetch(url).then((data) =>{
//console.log(data);
return data.json();
}).then((completedata) =>{
let data1 = "";
    console.log(completedata);
    
    
document.getElementById("trending").innerHTML = completedata.events[0].venue.address;
console.log(completedata.events[4].datetime_local)



}).catch((err) =>{
console.log(err);

})

