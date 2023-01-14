import { Container, Hero } from 'react-bulma-components';
import Header from "./Header";
import StoreController from './StoreController';

function App() {
  return (
    <>
    <Container>
      <Header />
      <StoreController />
    </Container>
    </>
  );
}

export default App;
