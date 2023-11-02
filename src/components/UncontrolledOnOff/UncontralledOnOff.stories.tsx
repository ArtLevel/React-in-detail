import React from 'react'
import UncontrolledOnOff from './UncontrolledOnOff'
import { action } from '@storybook/addon-actions'

export default {
	title: 'UncontrolledOnOff stories',
	component: UncontrolledOnOff
}

export const UncontrolledOnOffMode = () => <UncontrolledOnOff on={true} />
export const DefaultInputValue = () => <input defaultValue='yo!' />
