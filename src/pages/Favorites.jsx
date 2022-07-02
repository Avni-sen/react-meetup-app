import React, { useContext } from 'react'
import { FavoritesContext } from '../store/store';
import MeetupList from '../components/meetups/MeetupList';


export const Favorites = () => {
  const favoriteContext = useContext(FavoritesContext);
  console.log(favoriteContext.favorites)
  return (
    <section>
      <h1>My Favorites Meetup</h1>
      {favoriteContext.favorites.length > 0 ? (
        <MeetupList meetups={favoriteContext.favorites}  />
      ):
      (
        <h1 style={{textAlign:'center',marginTop:'30px',color:'#5b2a86',padding:'20px',border:'1px solid #5b2a86',borderRadius:'20px',backgroundColor:'white'}}>You don't have any favorites yet !! Please get start now..</h1>

      )
    }
    </section>
  )
}

