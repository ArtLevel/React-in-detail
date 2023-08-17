import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueT} from './components/Raiting/Raiting';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion}
  from './components/UncontrolledAccordion/UncontrolledAccordion';
import {
  UncontrolledRating,
} from './components/UncontrolledRating/UncontrolledRating';
import {useState} from 'react';
import {
  UncontrolledOnOff
} from './components/UncontrolledOnOff/UncontrolledOnOff';

function App() {
  console.log('App rendering');
  const [ratingValue, setRatingValue] = useState<RatingValueT>(0);
  const [accordionActive, setAccordionActive] = useState<boolean>(false);
  const [onOff, setOnOff] = useState<boolean>(false);
  
  const toggleActiveAccordion = () => setAccordionActive(prev => !prev);
  const toggleOnOff = () => setOnOff(prev => !prev);
  
  return (
      <div className="app">
        <Accordion titleValue={'Accordion1'} active={accordionActive} toggleActive={toggleActiveAccordion}/>
        <Rating value={ratingValue} setRating={setRatingValue}/>
        <OnOff  callback={toggleOnOff} value={onOff}/>
        <UncontrolledAccordion titleValue={'uncontrolled'}/>
        <UncontrolledRating/>
        <UncontrolledOnOff/>
      </div>
  );
}

export default App;



