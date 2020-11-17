function main() {
	class Person {
		constructor(name, email) {
			this.name = name;
			this.email = email;
		}
		toString() {
			return `Person (name: ${this.name}, email: ${this.email})`;
		}
	}

	class Teacher extends Person {
		constructor(name, email, subject) {
			super(name, email);
			this.subject = subject;
		}
		toString = function () {
			return `Teacher (name: ${this.name}, email:${this.email}, subject:${this.subject})`;
		};
	}

	class Student extends Person {
		constructor(name, email, course) {
			super(name, email);
			this.course = course;
		}
		toString = function () {
			return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
		};
	}

	return {
		Person,
		Teacher,
		Student,
	};
}

let pt = main();
let person = new pt.Person("john doe", "doe@mail.com");
let teacher = new pt.Teacher("john doe", "doe@mail.com", "math");
let student = new pt.Student("john doe", "doe@mail.com", "engineer");
console.log(person.toString());
console.log(teacher.toString());
console.log(student.toString());
