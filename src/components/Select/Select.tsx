import { useState } from 'react'
import s from './Select.module.css'

type ItemT = {
	title: string
	value: any
}

type SelectPT = {
	value: any
	items: ItemT[]
	onChange: (value: any) => void
}

export function Select({ items, value, onChange }: SelectPT) {
	const [collapsed, setCollapsed] = useState(false)
	const el = items.find(i => i.value === value)

	const onChangeCollapsedHandler = () => setCollapsed(prevState => !prevState)

	return (
		<div className={s.select}>
			<div className={s.selectTitle} onClick={onChangeCollapsedHandler}>
				{el && el.title}
			</div>
			{collapsed && (
				<ul className={s.selectMenu}>
					{items.map((i, inx) => (
						<li
							key={inx}
							className={s.selectMenuTitleItem}
							onClick={() => onChange(i.value)}
						>
							{i.title}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
