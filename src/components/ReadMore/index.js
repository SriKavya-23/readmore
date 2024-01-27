// Write your code here
// src/components/ReadMore/index.js
import {useState} from 'react'
import {
  Container,
  Description,
  Button,
  MainContainer,
  Headingg,
} from './styledComponents'

const ReadMore = ({reactHooksDescription}) => {
  const initialDisplayText = reactHooksDescription.slice(0, 170)
  const [isExpanded, setIsExpanded] = useState(false)
  const [displayText, setDisplayText] = useState(initialDisplayText)

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
    setDisplayText(isExpanded ? initialDisplayText : reactHooksDescription)
  }

  return (
    <MainContainer>
      <Headingg>React Hooks</Headingg>
      <p>Hooks are a new addition to React</p>
      <img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Container>
        <Description>{displayText}</Description>
        <Button onClick={toggleReadMore}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </Button>
      </Container>
    </MainContainer>
  )
}

export default ReadMore
