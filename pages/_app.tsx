import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Tabs from "@/components/Tabs";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className="flex flex-col">
        <Tabs />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
