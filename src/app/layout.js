import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"]
});

export const metadata = {
  title: "Jutti",
  description: "Creamos tu bitácora personalizada con la ruta que prefieras a un bajo costo, si viajas en avión, tren y piensas tomar la noche alquilando un cuarto en cualquier ciudad.",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
