import ChatInput from "./ChatInput"

export const getData = (props) => {
    console.log(props)
}

const ChatBody = () => {
    

  return (
    <ChatInput onSubmitInput={getData} />
  )
}

export default ChatBody
