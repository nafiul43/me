import * as Sentry from "@sentry/astro";

// Defer Sentry initialization until after critical rendering
// This removes Sentry from the critical request chain
const initSentry = () => {
  Sentry.init({
    dsn: "https://9333f7dacb25855103d1839fcebd0aa5@o4510456061755392.ingest.us.sentry.io/4510456063197184",
    sendDefaultPii: true,
    environment: import.meta.env.MODE || "production",
    tracesSampleRate: 0.01,
    tracePropagationTargets: ["localhost", /^https:\/\/nafiul\.dev/],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    integrations: [
      Sentry.replayIntegration({
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],
  });
};

// Use requestIdleCallback to defer Sentry init, fallback to setTimeout
if (typeof requestIdleCallback !== 'undefined') {
  requestIdleCallback(initSentry);
} else {
  setTimeout(initSentry, 1);
}
