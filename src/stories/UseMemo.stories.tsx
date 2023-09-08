import React, { useMemo, useState } from 'react'

export default {
	title: 'UseMemo demo'
}

export const DifficultCountingExample = () => {
	const [a, setA] = useState(0)
	const [b, setB] = useState(0)

	let resultA = 1
	let resultB = 1

	resultA = useMemo(() => {
		let tempResultA = 1
		for (let i = 1; i <= a; i++) {
			let fake = 0
			while (fake < 100000000) {
				const fakeValue = Math.random()
				fake++
			}
			tempResultA *= i
		}
		return tempResultA
	}, [a])

	for (let i = 1; i <= b; i++) resultB *= i

	return (
		<>
			<input value={a} onChange={e => setA(Number(e.currentTarget.value))} />
			<input value={b} onChange={e => setB(+e.currentTarget.value)} />
			<hr />

			<div>Result for a: {resultA}</div>
			<div>Result for b: {resultB}</div>
		</>
	)
}

const UsersSecret = (props: { users: string[] }) => {
	console.log('USERS')
	return (
		<div>
			{props.users.map((u, i) => (
				<div key={i}>{u}</div>
			))}
		</div>
	)
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
	console.log('HelpsToReactMemo')
	const [counter, setCounter] = useState(0)
	const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

	const newArray = useMemo(
		() => users.filter(u => u.toLowerCase().includes('a')),
		[users]
	)

	const addUser = () => {
		const newUsers = [...users, 'Sveta']

		setUsers(newUsers)
	}

	return (
		<>
			<button onClick={() => setCounter(prevState => prevState + 1)}>+</button>
			<button onClick={addUser}>Add User</button>
			{counter}
			<Users users={newArray} />
		</>
	)
}
