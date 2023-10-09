import { createContext } from 'react'

export const Context = createContext({
  swell: null,
  cart: null,
  setCart: () => {
    throw Error('You forgot to wrap this in a Provider object')
  },
})
