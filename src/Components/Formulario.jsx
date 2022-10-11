import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from './hooks/useSelectMonedas'

const InputSubmit = styled.input`
  background-color: #66A2FE;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF; 
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 10px;
  font-family: 'Lato', sans-serif;
  transition: background-color .3s ease;
  margin-top: 20px;
  &:hover {
    background-color: #326AC0;
    cursor: pointer;
  }
`

const Formulario = () => {

  const monedas = [
    { id: 'USD', nombre: 'Dolar de Estados Unidos' },
    { id: 'MXN', nombre: 'Peso Mexicano' },
    { id: 'EUR', nombre: 'Euro' },
    { id: 'GBP', nombre: 'Libra Esterlina' },
    { id: 'COP', nombre: 'Peso Colombiano' },
  ];

  const [SelectMonedas] = useSelectMonedas('Elige tu Moneda',monedas);

  SelectMonedas();

  return (
    <form>

      <SelectMonedas />

      <InputSubmit 
        type="submit" 
        value="Cotizar" 
      />
    </form>
  )
}

export default Formulario
