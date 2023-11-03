// function getNumber() {
// 	const promise = new Promise((resolve, reject) => {
// 		reject('Some Error')
// 		setTimeout(() => resolve(Math.random()), 2000)
// 	})
// 	return promise
// }
//
// getNumber().then(n => console.log(n))

// const repo = {
// 	save(data) {
// 		try {
// 			localStorage.setItem('someKey', JSON.stringify(data))
// 		} catch {
// 			return false
// 		}
// 		return true
// 	},
// 	saveAsync(data) {
// 		const promise = new Promise((res, rej) => {
// 			try {
// 				localStorage.setItem('someKey', JSON.stringify(data))
// 				res('SAVED')
// 			} catch (error) {
// 				rej(error)
// 			}
// 		})
// 		return promise
// 	},
// 	read() {
// 		return new Promise((res, rej) => {
// 			const data = localStorage.getItem('someKey')
// 			if (!data) res(null)
// 			if (data) res(JSON.parse(data))
// 		})
// 	}
// }

// const result = repo.save({ name: 'IT' })
// if (result) {
// 	console.log('SAVED')
// } else {
// 	console.log('NOT SAVED')
// }

// const result1 = repo
// 	.saveAsync({ name: 'ArtLevel' })
// 	.then(() => console.log('SAVED'))
// 	.catch(error => console.warn('NOT SAVED: ' + error))

// const run = async () => {
// 	await repo.saveAsync({ name: 'ArtLevel' })
// 	console.log('SAVED')
//
// 	const data = await repo.read()
// 	console.log(data)
// }
//
// run()

// const a = async () => {
// 	// setTimeout(() => console.log(1), 1000)
// 	// setTimeout(() => console.log(2), 2000)
// 	// setTimeout(() => console.log(3), 3000)
// 	setTimeout(() => {
// 		console.log(1)
// 	})
// }
//
// a()

const wait = seconds => {
	return new Promise((resolve, reject) => setTimeout(() => resolve(), seconds))
}

async function run() {
	await wait(1000)
	console.log(1)
	await wait(1000)
	console.log(2)
	await wait(1000)
	console.log(3)
}

run()
// getNumber().then(n => console.log(n))
