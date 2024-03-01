import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessages, generateRandomNames } from '../utils/helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  const [liveMessage, setLiveMessage] = useState("")

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(addMessage({ name: generateRandomNames(), message: generateRandomMessages(20) }))
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <div className='w-full h-[315px] ml-2 p-2 border-gray-700 bg-slate-100 border rounded-lg flex flex-col-reverse overflow-y-auto'>
        {messages.map((message, ind) => <ChatMessage
          key={ind}
          name={message.name}
          message={message.message}
        />)}
      </div>
      <form
        className='w-full p-2 ml-2 border border-black'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: "Pragyan",
            message: liveMessage
          })
          );
          setLiveMessage("")
        }}
      >
        <input
          className='px-2 w-96'
          type='text'
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className='px-2 mx-2 bg-green-100'>Send</button>
      </form>
    </>
  )
}

export default LiveChat