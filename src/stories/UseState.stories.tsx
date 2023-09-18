import React, { useState } from 'react'

export default {
	title: 'UseState demo'
}

export const Example1 = () => {
	console.log('Example1')
	const [counter, setCounter] = useState(0) // [1, function(newValue){}]

	return (
		<>
			<button onClick={() => setCounter(prevState => prevState + 1)}>+</button>
			{counter}
		</>
	)
}
