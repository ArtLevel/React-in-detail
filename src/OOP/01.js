// class DeleteUserAction {
// 	constructor() {
// 		this.type = 'DELETE_USER'
// 		this.payload = {
// 			userId: userId
// 		}
// 	}
// }
//
// const action1 = new DeleteUserAction(22222222)
// const action2 = new DeleteUserAction(11111111111)
//
// console.log(action1)
// console.log(action2)

// function commonHello() {
// 	console.log(`I am ${this.name} from ${this.site}`)
// }
//
// const userFabric = name => {
// 	const user = {
// 		name: name,
// 		site: '/it',
// 		dateOfBirth: new Date(1988, 1, 2),
// 		hello: commonHello
// 	}
//
// 	return user
// }
//
// const u1 = userFabric('Dimych')
// const u2 = userFabric('Artem')
//
// u1.hello()
// u2.hello()

// function User(name, site, dob) {
// 	this.name = name
// 	this.site = site
// 	this.dateOfBirth = dob
// }
//
// User.prototype.hello = function () {
// 	console.log(`I am ${this.name} from ${this.site}`)
// }
//
// const u1 = new User('Dimych', 'it-inc', new Date(1988, 1, 2))
// const u2 = new User('Artem', 'it-inc', new Date(1989, 19, s12))

// class User {
// 	#name = ''
//
// 	constructor(name, site, dob) {
// 		this.#name = name
// 		this.site = site
// 		this.dateOfBirth = dob
// 		this.counter = 0
// 	}
//
// 	get name() {
// 		return this.#name
// 	}
//
// 	set name(value) {
// 		this.#name = value
// 	}
//
// 	hello() {
// 		console.log(`I am ${this.name} from ${this.site}`)
// 		this.counter++
// 	}
// }
//
// const u1 = new User('Dimych!', 'it-incubator', new Date(1988, 1, 10))
// const u2 = new User('Artem!', 'an IT atmosphere', new Date(1998, 12, 12))
//
// u1.name = 'Igor'
//
// class Coder extends User {
// 	constructor(name, site, dob, tech) {
// 		super(name, site, dob)
// 		this.tech = tech
// 	}
//
// 	code() {
// 		console.log(
// 			`I am ${this.name}, here is my ${this.tech}: const sum = (a, b) => a * b`
// 		)
// 	}
//
// 	hello() {
// 		super.hello()
// 		console.log('Go away ! ' + this.name)
// 	}
// }
//
// class Hacker extends Coder {
// 	#name = ''
//
// 	constructor() {
// 		super()
// 		this.tech = 'XXX'
// 		this.#name = 'XXX'
// 	}
//
// 	code() {
// 		console.log(`I'll hack everything !`)
// 	}
//
// 	hello() {
// 		throw new Error('I am Hacker in the Dark')
// 	}
// }
//
// const coder1 = new Coder(
// 	'Dimych Coder',
// 	'it-incubator',
// 	new Date(1988, 1, 10),
// 	'c#'
// )
//
// // coder1.code()
//
// const hacker = new Hacker(
// 	'Dimych Coder',
// 	'it-incubator',
// 	new Date(1988, 1, 10),
// 	'c#'
// )
//
// // hacker.code()
// // hacker.hello()
//
// const users = [u1, u2, coder1, hacker]
//
// users.forEach(u => u.hello())

// Class

// function carCreator(brand, speed) {
// 	return {
// 		brand,
// 		speed,
// 		startEngine() {
// 			console.log(`Start ${this.brand}`)
// 		}
// 	}
// }
//
// const car1 = carCreator('bmw', 200)
// const car2 = carCreator('kia', 250)
//
// console.log(car1, car2)

// function Car(brand, speed) {
// 	this.brand = brand
// 	this.speed = speed
// }
//
// Car.prototype.startEngine = function () {
// 	console.log(`Start ${this.brand}`)
// }
//
// const car1 = new Car('bmw', 200)
// const car2 = new Car('kia', 250)
//
// console.log(car1, car2)
//
// car1.startEngine()
// car2.startEngine()

// class Car {
// 	#wheels = 4
// 	#brand
//
// 	constructor(brand, speed) {
// 		this.#brand = brand
// 		this.speed = speed
// 	}
//
// 	startEngine() {
// 		console.log(`Start ${this.brand}`) // good
// 	}
//
// 	get brand() {
// 		return this.#brand
// 	}
//
// 	set brand(newBrand) {
// 		this.#brand = newBrand
// 	}
//
// 	static validateSpeed(speed) {
// 		if (speed > 400) {
// 			console.log('A Wrong Car')
// 			return
// 		}
// 		console.log('good car')
// 	}
// }
//
// const car1 = new Car('bmw', 200)
// const car2 = new Car('kia', 250)
//
// console.log(car1.brand)
// console.log(car2.brand)
//
// Car.validateSpeed(car1)
// Car.validateSpeed(car2)
//
// console.log(Car)

// class Car {
// 	#wheels = 4
// 	#brand
//
// 	constructor(brand, speed) {
// 		this.#brand = brand
// 		this.speed = speed
// 	}
//
// 	startEngine() {
// 		console.log(`Start ${this.#brand}`) // good
// 	}
//
// 	static validateSpeed(speed) {
// 		if (speed > 400) {
// 			console.log('A Wrong Car')
// 			return
// 		}
// 		console.log('good car')
// 	}
// }
//
// class SuperCar extends Car {
// 	constructor(brand, speed, canFly) {
// 		super(brand, speed)
// 		this.canFly = canFly
// 	}
// }
//
// const superCar1 = new SuperCar('bmw', 300)
// SuperCar.validateSpeed(superCar1)
