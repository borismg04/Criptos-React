import styled from '@emotion/styled'

const Texto = styled.div`
  color: #FFF;
  background-color: #B7322C;
  font-size: 22px;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
`

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
