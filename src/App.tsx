import './App.css'
import Accordion from './components/Accordion/Accordion'
import Rating, { RatingValueT } from './components/Raiting/Raiting'
import React, { useState } from 'react'
import OnOff from './components/OnOff/OnOff'
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion'
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating'
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff'
import Select from './components/Select/Select'

function App() {
	console.log('App rendering')
	const [ratingValue, setRatingValue] = useState<RatingValueT>(0)
	const [accordionActive, setAccordionActive] = useState<boolean>(false)
	const [onOff, setOnOff] = useState<boolean>(false)
	const [selectValue, setSelectValue] = useState('1')

	const toggleActiveAccordion = () => setAccordionActive(prev => !prev)
	const toggleOnOff = () => setOnOff(prev => !prev)

	return (
		<div className='app'>
			<Accordion
				titleValue={'Accordion1'}
				active={accordionActive}
				toggleActive={toggleActiveAccordion}
				items={[
					{ title: 'Dimych', value: 1 },
					{ title: 'Valera', value: 2 },
					{ title: 'Viktor', value: 3 }
				]}
				onClick={() => {}}
			/>
			<Rating value={ratingValue} setRating={setRatingValue} />
			<OnOff callback={toggleOnOff} value={onOff} />
			<UncontrolledAccordion titleValue={'uncontrolled'} />
			<UncontrolledRating onChange={() => {}} />
			<UncontrolledOnOff />
			<Select
				value={selectValue}
				items={[
					{ value: '1', title: 'Minsk' },
					{ value: '2', title: 'Moscow' },
					{ value: '3', title: 'Kiev' }
				]}
				onChange={setSelectValue}
			/>
		</div>
	)
}

export default App
