import Script from "next/script";

/** Google Analytics 4 measurement ID */
export const GA_MEASUREMENT_ID = "G-03RCJ3LCPD";

/**
 * Site-wide Google tag (gtag.js). Loaded once from the root layout.
 * Do not add a second Google tag elsewhere.
 */
export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
