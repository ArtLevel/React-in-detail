import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import OnOff from './OnOff'

export default {
	title: 'OnOff stories',
	component: OnOff
}

const callback = action('on or off clicked')

export const OnMode = () => <OnOff value={true} callback={callback} />
export const OffMode = () => <OnOff value={false} callback={callback} />

export const ModeChanging = () => {
	const [value, setValue] = useState(false)

	return <OnOff value={value} callback={() => setValue(!value)} />
}