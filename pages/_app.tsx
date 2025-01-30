import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Tabs from "@/components/Tabs";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className="flex flex-col">
        <Tabs />
        <Component {...pageProps} />
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
