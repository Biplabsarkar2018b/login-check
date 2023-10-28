import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(90deg, #0073e6, #00b3e6);
`;

const LoginBox = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #0073e6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const RememberMeLabel = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: #333;
`;

const AgreeToTCLabel = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: #333;
`;

const PasswordToggle = styled.span`
  cursor: pointer;
  color: #0073e6;
`;

const Button = styled.button`
  background: #0073e6;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`;

const RegisterLink = styled.a`
  text-align: center;
  text-decoration: none;
  color: #0073e6;
  margin-top: 10px;
`;

const ChangePasswordLink = styled.a`
  text-align: center;
  text-decoration: none;
  color: #0073e6;
  margin-top: 10px;
  display: block; /* Display on a separate line */
  font-size: 14px; /* Smaller font size */
`;

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeToTC, setAgreeToTC] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Success');
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <InputField type="text" placeholder="Username" required />
          <InputField type="email" placeholder="Email" required />
          <InputField
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            required
          />
          <PasswordToggle onClick={handlePasswordToggle}>
            {showPassword ? 'Hide' : 'Show'} Password
          </PasswordToggle>
          <RememberMeLabel>
            <Checkbox
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember me
          </RememberMeLabel>
          <AgreeToTCLabel>
            <Checkbox
              type="checkbox"
              checked={agreeToTC}
              onChange={() => setAgreeToTC(!agreeToTC)}
            />
            I agree to the Terms and Conditions
          </AgreeToTCLabel>
          <Button type="submit">Login</Button>
        </Form>
        <ChangePasswordLink href="/change-password">Forgot Password?</ChangePasswordLink>
        <RegisterLink href="/register">Don't have an account? Register here</RegisterLink>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginScreen;
