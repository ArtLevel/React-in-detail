import { reducer, StateT } from './UncontrolledAccordionReducer'
import { TOGGLE_COLLAPSED } from './UncontrolledAccordion'

test('reducer should be true', () => {
	const state: StateT = {
		collapsed: false
	}

	const newState = reducer(state, { type: TOGGLE_COLLAPSED })

	expect(newState.collapsed).toBe(true)
})

test('reducer should be false', () => {
	const state: StateT = {
		collapsed: true
	}

	const newState = reducer(state, { type: TOGGLE_COLLAPSED })

	expect(newState.collapsed).toBe(false)
})

test('reducer should throw error because action type is incorrect', () => {
	const state: StateT = {
		collapsed: true
	}

	expect(() => {
		reducer(state, { type: 'FAKETYPE' })
	}).toThrowError()
})
