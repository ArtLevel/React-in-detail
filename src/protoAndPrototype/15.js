// class Car {
// 	constructor(brand, speed) {
// 		this.brand = brand
// 		this.speed = speed
// 	}

// 	startEngine() {
// 		console.log(`Start ${this.brand}`)
// 	}
// }

// const car1 = new Car('bmw', 200)
// const car2 = new Car('kia', 300)

// console.log(car1)
// car1.startEngine()

// console.log(car1.__proto__ === Car.prototype)

// const str1 = new String('string')
// const str2 = new String('string')

// console.log(str1 === str2)

class Car {
	constructor(brand, speed) {
		this.brand = brand
		this.speed = speed
	}
	startEngine() {
		console.log(`Start ${this.brand}`)
	}
	static validateSpeed(obj) {
		if(obj.speed > 400) {
			console.log('wrong speed')
			return
		}
		console.log('good car')
	}
}

class SuperCar extends Car {
	constructor(brand, speed, canFly) {
		super(brand, speed)
		this.canFly = canFly
	}
}

const superCar1 = new SuperCar('bmw', 300, true)

superCar1.startEngine()

// proto

