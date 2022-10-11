import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  /* font-family: 'Lato', sans-serif; */
  color: #FFF;
  /* text-transform: uppercase;
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 2rem;
  display: block; */
  
`

const useSelectMonedas = (label,opciones) => {

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <select></select>
    </>
  )

  return [SelectMonedas];
}

export default useSelectMonedas
