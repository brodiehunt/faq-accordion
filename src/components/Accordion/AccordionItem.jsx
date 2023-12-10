import IconPlus from '../../assets/icon-plus.svg';
import IconMinus from '../../assets/icon-minus.svg';
import styled from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion';

const AccordionArticle = styled(motion.article)`
  
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--background);

  &:last-child {
    border-bottom: none;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    gap: 1.5rem;
    background-color: transparent;
    border: none;
    color: var(--text-dark);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s ease-in all;
    -webkit-tap-highlight-color: transparent;

    &:hover,
    &:focus {
      color: var(--text-hover);
    }
  }

  p {
      padding-top: 1.5rem;
      color: var(--text-light);
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.3125rem;
      transform-origin: top;
    }

  @media (min-width: 768px) {
    button {
      font-size: 1.125rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const AccordionItem = ({title, answer, id, isOpen, onClick}) => {
  
  return (
    <AccordionArticle >
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
        {isOpen && 
          <motion.p
            initial={{
              opacity: 0,
              scaleY: 0,
            }}
            animate={{
              scaleY: [0, 0.25, 0.5, 1 ],
              opacity: [0, 0, 0.25, 1]
            }}
            
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            {answer}
          </motion.p>
          }
      
    </AccordionArticle>
  )
}

export default AccordionItem;