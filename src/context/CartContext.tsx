import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "ruby-matric-cart";
const EMAIL_STORAGE_KEY = "ruby-matric-email";

type CartContextValue = {
    cart: string[];
    cartOpen: boolean;
    setCartOpen: (open: boolean) => void;
    toggleCart: (id: string) => void;
    email: string;
    setEmail: (email: string) => void;
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

const readStoredEmail = (): string => {
    try {
        return localStorage.getItem(EMAIL_STORAGE_KEY) ?? "";
    } catch {
        return "";
    }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<string[]>(readStoredCart);
    const [cartOpen, setCartOpen] = useState(false);
    const [email, setEmail] = useState<string>(readStoredEmail);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem(EMAIL_STORAGE_KEY, email);
    }, [email]);

    const toggleCart = (id: string) => {
        setCart((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
    };

    return (
        <CartContext.Provider value={{ cart, cartOpen, setCartOpen, toggleCart, email, setEmail }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within a CartProvider");
    return ctx;
};
