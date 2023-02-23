import {useState} from 'react'
import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [name, setname] = useState('')
  const onChangeInput = event => setname(event.target.value)
  return (
    <MainContainer>
      <NameInput type="text" onChange={onChangeInput} placeholder="Your name" />
      <MsgContent>
        Hello <NameText>{name}</NameText>
      </MsgContent>
    </MainContainer>
  )
}

export default GreetUser
