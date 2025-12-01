import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: "https://9333f7dacb25855103d1839fcebd0aa5@o4510456061755392.ingest.us.sentry.io/4510456063197184",
  sendDefaultPii: true,
  environment: process.env.NODE_ENV || "production",
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/nafiul\.dev/],
});
