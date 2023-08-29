import { useState } from 'react'

export default {
	title: 'React.memo demo'
}

const NewMessagesCounter = (props: any) => {
	return <div>{props.count}</div>
}
const Users = (props: { users: string[] }) => {
	return (
		<div>
			{props.users.map((u, i) => (
				<div key={i}>{u}</div>
			))}
		</div>
	)
}

export const Example1 = () => {
	const [counter, setCounter] = useState(0)
	const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

	return (
		<>
			<NewMessagesCounter count={counter} />
			<Users users={users} />
		</>
	)
}
