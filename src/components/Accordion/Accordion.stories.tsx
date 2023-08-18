import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'
import {Accordion} from './Accordion';

export default {
	title: 'Accordion stories',
	component: Accordion
}

const callback = action('accordion mode change ecent fired')

export const MenuCollepsedMode = () => <Accordion titleValue='Menu' active={true} toggleActive={callback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue='Users' active={false} toggleActive={callback}/>

export const ModeChanging = () => {
	const [value, setValue] = useState(false)

	return <Accordion titleValue='Users' active={value} toggleActive={() => setValue(!value)}/>
}
