import "./globals.css";
import { Funnel_Sans } from 'next/font/google';


const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ['latin'],
})

export const metadata = {
  title: "Isaac Escobar",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${funnelSans.className} `}
      >
        {children}
      </body>
    </html>
  );
}
