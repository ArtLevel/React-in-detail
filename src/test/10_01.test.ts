import {
	addNewBooksToUser,
	makeHairstyle,
	moveUser,
	moveUserToOtherHouse,
	removeBook,
	updateBook,
	updateCompanyTitle,
	updateCompanyTitle2,
	updateSkills,
	upgradeUserLaptop,
	UserT,
	UserWithBooksT,
	UserWithLaptopT,
	WithCompaniesT
} from './10_01'

test('reference type test', () => {
	const user: UserT = {
		name: 'Dimych',
		hair: 32,
		address: {
			city: 'Minsk',
			house: 12
		}
	}

	const awesomeUser = makeHairstyle(user, 2)

	expect(user.hair).toBe(32)
	expect(awesomeUser.hair).toBe(16)
	expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
	let user: UserWithLaptopT = {
		name: 'Dimych',
		hair: 32,
		address: {
			city: 'Minsk',
			house: 12
		},
		laptop: {
			title: 'ZenBook'
		}
	}

	const movedUser: UserWithLaptopT = moveUser(user, 'Kiev')

	expect(user).not.toBe(movedUser)
	expect(user.address).not.toBe(movedUser.address)
	expect(user.laptop).toBe(movedUser.laptop)
	expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop to macbook', () => {
	let user: UserWithLaptopT & UserWithBooksT = {
		name: 'Dimych',
		hair: 32,
		address: {
			city: 'Minsk',
			house: 12
		},
		laptop: {
			title: 'ZenBook'
		},
		books: ['css', 'html', 'js', 'react']
	}

	const userCopy: UserWithLaptopT & UserWithBooksT = moveUserToOtherHouse(
		user,
		2
	)

	expect(user).not.toBe(userCopy)
	expect(user.address).not.toBe(userCopy.address)
	expect(user.books).toBe(userCopy.books)
	expect(user.laptop).toBe(userCopy.laptop)
	expect(userCopy.laptop.title).toBe('ZenBook')
	expect(user.laptop.title).toBe('ZenBook')
	expect(userCopy.address.house).toBe(2)
})

test('upgrade laptop to macbook', () => {
	let user: UserWithLaptopT & UserWithBooksT = {
		name: 'Dimych',
		hair: 32,
		address: {
			city: 'Minsk',
			house: 12
		},
		laptop: {
			title: 'ZenBook'
		},
		books: ['css', 'html', 'js', 'react']
	}

	const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])

	expect(user).not.toBe(userCopy)
	expect(user.laptop).toBe(userCopy.laptop)
	expect(user.address).toBe(userCopy.address)
	expect(user.books).not.toBe(userCopy.books)
	expect(user.books.length).toBe(4)
	expect(userCopy.books[4]).toBe('ts')
	expect(userCopy.books[5]).toBe('rest api')
})

test('update js to ts', () => {
	let user: UserWithLaptopT & UserWithBooksT = {
		name: 'Dimych',
		hair: 32,
		address: {
			city: 'Minsk',
			house: 12
		},
		laptop: {
			title: 'ZenBook'
		},
		books: ['css', 'html', 'js', 'react']
	}

	const userCopy = updateBook(user, 'js', 'ts')

	expect(user).not.toBe(userCopy)
	expect(user.laptop).toBe(userCopy.laptop)
	expect(user.address).toBe(userCopy.address)
	expect(user.books).not.toBe(userCopy.books)
	expect(user.books.length).toBe(4)
	expect(userCopy.books[2]).toBe('ts')
})

test('update skills', () => {
	const skills = [123, 1, 231, 32, 54]

	const newSkills = updateSkills(skills, 123, 150)

	expect(newSkills[0]).toBe(150)
})

test('removeBook', () => {
	let user: UserWithLaptopT & UserWithBooksT = {
		name: 'Dimych',
		hair: 32,
		address: {
			city: 'Minsk',
			house: 12
		},
		laptop: {
			title: 'ZenBook'
		},
		books: ['css', 'html', 'js', 'react']
	}

	const userCopy = removeBook(user, 'js')

	expect(user).not.toBe(userCopy)
	expect(user.laptop).toBe(userCopy.laptop)
	expect(user.address).toBe(userCopy.address)
	expect(user.books).not.toBe(userCopy.books)
	expect(user.books.length).toBe(4)
	expect(userCopy.books[2]).toBe('react')
})

test('removeBook', () => {
	let user: UserWithLaptopT & WithCompaniesT = {
		name: 'Dimych',
		hair: 32,
		address: {
			city: 'Minsk',
			house: 12
		},
		laptop: {
			title: 'ZenBook'
		},
		companies: [
			{ id: 1, title: 'Epam' },
			{ id: 2, title: 'IT-INCUBATOR' }
		]
	}

	const userCopy: UserWithLaptopT & WithCompaniesT = updateCompanyTitle(
		user,
		1,
		'EPAM'
	)

	expect(user).not.toBe(userCopy)
	expect(user.address).toBe(userCopy.address)
	expect(user.companies).not.toBe(userCopy.companies)
	expect(user.companies[0].title).toBe('Epam')
	expect(userCopy.companies[0].title).toBe('EPAM')
})

test('update company', () => {
	let user: UserWithLaptopT = {
		name: 'Dimych',
		hair: 32,
		address: {
			city: 'Minsk',
			house: 12
		},
		laptop: {
			title: 'ZenBook'
		}
	}

	const companies = {
		Dimych: [
			{ id: 1, title: 'Epam' },
			{ id: 2, title: 'IT-INCUBATOR' }
		],
		Artem: [{ id: 2, title: 'IT-INCUBATOR' }]
	}

	const companyCopy = updateCompanyTitle2(companies, 'Dimych', 1, 'IT')

	expect(companies).not.toBe(companyCopy)
	expect(companies['Dimych'][0].title).toBe('Epam')
	expect(companyCopy['Dimych'][0].title).toBe('IT')
})
