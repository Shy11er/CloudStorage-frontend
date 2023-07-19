import { AppProps } from "next/app";
import "@/styles/globals.css";

interface Props extends AppProps {
  Component: AppProps["Component"] & {
    getLayout: (page: React.ReactElement) => React.ReactNode;
  };
}

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return getLayout(<Component {...pageProps} />);
}