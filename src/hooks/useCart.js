import { useEffect, useState } from 'react';

import { LOCAL_STORAGE_KEYS } from '../constants/storageKeys';
import storageService from '../services/storageService';

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedItems = storageService.getParsedItem(LOCAL_STORAGE_KEYS.CART_ITEMS);
    setCart(Array.isArray(storedItems) ? storedItems : []);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      storageService.setParsedItem(LOCAL_STORAGE_KEYS.CART_ITEMS, cart);
    }
  }, [cart, isInitialized]);

  return { cart, setCart };
};
