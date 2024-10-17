import styled from 'styled-components'

export const UnlockContainer = styled.div`
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    height: 100vh;
    width: 100vw;
  }
`
export const Image = styled.img`
  height: 300px;
  width: 300px;
  @media screen and (max-width: 576px) {
    height: 100px;
    width: 100px;
  }
`
export const ImageDescription = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
  margin: 20px;
  @media screen and (max-width: 576px) {
    font-size: 20px;
    margin: 10px;
  }
`

export const Button = styled.button`
  background-color: #06b6d4;
  border-radius: 10px;
  height: 40px;
  border: 0px none;
  color: #ffffff;
  font-weight: bold;
  margin-top: 100px;
  text-align: center;
  padding: 10px;
  @media screen and (max-width: 576px) {
    margin-top: 10px;
  }
`
