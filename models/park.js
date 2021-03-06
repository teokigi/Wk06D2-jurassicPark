const Dinosaur = require('./dinosaur.js')

const Park = function (name, ticketprice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketprice;
  this.dinosaurs = dinosaurs;
}
// Add a dinosaur to its collection of dinosaurs
Park.prototype.addDinosaur = function(new_dinosaur){
	this.dinosaurs.push(new_dinosaur);
}
//Remove a dinosaur from its collection of dinosaurs
Park.prototype.removeDinosaur = function(){
	this.dinosaurs.pop();
}
//Find the dinosaur that attracts the most visitors
Park.prototype.mostPopular = function(){
	//most popular dinosaur variable
	let mpd
	this.dinosaurs.forEach(dino => mpd == null || mpd.guestsAttractedPerDay < dino.guestsAttractedPerDay ? mpd = dino:null)
	return mpd
};
// Find all dinosaurs of a particular species
Park.prototype.matchesSpecies = function(species){
	// let speciesMatches = [];
	// for (dinosaur of this.dinosaurs){
	// 	if (dinosaur.species == species){
	// 		speciesMatches.push(dinosaur)
	// 	}
	// }
	// return speciesMatches
	return this.dinosaurs.filter(dino => dino.species == species)
}
// Calculate the total number of visitors per day
Park.prototype.visitorsPerDay = function(total = 0){
	this.dinosaurs.forEach(dino => total += dino.guestsAttractedPerDay)
	return total
}
// Calculate the total number of visitors per year
Park.prototype.visitorsPerYear = function(){
	return this.visitorsPerDay() * 365;
}
// Calculate the total revenue from ticket sales for one year
Park.prototype.annualSales = function(){
	return this.visitorsPerYear() * this.ticketPrice;
}
// remove a particular species
Park.prototype.removeSpecies = function(species){
	const found = this.dinosaurs.filter(dino => dino.species != species);
	this.dinosaurs = found;
}
// return summary of diet type and number of it in record.
Park.prototype.summary = function(){
	// dietCategorys = [];
	// appenddiets = [];
	// summary = {};
	// function findDiets(dino){
	// 	if (!dietCategorys.includes(dino.diet)){
	// 			dietCategorys.push(dino.diet)
	// 	}
	// }
	// function dietCount(diet){
	// 	let count = 0;
	// 	count = this.dinosaurs.filter(dino => dino.diet == diet).length;
	// 	return count;
	// }
	// this.dinosaurs.forEach(findDiets);
	// for (category of dietCategorys){
	// 	summary[category] = dietCount(category);
	// }
	// return summary
	summary = {carnivore:0,herbivore:0,omnivore:0};

	for (dino of this.dinosaurs){
		switch(dino.diet){
			case 'carnivore':
				summary['carnivore'] += 1
				break;
			case 'herbivore':
				summary['herbivore'] += 1
				break;
			case 'omnivore':
				summary['omnivore'] +=1
				break;
		}
	}
	return summary
}

module.exports = Park;
