import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import background from '../../images/phone-2.jpg';

export const MainContainer = styled.div`
  width: 100%;
  height: 1200px;
  background-image: url(${background});
  background-size: 100% 1200px;
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
