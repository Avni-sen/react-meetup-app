import React from 'react'
import MeetupItem from './MeetupItem'
import './MeetupList.css'

const MeetupList = (props) => {
  return (
    <ul className='list'>
      {props.meetups.map(meetup => (
        <MeetupItem key={meetup.id} {...meetup} />
      ))}
    </ul>
  )
}

export default MeetupList