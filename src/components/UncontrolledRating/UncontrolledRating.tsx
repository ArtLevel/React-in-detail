import {useState} from 'react';

type RatingPT = {
  value?: 1 | 2 | 3 | 4 | 5 | 0;
};

export function UncontrolledRating({}: RatingPT) {
  const [rating, setRating] = useState<number>(0);
  const removeRating = () => {
    setRating(0);
  };
  return (
      <div>
        <Star selected={rating > 0} value={1} callback={setRating}
              remove={removeRating}/>
        <Star selected={rating > 1} value={2} callback={setRating}
              remove={removeRating}/>
        <Star selected={rating > 2} value={3} callback={setRating}
              remove={removeRating}/>
        <Star selected={rating > 3} value={4} callback={setRating}
              remove={removeRating}/>
        <Star selected={rating > 4} value={5} callback={setRating}
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
