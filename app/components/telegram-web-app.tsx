"use client";

import { useEffect } from "react";

const telegramWebAppScript =
  "https://telegram.org/js/telegram-web-app.js?63";

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready: () => void;
        expand: () => void;
      };
    };
  }
}

export default function TelegramWebApp() {
  useEffect(() => {
    const initializeWebApp = () => {
      const webApp = window.Telegram?.WebApp;

      if (!webApp) {
        return;
      }

      webApp.ready();
      webApp.expand();
    };

    if (window.Telegram?.WebApp) {
      initializeWebApp();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-telegram-web-app-sdk="true"]',
    );
    const script = existingScript ?? document.createElement("script");

    if (!existingScript) {
      script.src = telegramWebAppScript;
      script.async = true;
      script.dataset.telegramWebAppSdk = "true";
      document.head.append(script);
    }

    script.addEventListener("load", initializeWebApp, { once: true });

    return () => {
      script.removeEventListener("load", initializeWebApp);
    };
  }, []);

  return null;
}
