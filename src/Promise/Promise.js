// pending fulfilled rejected

const server = {
	getData() {
		return new Promise((res, rej) => {
			res('Hello')
		})
	}
}

const promise = server.getData()

console.log(promise)

function NewPromise(cb) {
	const resolve = result => {
		return { state: 'fulfilled', result }
	}
	const reject = err => {
		return { state: 'rejected', err }
	}

	cb(resolve, reject)
}
