type ItemT = {
	title: string
	value: any
}

type SelectPT = {
	value?: any
	items: ItemT[]
	onChange: (value: any) => void
}

export function Select({ items, value, onChange }: SelectPT) {
	const selectedItem = items.find(i => i.value === value)

	return (
		<div>
			<h3>{selectedItem && selectedItem.title}</h3>
			{items.map(i => (
				<div key={i.value}>{i.title}</div>
			))}
		</div>
	)
}
