import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Montserrat, Playfair_Display_SC, DM_Serif_Display, Lora } from 'next/font/google'

import "styles/globals.css";

export const metadata: Metadata = {
  title: "Hyeri Jung",
  description: "Hyeri Jung Web Page",
};

// font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

const playfairSC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400"], // SC는 일반적으로 400만 제공
  variable: "--font-playfair-sc",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400", // 이 폰트는 400만 지원돼
  variable: "--font-dm-serif-display",
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'], // 본문: 400, 제목용: 700
  variable: '--font-lora',
});

////////

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${playfairSC.variable} ${dmSerifDisplay.variable} ${lora.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/heart.png" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main>
            {children} 
          </main>
         {/* <LeftSidebar /> */}
         {/* <div className="flex md:ml-64"> */}
            {/* mobile 상단바 공간 확보 */}
            {/* <main className="max-w-screen-lg pt-16">
              {children}
            </main> */}
          {/* </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
