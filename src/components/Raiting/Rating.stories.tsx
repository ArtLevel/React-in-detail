import React from 'react'
import {action} from '@storybook/addon-actions'
import {Rating} from './Raiting'

export default {
	title: 'Rating stories',
	component: Rating
}

export const EmptyRating = () => <Rating value={0} setRating={x => x}/>
export const Rating1 = () => <Rating value={1} setRating={x => x}/>
export const Rating2 = () => <Rating value={2} setRating={x => x}/>
export const Rating3 = () => <Rating value={3} setRating={x => x}/>
export const Rating4 = () => <Rating value={4} setRating={x => x}/>
export const Rating5 = () => <Rating value={5} setRating={x => x}/>

