import Script from "next/script";

/** Google Analytics 4 measurement ID */
export const GA_MEASUREMENT_ID = "G-03RCJ3LCPD";

/**
 * Site-wide Google tag (gtag.js).
 * lazyOnload keeps gtag off the critical path and lowers Total Blocking Time.
 */
export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
        `}
      </Script>
    </>
  );
}
