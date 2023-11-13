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

class User {
	#name = ''

	constructor(name, site, dob) {
		this.#name = name
		this.site = site
		this.dateOfBirth = dob
		this.counter = 0
	}

	get name() {
		return this.#name
	}

	set name(value) {
		this.#name = value
	}

	hello() {
		console.log(`I am ${this.name} from ${this.site}`)
		this.counter++
	}
}

const u1 = new User('Dimych!', 'it-incubator', new Date(1988, 1, 10))
const u2 = new User('Artem!', 'an IT atmosphere', new Date(1998, 12, 12))

// u1.hello()
// u2.hello()

u1.name = 'Igor'

console.log(u1.name)
// console.log(u1.counter)
// console.log(u2.counter)
