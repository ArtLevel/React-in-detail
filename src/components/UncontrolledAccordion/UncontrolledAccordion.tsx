import React, { useState } from 'react'

type AccordionPT = {
	titleValue: string
}

export function UncontrolledAccordion({ titleValue }: AccordionPT) {
	const [active, setActive] = useState<boolean>(false)

	const toggleAccordion = () => {
		setActive((active) => !active)
	}

	return (
		<div>
			<AccordionTitle title={titleValue} callback={toggleAccordion} />
			{active && <AccordionBody />}
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
