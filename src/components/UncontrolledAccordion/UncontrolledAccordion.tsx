import React, { useReducer, useState } from 'react'
import { reducer } from './UncontrolledAccordionReducer'

type AccordionPT = {
	titleValue: string
}

export type ActionT = {
	type: string
}

export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'

function UncontrolledAccordion({ titleValue }: AccordionPT) {
	// const [active, setActive] = useState<boolean>(false)
	const [state, dispatch] = useReducer(reducer, { collapsed: false })

	return (
		<div>
			{/*<AccordionTitle title={titleValue} callback={toggleAccordion} />*/}
			<AccordionTitle
				title={titleValue}
				callback={() => dispatch({ type: TOGGLE_COLLAPSED })}
			/>
			{!state.collapsed && <AccordionBody />}
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

export default React.memo(UncontrolledAccordion)
