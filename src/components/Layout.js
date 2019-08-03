import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="et" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />

        <meta name="google-site-verification" content="cMrVNOkm2vRBd7aaYFacnlYO2UwqEMBesv6ADWBJVno" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Estonia",
              "addressLocality": "Valga",
              "streetAddress": "Viljandi mnt 25",
              "postalCode": "68206"
            },
            "description": "Kasutatud autode müük Valga autoplatsil ja kodulehel.",
            "name": "ESC Grupp OÜ",
            "telephone": "+372 503 0157",
            "priceRange": "€€€€-€€€€€",
            "url": "https://valgaautoaed.ee/",
            "image": "https://valgaautoaed.ee/"
          })}
        </script>
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
