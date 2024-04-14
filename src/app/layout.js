import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kevin Juan Jacque Castillo",
  description: "Kevin Juan Jacque Castillo's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className+" relative"}>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
          {children}

      </body>
    </html>
  );
}
