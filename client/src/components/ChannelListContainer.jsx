import React from 'react';
import { ChannelList } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import KluizenarenIcon from '../assets/kluizenaren.png';
import LogoutIcon from '../assets/logout.png';

const SideBar = () => (
  <div className='channel-list__sidebar'>
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={KluizenarenIcon} alt="Kluizenaren" width="30" />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
        <img src={LogoutIcon} alt="Logout" width="30" />
      </div>
    </div>
  </div>
)

const CompanyHeader = () => (
  <div className='channel-list__header'>
    <p className='channel-list__header__text'>Kluizenaren Chat</p>
  </div>

)

const ChannelListContainer = () => {
  return (
    <>
        <SideBar />
        <div className="channel-list__list__wrapper">
          <CompanyHeader />
        </div>
    </>
  )
}

export default ChannelListContainer