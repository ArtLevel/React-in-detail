import React, { FC } from 'react'

type ItemT = {
	title: string
	value: any
}

type AccordionPT = {
	items: ItemT[]
	titleValue: string
	active: boolean
	toggleActive: () => void
	onClick: (value: any) => void
}

function Accordion({
	items,
	titleValue,
	active,
	toggleActive,
	onClick
}: AccordionPT) {
	console.log('Accordion rendering')
	return (
		<div>
			<AccordionTitle title={titleValue} callback={toggleActive} />
			{active && <AccordionBody items={items} onClick={onClick} />}
		</div>
	)
}

type AccordionTitlePT = {
	title: string
	callback: () => void
}

function AccordionTitle({ title, callback }: AccordionTitlePT) {
	console.log('AccordeonTitle rendering')
	return <h3 onClick={callback}>{title}</h3>
}

type AccordionBodyPT = {
	items: ItemT[]
	onClick: (value: any) => void
}

const AccordionBody: FC<AccordionBodyPT> = ({ items, onClick }) => {
	console.log('AccordionBody rendering')
	return (
		<ul>
			{items.map((i, inx) => (
				<li key={inx} onClick={() => onClick(i.value)}>
					{i.title}
				</li>
			))}
		</ul>
	)
}

export default React.memo(Accordion)
