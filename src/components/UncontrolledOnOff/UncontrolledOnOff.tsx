import {useState} from 'react';

type OnOffPT = {
	on?: boolean;
};

export function UncontrolledOnOff(props: OnOffPT) {
	const [active, setActive] = useState<boolean>(props.on ? props.on : false);

	const toggleActive = () => {
		setActive((active) => !active);
	};
	const block = {
		padding: '10px',
		display: 'flex',
		alignItems: 'center',
		gap: '10px',
		border: '1px solid black',
		width: 'min-content',
	};
	const on = {
		padding: '10px',
		backgroundColor: active ? 'green' : 'white',
		border: '1px solid black',
	};
	const off = {
		padding: '10px',
		backgroundColor: active ? 'white' : 'red',
		border: '1px solid black',
	};
	const indicator = {
		display: 'block',
		padding: '10px',
		width: '10px',
		height: '10px',
		borderRadius: '50%',
		backgroundColor: active ? 'green' : 'red',
		border: '1px solid black',
	};
	return (
		<div style={block}>
			<button style={on} onClick={toggleActive}>on
			</button>
			<button style={off} onClick={toggleActive}>off
			</button>
			<span style={indicator}></span>
		</div>
	);
}