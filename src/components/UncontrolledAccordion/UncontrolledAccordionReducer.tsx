import { ActionT } from './UncontrolledAccordion'

const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'

export type StateT = {
	collapsed: boolean
}

export const reducer = (state: StateT, action: ActionT) => {
	switch (action.type) {
		case TOGGLE_COLLAPSED:
			return { ...state, collapsed: !state.collapsed }
		default:
			throw new Error('Bad action type')
	}
}
