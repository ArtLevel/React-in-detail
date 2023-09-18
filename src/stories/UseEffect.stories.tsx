import React, { useEffect, useState } from 'react'

export default {
	title: 'UseEffect demo'
}

export const SimpleExample = () => {
	const [counter, setCounter] = useState(1)
	const [fake, setFake] = useState(1)
	console.log('Example1')

	useEffect(() => {
		console.log('useEffect every render')
		document.title = counter.toString()
	})

	useEffect(() => {
		console.log('useEffect only first render (componentDidMount)')
		document.title = counter.toString()
	}, [])

	useEffect(() => {
		console.log('useEffect first render and every counter change')
		document.title = counter.toString()
	}, [counter])

	return (
		<>
			Hello, {counter} {fake}
			<button onClick={() => setCounter(prevState => prevState + 1)}>+</button>
			<button onClick={() => setFake(prevState => prevState + 1)}>+</button>
		</>
	)
}

export const SetTimeoutExample = () => {
	const [counter, setCounter] = useState(1)
	const [fake, setFake] = useState(1)
	console.log('Example1')

	// useEffect(() => {
	// 	console.log('useEffect every render')
	// 	document.title = counter.toString()
	// })

	setTimeout(() => {
		document.title = counter.toString()
	}, 1000)

	return (
		<>
			Hello, {counter} {fake}
			<button onClick={() => setCounter(prevState => prevState + 1)}>
				fake+
			</button>
			<button onClick={() => setFake(prevState => prevState + 1)}>
				counter+
			</button>
		</>
	)
}
