import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const addFavoriteHandler = (favoriteMeetup) => {
    setFavorites([...favorites, favoriteMeetup]);
  };

  const removeFavoriteHandler = (meetupId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== meetupId)
    );
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return favorites.some((favorite) => favorite.id === meetupId);
  };

  const context = {
    favorites,
    totalFavorites: favorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
    isActive,
    setIsActive,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};
