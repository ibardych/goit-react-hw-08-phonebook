import { HeaderStyled } from './Header.styled';
import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderStyled>
      <Link className="logo" to={'/'}>
        <img src={logo} alt="logo" />
      </Link>
      <Logo />
      <Navigation />
      {isLoggedIn && <UserMenu />}
    </HeaderStyled>
  );
};

export default Header;
