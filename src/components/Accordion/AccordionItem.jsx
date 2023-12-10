import IconPlus from '../../assets/icon-plus.svg';
import IconMinus from '../../assets/icon-minus.svg';

const AccordionItem = ({title, answer, id, isOpen, onClick}) => {
  console.log(title, isOpen)
  return (
    <article>
      <h2>
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => onClick(id)}
        >
          {title}
          <img 
            src={isOpen ? IconMinus : IconPlus } 
            alt=""
            aria-hidden="true"
          />
        </button>
        
      </h2>
      {isOpen && <p>{answer}</p>}
    </article>
  )
}

export default AccordionItem;