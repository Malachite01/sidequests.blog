import { useEffect, useState } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import "@fontsource-variable/unbounded";
import "@fontsource-variable/dm-sans";
import "./style.css";

import ASCIIWallPaper from "./components/ASCIIWallPaper";
import NavBar from "./components/NavBar";
import TextType from "./components/TextType";
import Footer from "./components/Footer";
import GoBackUp from "./components/GoBackUp";


export function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${import.meta.env.BASE_URL}favicons/favicon-96x96.png`}
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href={`${import.meta.env.BASE_URL}favicons/favicon.svg`}
        />
        <link
          rel="shortcut icon"
          href={`${import.meta.env.BASE_URL}favicons/favicon.ico`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${import.meta.env.BASE_URL}favicons/apple-touch-icon.png`}
        />
        <meta name="apple-mobile-web-app-title" content="Sidequests" />
        <link
          rel="manifest"
          href={`${import.meta.env.BASE_URL}favicons/site.webmanifest`}
        />
        <Meta />
        <Links />
      </head>

      <body>
        {children}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    document.documentElement.classList.add("is-loading");

    const finishLoading = () => {
      if (cancelled) return;

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          document.documentElement.classList.remove("is-loading");
          setIsLoading(false);
        });
      });
    };

    Promise.all([
      document.fonts?.ready ?? Promise.resolve(),
      new Promise<void>((resolve) => {
        if (document.readyState === "complete") {
          resolve();
          return;
        }

        window.addEventListener("load", () => resolve(), { once: true });
      }),
    ]).then(() => {
      window.setTimeout(finishLoading, 900);
    });

    return () => {
      cancelled = true;
      document.documentElement.classList.remove("is-loading");
    };
  }, []);

  return (
    <div id="app">
      {isLoading && (
        <div className="loading-screen" role="status" aria-live="polite">
          <ASCIIWallPaper
            className="loading-wallpaper"
            glyphs="   .:;-=+*#%@"
            size={16}
            spacing={0.6}
            color="#cac0ae"
            speed={0.35}
            clearing={0.3}
            holeQuantity={0.05}
            opacity={0.35}
            variant="rings"
          />
          <TextType
            font="Unbounded Variable, sans-serif"
            text={["Loading..."]}
            typingSpeed={75}
            pauseDuration={2200}
            deletingSpeed={35}
            deleteMode="backspace"
            typeEffect="fade"
            cursorStyle="bar"
            cursorGlide
            showCursor={true}
            cursorColor="currentColor"
            prefixColor="currentColor"
            cursorBlinkDuration={0.55}
            cursorCharacter="_"
            prefix=""
            variableSpeed={{"min":70,"max":170}}
          />
        </div>
      )}

      <NavBar />

      <ASCIIWallPaper
        className="ascii-wallpaper"
        glyphs="   .:;-=+*#%@"
        size={16}
        spacing={0.6}
        color="#c2caae"
        speed={0.35}
        clearing={0.3}
        holeQuantity={0.05}
        opacity={0.45}
        variant="field"
      />

      <main>
        <Outlet />
      </main>

      <GoBackUp />

      <Footer />
    </div>
  );
}