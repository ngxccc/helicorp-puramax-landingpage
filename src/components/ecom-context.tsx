"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface EcomItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

interface EcomContextType {
  cart: EcomItem[];
  favorites: EcomItem[];
  viewed: EcomItem[];
  addToCart: (item: EcomItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  toggleFavorite: (item: EcomItem) => void;
  addViewedProduct: (item: EcomItem) => void;
}

const EcomContext = createContext<EcomContextType | undefined>(undefined);

export function EcomProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<EcomItem[]>([]);
  const [favorites, setFavorites] = useState<EcomItem[]>([]);
  const [viewed, setViewed] = useState<EcomItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("ecom_cart");
      if (storedCart) setCart(JSON.parse(storedCart));

      const storedFavs = localStorage.getItem("ecom_favs");
      if (storedFavs) setFavorites(JSON.parse(storedFavs));

      const storedViewed = localStorage.getItem("ecom_viewed");
      if (storedViewed) setViewed(JSON.parse(storedViewed));
    } catch (e) {
      console.error("Error loading ecom state", e);
    }
    setIsLoaded(true);
  }, []);

  // Sync to localStorage when state changes (only after initial load to avoid overwriting)
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("ecom_cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("ecom_favs", JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("ecom_viewed", JSON.stringify(viewed));
    }
  }, [viewed, isLoaded]);

  const addToCart = useCallback((item: EcomItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: (i.quantity ?? 1) + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.id === id) {
            const newQty = (i.quantity ?? 1) + delta;
            return { ...i, quantity: newQty };
          }
          return i;
        })
        .filter((i) => (i.quantity ?? 0) > 0)
    );
  }, []);

  const toggleFavorite = useCallback((item: EcomItem) => {
    setFavorites((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.filter((i) => i.id !== item.id);
      }
      return [...prev, item];
    });
  }, []);

  const addViewedProduct = useCallback((item: EcomItem) => {
    setViewed((prev) => {
      // Filter out existing to avoid duplicates and put it at the front
      const filtered = prev.filter((i) => i.id !== item.id);
      return [item, ...filtered].slice(0, 4); // Keep last 4 viewed products
    });
  }, []);

  return (
    <EcomContext.Provider
      value={{
        cart,
        favorites,
        viewed,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleFavorite,
        addViewedProduct,
      }}
    >
      {children}
    </EcomContext.Provider>
  );
}

export function useEcom() {
  const context = useContext(EcomContext);
  if (!context) {
    throw new Error("useEcom must be used within EcomProvider");
  }
  return context;
}
