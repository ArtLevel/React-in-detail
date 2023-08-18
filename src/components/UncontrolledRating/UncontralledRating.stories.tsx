import React from 'react'
import {UncontrolledRating} from './UncontrolledRating';
import {action} from '@storybook/addon-actions';

export default {
	title: 'UncontrolledRating stories',
	component: UncontrolledRating
}

const callback = action('rating changed inside component')

export const UncontrolledRating0 = () => <UncontrolledRating value={0} onChange={callback}/>
export const UncontrolledRating1 = () => <UncontrolledRating value={1} onChange={callback}/>
export const UncontrolledRating2 = () => <UncontrolledRating value={2} onChange={callback}/>
export const UncontrolledRating3 = () => <UncontrolledRating value={3} onChange={callback}/>
export const UncontrolledRating4 = () => <UncontrolledRating value={4} onChange={callback}/>
export const UncontrolledRating5 = () => <UncontrolledRating value={5} onChange={callback}/>
