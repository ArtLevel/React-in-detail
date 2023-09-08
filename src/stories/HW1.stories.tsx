import Select from '../components/Select/Select'
import { useCallback, useMemo, useState } from 'react'

export default {
	title: 'HW1'
}

const cities = [
	{ value: 1, title: 'Moscow', country: 'Russia' },
	{ value: 2, title: 'Rostov', country: 'Russia' },
	{ value: 3, title: 'Pskov', country: 'Russia' },
	{ value: 1, title: 'Minsk', country: 'Belarus' },
	{ value: 2, title: 'Brest', country: 'Belarus' },
	{ value: 1, title: 'Kiev', country: 'Ukraina' },
	{ value: 2, title: 'Berdansk', country: 'Ukraina' }
]

export const HW1 = () => {
	const [oneSelectValue, setOneSelectValue] = useState(1)
	const [twoSelectValue, setTwoSelectValue] = useState(1)
	const [threeSelectValue, setThreeSelectValue] = useState(1)
	const [counter, setCounter] = useState(0)

	const onChangeSelect = useCallback((selectId: number, value: number) => {
		if (selectId === 1) setOneSelectValue(value)
		if (selectId === 2) setTwoSelectValue(value)
		if (selectId === 3) setThreeSelectValue(value)
	}, [])

	const onClickButtonCounter = () => setCounter(prevState => prevState + 1)

	const russiaCities = useMemo(() => {
		console.log('R C')
		return cities.filter(c => c.country === 'Russia')
	}, [cities])

	const belarusCities = useMemo(() => {
		console.log('B C')
		return cities.filter(c => c.country === 'Belarus')
	}, [cities])

	const ukrainaCities = useMemo(() => {
		console.log('U C')
		return cities.filter(c => c.country === 'Ukraina')
	}, [cities])

	return (
		<>
			<Select
				onChange={value => onChangeSelect(1, value)}
				items={russiaCities}
				value={oneSelectValue}
			/>
			<Select
				onChange={value => onChangeSelect(2, value)}
				items={belarusCities}
				value={twoSelectValue}
			/>
			<Select
				onChange={value => onChangeSelect(3, value)}
				items={ukrainaCities}
				value={threeSelectValue}
			/>
			<button onClick={onClickButtonCounter}>+ {counter}</button>
		</>
	)
}
