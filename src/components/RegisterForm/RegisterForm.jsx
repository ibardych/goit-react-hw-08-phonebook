import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { RegisterFormStyled } from './RegisterForm.styled';
import { FormContainer } from 'components/Form/Form.styled';
import Input from 'components/Form/Input';
import { useState } from 'react';
import { Button } from 'components/Styled';

const defaultFields = { name: '', email: '', password: '' };

export const RegisterForm = () => {
  const [fields, setFields] = useState(defaultFields);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
    <RegisterFormStyled>
      <FormContainer onSubmit={handleSubmit} autoComplete="off">
        <Input
          label="Name"
          type="text"
          name="name"
          value={fields.name}
          onChange={handleInputChange}
          required
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={fields.email}
          onChange={handleInputChange}
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
          title="Please enter a valid email address. For example, john.doe@example.com"
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={fields.password}
          onChange={handleInputChange}
          pattern="^(?=.*\d)[A-Za-z\d]{7,}$"
          title="Please enter a password that is at least 7 characters long and contains at least one number."
          required
        />
        <Button type="submit">Register</Button>
      </FormContainer>
    </RegisterFormStyled>
  );
};
