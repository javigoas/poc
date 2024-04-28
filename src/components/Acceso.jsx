import React from 'react';
import styled from 'styled-components';

// Define los estilos utilizando Styled Components
const LoginWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Componente de inicio de sesión
export default function Acceso() {
  return (
    <LoginWrapper>
      <Title>Por favor, inicia sesión</Title>
      <Form>
        <Label>
          <p>Nombre de usuario</p>
          <Input type="text" />
        </Label>
        <Label>
          <p>Contraseña</p>
          <Input type="password" />
        </Label>
        <Button type="submit">Enviar</Button>
      </Form>
    </LoginWrapper>
  );
}