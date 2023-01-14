import { Container, Heading, Hero, Section } from 'react-bulma-components';
import Header from "./Header";
import StoreController from './StoreController';

function App() {
  return (
    <>
    <Section>
      <Header />
    </Section>
      <StoreController />
    </>
  );
}

export default App;
