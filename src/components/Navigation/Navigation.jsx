// import PropTypes from 'prop-types';
import { useAuth } from 'hooks';
import { LinkStyled } from './Link.styled';
import { NavigationStyled } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationStyled>
      <li>
        <LinkStyled to="/">Home</LinkStyled>
      </li>
      {!isLoggedIn && (
        <>
          <li>
            <LinkStyled to="/register">Register</LinkStyled>
          </li>
          <li>
            <LinkStyled to="/login">Login</LinkStyled>
          </li>
        </>
      )}
      {isLoggedIn && (
        <li>
          <LinkStyled to="/contacts">Contacts</LinkStyled>
        </li>
      )}
    </NavigationStyled>
  );
};

// Navigation.propTypes = {
//   message: PropTypes.string.isRequired,
// };

export default Navigation;
