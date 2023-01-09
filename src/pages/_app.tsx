import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider, UniversalUIConfigProvider } from "@parssa/universal-ui";
import "styles/index.css";
import { Footer } from "components/Footer";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Parssa Kyanzadeh</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="color-scheme" content="light dark" />
        <script defer async src="//static.getclicky.com/101310723.js"></script>
        <noscript>
          <p>
            <img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101310723ns.gif" />
          </p>
        </noscript>
      </Head>
      <UniversalUIConfigProvider
        config={{
          components: {
            text: ({ variant, size }) => {
              let classes = "";
              if (variant === "p" || !variant) {
                classes += " leading-loose";
                if (size !== "lg") {
                  classes += " text-theme-active/90";
                }
              }
              if (variant === "h2") {
                classes += " font-medium text-2xl";
              }
              return classes;
            }
            // 'card.content': 'px-5'
          }
        }}
      >
        <div className={`min-h-screen bg-theme-pure overflow-hidden ${inter.className}`}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </UniversalUIConfigProvider>
    </>
  );
}

export default MyApp;
