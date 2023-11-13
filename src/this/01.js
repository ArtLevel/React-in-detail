// this

// 1. Global Scope
// 2. Function Scope && Arrow function
// 3. call apply bind
// 4. Functions Constructor

// 1. Global Scope
// NodeJs: Global Obj, Browser: Window
// 'use strict'

// console.log(this)

// 2. simple Function & Arrow Function

// foo()

// const foo = () => {
// 	console.log(this)
// }
//
// function bar() {
// 	console.log(this, '---------')
// }

// Объект не создаёт своего лескического окружения

// const car1 = {
// 	brand: 'bmw'
// }
//
// const car2 = {
// 	brand: 'kia'
// }
//
// const showBrand = function () {
// 	console.log(this.brand)
// }
//
// car1.foo = showBrand
// car2.foo = showBrand
//
// car1.foo()
// car2.foo()

// const superCar = car
// car = 'toyota'
//
// superCar.showBrand()

// const car1 = {
// 	brand: 'bmw',
// 	speed: 200,
// 	showBrand() {
// 		console.log(this.brand)
// 	},
// 	showMaxSpeed(a, b) {
// 		console.log(this.speed + a + b)
// 	}
// }
//
// const car2 = {
// 	brand: 'kia',
// 	speed: 300
// }
//
// const scooter = {
// 	brand: 'toyota',
// 	speed: 400
// }

// car1.showBrand()

// car1.showBrand.call(car2, 10, 20) // доп. параметры: el, el, el, el
// car1.showBrand.apply(car2, [30, 40]) // доп. параметры: []
// const foo = car1.showBrand.bind(car2) // доп. параметры: el, el, el, el
// foo()

// car1.showBrand.bind(car2, 10, 20).call(scooter, 30, 40)

// function Car(color) {
// 	this.color = color
// }
//
// const car1 = new Car('red')
// const car2 = new Car('black')
//
// console.log(car1)
// console.log(car2)

// const car = {
// 	color: 'red',
// 	showColor() {
// 		console.log(this.color)
// 	}
// }
//
// // setTimeout(car.showColor, 1000)
// // setTimeout(car.showColor.bind(car), 1000)
// setTimeout(() => {
// 	car.showColor()
// 	console.log(this)
// }, 1000)

// const dealer = {
// 	name: 'bmw',
// 	models: ['320', 'z4', 'm3', 'x5'],
// 	showModelsInDealer() {
// 		this.models.forEach(function (model) {
// 			console.log(`Dealer: ${this.name}, has ${model}`)
// 		})
// 	}
// }
//
// dealer.showModelsInDealer()
