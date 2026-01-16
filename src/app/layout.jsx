import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";


export const metadata = {
  title: "Aven - Passionate About Saving Lives",
  description: "Aven - Leading organization passionate about saving lives",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
       
        <main>{children}

        </main>
         <Footer />
       
      </body>
    </html>
  );
}
