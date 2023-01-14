import { Heading, Hero } from 'react-bulma-components';

function Header() {
  return (
    <>
      <Hero>
        <Hero.Header>
          <Heading size={3}>
            <p>Mason's Beers</p>
          </Heading>
        </Hero.Header>
      </Hero>
    </>
  );
}

export default Header;