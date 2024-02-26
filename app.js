const createInstructor = (firstName, lastName) => {
	return {
		firstName,
		lastName,
	};
};

const favoriteNumber = 2;

const instructor = {
	firstName: "Ana",
	[favoriteNumber]: "that is my favorite!",
};

const instructor2 = {
	firstName: "Ana",
	sayHi() {
		return "Hi";
	},
	sayBye() {
		return this.firstName + "says bye!";
	},
};

const createAnimal = (species, func, noise) => ({
	species,
	[func]() {
		return noise;
	},
});
