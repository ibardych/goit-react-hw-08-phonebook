import { FormContainer } from 'components/Form/Form.styled';
import Input from 'components/Form/Input';
import { Button } from 'components/Styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LoginFormStyled } from './LoginForm.styled';

const defaultFields = { email: '', password: '' };

export const LoginForm = () => {
  const [fields, setFields] = useState(defaultFields);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFields(fields => ({ ...fields, [name]: value }));
  };

  return (
    <LoginFormStyled>
      <FormContainer onSubmit={handleSubmit} autoComplete="off">
        <Input
          label="Email"
          type="email"
          name="email"
          value={fields.name}
          onChange={handleInputChange}
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
          title="Please enter a valid email address. For example, john.doe@example.com"
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={fields.name}
          onChange={handleInputChange}
          pattern="^(?=.*\d)[A-Za-z\d]{7,}$"
          title="Please enter a password that is at least 7 characters long and contains at least one number."
          required
        />
        <Button type="submit">Log In</Button>
      </FormContainer>
    </LoginFormStyled>
  );
};
