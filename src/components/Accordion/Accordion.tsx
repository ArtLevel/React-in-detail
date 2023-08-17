type AccordionPT = {
  titleValue: string;
  active: boolean;
  toggleActive: () => void;
};

export function Accordion({
  titleValue,
  active,
  toggleActive
}: AccordionPT) {
  console.log('Accordion rendering');
  return (
      <div>
        <AccordionTitle title={titleValue} callback={toggleActive}/>
        {active && <AccordionBody/>}
      </div>
  );
}

type AccordionTitlePT = {
  title: string;
  callback: () => void;
};

function AccordionTitle({title, callback}: AccordionTitlePT) {
  console.log('AccordeonTitle rendering');
  return <h3 onClick={callback}>{title}</h3>;
}

function AccordionBody() {
  console.log('AccordeonBody rendering');
  return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
  );
}
