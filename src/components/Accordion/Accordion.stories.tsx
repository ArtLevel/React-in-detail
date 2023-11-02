import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import Accordion from './Accordion'

export default {
	title: 'Accordion stories',
	component: Accordion
}

const callback = action('accordion mode change ecent fired')
const onClickCallback = action('some item was clicked')

export const MenuCollepsedMode = () => (
	<Accordion
		titleValue='Menu'
		active={true}
		toggleActive={callback}
		items={[
			{ title: 'Dimych', value: 1 },
			{ title: 'Valera', value: 2 },
			{ title: 'Viktor', value: 3 }
		]}
		onClick={onClickCallback}
	/>
)
export const UsersUncollapsedMode = () => (
	<Accordion
		titleValue='Users'
		active={false}
		toggleActive={callback}
		items={[
			{ title: 'Dimych', value: 1 },
			{ title: 'Valera', value: 2 },
			{ title: 'Viktor', value: 3 }
		]}
		onClick={onClickCallback}
	/>
)

export const ModeChanging = () => {
	const [value, setValue] = useState(false)

	return (
		<Accordion
			items={[
				{ title: 'Dimych', value: 1 },
				{ title: 'Valera', value: 2 },
				{ title: 'Viktor', value: 3 }
			]}
			onClick={value => alert(`user with id ${value} should be happy`)}
			titleValue='Users'
			active={value}
			toggleActive={() => setValue(!value)}
		/>
	)
}
