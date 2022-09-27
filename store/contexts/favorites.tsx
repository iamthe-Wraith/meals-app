/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, FC, ReactNode, useCallback, useState, useMemo, useContext } from 'react';

interface IProps {
  children: ReactNode;
}

interface IFavorites {
  favorites: string[];
  addFavorite: (mealId: string) => void;
  removeFavorite: (mealId: string) => void;
}

const FavoritesContext = createContext<IFavorites>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesStore: FC< IProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  
  const addFavorite = useCallback((mealId: string) => {
    setFavorites(prev => [...prev, mealId]);
  }, []);

  const removeFavorite = useCallback((mealId: string) => {
    setFavorites(prev => prev.filter(fav => fav !== mealId));
  }, []);

  const value: IFavorites = useMemo(() => ({favorites, addFavorite, removeFavorite}), [favorites]);

  return (
    <FavoritesContext.Provider value={ value }>
      { children }
    </FavoritesContext.Provider>
  );
};