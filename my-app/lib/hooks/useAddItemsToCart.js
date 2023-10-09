import { useContext } from 'react'
import { Context } from '../context'

export const useAddItemsToCart = () => {
  const { swell, setCart } = useContext(Context)

  const addItemsToCart = async (items) => {

    if (items.length < 1) {
      throw new Error(
        'Must include at least one line item, empty line items found'
      )
    }

    items.forEach((item) => {
      if (item.product_id == null) {
        throw new Error(`Missing productId in item`)
      }

      if (item.quantity == null) {
        throw new Error(
          `Missing quantity in item with product id: ${item.product_id}`
        )
      } else if (typeof item.quantity != 'number') {
        throw new Error(
          `Quantity is not a number in item with product id: ${item.product_id}`
        )
      } else if (item.quantity < 1) {
        throw new Error(
          `Quantity must not be less than one in item with product id: ${item.product_id}`
        )
      }
    })

    const newCart = await swell.cart.setItems(items)
    setCart(newCart);
  }

  return addItemsToCart
}
