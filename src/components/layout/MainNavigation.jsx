import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import './MainNavigation.css'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {BsCardChecklist} from 'react-icons/bs'
import {MdFavoriteBorder} from 'react-icons/md'
import { FavoritesContext } from '../../store/store'

const MainNavigation = () => {

    const context = useContext(FavoritesContext);
    const {isActive, setIsActive} = useState(context);
    
  return (
    <header className='header'>
        <div className="header__logo">React Meetups</div>
        <nav className='header__nav'>
            <ul>
                <li onClick={() => context.setIsActive('All')} className={context.isActive ==='All' ? `nav__links active` : `nav__links` }>
                    <BsCardChecklist className='nav__icon' />
                    <Link className='nav__link' to="/">All Meetups</Link>
                </li>

                <li onClick={() => context.setIsActive('New')} className= {context.isActive ==='New' ? `nav__links active` : `nav__links` }>
                    <AiOutlineUserAdd className='nav__icon' />
                    <Link className='nav__link' to="/new-meetup">New Meetup</Link>
                </li>

                <li onClick={() => context.setIsActive('Favorite')} className= {context.isActive ==='Favorite' ? `nav__links active` : `nav__links` }>
                    <MdFavoriteBorder className='nav__icon' />
                    <Link className='nav__link' to="/favorites">My Favorites</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation