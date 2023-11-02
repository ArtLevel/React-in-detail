export type UserT = {
	name: string
	hair: number
	address: { city: string; house: number }
}

export type LaptopT = {
	title: string
}

export type UserWithLaptopT = UserT & {
	laptop: LaptopT
}

export type UserWithBooksT = UserT & {
	books: string[]
}

export type WithCompaniesT = {
	companies: { id: number; title: string }[]
}

export type CompanyT = {
	[key: string]: { id: number; title: string }[]
}

export const makeHairstyle = (u: UserT, power: number) => {
	const copy: UserT = { ...u, hair: u.hair / power }

	return copy
}

export const moveUser = (u: UserWithLaptopT, city: string) => {
	return { ...u, address: { ...u.address, city: city } }
}

export const moveUserToOtherHouse = (
	u: UserWithLaptopT & UserWithBooksT,
	house: number
): UserWithLaptopT & UserWithBooksT => {
	return {
		...u,
		address: { ...u.address, house }
	}
}

export const upgradeUserLaptop = (
	u: UserWithLaptopT,
	laptop: string
): UserWithLaptopT => {
	return {
		...u,
		laptop: { ...u.laptop, title: laptop }
	}
}

export const addNewBooksToUser = (
	u: UserWithLaptopT & UserWithBooksT,
	newBooks: string[]
) => {
	return {
		...u,
		books: [...u.books, ...newBooks]
	}
}

export const updateBook = (
	u: UserWithLaptopT & UserWithBooksT,
	oldBook: string,
	newBook: string
) => {
	return {
		...u,
		books: u.books.map(b => (b === oldBook ? newBook : b))
	}
}

export const updateSkills = (
	s: number[],
	oldSkills: number,
	newSkills: number
) => {
	return s.map(s => (s === oldSkills ? newSkills : s))
}

export const removeBook = (
	u: UserWithLaptopT & UserWithBooksT,
	removeBook: string
) => {
	return { ...u, books: u.books.filter(b => b !== removeBook) }
}

export const updateCompanyTitle = (
	u: UserWithLaptopT & WithCompaniesT,
	companyId: number,
	newTitle: string
) => {
	return {
		...u,
		companies: u.companies.map(c =>
			c.id === companyId ? { ...c, title: newTitle } : c
		)
	}
}

export const updateCompanyTitle2 = (
	company: CompanyT,
	userName: string,
	companyId: number,
	newTitle: string
) => {
	return {
		...company,
		[userName]: company[userName].map(c =>
			c.id === companyId ? { ...c, title: newTitle } : c
		)
	}
}
