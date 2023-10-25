import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { StoreProvider } from "./storeProvider";
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>{" "}
      </body>
    </html>
  );
}
