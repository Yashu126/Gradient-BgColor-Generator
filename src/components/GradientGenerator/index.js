import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorCon,
  Heading,
  Direction,
  ButtonsCon,
  ColorCon,
  InputCon,
  Label,
  Input,
  GenBtn,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeBtn: gradientDirectionsList[0].directionId,
    color1: '#8ae323',
    color2: '#014f7b',
    direction: gradientDirectionsList[0].value,
    setColors: {
      color1: '',
      color2: '',
      direction: gradientDirectionsList[0].value,
    },
  }

  changeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  changeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onChangeDirection = id => {
    const d = gradientDirectionsList.filter(each => each.directionId === id)[0]
    this.setState({
      activeBtn: d.directionId,
      direction: d.value,
    })
  }

  generateBtn = () => {
    const {color1, color2, direction} = this.state
    this.setState(prev => ({
      setColors: {...prev.setColors, color1, color2, direction},
    }))
  }

  render() {
    const {setColors, color1, color2, activeBtn} = this.state
    return (
      <GradientGeneratorCon
        data-testid="gradientGenerator"
        direction={setColors.direction}
        color1={setColors.color1}
        color2={setColors.color2}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Direction>Choose Direction</Direction>
        <ButtonsCon>
          {gradientDirectionsList.map(eachBtn => (
            <GradientDirectionItem
              key={eachBtn.directionId}
              eachBtn={eachBtn}
              activeBtn={activeBtn}
              onChangeDirection={this.onChangeDirection}
            />
          ))}
        </ButtonsCon>
        <Direction>Pick the Colors</Direction>
        <ColorCon>
          <InputCon>
            <Label htmlFor="color-1">{color1}</Label>
            <Input
              onChange={this.changeColor1}
              type="color"
              value={color1}
              id="color-1"
            />
          </InputCon>
          <InputCon>
            <Label htmlFor="color-2">{color2}</Label>
            <Input
              onChange={this.changeColor2}
              type="color"
              value={color2}
              id="color=2"
            />
          </InputCon>
        </ColorCon>
        <GenBtn onClick={this.generateBtn}>Generate</GenBtn>
      </GradientGeneratorCon>
    )
  }
}

export default GradientGenerator
