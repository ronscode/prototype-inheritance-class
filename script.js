// // // class Foo {
// // // 	constructor(who) {
// // // 		this.who = who;
// // // 	}
// // // 	identify() {
// // // 		return "I am " + this.who;
// // // 	}
// // // }

// // // class Bar extends Foo {
// // // 	constructor(who) {
// // // 		super(who); // THERE IS NO COPY OF FOO, FOO IS BEING ACCESSED
// // // 	}
// // // 	speak() {
// // // 		return "Hello, " + this.identify() + ".";
// // // 	}
// // // }

// // // let foo = new Foo("Baby Yoda");
// // // let bar = new Bar("Zaphod");
// // // console.log(foo);
// // // console.log(bar);
// // // console.log(bar.speak());
// // // //console.log(foo.speak());

// // function Foo(who) {
// // 	this.me = who;
// // }
// // Foo.prototype.identify = function () {
// // 	return "I am " + this.me;
// // };
// // function Bar(who) {
// // 	Foo.call(this, who);
// // }
// // Bar.prototype = Object.create(Foo.prototype);
// // Bar.prototype.speak = function () {
// // 	console.log("Hello, " + this.identify() + ".");
// // };
// // let b1 = new Bar("b1"); // kicking off a class, making a new object
// // let b2 = new Bar("b2");
// // b1.speak();
// // b2.speak();

// let bar = {
// 	me: "I am b1",
// 	speak: function () {
// 		console.log("Hello, " + this.me + ".");
// 	},
// };

// function Bar(name) {
// 	this.me = "I am " + name;
// 	this.speak = function () {
// 		console.log("Hello, " + this.me + ".");
// 	};
// }

// let b1 = new Bar("b1");

// console.log(bar.speak());
// console.log(b1.speak());

function foo(y) {
	this.anythingIWant = y; // this always binds to...
}
foo.prototype.x = 10; // attaching a new property to the Foo object
foo.prototype.calculate = function (z) {
	// attaching a new property to the Foo object
	return this.x + this.anythingIWant + z;
};
console.log(foo);
let b = new foo(20); // ".this" binds to the b object
console.log("Foo is " + b.x);
console.log("Calculate foo is " + b.calculate(50)); // 50 is z

let c = new foo(50);

console.log("C x is " + c.x);
console.log("B y is " + b.anythingIWant);
console.log("C y is " + c.anythingIWant);
