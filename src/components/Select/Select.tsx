import s from './Select.module.css'
import React, { useState, KeyboardEvent, useEffect } from 'react'

type ItemT = {
	title: string
	value: any
}

type SelectPT = {
	value?: any
	items: ItemT[]
	onChange: (value: any) => void
}

function Select({ items, value, onChange }: SelectPT) {
	const [active, setActive] = useState(false)
	const [hoveredElementValue, setHoveredElementValue] = useState(value)
	
	const selectedItem = items.find(i => i.value === value)
	const hoveredItem = items.find(i => i.value === hoveredElementValue)

	useEffect(() => setHoveredElementValue(value), [value])

	const toggleItems = () => setActive(prevState => !prevState)
	const onItemClick = (value: any) => {
		onChange(value)
		toggleItems()
	}

	const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
			for (let i = 0; i < items.length; i++) {
				if (items[i].value === value) {
					const pretendentElement =
						e.key === 'ArrowDown' ? items[i + 1] : items[i - 1]

					if (pretendentElement) {
						onChange(pretendentElement.value)
						return
					}
				}
			}
			if (!selectedItem) onChange(items[0].value)
		}
		if (e.key === 'Enter' || e.key === 'Escape') {
			setActive(false)
		}
	}

	return (
		<>
			<div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
				<span className={s.main} onClick={toggleItems}>
					{selectedItem && selectedItem.title}
				</span>
				{active && (
					<div className={s.items}>
						{items.map(i => (
							<div
								key={i.value}
								onMouseEnter={() => setHoveredElementValue(i.value)}
								onClick={() => onItemClick(i.value)}
								className={`${s.item} ${hoveredItem === i ? s.selected : ''}`}
							>
								{i.title}
							</div>
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default React.memo(Select)
