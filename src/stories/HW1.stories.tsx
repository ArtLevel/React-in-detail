import Select from '../components/Select/Select'
import { useState } from 'react'

export default {
	title: 'HW1'
}

export const HW1 = () => {
	console.log('HW1')
	const [oneSelectValue, setOneSelectValue] = useState(1)
	const [counter, setCounter] = useState(0)

	const cities = [
		{ value: 1, title: 'Moscow', country: 'Russia' },
		{ value: 2, title: 'Rostov', country: 'Russia' },
		{ value: 3, title: 'Pskov', country: 'Russia' },
		{ value: 4, title: 'Minsk', country: 'Belarus' },
		{ value: 5, title: 'Brest', country: 'Belarus' },
		{ value: 6, title: 'Kiev', country: 'Ukraina' },
		{ value: 7, title: 'Berdansk', country: 'Ukraina' }
	]

	const onChangeSelect = (selectId: number, value: number) => {
		if (selectId === 1) setOneSelectValue(value)
	}

	const onClickButtonCounter = () => setCounter(prevState => prevState + 1)

	const russiaCities = cities.filter(c => c.country === 'Russia')

	return (
		<>
			<Select
				onChange={value => onChangeSelect(1, value)}
				items={russiaCities}
				value={oneSelectValue}
			/>
			<button onClick={onClickButtonCounter}>+ {counter}</button>
		</>
	)
}
