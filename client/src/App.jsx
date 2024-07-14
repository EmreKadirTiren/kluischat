import React from 'react'; // import React from react
import { StreamChat } from 'stream-chat'; // import StreamChat from stream-chat
import { Chat } from 'stream-chat-react'; // import Chat from stream-chat-react
import Cookies from 'universal-cookie'; // import Cookies from universal-cookies

import { ChannelContainer, ChannelListContainer } from './components'; // import ChannelContainer and ChannelListContainer from components folder
import './App.css'; // import App.css file


const apiKey = 'usexrsqhpvtk' // this is key not the secret this is public key and can be published.

const client = StreamChat.getInstance(apiKey); // create a new instance of StreamChat with the apiKey

const App = () => {
    return (
        <div className='app__wrapper'>
            <Chat client={client} theme="team dark">
                <ChannelListContainer

                />
                <ChannelContainer

                />
            </Chat>
        </div>
    );
}

export default App;