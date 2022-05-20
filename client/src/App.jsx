import React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
// import Cookies from 'universal-cookie'



import { ChannelContainer, ChannelListContainer } from './components'

const apiKey = 'suty4z9rsfnd'

const client = StreamChat.getInstance(apiKey)

const App = () => {
  return (
    <div>
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelContainer/>
                <ChannelListContainer/>
                
            </Chat>
        </div>
    </div>
  )
}

export default App