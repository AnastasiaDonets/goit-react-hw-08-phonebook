import { useDispatch, useSelector } from 'react-redux';
import { selectUsername, selectEmail } from 'redux/selectors';
import { logOut } from 'redux/operations';
import {
  Container,
  WellcomePhrase,
  PictureThumb,
  Picture,
  UsernameText,
  StyledButton,
} from './UserMenu.styled';

export const UserMenu = () => {
  const username = useSelector(selectUsername);
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();

  const setPicture = () => {
    const ratio = window.devicePixelRatio;
    return ratio > 1
      ? require('../../images/phone-3.jpg')
      : require('../../images/phone-4.jpg');
  };

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <WellcomePhrase>Wellcome to your Phonebook!</WellcomePhrase>
      <PictureThumb>
        <Picture src={setPicture()} alt="User Phone" />
      </PictureThumb>
      <UsernameText>{username}</UsernameText>
      <p>{email}</p>
      <StyledButton onClick={handleClick} variant="dark" type="button">
        Logout
      </StyledButton>
    </Container>
  );
};
