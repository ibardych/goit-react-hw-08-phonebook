import { LogoStyled } from './Logo.styled';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <LogoStyled>
      <Link to={'/'}>
        <span>Phone Book</span>
        <div>cosmic callers</div>
      </Link>
    </LogoStyled>
  );
};

export default Logo;
