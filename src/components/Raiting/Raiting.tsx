export type RatingValueT = 1 | 2 | 3 | 4 | 5 | 0

type RatingPT = {
	value: RatingValueT;
	setRating: (value: RatingValueT) => void;
};

export function Rating({value, setRating}: RatingPT) {
	console.log('Rating rendering');
	return (
		<div>
			<Star selected={value > 0} callback={() => setRating(1)}/>
			<Star selected={value > 1} callback={() => setRating(2)}/>
			<Star selected={value > 2} callback={() => setRating(3)}/>
			<Star selected={value > 3} callback={() => setRating(4)}/>
			<Star selected={value > 4} callback={() => setRating(5)}/>
		</div>
	);
}

type StarPT = {
	selected: boolean;
	callback: () => void;
};

function Star({selected, callback}: StarPT) {
	console.log('Star rendering');
	return <span onClick={callback}>{selected ? <b> star </b> : ' star '}</span>;
}
