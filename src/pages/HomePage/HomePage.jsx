import { ImClock } from 'react-icons/im';
import { Title, Message, Welcome } from './HomePage.styled';

const Homepage = () => {
  return (
    <>
      <Welcome>
        <Title>
          We help you save your time <ImClock />
        </Title>
        <Message>
          You no longer have to look for a piece of paper with the phone number
          of your new acquaintance
        </Message>
      </Welcome>
    </>
  );
};

export default Homepage;
