import { ActionT } from './UncontrolledAccordion'

const TOGGLE_CONSTANT = 'TOGGLE_COLLAPSED'

type StateT = {
	collapsed: boolean
}

export const reducer = (state: StateT, action: ActionT) => {
	switch (action.type) {
		case TOGGLE_CONSTANT:
			return { ...state, collapsed: !state.collapsed }
		default:
			throw new Error('Bad action type')
	}
}
