import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TypeState, CartItem } from "@/types/listTypes"

// Get item list from localStorage
const cartItems = localStorage.getItem('cartItems') !== null 
    ? JSON.parse(localStorage.getItem('cartItems') || '{}') 
    : []

const totalAmount = localStorage.getItem('totalAmount') !== null 
    ? JSON.parse(localStorage.getItem('totalAmount') || '{}')
    : 0

const totalQuantity = localStorage.getItem('totalQuantity') !== null 
    ? JSON.parse(localStorage.getItem('totalQuantity') || '{}')
    : 0

// Function for storing value into localStorage
const setItemFunc = (cartItems: CartItem[], totalAmount: number, totalQuantity: number) => {    
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    localStorage.setItem('totalAmount', JSON.stringify(totalAmount))
    localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity))
}

const initialState: TypeState = {
    cartItems: cartItems,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount 
}

const cartSlice = createSlice({
    name: 'ramen-cart',
    initialState,
    reducers: {

        // Add item into redux store
        addItem: (state = initialState, action: PayloadAction<CartItem>) => {
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => item.id === newItem.id)
            state.totalQuantity++

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    name: newItem.name,
                    img: newItem.img,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total, item) =>
                total + Number(item.price) * Number(item.quantity), 0
            )

            // Store item into localStorage
            setItemFunc(state.cartItems.map((item) => item), state.totalAmount, state.totalQuantity);
        },

        // Reduce item quantity from redux store
        removeItem: (state = initialState, action: PayloadAction<CartItem>) => {
            const id: string | number | unknown = action.payload
            const existingItem: CartItem | undefined | any = state.cartItems.find(item => item.id === id)
            state.totalQuantity--

            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total, item) =>
                total + Number(item.price) * Number(item.quantity), 0
            )

            // Reduce item quantity on localStorage
            setItemFunc(state.cartItems.map((item) => item), state.totalAmount, state.totalQuantity);
        },

        // Delete item into redux store
        deleteItem: (state = initialState, action: PayloadAction<CartItem>) => {
            const id: string | number | unknown = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)

            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }

            state.totalAmount = state.cartItems.reduce((total, item) =>
                total + Number(item.price) * Number(item.quantity), 0
            )

            // Delete item from localStorage
            setItemFunc(state.cartItems.map((item) => item), state.totalAmount, state.totalQuantity);
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice