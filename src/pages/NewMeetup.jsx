import React, { useContext, useState } from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useNavigate } from 'react-router-dom'
import { FavoritesContext } from '../store/store'

const NewMeetup = () => {

    const navigate = useNavigate()

    const context = useContext(FavoritesContext);

  const addMeetupHandler = (meetupData) =>{
    fetch('https://react-meetup-app-4658d-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      navigate('/', { replace: true })
    })
  }


  return (
    <section>
      <h1 className='title__all'>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup ={addMeetupHandler} setIsActive={context.setIsActive} />
    </section>
  )
}

export default NewMeetup