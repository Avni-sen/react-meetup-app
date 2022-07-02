import React from 'react'
import './MeetupItem.css'
import { useContext } from 'react'
import { FavoritesContext } from '../../store/store'

const MeetupItem = (props) => {
  const context = useContext(FavoritesContext);
  const itemIsFavorite = context.itemIsFavorite(props.id);

  const toogleFovoriteStatusHandler = () => {
    if (itemIsFavorite) {
      context.removeFavorite(props.id);
    }else{
      context.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li key={props.id} className='item'>
            <div className="image">
                <img src={props.image} alt={props.title} />
            </div>
            <h2>{props.title}</h2>
       <div className='content'>
        <address>{props.address}</address>
        <p>{props.description}</p>
       </div>
       <div className="actions">
        <button onClick={toogleFovoriteStatusHandler}>{itemIsFavorite ? 'Remove from favorites': 'Ad item favorites'}</button>
       </div>
  </li>
  )
}

export default MeetupItem