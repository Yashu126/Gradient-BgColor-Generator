import {CustomBtn, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachBtn, activeBtn, onChangeDirection} = props
  const {directionId, displayText} = eachBtn
  const bgcolor = directionId === activeBtn
  const onChange = () => {
    onChangeDirection(directionId)
  }
  return (
    <ListItem>
      <CustomBtn onClick={onChange} bgColor={bgcolor}>
        {displayText}
      </CustomBtn>
    </ListItem>
  )
}

export default GradientDirectionItem
