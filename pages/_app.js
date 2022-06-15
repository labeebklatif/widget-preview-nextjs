import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Widget Test App</title>
        <meta name="description" content="App for testing neetoChat Widget" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script id="neetoChat-widget-script">
        {`(function () {
            var w = window, d = document, z = w.NeetoChat || {};
            z.subdomain = "spinkart";
            z.chatApiKey = "kWJCAyH4JbWF3Opx";
            z.neetoChatBaseUrl = "https://spinkart.neetochat.net";
            z.neetoKbBaseUrl = "https://spinkart.neetokb.net";
            z.neetoDeskBaseUrl = "https://spinkart.neetodesk.net";
            w.NeetoChat = z;
            var inserted = false;
            function insertTag() {
              if (inserted) return;
              inserted = true;
              var s = d.createElement("script");
              s.type = "text/javascript";
              s.async = true;
              s.src = "https://neeto-chat-widget-production-v1.s3.amazonaws.com/bundle-loader.js";
              var x = d.getElementsByTagName("script")[0];
              x.parentNode.insertBefore(s, x);
            }
            if (document.readyState != "loading") {
              insertTag();
            } else {
              document.onreadystatechange = function () {
                if (document.readyState != "loading") insertTag();
              };
            }
        })();`}
      </Script>
      <Component {...pageProps} />
      <span>This is a NextJS App</span>
    </div>
  );
}

export default MyApp;
