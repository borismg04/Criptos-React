import styled from "@emotion/styled"

const ResultadoDiv = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  margin-top: 30px;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
`
const Imagen = styled.img`
  width: 150px;
  display: block;

`

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`

const Precio = styled.p`
  font-size: 25px;
  span {
    font-weight: 700;
  }
`


const Resultado = ({resultado}) => {
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;
  return (
    <ResultadoDiv>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen criptomoneda" />
      <div>
        <Precio>El precio es de : <span>{PRICE}</span></Precio>
        <Texto>Precio más alto del día : <span>{HIGHDAY}</span></Texto>
        <Texto>Precio más bajo del día : <span>{LOWDAY}</span></Texto>
        <Texto>Variación últimas 24 horas : <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última actualización : <span>{LASTUPDATE}</span></Texto>
      </div>
    </ResultadoDiv>
  )
}

export default Resultado
