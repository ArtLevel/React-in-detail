import React, { useState } from 'react'
import { Select } from './Select'
import { action } from '@storybook/addon-actions'

export default {
	title: 'Select stories',
	component: Select
}

export const WithValue = () => {
	const [value, setValue] = useState('1')

	return (
		<Select
			value={value}
			items={[
				{ value: '1', title: 'Minsk' },
				{ value: '2', title: 'Moscow' },
				{ value: '3', title: 'Kiev' }
			]}
			onChange={setValue}
		/>
	)
}

export const WithoutValue = () => {
	const [value, setValue] = useState(null)

	return (
		<Select
			value={value}
			items={[
				{ value: '1', title: 'Minsk' },
				{ value: '2', title: 'Moscow' },
				{ value: '3', title: 'Kiev' }
			]}
			onChange={setValue}
		/>
	)
}
