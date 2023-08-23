import React, {ChangeEvent, useRef, useState} from 'react'
import {action} from '@storybook/addon-actions';

export default {
	title: 'UncontrolledInput stories',
	// component: UncontrolledRating
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
	const [value, setValue] = useState('')

	const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

	return <><input onChange={onChange}/> - {value}</>
}
export const GetValueOfUncontrolledInput = () => {
	const [value, setValue] = useState('')
	const inputRef = useRef<HTMLInputElement>(null)

	const onClick = () => {
		if (inputRef.current) {
			setValue(inputRef.current.value)
		}
	}

	return <><input ref={inputRef}/> - <button onClick={onClick}>save</button> {value}</>
}
export const ControlledInput = () => {
	const [parentValue, setParentValue] = useState('')

	const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

	return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
	const [parentValue, setParentValue] = useState(false)

	const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)

	return <input type='checkbox' onChange={onChange} checked={parentValue}/>
}

export const ControlledSelect = () => {
	const [parentValue, setParentValue] = useState<string | undefined>('2')

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)

	return (
		<select value={parentValue} onChange={onChange}>
			<option>none</option>
			<option value={1}>Minsk</option>
			<option value={2}>Moscow</option>
			<option value={3}>Kiev</option>
		</select>
	)
}

export const ControlledInputWithFixedValue = () => <input value='it-incubator'/>
