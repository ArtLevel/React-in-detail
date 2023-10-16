// pending fulfilled rejected

const server = {
	getData() {
		return new Promise((res, rej) => {
			rej('reject1')
		})
	}
}

server
	.getData()
	.then(t => t + 'then1')
	.catch(t => t + 'catch1')
	.catch(t => t + 'catch2')
	.then(t => t + 'then2')
	.finally(t => t + 'finally')
	.then(t => console.log(t))

//
// const promise = server.getData()
//
// console.log(promise)
//
// const a = promise.then(data => {
// 	console.log(data)
// })
//
// console.log(a, 'fasddfsa')
//
// promise.catch(err => {
// 	console.log(err)
// })

// function NewPromise(cb) {
// 	const resolve = result => {
// 		return { state: 'fulfilled', result }
// 	}
// 	const reject = err => {
// 		return { state: 'rejected', err }
// 	}
//
// 	cb(resolve, reject)
// }

// const delay = ms =>
// 	new Promise((res, rej) => setTimeout(() => res('resolved'), ms))
// delay(1000)

//
