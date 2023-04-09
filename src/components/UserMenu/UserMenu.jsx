import { useDispatch, useSelector } from 'react-redux';
import { UserMenuStyled } from './UserMenu.styled';
import { selectUser } from 'redux/auth/selectors';
import { Button } from 'components/Styled';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <UserMenuStyled>
      <div className="name">Wellcome, {user.name}!</div>
      <div className="container">
        <div className="email">{user.email}</div>
        <Button onClick={() => dispatch(logOut())}>Logout</Button>
      </div>
    </UserMenuStyled>
  );
};

export default UserMenu;
