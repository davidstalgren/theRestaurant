"use client";

import { AppProps } from "next/app";
import RootLayout from "../app/layout";

const metadata = {
  title: "The restaurant",

  description: "Generated by create next app",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout metadata={metadata}>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
