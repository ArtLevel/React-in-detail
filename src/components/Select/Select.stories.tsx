import React, { useState } from 'react'
import { Select } from './Select'
import { action } from '@storybook/addon-actions'

export default {
	title: 'Select stories',
	component: Select
}

export const WithValue = () => {
	return (
		<Select
			value={'1'}
			items={[
				{ value: '1', title: 'Minsk' },
				{ value: '2', title: 'Moscow' },
				{ value: '3', title: 'Kiev' }
			]}
			onChange={action('Value changed')}
		/>
	)
}

export const WithoutValue = () => {
	return (
		<Select
			items={[
				{ value: '1', title: 'Minsk' },
				{ value: '2', title: 'Moscow' },
				{ value: '3', title: 'Kiev' }
			]}
			onChange={action('Value changed')}
		/>
	)
}
