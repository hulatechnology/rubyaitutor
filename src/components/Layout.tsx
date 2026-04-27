import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import PromoBanner from "./PromoBanner";

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const showPromo = pathname !== "/matrics";

  return (
    <div className="min-h-screen flex flex-col">
      {showPromo && <PromoBanner />}
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
