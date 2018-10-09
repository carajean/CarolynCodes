function Vehicle (licensePlate, color) {
	this.licensePlate = licensePlate;
	this.color = color;
}
Vehicle.prototype.beep = function(){
	return 'BEEP, BEEP';
}
Vehicle.prototype.changeColor = function(){
	this.color = 'red';
}

let vehicle = new Vehicle(22589, 'blue');
console.log(vehicle);

function Truck(licensePlate, color, transmission){
	Vehicle.call(this, licensePlate, color);
	this.transmission = transmission;
}
Truck.prototype = Object.create(Vehicle);
Truck.prototype.constructor = Truck;

let truck = new Truck(47892, 'red', 'manual');
console.log(truck);














// /**
//  * Vehicle Constructor
//  * @param {[type]} licensePlate [description]
//  * @param {[type]} color        [description]
//  */
// var Vehicle = function(licensePlate, color) {
// 	this.licensePlate = licensePlate;
// 	this.color = color;
// };

// /**
//  * the beep function should return the string 'BEEP, BEEP'
//  * @return {[type]} [description]
//  */
// Vehicle.prototype.beep = function() {
// 	return "BEEP, BEEP";
// };

// Vehicle.prototype.changeColor = function(newColor) {
// 	this.color = newColor;
// };

// var Truck = function(licensePlate, color, transmission) {
// 	// Vehicle.call(this, licensePlate);
// 	// Vehicle.call(this, color);
// 	// this.licensePlate = licensePlate;
// 	// this.color = color;
// 	Vehicle.apply(this, [licensePlate, color]);
// 	this.transmission = transmission;
// };

// Truck.prototype = Object.create(Vehicle.prototype);
// Truck.prototype.constructor = Truck;