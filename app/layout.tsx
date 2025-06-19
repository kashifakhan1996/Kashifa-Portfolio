import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kashifa Khan-Senior Fullstack Developer",
  description: `Passionate full-stack engineer with 6.5+ years of hand-
on experience in developing scalable
website/application using wide range of backend &
frontend skills like Nodejs , Python , Php , HTML , css ,
Reactjs , Typescript , AWS , Shopify , Sql/NoSql ,
mongoDb , mySql , dynamoDb , Agile , Ajax ,
Rest/GraphQl Apis etc.Developed 10+ scalable web
applications. Looking for further enhance in FullStack
technologies.Have 7+ years of API application building`
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
