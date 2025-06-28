"use client";

import { useEffect } from "react";

const ThankYouPage = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") === "true" && typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({ event: "conversion" });
    }
  }, []);

  return (
    <>
      {/* ✅ GTM Script for <head> */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KQQBTWDX');`,
          }}
        />
      </head>

      {/* ✅ GTM noscript inside <body> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KQQBTWDX"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* ✅ Main Page Content */}
      <div
        className="flex h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="bg-black bg-opacity-60 px-6 py-4 rounded-xl">
          <h1 className="text-4xl text-white font-semibold text-center">
            Thank you for Reaching Out!
          </h1>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
