import "./globals.css";
import Navbarform from "../components/navbar1"



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbarform />
      {children}
      </body>
    </html>
  );
}
