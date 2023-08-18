import {useState} from 'react';

type RatingPT = {
	value?: 1 | 2 | 3 | 4 | 5 | 0;
	onChange: (value: 1 | 2 | 3 | 4 | 5 | 0) => void
};

export function UncontrolledRating(props: RatingPT) {
	const {onChange, ...restProps} = props

	const [rating, setRating] = useState<number>(restProps.value ? restProps.value : 0);
	const removeRating = () => {
		setRating(0);
	};

	return (
		<div>
			<Star selected={rating > 0} value={1} callback={() => {
				onChange(1);
				setRating(1)
			}}
			      remove={removeRating}/>
			<Star selected={rating > 1} value={2} callback={() => {
				onChange(2);
				setRating(2)
			}}
			      remove={removeRating}/>
			<Star selected={rating > 2} value={3} callback={() => {
				onChange(3);
				setRating(3)
			}}
			      remove={removeRating}/>
			<Star selected={rating > 3} value={4} callback={() => {
				onChange(4);
				setRating(4)
			}}
			      remove={removeRating}/>
			<Star selected={rating > 4} value={5} callback={() => {
				onChange(5);
				setRating(5)
			}}
			      remove={removeRating}/>
		</div>
	);
}

type StarPT = {
	selected: boolean;
	value: number;
	callback: (value: number) => void;
	remove: () => void;
};

function Star({
	              selected,
	              value,
	              callback,
	              remove,
              }: StarPT) {
	console.log('Star rendering');
	return <span style={{
		userSelect: 'none',
		cursor: 'pointer',
	}} onClick={() => callback(value)} onDoubleClick={remove}>{selected
		? <b> star </b>
		: ' star '}</span>;
}
