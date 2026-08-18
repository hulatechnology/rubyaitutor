import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "ruby-matric-cart";

type CartContextValue = {
    cart: string[];
    cartOpen: boolean;
    setCartOpen: (open: boolean) => void;
    toggleCart: (id: string) => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const readStoredCart = (): string[] => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : [];
    } catch {
        return [];
    }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<string[]>(readStoredCart);
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    }, [cart]);

    const toggleCart = (id: string) => {
        setCart((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
    };

    return (
        <CartContext.Provider value={{ cart, cartOpen, setCartOpen, toggleCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within a CartProvider");
    return ctx;
};
