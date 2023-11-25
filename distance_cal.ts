
let btn = document.getElementById('btn');

//call calcDistance method when button click
btn.addEventListener('click', () => {
    console.log('button clicked')
    let lon1 = document.getElementById('lon1') as HTMLInputElement;
    let lat1 = document.getElementById('lat1') as HTMLInputElement;
    let lon2 = document.getElementById('lon2') as HTMLInputElement;
    let lat2 = document.getElementById('lat2') as HTMLInputElement;

    let distance = (calcDistance({lon: parseFloat(lon1.value), lat: parseFloat(lat1.value)}, {lon: parseFloat(lon2.value), lat: parseFloat(lat2.value)}))/1000;
    console.log(distance.toFixed(2) + ' KM');

    document.getElementById('result').innerHTML = 'Distance is : '+distance.toFixed(2) + ' KM';
});

//------------------------------------- distance calculator -------------------------------
// method for calculate distance between two locations
function calcDistance(location1:{lon:number, lat:number}, location2:{lon:number, lat:number}):number{
    //calculate distance
    let R = 6371e3; // metres
    let φ1 = location1.lat * Math.PI / 180; // φ, λ in radians
    let φ2 = location2.lat * Math.PI / 180;
    let Δφ = (location2.lat - location1.lat) * Math.PI / 180;
    let Δλ = (location2.lon - location1.lon) * Math.PI / 180;

    let a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    let d = R * c; // in metres
    return d;
}

let location1 = {lon: 12.9716, lat: 77.5946};//bangalore
let location2 = {lon: 13.0827, lat: 80.2707};//chennai

let location3 = {lon: 6.9271, lat: 79.8612};//colombo
let location4 = {lon: 51.5074, lat: 0.1278};//london

// console.log('Chennai to Bangalore distance: ' + calcDistance(location1, location2).toFixed(2));
// console.log('Colombo to London distance: ' + calcDistance(location3, location4).toFixed(2));
