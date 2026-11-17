import { useEffect, useState } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import "@fontsource-variable/syne";
import "@fontsource-variable/dm-sans";
import "./style.css";

import ASCIIWallPaper from "./components/ASCIIWallPaper";
import NavBar from "./components/NavBar";
import TextType from "./components/TextType";


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
    <>
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
            font="Syne Variable, sans-serif"
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

      <main>
        <Outlet />
      </main>
    </>
  );
}