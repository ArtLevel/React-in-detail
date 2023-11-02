import React from 'react'

type OnOffPT = {
	value: boolean
	callback: () => void
}

function OnOff({ value, callback }: OnOffPT) {
	const block = {
		padding: '10px',
		display: 'flex',
		alignItems: 'center',
		gap: '10px',
		border: '1px solid black',
		width: 'min-content'
	}
	const on = {
		padding: '10px',
		backgroundColor: value ? 'green' : 'white',
		border: '1px solid black'
	}
	const off = {
		padding: '10px',
		backgroundColor: value ? 'white' : 'red',
		border: '1px solid black'
	}
	const indicator = {
		display: 'block',
		padding: '10px',
		width: '10px',
		height: '10px',
		borderRadius: '50%',
		backgroundColor: value ? 'green' : 'red',
		border: '1px solid black'
	}
	return (
		<div style={block}>
			<button style={on} onClick={callback}>
				on
			</button>
			<button style={off} onClick={callback}>
				off
			</button>
			<span style={indicator}></span>
		</div>
	)
}

export default React.memo(OnOff)
