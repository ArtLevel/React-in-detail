import React, { useReducer, useState } from 'react'

type AccordionPT = {
	titleValue: string
}

type ActionT = {
	type: string
}

const reducer = (state: boolean, action: ActionT) => {
	if (action.type === 'TOGGLE-COLLAPSED') return !state
	return state
}

export function UncontrolledAccordion({ titleValue }: AccordionPT) {
	// const [active, setActive] = useState<boolean>(false)
	const [collapsed, dispatch] = useReducer(reducer, false)

	return (
		<div>
			{/*<AccordionTitle title={titleValue} callback={toggleAccordion} />*/}
			<AccordionTitle
				title={titleValue}
				callback={() => dispatch({ type: 'TOGGLE-COLLAPSED' })}
			/>
			{collapsed && <AccordionBody />}
		</div>
	)
}

type AccordionTitlePT = {
	title: string
	callback: () => void
}

function AccordionTitle({ title, callback }: AccordionTitlePT) {
	return <h3 onClick={callback}>{title}</h3>
}

function AccordionBody() {
	return (
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	)
}
