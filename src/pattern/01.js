// store.subscride(function subscriber() {}) // стор изменился
// button.addEventListener('click', function subscriber() {}) // произошёл клик
// setTimeout(function subscriber() {}) // прошла секунда
// promise.then(function subscriber() {}) // промис зарезолвился
//
// useEffect(function subscriber() {}, [])

// <AppButton onClick={function subscriber() {}}/>

const button = {
	_subscribers: {
		'click': [],
		'doubleClick': []
	},
	click() {
			this._subscribers['click'].forEach(sub => sub())
	},
	doubleClick() {
		this._subscribers['doubleClick'].forEach(sub => sub())
	},
	addEventListener(eventName, subscriber) {
		this._subscribers[eventName].push(subscriber)
	},
	removeEventListener(eventName, subscriber) {
		this._subscribers[eventName] = this._subscribers[eventName].filter(sub => sub !== subscriber)
	},
}

const a = () => console.log('click')

button.addEventListener('click', a)

button.removeEventListener('click', a)
