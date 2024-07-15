import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';

import { SearchIcon } from '../assets';

const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const getChannels = async (text) => {
        try {
            // TODO: Fetch channels
        } catch (error) {
            setQuery('')
        }
    }

    const onSearch = (e) => {
        e.preventDefault();

        setLoading(true);
        setQuery(e.target.value);
        getChannels(e.target.value);
    }
    
    return (
        <div classname="channel-search__container">
            <div classname="channel-search__input__wrapper">
                <div classname="channel-search__input__icon">
                    <SearchIcon />
                    <input 
                    classname="channel-search__input__text" 
                    placeholder="Search" 
                    type="text" 
                    value={query}
                    onChange={onSearch}
                    />
                </div>
            </div>
        </div>
    )
}

export default ChannelSearch;