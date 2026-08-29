import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "ruby-matric-cart";
const EMAIL_STORAGE_KEY = "ruby-matric-email";
const SCHOOL_STORAGE_KEY = "ruby-matric-school";
const VOUCHER_STORAGE_KEY = "ruby-matric-voucher";

type CartContextValue = {
    cart: string[];
    cartOpen: boolean;
    setCartOpen: (open: boolean) => void;
    toggleCart: (id: string) => void;
    email: string;
    setEmail: (email: string) => void;
    school: string;
    setSchool: (school: string) => void;
    /** Voucher code the buyer has entered (or that a promo popup pre-filled).
     *  The cart drawer validates it against the API before checkout. */
    voucherCode: string;
    setVoucherCode: (code: string) => void;
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

const readStoredSchool = (): string => {
    try {
        return localStorage.getItem(SCHOOL_STORAGE_KEY) ?? "";
    } catch {
        return "";
    }
};

const readStoredVoucher = (): string => {
    try {
        return localStorage.getItem(VOUCHER_STORAGE_KEY) ?? "";
    } catch {
        return "";
    }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<string[]>(readStoredCart);
    const [cartOpen, setCartOpen] = useState(false);
    const [email, setEmail] = useState<string>(readStoredEmail);
    const [school, setSchool] = useState<string>(readStoredSchool);
    const [voucherCode, setVoucherCode] = useState<string>(readStoredVoucher);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem(EMAIL_STORAGE_KEY, email);
    }, [email]);

    useEffect(() => {
        localStorage.setItem(SCHOOL_STORAGE_KEY, school);
    }, [school]);

    useEffect(() => {
        localStorage.setItem(VOUCHER_STORAGE_KEY, voucherCode);
    }, [voucherCode]);

    const toggleCart = (id: string) => {
        setCart((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
    };

    return (
        <CartContext.Provider value={{ cart, cartOpen, setCartOpen, toggleCart, email, setEmail, school, setSchool, voucherCode, setVoucherCode }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within a CartProvider");
    return ctx;
};
