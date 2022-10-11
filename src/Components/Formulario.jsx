import React from 'react'
import styled from '@emotion/styled'

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
  return (
    <form>
      <InputSubmit 
        type="submit" 
        value="Cotizar" 
      />
    </form>
  )
}

export default Formulario
