import { useCartItems } from './useCartItems'

export const useGetLineItem = () => {
  const cartItems = useCartItems()

  const getLineItem = (itemId) => {
    if (cartItems && cartItems.length < 1) {
      return null
    }

    const item = cartItems.find((cartItem) => {

      return cartItem.id === itemId
    })

    if (item == null) {
      return null
    }

    return item
  }

  return getLineItem
}