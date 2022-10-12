import {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from './hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

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
  margin-top: 30px;
  &:hover {
    background-color: #326AC0;
    cursor: pointer;
  }
`

const Formulario = () => {

  const [criptos, SetCriptos] = useState([])
  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda',monedas);
  const [criptomoneda, SelectCriptoMoneda] = useSelectMonedas('Elige tu Criptomoneda',criptos);

  useEffect(() => {
    const consultarAPI = async () =>{
      URL = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`

      const respuesta = await fetch(URL);
      const resultado = await respuesta.json();

      const arrayCriptos = resultado.Data.map(cripto => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        }
        return objeto;
      })
      SetCriptos(arrayCriptos)
    }
    consultarAPI();
  },[])

  return (
    <form>

      <SelectMonedas />
      <SelectCriptoMoneda />

      <InputSubmit 
        type="submit" 
        value="Cotizar" 
      />
    </form>
  )
}

export default Formulario
