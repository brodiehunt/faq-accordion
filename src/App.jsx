import Accordion from './components/Accordion/Accordion.jsx';
import styled from 'styled-components';
import BackgroundMobile from './assets/background-pattern-mobile.svg';
import BackgroundDesktop from './assets/background-pattern-desktop.svg';

const MainWrapper = styled.main`
  min-height: 100svh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: var(--background);

  .decorative-background {
    background: url(${BackgroundMobile});
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 14.5rem;
    z-index: 0;
  }

  @media (min-width: 768px) {
    .decorative-background {
      background: url(${BackgroundDesktop});
      height: 20rem;
    }
  }
`;

function App() {
  return (
    <MainWrapper>
      <div  aria-hidden="true" className="decorative-background"></div>
      <Accordion />
    </MainWrapper>
  )
}

export default App;
