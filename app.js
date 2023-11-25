//objects
var student;
student = {
    id: 1, name: 'Ruvini', age: 23, college: 'IJSE'
};
//compile error
//student = 10;
// student= {id:1, name:'Ruvini', age:23, college:'IJSE',subject:'SE'};
// console.log(student);
//------------------------------------- distance calculator -------------------------------
// method for calculate distance between two locations
function calcDistance(location1, location2) {
    //calculate distance
    var R = 6371e3; // metres
    var φ1 = location1.lat * Math.PI / 180; // φ, λ in radians
    var φ2 = location2.lat * Math.PI / 180;
    var Δφ = (location2.lat - location1.lat) * Math.PI / 180;
    var Δλ = (location2.lon - location1.lon) * Math.PI / 180;
    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // in metres
    return d;
}
var location1 = { lon: 12.9716, lat: 77.5946 }; //bangalore
var location2 = { lon: 13.0827, lat: 80.2707 }; //chennai
var location3 = { lon: 6.9271, lat: 79.8612 }; //colombo
var location4 = { lon: 51.5074, lat: 0.1278 }; //london
console.log('Chennai to Bangalore distance: ' + calcDistance(location1, location2).toFixed(2));
console.log('Colombo to London distance: ' + calcDistance(location3, location4).toFixed(2));
