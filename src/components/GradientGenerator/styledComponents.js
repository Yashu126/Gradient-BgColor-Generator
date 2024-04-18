import styled from 'styled-components'

export const GradientGeneratorCon = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: #ededed;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`
export const Direction = styled.p`
  color: #ededed;
  font-size: 20px;
  text-align: center;
`
export const ButtonsCon = styled.ul`
  data-testid: 'gradientGenerator';
  padding-left: 0px;
  display: flex;
  align-items: center;
`
export const ColorCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;
`
export const InputCon = styled.div`
  display: flex;
  flex-direction: column;
`
export const Label = styled.p`
  color: #ededed;
  margin-bottom: 15px;
`
export const Input = styled.input`
  height: 20px;
  border: none;
  outline: none;
  color: ${props => props.color};
`

export const GenBtn = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  padding: 8px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`
