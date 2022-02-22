import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'
import { useRouter } from 'next/router'
import UserManager from '../auth/userManager'

function SafeHydrate({ children }: { children: React.ReactNode }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
      <React.Fragment>
        <Script src="https://kit.fontawesome.com/bce3f035e8.js" crossOrigin="anonymous" />
        <Head>
          <title>Cariber</title>
          <link rel="icon" href="/title-icon.png" type="image/x-icon"></link>
        </Head>
        <SafeHydrate>
          <Auth>
            <Component {...pageProps} />
          </Auth>
        </SafeHydrate>
      </React.Fragment>
  )
}

function Auth({ children }: { children: JSX.Element }) {
  const router = useRouter();
  const userManager = new UserManager();
  const protectPath = ["/library",
    "/account",
    "/product"
  ];
  useEffect(() => {
    if (!userManager.isLoggedIn() && Boolean(protectPath.find(value => { return value === window.location.pathname }))) {
      router.replace("/");
    }
  })
  if (!userManager.isLoggedIn() && Boolean(protectPath.find(value => { return value === window.location.pathname }))) {
    return <div></div>;
  }
  return children;
}

export default MyApp