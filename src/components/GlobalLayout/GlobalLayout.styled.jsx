import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import background from '../../images/phone-2.jpg';

export const MainContainer = styled.div`
  background-image: url(${background});
  background-size: 100% auto;
  background-repeat: no-repeat;
`;

export const FooterContainer = styled(Navbar)`
  justify-content: center;
  padding: 10px 20px;
`;

export const FooterText = styled.a`
  font-size: 18px;
  color: white;

  &:hover,
  &:focus {
    color: #aaaaaa;
  }
`;
