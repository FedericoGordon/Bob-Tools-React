import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(item => item.id === item.id);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}])
        }
    };

    const removeItem = (id) => {
        const items = cart.filter(item => item.id !== id);
        setCart([...items]);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const cartTotal = () => {
        return cart.reduce((acum, item) => acum += item.quantity, 0);
    }

    const sumTotal = () => {
        return cart.reduce((acum, item) => acum += item.quantity * item.precio, 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
        )
}

export default CartContextProvider;
