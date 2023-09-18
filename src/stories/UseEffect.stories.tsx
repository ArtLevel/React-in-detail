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

	useEffect(() => {
		setInterval(() => {
			setCounter(prevState => prevState + 1)
		}, 1000)
	}, [])

	return (
		<>
			Hello, counter: {counter} fake: {fake}
			{/*<button onClick={() => setCounter(prevState => prevState + 1)}>*/}
			{/*	fake+*/}
			{/*</button>*/}
			{/*<button onClick={() => setFake(prevState => prevState + 1)}>*/}
			{/*	counter+*/}
			{/*</button>*/}
		</>
	)
}

export const Timer = () => {
	const [timer, setTimer] = useState(new Date().toISOString())

	useEffect(() => {
		setInterval(() => {
			let hours = new Date().getHours().toString()
			let minutes = new Date().getMinutes().toString()
			let seconds = new Date().getSeconds().toString()

			hours = hours.length > 1 ? hours : '0' + hours
			minutes = minutes.length > 1 ? minutes : '0' + minutes
			seconds = seconds.length > 1 ? seconds : '0' + seconds

			setTimer(`${hours}:${minutes}:${seconds}`)
		}, 1000)
	}, [])

	return timer
}
