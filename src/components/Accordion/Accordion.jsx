import {useState} from 'react';
import IconStar from '../../assets/icon-star.svg';
import AccordionItem from './AccordionItem.jsx';

const accordionContent = [
  { 
    id: 0,
    title: 'What is Frontend Mentor, and how will it help me?',
    answer: `Frontend Mentor offers realistic coding challenges to 
    help developers improve their frontend coding skills with projects 
    in HTML, CSS, and JavaScript. It's suitable for all levels and ideal 
    for portfolio building.`,
  },
  { 
    id: 1,
    title: `Is Frontend Mentor free?`,
    answer: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
    option providing access to a range of projects suitable for all skill levels.`,
  },
  {
    id: 2,
    title: `Can I use Frontend Mentor projects in my portfolio?`,
    answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. 
    It's an excellentway to showcase your skills to potential employers!`,
  },
  { 
    id: 3,
    title: `How can I get help if I'm stuck on a Frontend Mentor challenge?`,
    answer: `The best place to get help is inside Frontend Mentor's Discord community. 
    There's a help channel where you can ask questions and seek support from other community members.`,
  },
];
 

const Accordion = () => {
  const [indexOpen, setIndexOpen] = useState(null);

  const toggleAccordionItem = (itemId) => {
    // close accordion item without opening another
    if (indexOpen === itemId) {
      return setIndexOpen(null)
    }
    // Close one and open another
    setIndexOpen(itemId);
  }

  const accordionItems = accordionContent.map((item) => {
    return (
      <AccordionItem
        key={item.id}
        id={item.id}
        title={item.title}
        answer={item.answer}
        onClick={toggleAccordionItem}
        isOpen={item.id === indexOpen}
      />
    )
  })

  return (
    <section>
      <header>
        <img 
          src={IconStar} 
          alt=""
          aria-hidden="true"
        />
        <h1>FAQs</h1>
      </header>
      {accordionItems}
    </section>
  )

}

export default Accordion;