class Person {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
}

function main(classToExtend) {
	classToExtend.prototype.species = "Time Lord";
	classToExtend.prototype.toSpeciesString = function () {
		return `I am a ${this.species}. ${classToExtend.toString()}`;
	};
}

main(Person);
let p = new Person("john doe", "doe@mail.com");
console.log(p);
console.log(p.toSpeciesString());

//Person.prototype

//console.log(new Person("Maria", "maria@gmail.com").toSpeciesString());
