import type { Metadata } from "next";
import { Lato, Sora } from "next/font/google";
import { Toaster } from "sonner";
import Script from "next/script";

import Header from "@/components/header";
import Footer from "@/components/footer";

import "./globals.css";
import "./custom-toast.css";

const latoSans = Lato({
  weight: ["400", "700"],
  variable: "--font-lato-sans",
  subsets: ["latin"],
});

const soraSans = Sora({
  variable: "--font-sora-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Red Bull Hauling | Junk Removal",
  description: "Junk Removal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${latoSans.variable} ${soraSans.variable} antialiased`}>
        {/* ✅ Google Tag Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16934137027"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16934137027');

            // ✅ Google Ads Phone Conversion Event Snippet
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) !== 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                send_to: 'AW-16934137027/BdFhCP3KzNgaEMPZ6Yo_',
                value: 1.0,
                currency: 'USD',
                event_callback: callback
              });
              return false;
            }
          `}
        </Script>

        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{ style: { zIndex: 1000 } }}
        />
      </body>
    </html>
  );
}
