import styled from 'styled-components'

export const CustomBtn = styled.button`
  color: #1e293b;
  background-color: #ededed;
  width: 90px;
  margin: 8px;
  padding: 8px;
  border-radius: 5px;
  border: none;
  outline: none;
  opacity: ${props => (props.bgColor ? 1 : 0.5)};
`

export const ListItem = styled.li`
  list-style-type: none;
`
