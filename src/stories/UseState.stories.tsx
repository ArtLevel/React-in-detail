import React, { useMemo, useState } from 'react'
// 2
export default {
	title: 'UseState demo'
}

function generateData() {
	console.log('generateData')
	return 1
}

export const Example1 = () => {
	console.log('Example1')
	const [counter, setCounter] = useState(generateData) // [2, function(newValue){}]

	return (
		<>
			<button onClick={() => setCounter(prevState => prevState + 1)}>+</button>
			{counter}
		</>
	)
}
